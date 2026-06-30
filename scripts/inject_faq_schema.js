const { Project, SyntaxKind } = require('ts-morph');
const path = require('path');

const project = new Project();
project.addSourceFilesAtPaths(path.join(__dirname, '../app/**/*.tsx'));

// Map of components to data files
const customDataMap = {
    'AbuDhabiLocation': 'abuDhabiLocationFaqs',
    'AjmanLocation': 'ajmanLocationFaqs',
    'IndiaLocation': 'indiaLocationFaqs',
    'NaviMumbaiLocation': 'naviMumbaiLocationFaqs',
    'PuneLocation': 'puneLocationFaqs',
    'SharjahLocation': 'sharjahLocationFaqs',
    'ThaneLocation': 'thaneLocationFaqs',
    'UaeLocation': 'uaeLocationFaqs'
};

const files = project.getSourceFiles();
let updatedCount = 0;

for (const sourceFile of files) {
    const filePath = sourceFile.getFilePath();
    if (!filePath.includes('/app/') || !filePath.endsWith('page.tsx')) continue;

    // Skip api routes or anything else
    if (filePath.includes('/api/')) continue;

    const isAe = filePath.includes('/ae/') || filePath.includes('\\ae\\');
    
    let customDataName = null;
    const jsxElements = sourceFile.getDescendantsOfKind(SyntaxKind.JsxSelfClosingElement);
    for (const jsx of jsxElements) {
        const tagName = jsx.getTagNameNode().getText();
        if (customDataMap[tagName]) {
            customDataName = customDataMap[tagName];
            break;
        }
    }

    const dataVarName = customDataName || 'defaultFaqs';
    const importPath = customDataName 
        ? `@/lib/data/seoLocations/${customDataName}`
        : `@/lib/faqData`;
        
    let changed = false;

    // Import schemaHelper
    if (!sourceFile.getImportDeclaration(d => d.getModuleSpecifierValue() === '@/lib/schemaHelper')) {
        sourceFile.addImportDeclaration({
            namedImports: ['getFAQSchema'],
            moduleSpecifier: '@/lib/schemaHelper'
        });
        changed = true;
    }
    
    // Import data
    if (!sourceFile.getImportDeclaration(d => d.getModuleSpecifierValue() === importPath)) {
        sourceFile.addImportDeclaration({
            namedImports: [dataVarName],
            moduleSpecifier: importPath
        });
        changed = true;
    }

    const pageFunction = sourceFile.getFunctions().find(f => f.hasExportKeyword() && f.hasDefaultKeyword());
    if (!pageFunction) continue;
    
    const body = pageFunction.getBody();
    if (!body || body.getKind() !== SyntaxKind.Block) continue;
    
    let schemasVar = body.getVariableStatement(v => v.getDeclarations().some(d => d.getName() === 'schemas'));
    const schemaCall = `getFAQSchema(${dataVarName}, ${isAe})`;
    
    if (schemasVar) {
        const decl = schemasVar.getDeclarations()[0];
        const initializer = decl.getInitializerIfKind(SyntaxKind.ArrayLiteralExpression);
        if (initializer && !initializer.getText().includes('getFAQSchema')) {
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
                // Not a fragment, wrap in fragment
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
