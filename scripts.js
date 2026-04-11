const products = [
  {
    id: 1,
    name: 'A4 Exercise Book (Pack of 5)',
    price: 25000,
    category: 'Notebooks',
    image:
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&h=600&fit=crop',
    desc: 'Premium 80-page ruled notebooks - perfect for lectures',
  },
  {
    id: 2,
    name: 'Ballpoint Pens (Pack of 10)',
    price: 12000,
    category: 'Pens',
    image:
      'https://images.unsplash.com/photo-1583487551672-32c9d3a0b5a3?w=600&h=600&fit=crop',
    desc: 'Assorted blue & black ink – smooth writing',
  },
  {
    id: 3,
    name: 'HB Pencils (Pack of 12)',
    price: 8000,
    category: 'Pens',
    image:
      'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=600&fit=crop',
    desc: 'With erasers – ideal for exams & sketches',
  },
  {
    id: 4,
    name: 'Highlighters (Set of 6)',
    price: 15000,
    category: 'Pens',
    image:
      'https://images.unsplash.com/photo-1603214374684-c2a3c3d8f8d9?w=600&h=600&fit=crop',
    desc: 'Vibrant pastel colours – non-bleed',
  },
  {
    id: 5,
    name: 'Ring File A4 (Pack of 3)',
    price: 18000,
    category: 'Files',
    image:
      'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&h=600&fit=crop',
    desc: 'Durable plastic ring binders',
  },
  {
    id: 6,
    name: 'Lever Arch File',
    price: 22000,
    category: 'Files',
    image:
      'https://images.unsplash.com/photo-1581291519195-ef11498d1cf2?w=600&h=600&fit=crop',
    desc: 'Professional lever arch file – A4 size',
  },
  {
    id: 7,
    name: 'Scientific Calculator',
    price: 45000,
    category: 'Books',
    image:
      'https://images.unsplash.com/photo-1587145829366-a69be6fd6f2b?w=600&h=600&fit=crop',
    desc: 'Casio-style scientific calculator with 240+ functions',
  },
  {
    id: 8,
    name: 'Introduction to Programming Textbook',
    price: 65000,
    category: 'Books',
    image:
      'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=600&h=600&fit=crop',
    desc: 'BSIT recommended – latest edition, full colour',
  },
  {
    id: 9,
    name: 'Sticky Notes 3x3 (Pack)',
    price: 9000,
    category: 'Notebooks',
    image:
      'https://images.unsplash.com/photo-1586339949216-1a274684c704?w=600&h=600&fit=crop',
    desc: 'Pastel colours – super sticky, 4 pads per pack',
  },
  {
    id: 10,
    name: 'Erasers & Sharpener Set',
    price: 7000,
    category: 'Pens',
    image:
      'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=600&fit=crop',
    desc: 'Durable erasers + metal sharpener set',
  },
  {
    id: 11,
    name: 'A5 Notebook (Pack of 3)',
    price: 15000,
    category: 'Notebooks',
    image:
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&h=600&fit=crop',
    desc: 'Compact size for quick notes and sketches',
  },
  {
    id: 12,
    name: 'Colored Pencils (Set of 12)',
    price: 20000,
    category: 'Pens',
    image:
      'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=600&fit=crop',
    desc: 'Vibrant colors for diagrams and art projects',
  },
  {
    id: 13,
    name: 'Clipboard',
    price: 10000,
    category: 'Files',
    image:
      'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&h=600&fit=crop',
    desc: 'Wooden clipboard for assignments and notes',
  },
  {
    id: 14,
    name: 'Geometry Set',
    price: 30000,
    category: 'Books',
    image:
      'https://images.unsplash.com/photo-1587145829366-a69be6fd6f2b?w=600&h=600&fit=crop',
    desc: 'Complete set with compass, ruler, and protractor',
  },
  {
    id: 15,
    name: 'Whiteboard Markers (Pack of 4)',
    price: 18000,
    category: 'Pens',
    image:
      'https://images.unsplash.com/photo-1603214374684-c2a3c3d8f8d9?w=600&h=600&fit=crop',
    desc: 'Dry-erase markers for presentations and study groups',
  },
  {
    id: 16,
    name: 'Plastic Folders (Pack of 5)',
    price: 12000,
    category: 'Files',
    image:
      'https://images.unsplash.com/photo-1581291519195-ef11498d1cf2?w=600&h=600&fit=crop',
    desc: 'Assorted colors for organizing documents',
  },
  {
    id: 17,
    name: 'Graph Paper Book',
    price: 22000,
    category: 'Notebooks',
    image:
      'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=600&h=600&fit=crop',
    desc: 'Quad-ruled for math and engineering drawings',
  },
  {
    id: 18,
    name: 'Correction Tape',
    price: 5000,
    category: 'Pens',
    image:
      'https://images.unsplash.com/photo-1583487551672-32c9d3a0b5a3?w=600&h=600&fit=crop',
    desc: 'Neat corrections without mess',
  },
  {
    id: 19,
    name: 'Stapler with Staples',
    price: 25000,
    category: 'Files',
    image:
      'https://images.unsplash.com/photo-1586339949216-1a274684c704?w=600&h=600&fit=crop',
    desc: 'Heavy-duty stapler with refill staples',
  },
  {
    id: 20,
    name: 'Bookmark Set (Pack of 10)',
    price: 8000,
    category: 'Notebooks',
    image:
      'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&h=600&fit=crop',
    desc: 'Decorative bookmarks for textbooks and novels',
  },
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentUser = null;
let currentSlide = 0;
const totalSlides = 4;
let autoSlideInterval;

function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
  const cartCountEl = document.getElementById('cart-count');
  if (cartCountEl) cartCountEl.textContent = count;
}

