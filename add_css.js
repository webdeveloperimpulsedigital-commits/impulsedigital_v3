const fs = require('fs');
const path = 'd:\\impulsedigital_v3\\public\\css\\styles.css';
let css = fs.readFileSync(path, 'utf8');

const srOnlyClass = `
.visually-hidden {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    margin: -1px !important;
    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;
    white-space: nowrap !important;
    border: 0 !important;
}
`;

if (!css.includes('.visually-hidden')) {
  css += srOnlyClass;
  fs.writeFileSync(path, css, 'utf8');
}
console.log('Added .visually-hidden');
