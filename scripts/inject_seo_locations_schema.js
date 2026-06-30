const { Project, SyntaxKind } = require('ts-morph');
const path = require('path');

const project = new Project();
project.addSourceFilesAtPaths(path.join(__dirname, '../app/**/*.tsx'));

const files = project.getSourceFiles();
let updatedCount = 0;

for (const sourceFile of files) {
    const filePath = sourceFile.getFilePath();
    if (!filePath.includes('/app/') || !filePath.endsWith('page.tsx')) continue;
    if (filePath.includes('/api/')) continue;

    const isAe = filePath.includes('/ae/') || filePath.includes('\\ae\\');

    let customDataName = null;
    let customComponent = null;

    const jsxElements = sourceFile.getDescendantsOfKind(SyntaxKind.JsxSelfClosingElement);
    for (const jsx of jsxElements) {
        const tagName = jsx.getTagNameNode().getText();
        if (tagName.startsWith('Seo') && tagName.endsWith('Location')) {
            customComponent = tagName;
            customDataName = 'seo' + tagName.substring(3, tagName.length - 8) + 'Data'; 
            break;
        }
    }

    if (!customComponent) continue;

    const importPath = `@/data/${customDataName}`;

    let changed = false;

    if (!sourceFile.getImportDeclaration(d => d.getModuleSpecifierValue() === '@/lib/schemaHelper')) {
        sourceFile.addImportDeclaration({
            namedImports: ['getComplexFAQSchema'],
            moduleSpecifier: '@/lib/schemaHelper'
        });
        changed = true;
    } else {
        const helperImport = sourceFile.getImportDeclaration(d => d.getModuleSpecifierValue() === '@/lib/schemaHelper');
        const namedImports = helperImport.getNamedImports().map(n => n.getName());
        if (!namedImports.includes('getComplexFAQSchema')) {
            helperImport.addNamedImport('getComplexFAQSchema');
            changed = true;
        }
    }

    if (!sourceFile.getImportDeclaration(d => d.getModuleSpecifierValue() === importPath)) {
        sourceFile.addImportDeclaration({
            namedImports: [customDataName],
            moduleSpecifier: importPath
        });
        changed = true;
    }

    const pageFunction = sourceFile.getFunctions().find(f => f.hasExportKeyword() && f.hasDefaultKeyword());
    if (!pageFunction) continue;
    
    const body = pageFunction.getBody();
    if (!body || body.getKind() !== SyntaxKind.Block) continue;
    
    let schemasVar = body.getVariableStatement(v => v.getDeclarations().some(d => d.getName() === 'schemas'));
    const schemaCall = `getComplexFAQSchema(${customDataName}, ${isAe})`;
    
    if (schemasVar) {
        const decl = schemasVar.getDeclarations()[0];
        const initializer = decl.getInitializerIfKind(SyntaxKind.ArrayLiteralExpression);
        if (initializer && !initializer.getText().includes('getComplexFAQSchema')) {
            initializer.addElement(schemaCall);
            changed = true;
        }
    } else {
        body.insertVariableStatement(0, {
            declarationKind: 'const',
            declarations: [{
                name: 'schemas',
                initializer: `[${schemaCall}]`
            }]
        });
        changed = true;
    }

    let scriptExists = false;
    const scripts = sourceFile.getDescendantsOfKind(SyntaxKind.JsxSelfClosingElement)
        .filter(jsx => jsx.getTagNameNode().getText() === 'script');
    for (const script of scripts) {
        const attr = script.getAttribute('dangerouslySetInnerHTML');
        if (attr && attr.getText().includes('schemas')) {
            scriptExists = true;
            break;
        }
    }
    
    if (!scriptExists) {
        const returnStmt = body.getStatements().find(s => s.getKind() === SyntaxKind.ReturnStatement);
        if (returnStmt) {
            const returnText = returnStmt.getText();
            if (returnText.includes('<>')) {
                const newText = returnText.replace('<>', `<>\n      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />`);
                returnStmt.replaceWithText(newText);
                changed = true;
            } else if (returnText.includes('<main')) {
                const strippedReturn = returnText.replace(/^return\s*\(\s*/, '').replace(/\s*\)\s*;?$/, '');
                returnStmt.replaceWithText(`return (\n    <>\n      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />\n      ${strippedReturn}\n    </>\n  );`);
                changed = true;
            }
        }
    }

    if (changed) {
        updatedCount++;
    }
}

project.saveSync();
console.log(`Injection complete. Updated ${updatedCount} files.`);