function renderProducts(filteredProducts = products) {
  const grid = document.getElementById('product-grid');
  if (!grid) return;
  grid.innerHTML = filteredProducts
    .map(
      (p) => `
                  <div class="product-card bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition-all cursor-pointer">
                      <img src="${p.image}" alt="${p.name}" class="w-full aspect-square object-cover">
                      <div class="p-4">
                          <p class="text-xs text-emerald-600 font-medium">${p.category}</p>
                          <h4 class="font-semibold text-base mt-1">${p.name}</h4>
                          <p class="text-xs text-gray-500 line-clamp-2 mt-1">${p.desc}</p>
                          <div class="flex justify-between items-center mt-3">
                              <div class="text-lg font-bold">UGX ${p.price.toLocaleString()}</div>
                              <button onclick="addToCart(${p.id}); event.stopPropagation()" class="bg-emerald-500 text-white px-4 py-2 rounded-xl text-sm font-medium flex items-center gap-1 hover:bg-emerald-600 transition">
                                  <i class="fa-solid fa-cart-plus text-xs"></i> Add
                              </button>
                          </div>
                      </div>
                  </div>
              `,
    )
    .join('');
}

function filterProducts() {
  const search =
    document.getElementById('search-input')?.value.toLowerCase() || '';
  const cat = document.getElementById('category-filter')?.value || '';
  const filtered = products.filter(
    (p) =>
      (!cat || p.category === cat) &&
      (p.name.toLowerCase().includes(search) ||
        p.desc.toLowerCase().includes(search)),
  );
  renderProducts(filtered);
}

window.addToCart = function (id) {
  const product = products.find((p) => p.id === id);
  const existing = cart.find((item) => item.id === id);
  if (existing) existing.qty = (existing.qty || 1) + 1;
  else cart.push({ ...product, qty: 1 });
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  const toast = document.createElement('div');
  toast.className =
    'fixed bottom-5 right-5 bg-emerald-500 text-white px-5 py-3 rounded-2xl shadow-lg z-[10000] text-sm';
  toast.innerHTML = `<i class="fa-solid fa-check-circle"></i> ${product.name} added!`;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 1500);
};

window.toggleCart = function () {
  const modal = document.getElementById('cart-modal');
  const container = document.getElementById('cart-items');
  if (!container) return;
  container.innerHTML = cart
    .map(
      (item, i) => `
                  <div class="flex gap-3 border-b pb-4">
                      <img src="${item.image}" class="w-16 h-16 object-cover rounded-xl">
                      <div class="flex-1">
                          <p class="font-medium text-sm">${item.name}</p>
                          <p class="text-xs text-gray-500">UGX ${item.price} × ${item.qty || 1}</p>
                          <div class="flex gap-2 mt-2 items-center">
                              <button onclick="changeQty(${i}, -1)" class="w-7 h-7 border rounded-xl flex items-center justify-center hover:bg-gray-100"><i class="fa-solid fa-minus text-xs"></i></button>
                              <span class="font-semibold w-6 text-center text-sm">${item.qty || 1}</span>
                              <button onclick="changeQty(${i}, 1)" class="w-7 h-7 border rounded-xl flex items-center justify-center hover:bg-gray-100"><i class="fa-solid fa-plus text-xs"></i></button>
                              <button onclick="removeFromCart(${i})" class="ml-auto text-red-500 text-xs"><i class="fa-solid fa-trash"></i> Remove</button>
                          </div>
                      </div>
                  </div>
              `,
    )
    .join('');
  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.qty || 1),
    0,
  );
  document.getElementById('cart-total').innerHTML =
    `UGX ${total.toLocaleString()}`;
  modal.classList.toggle('hidden');
};

window.changeQty = function (index, delta) {
  cart[index].qty = (cart[index].qty || 1) + delta;
  if (cart[index].qty < 1) cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  toggleCart();
};

window.removeFromCart = function (index) {
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  toggleCart();
};

window.checkout = function () {
  if (cart.length === 0) return alert('Cart is empty!');
  if (!currentUser) {
    toggleCart();
    alert('Please login first!');
    return;
  }
  const order = {
    id: Date.now(),
    date: new Date().toLocaleString(),
    items: [...cart],
    total: cart.reduce((s, i) => s + i.price * (i.qty || 1), 0),
  };
  let orders = JSON.parse(localStorage.getItem('orders')) || [];
  orders.unshift(order);
  localStorage.setItem('orders', JSON.stringify(orders));
  cart = [];
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  toggleCart();
  alert('✅ Order placed successfully! (Mock Mobile Money payment confirmed)');
  navigateTo('account');
  renderOrders();
};

