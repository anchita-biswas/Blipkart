// ============================================================
//  BLIPKART — Shared Product Data & Cart Logic
// ============================================================

const BLIPKART_PRODUCTS = [
  {
    id: 1,
    name: "HRX Men's Olive Bomber Jacket",
    brand: "HRX by Hrithik Roshan",
    price: 2550, mrp: 3999, rating: 4.2, reviews: 1243,
    category: "Jackets",
    sizes: ["S","M","L","XL","XXL"],
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=200&h=200&fit=crop&crop=top",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=200&h=200&fit=crop&crop=bottom"
    ],
    description: "Stay ahead of the game with this premium olive bomber jacket from HRX. Crafted with high-grade polyester, it offers excellent comfort and versatile style for casual and semi-formal occasions.",
    specs: "100% Polyester | Machine Washable | Regular Fit | Full Zip | Ribbed Cuffs & Hem | 2 Side Pockets"
  },
  {
    id: 2,
    name: "ASIAN Men's Colourblocked Mid-Top Sneakers",
    brand: "ASIAN",
    price: 1800, mrp: 2499, rating: 4.0, reviews: 876,
    category: "Footwear",
    sizes: ["6","7","8","9","10","11"],
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=200&fit=crop&crop=left",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=200&fit=crop&crop=right",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=200&fit=crop&crop=bottom",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=200&fit=crop&crop=top"
    ],
    description: "Colourblocked mid-top sneakers from ASIAN combining bold style with everyday comfort. Perfect for gym sessions, casual outings, and active lifestyles.",
    specs: "Synthetic Upper | Rubber Outsole | Mid-Top Design | Lace-Up Closure | Padded Collar | EVA Midsole"
  },
  {
    id: 3,
    name: "HRX Women's Slim Fit Track Pants",
    brand: "HRX by Hrithik Roshan",
    price: 750, mrp: 1199, rating: 4.3, reviews: 2104,
    category: "Track Pants",
    sizes: ["S","M","L","XL","XXL"],
    image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=200&h=200&fit=crop&crop=top",
      "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=200&h=200&fit=crop&crop=bottom",
      "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=200&h=200&fit=crop&crop=left",
      "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=200&h=200&fit=crop&crop=right"
    ],
    description: "Lightweight slim-fit track pants engineered for performance. Ideal for workouts, morning jogs, or just lounging around in style.",
    specs: "100% Polyester | Machine Washable | Slim Fit | Elastic Waistband with Drawcord | 2 Side Pockets | Zip Hem"
  },
  {
    id: 4,
    name: "Roadster Men's Graphic Print T-Shirt",
    brand: "Roadster",
    price: 549, mrp: 999, rating: 4.1, reviews: 3421,
    category: "T-Shirts",
    sizes: ["S","M","L","XL","XXL"],
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=200&h=200&fit=crop&crop=top",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=200&h=200&fit=crop&crop=left",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=200&h=200&fit=crop&crop=bottom",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=200&h=200&fit=crop&crop=right"
    ],
    description: "Express yourself with this bold graphic print T-shirt from Roadster. Super soft cotton with a relaxed fit that's perfect for everyday casual wear.",
    specs: "100% Cotton | Machine Washable | Regular Fit | Round Neck | Half Sleeves | Graphic Print"
  },
  {
    id: 5,
    name: "POSHAX Men's Regular Fit Polo T-Shirt",
    brand: "POSHAX",
    price: 379, mrp: 699, rating: 3.9, reviews: 567,
    category: "T-Shirts",
    sizes: ["S","M","L","XL","XXL"],
    image: "images/Green Shirt 1.jpg",
    images: [
      "images/Green Shirt 1.jpg",
      "images/Green Shirt 2.jpg",
      "images/Green Shirt 3.jpg",
      "images/Green Shirt 5.jpg",
      "images/Green Shirt 6.jpg"
    ],
    description: "Classic solid polo T-shirt from POSHAX. The versatile design makes it ideal for casual and semi-formal occasions. Breathable cotton blend keeps you comfortable all day.",
    specs: "Cotton Blend | Machine Washable | Regular Fit | Polo Collar | Half Button Placket | Ribbed Cuffs"
  },
  {
    id: 6,
    name: "Puma Softride Running Shoes",
    brand: "Puma",
    price: 3299, mrp: 4999, rating: 4.5, reviews: 5621,
    category: "Footwear",
    sizes: ["6","7","8","9","10","11"],
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=200&h=200&fit=crop&crop=left",
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=200&h=200&fit=crop&crop=right",
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=200&h=200&fit=crop&crop=bottom",
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=200&h=200&fit=crop&crop=top"
    ],
    description: "Experience cloud-like cushioning with Puma's SoftFoam+ technology. Engineered for long-distance runs and daily training, these shoes deliver comfort mile after mile.",
    specs: "Mesh Upper | SoftFoam+ Insole | Rubber Outsole | Lace-Up Closure | Breathable Design | Heel Loop"
  },
  {
    id: 7,
    name: "Levi's 511 Slim Fit Stretch Jeans",
    brand: "Levi's",
    price: 2199, mrp: 3499, rating: 4.4, reviews: 8932,
    category: "Jeans",
    sizes: ["28","30","32","34","36","38"],
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=200&h=200&fit=crop&crop=top",
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=200&h=200&fit=crop&crop=bottom",
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=200&h=200&fit=crop&crop=left",
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=200&h=200&fit=crop&crop=right"
    ],
    description: "The iconic Levi's 511 — now with added stretch for maximum comfort. A wardrobe essential crafted with the perfect slim silhouette that never goes out of style.",
    specs: "98% Cotton 2% Elastane | Machine Washable | Slim Fit | 5-Pocket Style | Zip Fly | Mid Rise"
  },
  {
    id: 8,
    name: "Nike Dri-FIT Breathable Sports Cap",
    brand: "Nike",
    price: 699, mrp: 999, rating: 4.3, reviews: 2341,
    category: "Accessories",
    sizes: ["Free Size"],
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=200&h=200&fit=crop&crop=left",
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=200&h=200&fit=crop&crop=right",
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=200&h=200&fit=crop&crop=top",
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=200&h=200&fit=crop&crop=bottom"
    ],
    description: "Stay cool and dry with Nike's Dri-FIT technology that wicks sweat away instantly. The 6-panel structured design offers a clean athletic look for training or everyday wear.",
    specs: "100% Polyester | Dri-FIT Tech | Adjustable Strap | Structured 6-Panel | Embroidered Swoosh | Pre-curved Brim"
  },
  {
    id: 9,
    name: "Wildcraft Fusion 30L Backpack",
    brand: "Wildcraft",
    price: 1499, mrp: 2299, rating: 4.2, reviews: 4512,
    category: "Bags",
    sizes: ["Free Size"],
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=200&fit=crop&crop=top",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=200&fit=crop&crop=left",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=200&fit=crop&crop=bottom",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=200&fit=crop&crop=right"
    ],
    description: "The Wildcraft Fusion is your go-to companion for treks, travel, and daily commutes. Its 30L capacity and multiple compartments keep you perfectly organized on every adventure.",
    specs: "600D Polyester | Water Resistant | 30L Capacity | Padded Laptop Sleeve | Ergonomic Shoulder Straps | Breathable Back Panel"
  },
  {
    id: 10,
    name: "boAt Rockerz 255 Pro+ Wireless Earphones",
    brand: "boAt",
    price: 1299, mrp: 2990, rating: 4.1, reviews: 12043,
    category: "Electronics",
    sizes: ["One Size"],
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop&crop=left",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop&crop=right",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop&crop=top",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop&crop=bottom"
    ],
    description: "Immerse yourself in rich audio with boAt Rockerz 255 Pro+. With 40 hours of playback, ASAP Charge, and IPX5 sweat resistance, these earphones are built for active lifestyles.",
    specs: "Bluetooth 5.0 | 40Hr Playback | ASAP Charge | IPX5 Water Resistant | 10mm Drivers | Magnetic Earbuds"
  },
  {
    id: 11,
    name: "Vincent Chase UV400 Wayfarer Sunglasses",
    brand: "Vincent Chase",
    price: 899, mrp: 1499, rating: 4.0, reviews: 3245,
    category: "Eyewear",
    sizes: ["Free Size"],
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=200&h=200&fit=crop&crop=left",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=200&h=200&fit=crop&crop=right",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=200&h=200&fit=crop&crop=top",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=200&h=200&fit=crop&crop=bottom"
    ],
    description: "Classic wayfarer sunglasses with full UV400 protection. These sharp-looking shades block 100% of UVA and UVB rays while keeping your style game strong.",
    specs: "UV400 Protection | Polycarbonate Lens | TR90 Lightweight Frame | Anti-Reflective Coating | Spring Hinge"
  },
  {
    id: 12,
    name: "Noise ColorFit Pro 5 Smart Watch",
    brand: "Noise",
    price: 2999, mrp: 5999, rating: 4.3, reviews: 7890,
    category: "Electronics",
    sizes: ["Free Size"],
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=200&h=200&fit=crop&crop=left",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=200&h=200&fit=crop&crop=right",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=200&h=200&fit=crop&crop=top",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=200&h=200&fit=crop&crop=bottom"
    ],
    description: "Track your fitness goals with the Noise ColorFit Pro 5. Featuring a 1.85\" HD display, SpO2 & heart rate monitoring, and 7-day battery life — your ultimate health companion.",
    specs: "1.85\" HD Display | SpO2 & Heart Rate | 100+ Sports Modes | 7-Day Battery | IP68 Rated | Bluetooth Calling"
  }
];

