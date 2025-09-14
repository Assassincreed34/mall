// Application Data
const furnitureProducts = [
  {
    id: 1,
    name: "Premium L-Shape Sofa Set",
    category: "Sofas & Seating",
    price: 45000,
    unit: "Set",
    description: "Luxurious L-shaped sofa set with premium fabric upholstery. Perfect for modern living rooms with comfortable seating for 6-7 people.",
    image: "l_shape_sofa.jpg",
    in_stock: true,
    rating: 4.6
  },
  {
    id: 2,
    name: "King Size Wooden Bed",
    category: "Beds & Mattresses",
    price: 28000,
    unit: "Piece",
    description: "Solid wood king size bed frame with elegant carved headboard. Made from premium teak wood with natural finish.",
    image: "wooden_bed.jpg",
    in_stock: true,
    rating: 4.7
  },
  {
    id: 3,
    name: "6 Seater Dining Table Set",
    category: "Dining Sets",
    price: 32000,
    unit: "Set",
    description: "Beautiful 6 seater dining table with matching chairs. Made from premium wood with comfortable cushioned seating.",
    image: "dining_set.jpg",
    in_stock: true,
    rating: 4.5
  },
  {
    id: 4,
    name: "3 Door Sliding Wardrobe",
    category: "Storage & Wardrobes",
    price: 22000,
    unit: "Piece",
    description: "Spacious 3 door sliding wardrobe with mirror. Multiple compartments for organized storage with modern design.",
    image: "wardrobe.jpg",
    in_stock: true,
    rating: 4.4
  },
  {
    id: 5,
    name: "Executive Office Desk",
    category: "Tables & Desks",
    price: 18000,
    unit: "Piece",
    description: "Premium executive office desk with multiple drawers. Perfect for home office or corporate use with ergonomic design.",
    image: "office_desk.jpg",
    in_stock: true,
    rating: 4.3
  },
  {
    id: 6,
    name: "Ergonomic Office Chair",
    category: "Chairs",
    price: 8500,
    unit: "Piece",
    description: "High-back ergonomic office chair with lumbar support. Adjustable height with premium leather upholstery.",
    image: "office_chair.jpg",
    in_stock: true,
    rating: 4.5
  },
  {
    id: 7,
    name: "Modern Coffee Table",
    category: "Tables & Desks",
    price: 12000,
    unit: "Piece",
    description: "Stylish modern coffee table with glass top and wooden base. Perfect centerpiece for living room.",
    image: "coffee_table.jpg",
    in_stock: true,
    rating: 4.2
  },
  {
    id: 8,
    name: "Recliner Sofa Chair",
    category: "Sofas & Seating",
    price: 15000,
    unit: "Piece",
    description: "Comfortable single seater recliner with manual reclining mechanism. Premium leather finish with excellent comfort.",
    image: "recliner.jpg",
    in_stock: true,
    rating: 4.6
  },
  {
    id: 9,
    name: "Queen Size Mattress",
    category: "Beds & Mattresses",
    price: 8000,
    unit: "Piece",
    description: "Memory foam queen size mattress with orthopedic support. 10-year warranty with removable washable cover.",
    image: "mattress.jpg",
    in_stock: true,
    rating: 4.4
  },
  {
    id: 10,
    name: "Wall Mounted TV Unit",
    category: "Storage & Wardrobes",
    price: 16000,
    unit: "Piece",
    description: "Modern wall mounted TV unit with storage compartments. Cable management system with sleek contemporary design.",
    image: "tv_unit.jpg",
    in_stock: true,
    rating: 4.3
  },
  {
    id: 11,
    name: "Decorative Wall Mirror",
    category: "Home Decor",
    price: 3500,
    unit: "Piece",
    description: "Elegant decorative wall mirror with ornate frame. Adds sophistication to any room with premium quality glass.",
    image: "wall_mirror.jpg",
    in_stock: true,
    rating: 4.1
  },
  {
    id: 12,
    name: "Modular Kitchen Cabinets",
    category: "Kitchen Furniture",
    price: 75000,
    unit: "Set",
    description: "Complete modular kitchen cabinet set with soft-close mechanisms. Includes wall units, base units, and tall units.",
    image: "kitchen_cabinets.jpg",
    in_stock: true,
    rating: 4.7
  },
  {
    id: 13,
    name: "Outdoor Garden Set",
    category: "Outdoor Furniture",
    price: 25000,
    unit: "Set",
    description: "Weather-resistant outdoor garden furniture set. Includes table and 4 chairs made from premium teak wood.",
    image: "garden_set.jpg",
    in_stock: true,
    rating: 4.5
  },
  {
    id: 14,
    name: "Bookshelf Unit",
    category: "Storage & Wardrobes",
    price: 9500,
    unit: "Piece",
    description: "5-tier wooden bookshelf with adjustable shelves. Perfect for home library or office storage needs.",
    image: "bookshelf.jpg",
    in_stock: true,
    rating: 4.2
  },
  {
    id: 15,
    name: "Bar Stool Set",
    category: "Chairs",
    price: 7200,
    unit: "Set of 2",
    description: "Modern adjustable height bar stools with footrest. Contemporary design with comfortable seating.",
    image: "bar_stools.jpg",
    in_stock: true,
    rating: 4.3
  }
];

