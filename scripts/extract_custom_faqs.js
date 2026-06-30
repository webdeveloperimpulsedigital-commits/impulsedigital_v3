const { Project, SyntaxKind } = require('ts-morph');
const fs = require('fs');
const path = require('path');

const project = new Project();
const pagesDir = path.join(__dirname, '../components/pages');
const dataDir = path.join(__dirname, '../lib/data/seoLocations');

if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
}

project.addSourceFilesAtPaths(`${pagesDir}/**/*.tsx`);

const customPages = [
    'AbuDhabiLocation.tsx',
    'AjmanLocation.tsx',
    'IndiaLocation.tsx',
    'NaviMumbaiLocation.tsx',
    'PuneLocation.tsx',
    'SharjahLocation.tsx',
    'ThaneLocation.tsx',
    'UaeLocation.tsx'
];

for (const pageName of customPages) {
    const sourceFile = project.getSourceFile(path.join(pagesDir, pageName));
    if (!sourceFile) {
        console.error(`Could not find ${pageName}`);
        continue;
    }

    const vars = sourceFile.getVariableDeclarations();
    const faqVar = vars.find(v => v.getName() === 'locationFaqs');

    if (faqVar) {
        const init = faqVar.getInitializer();
        if (init) {
            const dataText = init.getText();
            const basename = path.basename(pageName, '.tsx');
            const dataFileName = `${basename.charAt(0).toLowerCase() + basename.slice(1)}Faqs`;
            
            const dataFilePath = path.join(dataDir, `${dataFileName}.ts`);
            const dataFileContent = `import { FAQItem } from '@/lib/faqData';\n\nexport const ${dataFileName}: FAQItem[] = ${dataText};\n`;
            
            fs.writeFileSync(dataFilePath, dataFileContent);
            console.log(`Created ${dataFilePath}`);

            // Now remove it from the component file and add an import
            faqVar.getVariableStatement().remove();
            
            // Add import
            sourceFile.addImportDeclaration({
                defaultImport: null,
                namedImports: [dataFileName],
                moduleSpecifier: `@/lib/data/seoLocations/${dataFileName}`
            });

            // Replace locationFaqs usage in the file
            const jsxElements = sourceFile.getDescendantsOfKind(SyntaxKind.JsxSelfClosingElement);
            for (const jsx of jsxElements) {
                if (jsx.getTagNameNode().getText() === 'FAQ') {
                    const dataAttr = jsx.getAttribute('data');
                    if (dataAttr) {
                        dataAttr.replaceWithText(`data={${dataFileName}}`);
                    }
                }
            }
        }
    }
}

project.saveSync();
console.log("Extraction complete.");