// ============================================================
//  Cart Functions (localStorage)
// ============================================================

function getCart() {
  try { return JSON.parse(localStorage.getItem('blipkart_cart') || '[]'); }
  catch(e) { return []; }
}

function saveCart(cart) {
  localStorage.setItem('blipkart_cart', JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(productId, qty, size) {
  const cart = getCart();
  const key = productId + '_' + size;
  const existing = cart.find(item => item.key === key);
  if (existing) {
    existing.qty += qty;
  } else {
    const product = BLIPKART_PRODUCTS.find(p => p.id === productId);
    if (!product) return false;
    cart.push({ key, id: productId, name: product.name, brand: product.brand,
                price: product.price, image: product.image, qty, size });
  }
  saveCart(cart);
  return true;
}

function removeFromCart(key) {
  saveCart(getCart().filter(item => item.key !== key));
}

function updateCartQty(key, qty) {
  if (qty <= 0) { removeFromCart(key); return; }
  const cart = getCart();
  const item = cart.find(i => i.key === key);
  if (item) { item.qty = qty; saveCart(cart); }
}

function getCartCount() {
  return getCart().reduce((s, i) => s + i.qty, 0);
}

function getCartSubtotal() {
  return getCart().reduce((s, i) => s + i.price * i.qty, 0);
}

function updateCartBadge() {
  const badge = document.getElementById('cart-count');
  if (!badge) return;
  const count = getCartCount();
  badge.textContent = count;
  badge.style.display = count > 0 ? 'inline-flex' : 'none';
}

// ============================================================
//  Helpers
// ============================================================

function renderStarsHTML(rating) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    html += `<span style="color:${i <= Math.round(rating) ? '#ff523b' : '#ccc'}">★</span>`;
  }
  return html;
}

function formatPrice(n) {
  return '₹' + n.toLocaleString('en-IN');
}

function discountPct(price, mrp) {
  return Math.round(((mrp - price) / mrp) * 100);
}

function showToast(msg) {
  let t = document.createElement('div');
  t.className = 'blipkart-toast';
  t.innerHTML = msg;
  document.body.appendChild(t);
  setTimeout(() => t.classList.add('show'), 10);
  setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 400); }, 2500);
}

function buildProductCardHTML(product) {
  const pct = discountPct(product.price, product.mrp);
  return `
    <a class="productCard" href="product-details.html?id=${product.id}" style="text-decoration:none;color:inherit;">
      <div class="product-img-wrapper">
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
        <span class="discount-badge">${pct}% OFF</span>
      </div>
      <span class="product-title">${product.name}</span>
      <div class="star-rating-row">
        ${renderStarsHTML(product.rating)}
        <span class="review-count">(${product.reviews.toLocaleString('en-IN')})</span>
      </div>
      <div class="product-price-row">
        <span class="product-pricing">${formatPrice(product.price)}</span>
        <span class="product-mrp">${formatPrice(product.mrp)}</span>
      </div>
    </a>`;
}

document.addEventListener('DOMContentLoaded', updateCartBadge);