const categories = [
  "Sofas & Seating",
  "Beds & Mattresses",
  "Dining Sets",
  "Storage & Wardrobes",
  "Tables & Desks",
  "Chairs",
  "Home Decor",
  "Kitchen Furniture",
  "Outdoor Furniture"
];

const categoryIcons = {
  "Sofas & Seating": "fas fa-couch",
  "Beds & Mattresses": "fas fa-bed",
  "Dining Sets": "fas fa-utensils",
  "Storage & Wardrobes": "fas fa-archive",
  "Tables & Desks": "fas fa-table",
  "Chairs": "fas fa-chair",
  "Home Decor": "fas fa-palette",
  "Kitchen Furniture": "fas fa-kitchen-set",
  "Outdoor Furniture": "fas fa-tree"
};

// Application State
let cart = [];
let filteredProducts = [...furnitureProducts];
let isAdminMode = false;
let currentEditProduct = null;

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
  console.log('App initializing...');
  initializeApp();
  bindEvents();
});

function initializeApp() {
  renderCategories();
  renderProducts();
  populateCategoryFilter();
  updateCartUI();
  console.log('App initialized successfully');
}

function bindEvents() {
  console.log('Binding events...');
  
  // Cart Events
  const cartToggle = document.getElementById('cartToggle');
  const cartClose = document.getElementById('cartClose');
  const cartOverlay = document.getElementById('cartOverlay');
  const checkoutBtn = document.getElementById('checkoutBtn');
  
  if (cartToggle) cartToggle.addEventListener('click', toggleCart);
  if (cartClose) cartClose.addEventListener('click', closeCart);
  if (cartOverlay) cartOverlay.addEventListener('click', closeCart);
  if (checkoutBtn) checkoutBtn.addEventListener('click', checkout);

  // Admin Events
  const adminToggle = document.getElementById('adminToggle');
  const adminLogout = document.getElementById('adminLogout');
  const adminModalClose = document.getElementById('adminModalClose');
  const adminCancel = document.getElementById('adminCancel');
  const adminLogin = document.getElementById('adminLogin');
  const modalOverlay = document.getElementById('modalOverlay');
  
  if (adminToggle) {
    adminToggle.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Admin toggle clicked');
      showAdminModal();
    });
  }
  
  if (adminLogout) adminLogout.addEventListener('click', logoutAdmin);
  if (adminModalClose) adminModalClose.addEventListener('click', closeAdminModal);
  if (adminCancel) adminCancel.addEventListener('click', closeAdminModal);
  if (adminLogin) adminLogin.addEventListener('click', loginAdmin);
  if (modalOverlay) modalOverlay.addEventListener('click', closeModals);

  // Price Edit Events
  const priceModalClose = document.getElementById('priceModalClose');
  const priceCancel = document.getElementById('priceCancel');
  const priceSave = document.getElementById('priceSave');
  
  if (priceModalClose) priceModalClose.addEventListener('click', closePriceModal);
  if (priceCancel) priceCancel.addEventListener('click', closePriceModal);
  if (priceSave) priceSave.addEventListener('click', savePriceEdit);

  // Search and Filter Events
  const searchInput = document.getElementById('searchInput');
  const categoryFilter = document.getElementById('categoryFilter');
  
  if (searchInput) searchInput.addEventListener('input', debounce(handleSearch, 300));
  if (categoryFilter) categoryFilter.addEventListener('change', handleCategoryFilter);

  // Keyboard Events
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeCart();
      closeModals();
    }
  });

  // Admin Password Enter Key
  const adminPassword = document.getElementById('adminPassword');
  if (adminPassword) {
    adminPassword.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        loginAdmin();
      }
    });
  }
  
  console.log('Events bound successfully');
}

