const { Project, SyntaxKind } = require('ts-morph');

const project = new Project();
project.addSourceFilesAtPaths("app/**/*.tsx");
const sourceFiles = project.getSourceFiles();

let updatedFilesCount = 0;

sourceFiles.forEach(sourceFile => {
  let hasChanges = false;
  
  const nodes = [
    ...sourceFile.getDescendantsOfKind(SyntaxKind.JsxElement),
    ...sourceFile.getDescendantsOfKind(SyntaxKind.JsxSelfClosingElement)
  ];

  nodes.forEach(node => {
    let opening = node;
    if (node.getKind() === SyntaxKind.JsxElement) {
      opening = node.getOpeningElement();
    }
    
    if (opening.getTagNameNode().getText() === 'script') {
      const dangerouslySet = opening.getAttribute('dangerouslySetInnerHTML');
      if (dangerouslySet && dangerouslySet.getText().includes('schemas')) {
        const schemasVars = sourceFile.getDescendantsOfKind(SyntaxKind.VariableDeclaration)
          .filter(decl => decl.getName() === 'schemas');
        if (schemasVars.length === 0) {
          node.replaceWithText('');
          hasChanges = true;
        }
      }
    }
  });
  
  if (hasChanges) {
    sourceFile.saveSync();
    updatedFilesCount++;
    console.log(`Updated ${sourceFile.getFilePath()}`);
  }
});

console.log(`Done! Fixed ${updatedFilesCount} files.`);
