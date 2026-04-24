const fs = require('fs');

const path = require('path');

const jsPath = path.join(__dirname, 'app.js');
let content = fs.readFileSync(jsPath, 'utf8');

// 1. Convert prices in PRODUCTS
content = content.replace(/price: (\d+),/g, (match, p1) => `price: ${p1 * 12},`);
content = content.replace(/originalPrice: (\d+),/g, (match, p1) => `originalPrice: ${p1 * 12},`);

// 2. Add formatPrice at the top of the file somewhere
if (!content.includes('function formatPrice')) {
    const insertIndex = content.indexOf('// ---- CART STATE ----');
    content = content.slice(0, insertIndex) +
        '// ---- UTILITIES ----\nfunction formatPrice(price) {\n  return `₵${Number(price).toFixed(2)}`;\n}\n\nfunction goBackOrHome() {\n  if (window.history.length > 1) { window.history.back(); } else { window.location.href = "index.html"; }\n}\n\n' +
        content.slice(insertIndex);
}

// 3. Update cart summary formatting in app.js
content = content.replace(/\$"\s*\+\s*\(item.price \* item.qty\)\.toFixed\(2\)/g, '` + formatPrice(item.price * item.qty) + `');
content = content.replace(/\$"\s*\+\s*subtotal\.toFixed\(2\)/g, '` + formatPrice(subtotal) + `');
content = content.replace(/\$"\s*\+\s*shipping\.toFixed\(2\)/g, '` + formatPrice(shipping) + `');
content = content.replace(/\$"\s*\+\s*total\.toFixed\(2\)/g, '` + formatPrice(total) + `');

// And in productCardHTML
content = content.replace(/\$"\s*\+\s*product\.price/g, '` + formatPrice(product.price) + `');
content = content.replace(/\$"\s*\+\s*product\.originalPrice/g, '` + formatPrice(product.originalPrice) + `');
fs.writeFileSync(jsPath, content);

// 4. Update the HTML files 
const htmlFiles = ['index.html', 'shop.html', 'product.html', 'cart.html', 'checkout.html', 'login.html', 'signup.html', 'about.html', 'contact.html'];
htmlFiles.forEach(file => {
    const fileFullPath = path.join(__dirname, file);
    if (!fs.existsSync(fileFullPath)) return;
    let html = fs.readFileSync(fileFullPath, 'utf8');

    // Replace hamburger with back button on secondary pages (except index)
    if (file !== 'index.html') {
        html = html.replace(
            /<button class="nav__hamburger" id="hamburger"[\s\S]*?<\/button>/,
            `<button class="nav__back-btn" onclick="goBackOrHome()" aria-label="Go Back">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
  </button>`
        );
    }

    // Static currency symbol changes on pages
    html = html.replace(/\$50/g, '₵600');
    html = html.replace(/\$0/g, '₵0');
    html = html.replace(/\$300/g, '₵3600');
    html = html.replace(/max="300" value="300"/g, 'max="3600" value="3600"');

    // Fix product.html static price scripts
    if (file === 'product.html') {
        html = html.replace(/`\$`\s*\+\s*product\.price\s*\+\s*\(product\.originalPrice \? `<del>\$`\s*\+\s*product\.originalPrice/g, 'formatPrice(product.price) + (product.originalPrice ? `<del>${formatPrice(product.originalPrice)}</del>` : ``)');
        // Oh wait, standard string replacement simpler:
        html = html.replace(/innerHTML = `\$`\s*\+\s*product\.price\s*\+/g, 'innerHTML = formatPrice(product.price) +');
        html = html.replace(/`<del>\$`\s*\+\s*product\.originalPrice\s*\+\s*`<\/del>`/g, '`<del>${formatPrice(product.originalPrice)}</del>`');
        // stickyPrice
        html = html.replace(/stickyPrice'\)\.textContent = `\$`\s*\+\s*product\.price;/g, "stickyPrice').textContent = formatPrice(product.price);");
    }

    // Fix checkout script mini summary
    if (file === 'checkout.html') {
        html = html.replace(/\\\$` \+ \(i\.price\*i\.qty\)\.toFixed\(2\)/g, '` + formatPrice(i.price*i.qty) + `');
        html = html.replace(/\\\$` \+ sub\.toFixed\(2\)/g, '` + formatPrice(sub) + `');
        html = html.replace(/\\\$` \+ ship\.toFixed\(2\)/g, '` + formatPrice(ship) + `');
        html = html.replace(/\\\$` \+ \(sub\+ship\)\.toFixed\(2\)/g, '` + formatPrice(sub+ship) + `');
    }

    fs.writeFileSync(fileFullPath, html);
});

console.log('Update successful');