// Global functions for onclick handlers
window.addToCart = function(productId) {
  console.log('Adding to cart:', productId);
  const product = furnitureProducts.find(p => p.id === productId);
  if (!product) return;
  
  const existingItem = cart.find(item => item.id === productId);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      unit: product.unit
    });
  }
  
  updateCartUI();
  showCartFeedback();
};

window.removeFromCart = function(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCartUI();
};

window.updateQuantity = function(productId, change) {
  const item = cart.find(item => item.id === productId);
  if (!item) return;
  
  item.quantity += change;
  
  if (item.quantity <= 0) {
    removeFromCart(productId);
  } else {
    updateCartUI();
  }
};

window.filterByCategory = function(category) {
  console.log('Filtering by category:', category);
  const categoryFilter = document.getElementById('categoryFilter');
  if (categoryFilter) {
    categoryFilter.value = category;
    handleCategoryFilter();
    
    // Scroll to products section
    const productsSection = document.querySelector('.products-section');
    if (productsSection) {
      productsSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }
};

window.editPrice = function(productId) {
  console.log('Edit price clicked:', productId, 'Admin mode:', isAdminMode);
  if (!isAdminMode) return;
  
  const product = furnitureProducts.find(p => p.id === productId);
  if (!product) return;
  
  currentEditProduct = product;
  
  const editProductName = document.getElementById('editProductName');
  const editProductDescription = document.getElementById('editProductDescription');
  const currentPrice = document.getElementById('currentPrice');
  const newPrice = document.getElementById('newPrice');
  
  if (editProductName) editProductName.textContent = product.name;
  if (editProductDescription) editProductDescription.textContent = product.description;
  if (currentPrice) currentPrice.textContent = product.price.toLocaleString();
  if (newPrice) newPrice.value = product.price;
  
  const priceModal = document.getElementById('priceModal');
  const modalOverlay = document.getElementById('modalOverlay');
  
  if (priceModal) priceModal.classList.add('active');
  if (modalOverlay) modalOverlay.classList.add('active');
  if (newPrice) newPrice.focus();
  document.body.style.overflow = 'hidden';
};

// Category Management
function renderCategories() {
  const categoriesGrid = document.getElementById('categoriesGrid');
  if (!categoriesGrid) return;
  
  const html = categories.map(category => {
    const icon = categoryIcons[category] || 'fas fa-box';
    const productCount = furnitureProducts.filter(p => p.category === category).length;
    
    return `
      <div class="category-card" onclick="filterByCategory('${category}')">
        <i class="${icon}"></i>
        <h4>${category}</h4>
        <p>${productCount} items</p>
      </div>
    `;
  }).join('');
  
  categoriesGrid.innerHTML = html;
}

function populateCategoryFilter() {
  const categoryFilter = document.getElementById('categoryFilter');
  if (!categoryFilter) return;
  
  const options = categories.map(category => 
    `<option value="${category}">${category}</option>`
  ).join('');
  
  categoryFilter.innerHTML = '<option value="">All Categories</option>' + options;
}

// Product Management
function renderProducts() {
  const productsGrid = document.getElementById('productsGrid');
  if (!productsGrid) return;
  
  if (filteredProducts.length === 0) {
    productsGrid.innerHTML = `
      <div class="no-products">
        <i class="fas fa-search"></i>
        <h3>No products found</h3>
        <p>Try adjusting your search or filter criteria</p>
      </div>
    `;
    return;
  }

  const html = filteredProducts.map(product => {
    const stars = generateStars(product.rating);
    const adminClass = isAdminMode ? 'admin-mode' : '';
    const priceClickHandler = isAdminMode ? `editPrice(${product.id})` : '';
    
    return `
      <div class="product-card ${adminClass}">
        <div class="product-image">
          <i class="fas fa-image"></i>
        </div>
        <div class="product-info">
          <div class="product-header">
            <h4 class="product-name">${product.name}</h4>
            <div class="product-price" ${priceClickHandler ? `onclick="${priceClickHandler}"` : ''} ${isAdminMode ? 'style="cursor: pointer;"' : ''}>
              ₹${product.price.toLocaleString()}
              ${isAdminMode ? '<button class="admin-price-edit"><i class="fas fa-edit"></i></button>' : ''}
            </div>
          </div>
          <p class="product-description">${product.description}</p>
          <div class="product-meta">
            <div class="product-rating">
              <div class="stars">${stars}</div>
              <span class="rating-value">${product.rating}</span>
            </div>
            <span class="product-category">${product.category}</span>
          </div>
          <div class="product-actions">
            <button class="btn btn--primary add-to-cart" onclick="addToCart(${product.id})">
              <i class="fas fa-cart-plus"></i>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
  
  productsGrid.innerHTML = html;
}

function generateStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  let stars = '';
  
  for (let i = 0; i < fullStars; i++) {
    stars += '<i class="fas fa-star"></i>';
  }
  
  if (hasHalfStar) {
    stars += '<i class="fas fa-star-half-alt"></i>';
  }
  
  const emptyStars = 5 - Math.ceil(rating);
  for (let i = 0; i < emptyStars; i++) {
    stars += '<i class="far fa-star"></i>';
  }
  
  return stars;
}

// Search and Filter Functions
function handleSearch() {
  const searchInput = document.getElementById('searchInput');
  const categoryFilter = document.getElementById('categoryFilter');
  
  if (!searchInput || !categoryFilter) return;
  
  const searchTerm = searchInput.value.toLowerCase().trim();
  const selectedCategory = categoryFilter.value;
  
  filteredProducts = furnitureProducts.filter(product => {
    const matchesSearch = !searchTerm || 
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm);
    
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  console.log('Filtered products:', filteredProducts.length);
  renderProducts();
}

function handleCategoryFilter() {
  handleSearch();
}

// Cart Management
function updateCartUI() {
  const cartCount = document.getElementById('cartCount');
  const cartItems = document.getElementById('cartItems');
  const cartEmpty = document.getElementById('cartEmpty');
  const cartTotal = document.getElementById('cartTotal');
  const checkoutBtn = document.getElementById('checkoutBtn');
  
  // Update cart count
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (cartCount) {
    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
  }
  
  // Update cart items
  if (cart.length === 0) {
    if (cartItems) cartItems.style.display = 'none';
    if (cartEmpty) cartEmpty.classList.remove('hidden');
    if (checkoutBtn) checkoutBtn.disabled = true;
  } else {
    if (cartItems) cartItems.style.display = 'block';
    if (cartEmpty) cartEmpty.classList.add('hidden');
    if (checkoutBtn) checkoutBtn.disabled = false;
    
    if (cartItems) {
      const html = cart.map(item => `
        <div class="cart-item">
          <div class="cart-item-image">
            <i class="fas fa-image"></i>
          </div>
          <div class="cart-item-info">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-price">₹${item.price.toLocaleString()} per ${item.unit}</div>
            <div class="cart-item-controls">
              <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
              <span class="quantity">${item.quantity}</span>
              <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
              <button class="remove-item" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
      `).join('');
      
      cartItems.innerHTML = html;
    }
  }
  
  // Update cart total
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  if (cartTotal) cartTotal.textContent = total.toLocaleString();
}

function toggleCart() {
  const cartSidebar = document.getElementById('cartSidebar');
  const cartOverlay = document.getElementById('cartOverlay');
  
  if (cartSidebar && cartOverlay) {
    cartSidebar.classList.toggle('active');
    cartOverlay.classList.toggle('active');
    document.body.style.overflow = cartSidebar.classList.contains('active') ? 'hidden' : 'auto';
  }
}

function closeCart() {
  const cartSidebar = document.getElementById('cartSidebar');
  const cartOverlay = document.getElementById('cartOverlay');
  
  if (cartSidebar) cartSidebar.classList.remove('active');
  if (cartOverlay) cartOverlay.classList.remove('active');
  document.body.style.overflow = 'auto';
}

function showCartFeedback() {
  // Create a temporary notification
  const notification = document.createElement('div');
  notification.className = 'cart-notification';
  notification.innerHTML = '<i class="fas fa-check"></i> Item added to cart';
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--color-success);
    color: var(--color-surface);
    padding: 12px 16px;
    border-radius: 8px;
    z-index: 1002;
    animation: slideIn 0.3s ease-out;
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.remove();
  }, 2000);
}

// Checkout via WhatsApp
function checkout() {
  if (cart.length === 0) return;
  
  const businessPhone = '9591936066';
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  let message = '🛋️ *Premium Furniture Mall - Order Details*\n\n';
  
  cart.forEach((item, index) => {
    message += `${index + 1}. ${item.name}\n`;
    message += `   Qty: ${item.quantity} ${item.unit}\n`;
    message += `   Price: ₹${item.price.toLocaleString()} per ${item.unit}\n`;
    message += `   Subtotal: ₹${(item.price * item.quantity).toLocaleString()}\n\n`;
  });
  
  message += `💰 *Total Amount: ₹${total.toLocaleString()}*\n\n`;
  message += `📱 Please confirm this order and provide delivery details.`;
  
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/91${businessPhone}?text=${encodedMessage}`;
  
  window.open(whatsappUrl, '_blank');
}

// Admin Functions
function showAdminModal() {
  console.log('Showing admin modal, current admin mode:', isAdminMode);
  
  if (isAdminMode) {
    logoutAdmin();
    return;
  }
  
  const adminModal = document.getElementById('adminModal');
  const modalOverlay = document.getElementById('modalOverlay');
  const adminPassword = document.getElementById('adminPassword');
  
  if (adminModal && modalOverlay) {
    adminModal.classList.add('active');
    modalOverlay.classList.add('active');
    if (adminPassword) adminPassword.focus();
    document.body.style.overflow = 'hidden';
    console.log('Admin modal opened');
  }
}

function closeAdminModal() {
  const adminModal = document.getElementById('adminModal');
  const modalOverlay = document.getElementById('modalOverlay');
  const adminPassword = document.getElementById('adminPassword');
  const passwordError = document.getElementById('passwordError');
  
  if (adminModal) adminModal.classList.remove('active');
  if (modalOverlay) modalOverlay.classList.remove('active');
  if (adminPassword) adminPassword.value = '';
  if (passwordError) passwordError.classList.add('hidden');
  document.body.style.overflow = 'auto';
}

function loginAdmin() {
  const adminPassword = document.getElementById('adminPassword');
  const passwordError = document.getElementById('passwordError');
  const correctPassword = 'Assassin123';
  
  if (!adminPassword) return;
  
  const password = adminPassword.value;
  console.log('Login attempt with password:', password);
  
  if (password === correctPassword) {
    console.log('Admin login successful');
    isAdminMode = true;
    
    const adminStatus = document.getElementById('adminStatus');
    const adminToggle = document.getElementById('adminToggle');
    
    if (adminStatus) adminStatus.classList.remove('hidden');
    if (adminToggle) {
      adminToggle.innerHTML = '<i class="fas fa-user-shield"></i> Admin Active';
      adminToggle.classList.add('btn--success');
    }
    
    document.body.classList.add('admin-mode');
    closeAdminModal();
    renderProducts(); // Re-render to show edit buttons
  } else {
    console.log('Admin login failed');
    if (passwordError) passwordError.classList.remove('hidden');
    if (adminPassword) {
      adminPassword.value = '';
      adminPassword.focus();
    }
  }
}

function logoutAdmin() {
  console.log('Logging out admin');
  isAdminMode = false;
  
  const adminStatus = document.getElementById('adminStatus');
  const adminToggle = document.getElementById('adminToggle');
  
  if (adminStatus) adminStatus.classList.add('hidden');
  if (adminToggle) {
    adminToggle.innerHTML = '<i class="fas fa-user-shield"></i> Admin';
    adminToggle.classList.remove('btn--success');
  }
  
  document.body.classList.remove('admin-mode');
  renderProducts(); // Re-render to hide edit buttons
}

// Price Editing Functions
function closePriceModal() {
  const priceModal = document.getElementById('priceModal');
  const modalOverlay = document.getElementById('modalOverlay');
  const newPrice = document.getElementById('newPrice');
  
  if (priceModal) priceModal.classList.remove('active');
  if (modalOverlay) modalOverlay.classList.remove('active');
  currentEditProduct = null;
  if (newPrice) newPrice.value = '';
  document.body.style.overflow = 'auto';
}

function savePriceEdit() {
  if (!currentEditProduct) return;
  
  const newPrice = document.getElementById('newPrice');
  if (!newPrice) return;
  
  const newPriceValue = parseInt(newPrice.value);
  
  if (!newPriceValue || newPriceValue <= 0) {
    alert('Please enter a valid price');
    return;
  }
  
  console.log('Updating price for', currentEditProduct.name, 'from', currentEditProduct.price, 'to', newPriceValue);
  
  // Update product price
  currentEditProduct.price = newPriceValue;
  
  // Update cart items if they exist
  const cartItem = cart.find(item => item.id === currentEditProduct.id);
  if (cartItem) {
    cartItem.price = newPriceValue;
    updateCartUI();
  }
  
  closePriceModal();
  renderProducts();
  
  // Show success feedback
  const notification = document.createElement('div');
  notification.className = 'price-update-notification';
  notification.innerHTML = '<i class="fas fa-check"></i> Price updated successfully';
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--color-success);
    color: var(--color-surface);
    padding: 12px 16px;
    border-radius: 8px;
    z-index: 1002;
    animation: slideIn 0.3s ease-out;
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.remove();
  }, 2000);
}

function closeModals() {
  closeAdminModal();
  closePriceModal();
}

// Utility Functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Add CSS animation for notifications
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  .no-products {
    grid-column: 1 / -1;
    text-align: center;
    padding: 60px 20px;
    color: var(--color-text-secondary);
  }
  
  .no-products i {
    font-size: 48px;
    margin-bottom: 16px;
    opacity: 0.5;
  }
  
  .no-products h3 {
    margin-bottom: 8px;
    color: var(--color-text);
  }
  
  .btn--success {
    background-color: var(--color-success) !important;
    color: var(--color-btn-primary-text) !important;
  }
`;
document.head.appendChild(style);