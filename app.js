/* =============================================
   LUNERA — SHARED APP LOGIC
   Cart state, product data, utilities
   ============================================= */

// ---- PRODUCT DATA ----
const PRODUCTS = [
  {
    id: 1,
    name: "Obsidian Zip Hoodie",
    category: "tops",
    gender: "men",
    price: 1068,
    originalPrice: 1440,
    image: "images/product_hoodie.png",
    images: ["images/product_hoodie.png", "images/product_hoodie.png", "images/product_hoodie.png", "images/product_hoodie.png"],
    badge: "sale",
    rating: 4.8,
    reviews: 124,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description: "Crafted from premium heavyweight fleece, the Obsidian Zip Hoodie combines streetwear edge with a luxury finish. Gold zip hardware and a clean silhouette define this essential piece.",
    tag: "bestseller",
  },
  {
    id: 2,
    name: "Phantom Cargo Pants",
    category: "bottoms",
    gender: "men",
    price: 1320,
    originalPrice: null,
    image: "images/product_pants.png",
    images: ["images/product_pants.png", "images/product_pants.png", "images/product_pants.png", "images/product_pants.png"],
    badge: "new",
    rating: 4.6,
    reviews: 87,
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Tactical-inspired cargo pants in jet-black cotton blend. Features multiple utility pockets, an adjustable waistband, and a relaxed tapered fit for the modern street aesthetic.",
    tag: "new-drop",
  },
  {
    id: 3,
    name: "Nocturne Slip Dress",
    category: "dresses",
    gender: "women",
    price: 900,
    originalPrice: 1140,
    image: "images/product_dress.png",
    images: ["images/product_dress.png", "images/product_dress.png", "images/product_dress.png", "images/product_dress.png"],
    badge: "sale",
    rating: 4.9,
    reviews: 203,
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "A fluid satin slip dress that effortlessly transitions from day to night. Cut to an elongated silhouette with adjustable straps and a delicate bias cut for a second-skin fit.",
    tag: "bestseller",
  },
  {
    id: 4,
    name: "Ivory Bomber Jacket",
    category: "outerwear",
    gender: "men",
    price: 2220,
    originalPrice: null,
    image: "images/product_jacket.png",
    images: ["images/product_jacket.png", "images/product_jacket.png", "images/product_jacket.png", "images/product_jacket.png"],
    badge: "hot",
    rating: 4.7,
    reviews: 56,
    sizes: ["S", "M", "L", "XL"],
    description: "An oversized cream bomber jacket built from brushed fleece with a ribbed waistband. Features a signature arm pocket and micro-embroidered branding. The off-season essential.",
    tag: "new-drop",
  },
  {
    id: 5,
    name: "Crest Oversized Tee",
    category: "tops",
    gender: "unisex",
    price: 540,
    originalPrice: null,
    image: "images/product_tshirt.png",
    images: ["images/product_tshirt.png", "images/product_tshirt.png", "images/product_tshirt.png", "images/product_tshirt.png"],
    badge: "new",
    rating: 4.5,
    reviews: 311,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description: "Drop-shoulder silhouette in 100% organic cotton. The gold-embroidered crest logo adds a luxe detail to an otherwise clean and minimal piece. A wardrobe staple.",
    tag: "bestseller",
  },
  {
    id: 6,
    name: "Aurum Low Sneaker",
    category: "footwear",
    gender: "unisex",
    price: 1740,
    originalPrice: 2100,
    image: "images/product_sneakers.png",
    images: ["images/product_sneakers.png", "images/product_sneakers.png", "images/product_sneakers.png", "images/product_sneakers.png"],
    badge: "sale",
    rating: 4.8,
    reviews: 178,
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45"],
    description: "Full-grain leather upper with gold hardware eyelets and a textured rubber sole. Minimal, elevated, and built for the streets — the Aurum is our most-worn silhouette.",
    tag: "bestseller",
  },
  {
    id: 7,
    name: "Lune Mini Skirt",
    category: "bottoms",
    gender: "women",
    price: 780,
    originalPrice: null,
    image: "images/product_skirt.png",
    images: ["images/product_skirt.png", "images/product_skirt.png", "images/product_skirt.png", "images/product_skirt.png"],
    badge: "new",
    rating: 4.6,
    reviews: 92,
    sizes: ["XS", "S", "M", "L"],
    description: "A raw-hem mini skirt in a cream tweed blend. Structured yet playful, it pairs perfectly with the Crest Tee or Nocturne Slip for evening looks.",
    tag: "new-drop",
  },
  {
    id: 8,
    name: "Shadow Moto Jacket",
    category: "outerwear",
    gender: "unisex",
    price: 2640,
    originalPrice: 3300,
    image: "images/product_jacket.png",
    images: ["images/product_jacket.png", "images/product_jacket.png", "images/product_jacket.png", "images/product_jacket.png"],
    badge: "sale",
    rating: 4.9,
    reviews: 44,
    sizes: ["S", "M", "L", "XL"],
    description: "Vegan leather moto jacket with asymmetric zip, quilted shoulder pads and a bold silhouette. Where edge meets refinement — the statement piece for the Lunera collection.",
    tag: "new-drop",
  },
  {
    id: 9,
    name: "Velour Lounge Set",
    category: "sets",
    gender: "women",
    price: 1176,
    originalPrice: null,
    image: "images/product_hoodie.png",
    images: ["images/product_hoodie.png", "images/product_hoodie.png"],
    badge: "hot",
    rating: 4.7,
    reviews: 139,
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Two-piece velour set in a rich midnight hue. Includes cropped zip-up and high-waist jogger. The perfect off-duty uniform, elevated.",
    tag: "bestseller",
  },
  {
    id: 10,
    name: "Metallic Cargo Shorts",
    category: "bottoms",
    gender: "men",
    price: 864,
    originalPrice: 1068,
    image: "images/product_pants.png",
    images: ["images/product_pants.png", "images/product_pants.png"],
    badge: "sale",
    rating: 4.4,
    reviews: 61,
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Cargo shorts in a dark grey metallic finish. Multiple functional pockets and a drawstring waistband. Street-ready from sunrise to sunset.",
    tag: "new-drop",
  },
  {
    id: 11,
    name: "Noir Wrap Top",
    category: "tops",
    gender: "women",
    price: 660,
    originalPrice: null,
    image: "images/product_tshirt.png",
    images: ["images/product_tshirt.png", "images/product_tshirt.png"],
    badge: "new",
    rating: 4.7,
    reviews: 80,
    sizes: ["XS", "S", "M", "L"],
    description: "Asymmetric wrap top in matte crepe fabric. Front tie closure, open back, slightly cropped. Precision cut for an effortless silhouette.",
    tag: "new-drop",
  },
  {
    id: 12,
    name: "Heritage Denim Jacket",
    category: "outerwear",
    gender: "unisex",
    price: 1620,
    originalPrice: 1920,
    image: "images/product_jacket.png",
    images: ["images/product_jacket.png", "images/product_jacket.png"],
    badge: null,
    rating: 4.6,
    reviews: 95,
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Stone-washed denim jacket with a relaxed oversized fit. Vintage brass buttons, double chest pockets, and a signature back embroidery. Timeless with a twist.",
    tag: "bestseller",
  },
];