function renderOrders() {
  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  const container = document.getElementById('order-list');
  if (!container) return;
  container.innerHTML = orders.length
    ? orders
        .map(
          (o) => `
                  <div class="bg-gray-50 p-4 rounded-2xl flex justify-between items-center">
                      <div><p class="text-xs text-gray-500">${o.date}</p><p class="font-medium">${o.items.length} items • UGX ${o.total.toLocaleString()}</p></div>
                      <i class="fa-solid fa-check-circle text-emerald-500 text-xl"></i>
                  </div>
              `,
        )
        .join('')
    : '<p class="text-gray-400 italic text-center py-6">No orders yet – start shopping!</p>';
}

window.navigateTo = function (page) {
  document
    .querySelectorAll('.page')
    .forEach((p) => p.classList.remove('active-page'));
  if (page === 'home')
    document.getElementById('home-page').classList.add('active-page');
  else if (page === 'shop') {
    document.getElementById('shop-page').classList.add('active-page');
    filterProducts();
  } else if (page === 'account') {
    document.getElementById('account-page').classList.add('active-page');
    renderOrders();
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

function showSlide(n) {
  const slides = document.querySelectorAll('.slide');
  slides.forEach((s, i) => s.classList.toggle('active', i === n));
  currentSlide = n;
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.getElementById(`dot-${i}`);
    if (dot)
      dot.style.backgroundColor =
        i === currentSlide ? '#10b981' : 'rgba(255,255,255,0.7)';
  }
}
window.nextSlide = function () {
  showSlide((currentSlide + 1) % totalSlides);
};
window.prevSlide = function () {
  showSlide((currentSlide - 1 + totalSlides) % totalSlides);
};
window.goToSlide = function (n) {
  showSlide(n);
};

function startAutoSlide() {
  if (autoSlideInterval) clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(() => nextSlide(), 5000);
}

window.handleLogin = function () {
  const email = document.getElementById('login-email').value.trim();
  const pass = document.getElementById('login-password').value.trim();
  if (email === 'student@bbuc.ac.ug' && pass === '1234') {
    currentUser = {
      name: 'Muhereza Daniel',
      role: 'student',
      email: 'student@bbuc.ac.ug',
    };
    localStorage.setItem('user', JSON.stringify(currentUser));
    document.getElementById('login-page').classList.remove('active-page');
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('app-container').classList.remove('hidden');
    document.getElementById('navbar').classList.remove('hidden');
    document.getElementById('user-name').textContent = currentUser.name;
    document.getElementById('profile-email').textContent = currentUser.email;
    document.getElementById('nav-user-name').textContent =
      currentUser.name.split(' ')[0];
    navigateTo('home');
    updateCartCount();
    renderOrders();
    startAutoSlide();
    const sliderDiv = document.getElementById('hero-slider');
    if (sliderDiv) {
      sliderDiv.addEventListener('mouseenter', () =>
        clearInterval(autoSlideInterval),
      );
      sliderDiv.addEventListener('mouseleave', () => startAutoSlide());
    }
  } else {
    alert('Invalid credentials. Use student@ucu.ac.ug / 1234');
  }
};

window.logout = function () {
  currentUser = null;
  localStorage.removeItem('user');
  cart = [];
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  document.getElementById('app-container').classList.add('hidden');
  document.getElementById('navbar').classList.add('hidden');
  document.getElementById('login-page').style.display = 'flex';
  document.getElementById('login-page').classList.add('active-page');
  document.getElementById('login-email').value = '';
  document.getElementById('login-password').value = '';
  if (autoSlideInterval) clearInterval(autoSlideInterval);
};

(function init() {
  const savedUser = localStorage.getItem('user');
  if (savedUser) {
    currentUser = JSON.parse(savedUser);
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('login-page').classList.remove('active-page');
    document.getElementById('app-container').classList.remove('hidden');
    document.getElementById('navbar').classList.remove('hidden');
    document.getElementById('user-name').textContent = currentUser.name;
    document.getElementById('profile-email').textContent = currentUser.email;
    document.getElementById('nav-user-name').textContent =
      currentUser.name.split(' ')[0];
    navigateTo('home');
    updateCartCount();
    renderOrders();
    startAutoSlide();
    const sliderDiv = document.getElementById('hero-slider');
    if (sliderDiv) {
      sliderDiv.addEventListener('mouseenter', () =>
        clearInterval(autoSlideInterval),
      );
      sliderDiv.addEventListener('mouseleave', () => startAutoSlide());
    }
  } else {
    document.getElementById('login-page').style.display = 'flex';
    document.getElementById('login-page').classList.add('active-page');
  }
  window.filterProducts = filterProducts;
  document
    .getElementById('search-input')
    ?.addEventListener('keyup', filterProducts);
  document
    .getElementById('category-filter')
    ?.addEventListener('change', filterProducts);
})();
