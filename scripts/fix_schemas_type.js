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

    let schemasVar = body.getVariableStatement(v => v.getDeclarations().some(d => d.getName() === 'schemas'));
    if (schemasVar) {
        const decl = schemasVar.getDeclarations()[0];
        const initializer = decl.getInitializerIfKind(SyntaxKind.ArrayLiteralExpression);
        
        // If it's empty, give it an explicit type any[]
        if (initializer && initializer.getElements().length === 0) {
            decl.setType('any[]');
            count++;
        }
    }
}

project.saveSync();
console.log(`Fixed implicitly any schemas array in ${count} files!`);
