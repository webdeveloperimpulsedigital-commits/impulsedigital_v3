const { Project, SyntaxKind } = require('ts-morph');
const path = require('path');

const project = new Project();
project.addSourceFilesAtPaths("app/**/*.tsx");
const sourceFiles = project.getSourceFiles();

let updatedFilesCount = 0;

sourceFiles.forEach(sourceFile => {
  let hasChanges = false;
  
  const schemasVars = sourceFile.getDescendantsOfKind(SyntaxKind.VariableDeclaration)
    .filter(decl => decl.getName() === 'schemas');

  schemasVars.forEach(schemasVar => {
    const initializer = schemasVar.getInitializerIfKind(SyntaxKind.ArrayLiteralExpression);
    if (initializer) {
      const elements = initializer.getElements();
      
      const elementsToRemove = [];
      
      elements.forEach(element => {
        if (element.getKind() === SyntaxKind.ObjectLiteralExpression) {
          const typeProp = element.getProperty('"@type"') || element.getProperty("'@type'") || element.getProperty('@type');
          if (typeProp && typeProp.getKind() === SyntaxKind.PropertyAssignment) {
            const propInitializer = typeProp.getInitializer();
            if (propInitializer && propInitializer.getKind() === SyntaxKind.StringLiteral) {
              if (propInitializer.getLiteralValue() === 'FAQPage') {
                elementsToRemove.push(element);
              }
            }
          }
        }
      });
      
      if (elementsToRemove.length > 0) {
        hasChanges = true;
        if (elementsToRemove.length === elements.length) {
          const scriptTags = sourceFile.getDescendantsOfKind(SyntaxKind.JsxElement).filter(node => {
            const opening = node.getOpeningElement();
            return opening.getTagNameNode().getText() === 'script' && 
                   opening.getAttribute('type')?.getInitializer()?.getText() === '"application/ld+json"';
          });
          
          scriptTags.forEach(tag => {
            const dangerouslySet = tag.getOpeningElement().getAttribute('dangerouslySetInnerHTML');
            if (dangerouslySet && dangerouslySet.getText().includes('JSON.stringify(schemas)')) {
              tag.replaceWithText('');
            }
          });
          
          schemasVar.getVariableStatement().remove();
        } else {
          elementsToRemove.forEach(el => {
            initializer.removeElement(el);
          });
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

console.log(`Done! Updated ${updatedFilesCount} files.`);
