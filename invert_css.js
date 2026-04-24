const fs = require('fs');

const cssPath = 'style.css';
let css = fs.readFileSync(cssPath, 'utf8');

// 1. Soften hard shadows
css = css.replace(/rgba\(0, 0, 0, \.5\)/g, 'rgba(0, 0, 0, .08)');
css = css.replace(/rgba\(0, 0, 0, \.6\)/g, 'rgba(0, 0, 0, .08)');
css = css.replace(/rgba\(0, 0, 0, \.82\)/g, 'rgba(255, 255, 255, .9)');

// 2. Invert dark transparent backgrounds (like nav, overlays) to white
css = css.replace(/rgba\(10, 10, 10, \.([0-9]+)\)/g, 'rgba(255, 255, 255, .$1)');
css = css.replace(/rgba\(12, 12, 12, \.([0-9]+)\)/g, 'rgba(255, 255, 255, .$1)');
css = css.replace(/rgba\(8, 8, 8, \.([0-9]+)\)/g, 'rgba(250, 250, 250, .$1)');

// 3. Invert subtle light borders/backgrounds to dark so they are visible on white
css = css.replace(/rgba\(255, 255, 255, \.05\)/g, 'rgba(0, 0, 0, .05)');
css = css.replace(/rgba\(255, 255, 255, \.04\)/g, 'rgba(0, 0, 0, .04)');
css = css.replace(/rgba\(255, 255, 255, \.3\)/g, 'rgba(0, 0, 0, .1)');

fs.writeFileSync(cssPath, css);
console.log('CSS Aesthetic successfully updated');
