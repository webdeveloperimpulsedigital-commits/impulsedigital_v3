const { Project, SyntaxKind } = require('ts-morph');
const path = require('path');

const project = new Project();
project.addSourceFilesAtPaths(path.join(__dirname, '../app/**/*.tsx'));

const files = project.getSourceFiles();
let count = 0;

for (const sourceFile of files) {
    const filePath = sourceFile.getFilePath();
    if (!filePath.includes('/app/') || !filePath.endsWith('page.tsx')) continue;

    const pageFunction = sourceFile.getFunctions().find(f => f.hasExportKeyword() && f.hasDefaultKeyword());
    if (!pageFunction) continue;

    const body = pageFunction.getBody();
    if (!body || body.getKind() !== SyntaxKind.Block) continue;

    let modified = false;

    let schemasVar = body.getVariableStatement(v => v.getDeclarations().some(d => d.getName() === 'schemas'));
    if (schemasVar) {
        const decl = schemasVar.getDeclarations()[0];
        const initializer = decl.getInitializerIfKind(SyntaxKind.ArrayLiteralExpression);
        if (initializer) {
            const elements = initializer.getElements();
            const elementsToRemove = elements.filter(e => e.getText().includes('getFAQSchema(defaultFaqs'));
            
            if (elementsToRemove.length > 0) {
                for (const elem of elementsToRemove) {
                    initializer.removeElement(elem);
                }
                modified = true;
            }
        }
    }

    if (modified) {
        count++;
        const importDecl = sourceFile.getImportDeclaration(d => d.getModuleSpecifierValue() === '@/lib/faqData');
        if (importDecl) {
            const namedImports = importDecl.getNamedImports();
            const defaultFaqsImport = namedImports.find(n => n.getName() === 'defaultFaqs');
            if (defaultFaqsImport && namedImports.length === 1) {
                importDecl.remove();
            } else if (defaultFaqsImport) {
                defaultFaqsImport.remove();
            }
        }
    }
}

project.saveSync();
console.log(`Done removing getFAQSchema(defaultFaqs, ...) from ${count} files!`);
