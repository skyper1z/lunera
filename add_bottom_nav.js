const fs = require('fs');
const path = require('path');

const files = ['login.html', 'signup.html', 'about.html', 'contact.html'];
const bottomNavHtml = `
<nav class="bottom-nav">
  <a href="index.html" class="bottom-nav__item"><svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>Home</a>
  <a href="shop.html" class="bottom-nav__item"><svg viewBox="0 0 24 24" fill="none" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>Shop</a>
  <a href="cart.html" class="bottom-nav__item" style="position:relative"><svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg><span class="bottom-nav__badge" style="display:none">0</span>Cart</a>
  <a href="login.html" class="bottom-nav__item"><svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>Profile</a>
</nav>
`;

files.forEach(file => {
    const filePath = path.join(__dirname, file);
    if (!fs.existsSync(filePath)) return;
    let html = fs.readFileSync(filePath, 'utf8');

    // check if bottom-nav is already there
    if (!html.includes('class="bottom-nav"')) {
        html = html.replace(/<script src="app\.js"><\/script>/, bottomNavHtml + '\n<script src="app.js"></script>');
        fs.writeFileSync(filePath, html);
        console.log(`Updated ${file}`);
    }
});