// ---- UTILITIES ----
function formatPrice(price) {
  return `₵${Number(price).toFixed(2)}`;
}

function goBackOrHome() {
  if (window.history.length > 1) { window.history.back(); } else { window.location.href = "index.html"; }
}

// ---- CART STATE ----
let cart = JSON.parse(sessionStorage.getItem('lunera-cart') || '[]');

function saveCart() {
  sessionStorage.setItem('lunera-cart', JSON.stringify(cart));
  updateCartUI();
}

function addToCart(productId, size, qty = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const existing = cart.find(i => i.id === productId && i.size === size);
  if (existing) { existing.qty += qty; }
  else { cart.push({ id: productId, size, qty, name: product.name, price: product.price, image: product.image }); }
  saveCart();
  showToast(`"${product.name}" added to cart`);
  bumpCartCount();
}

function removeFromCart(productId, size) {
  cart = cart.filter(i => !(i.id === productId && i.size === size));
  saveCart();
  renderCartPage();
}

function updateQty(productId, size, delta) {
  const item = cart.find(i => i.id === productId && i.size === size);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart();
  renderCartPage();
}

function getCartCount() { return cart.reduce((s, i) => s + i.qty, 0); }
function getCartTotal() { return cart.reduce((s, i) => s + i.price * i.qty, 0); }

function updateCartUI() {
  const count = getCartCount();
  document.querySelectorAll('.nav__cart-count, .bottom-nav__badge').forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });
}

function bumpCartCount() {
  document.querySelectorAll('.nav__cart-count').forEach(el => {
    el.classList.add('bump');
    setTimeout(() => el.classList.remove('bump'), 300);
  });
}

// ---- TOAST ----
function showToast(msg, icon = '✓') {
  let toast = document.getElementById('lunera-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'lunera-toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span class="toast__icon">${icon}</span> ${msg}`;
  toast.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toast.classList.remove('show'), 3000);
}

// ---- NAV ----
function initNav() {
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
    });
    mobileNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        hamburger.classList.remove('open');
      });
    });
  }
  // Mark active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a, .nav__mobile a, .bottom-nav__item').forEach(a => {
    const href = a.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
  updateCartUI();
}

// ---- PRODUCT CARD HTML ----
function productCardHTML(product, width = '') {
  const badge = product.badge
    ? `<span class="product-card__badge badge-${product.badge}">${product.badge}</span>` : '';
  const oldPrice = product.originalPrice ? `<del>₵${product.originalPrice}</del>` : '';
  const style = width ? `style="min-width:${width}"` : '';
  return `
    <div class="product-card" ${style} onclick="window.location='product.html?id=${product.id}'">
      <div class="product-card__image">
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
        ${badge}
        <button class="product-card__wishlist" onclick="event.stopPropagation(); wishlistToggle(${product.id}, this)" aria-label="Wishlist">♡</button>
        <button class="product-card__quick-add" onclick="event.stopPropagation(); quickAdd(${product.id})">+ Quick Add</button>
      </div>
      <div class="product-card__info">
        <div class="product-card__category">${product.category}</div>
        <div class="product-card__name">${product.name}</div>
        <div class="product-card__price">
          <span>₵${product.price}</span>${oldPrice}
        </div>
        <div class="stars" style="margin-top:.3rem">
          ${'★'.repeat(Math.round(product.rating))}${'☆'.repeat(5 - Math.round(product.rating))}
          <span style="color:var(--grey);font-size:.68rem;margin-left:.3rem">(${product.reviews})</span>
        </div>
      </div>
    </div>`;
}

function quickAdd(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  addToCart(productId, product.sizes[0] || 'M');
}

function wishlistToggle(productId, btn) {
  if (btn.dataset.wished === 'true') {
    btn.innerHTML = '♡'; btn.dataset.wished = 'false';
    showToast('Removed from wishlist', '♡');
  } else {
    btn.innerHTML = '♥'; btn.dataset.wished = 'true';
    showToast('Added to wishlist', '♥');
  }
}

// ---- SCROLL ANIMATIONS ----
function initScrollAnimations() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.animate-fade-up').forEach(el => obs.observe(el));
}

// ---- CART PAGE RENDER ----
function renderCartPage() {
  const container = document.getElementById('cart-items');
  const summary = document.getElementById('cart-summary-content');
  const emptyEl = document.getElementById('cart-empty');
  const cartWrap = document.getElementById('cart-wrap');
  if (!container) return;

  if (cart.length === 0) {
    if (emptyEl) emptyEl.style.display = 'block';
    if (cartWrap) cartWrap.style.display = 'none';
    return;
  }
  if (emptyEl) emptyEl.style.display = 'none';
  if (cartWrap) cartWrap.style.display = 'flex';

  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item__img"><img src="${item.image}" alt="${item.name}" loading="lazy" /></div>
      <div>
        <div class="cart-item__name">${item.name}</div>
        <div class="cart-item__meta">Size: ${item.size}</div>
        <div class="cart-item__price">$${(item.price * item.qty).toFixed(2)}</div>
        <div class="cart-item__qty">
          <button class="cart-qty-btn" onclick="updateQty(${item.id},'${item.size}',-1)">−</button>
          <span style="min-width:1.5rem;text-align:center;font-weight:600">${item.qty}</span>
          <button class="cart-qty-btn" onclick="updateQty(${item.id},'${item.size}',1)">+</button>
        </div>
      </div>
      <button class="cart-remove" onclick="removeFromCart(${item.id},'${item.size}')">✕ Remove</button>
    </div>
  `).join('');

  const subtotal = getCartTotal();
  const shipping = subtotal >= 50 ? 0 : 8.99;
  const total = subtotal + shipping;
  if (summary) {
    summary.innerHTML = `
      <div class="cart-summary-row"><span>Subtotal</span><span>$${subtotal.toFixed(2)}</span></div>
      <div class="cart-summary-row"><span>Shipping</span><span>${shipping === 0 ? '<span style="color:var(--gold)">FREE</span>' : '$' + shipping.toFixed(2)}</span></div>
      <div class="cart-summary-row cart-summary-total"><span>Total</span><span>$${total.toFixed(2)}</span></div>
    `;
  }
}

// ---- DOM READY ----
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initScrollAnimations();
});
