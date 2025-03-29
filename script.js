// Menu Data
const menuItems = [
  {
    id: 1,
    name: "Paneer Tikka",
    price: 199,
    category: "starters",
    image: "https://via.placeholder.com/300x200?text=Paneer+Tikka",
  },
  {
    id: 2,
    name: "Mattar paneer",
    price: 125,
    category: "main",
    image: "images/mattar_paneer.jpg",
  },
  {
    id: 3,
    name: "Paneer butter masala",
    price: 170,
    category: "main",
    image: "images/paneer_butter_masala.jpg",
  },
  {
    id: 4,
    name: "Vegetable Biryani",
    price: 229,
    category: "main",
    image: "https://via.placeholder.com/300x200?text=Vegetable+Biryani",
  },
  {
    id: 5,
    name: "Gulab Jamun",
    price: 99,
    category: "desserts",
    image: "https://via.placeholder.com/300x200?text=Gulab+Jamun",
  },
  {
    id: 6,
    name: "Mango Lassi",
    price: 79,
    category: "drinks",
    image: "https://via.placeholder.com/300x200?text=Mango+Lassi",
  },
  {
    id: 7,
    name: "Masala Papad",
    price: 59,
    category: "starters",
    image: "https://via.placeholder.com/300x200?text=Masala+Papad",
  },
  {
    id: 8,
    name: "Rasmalai",
    price: 109,
    category: "desserts",
    image: "https://via.placeholder.com/300x200?text=Rasmalai",
  },
];

// Cart State
let cart = [];
let cartCount = 0;
let cartTotal = 0;

// Load cart from localStorage
function loadCart() {
  const savedCart = localStorage.getItem("cart");
  if (savedCart) {
    cart = JSON.parse(savedCart);
    cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    cartTotal = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// DOM Elements
const menuItemsContainer = document.getElementById("menu-items");
const cartButtons = document.querySelectorAll(".add-to-cart-btn");
const cartCounter = document.querySelector(".cart-count");
const cartModal = document.getElementById("cart-modal");
const cartItemsContainer = document.getElementById("cart-items");
const cartTotalCount = document.getElementById("cart-total-count");
const cartTotalPrice = document.getElementById("cart-total-price");
const openCartBtn = document.getElementById("cart-btn");
const closeCartBtn = document.getElementById("close-cart");
const categoryButtons = document.querySelectorAll(".category-btn");
const checkoutModal = document.getElementById("checkout-modal");
const successModal = document.getElementById("success-modal");
const checkoutBtn = document.querySelector(".checkout-btn");
const closeModal = document.querySelector(".close");

// Initialize the page
function init() {
  loadCart(); // Load saved cart
  renderMenuItems();
  setupEventListeners();
  updateCartUI();
}

// Render menu items
function renderMenuItems(category = "all") {
  menuItemsContainer.innerHTML = "";

  const filteredItems =
    category === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === category);

  filteredItems.forEach((item) => {
    const menuCard = document.createElement("div");
    menuCard.className = "menu-card";
    menuCard.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="menu-card-body">
          <h3 class="menu-card-title">${item.name}</h3>
          <p class="menu-card-price">₹${item.price}</p>
          <button class="add-to-cart-btn" data-id="${item.id}">Add to Cart</button>
        </div>
      `;
    menuItemsContainer.appendChild(menuCard);
  });

  // Add event listeners to new buttons
  document.querySelectorAll(".add-to-cart-btn").forEach((button) => {
    button.addEventListener("click", addToCart);
  });
}

// Setup event listeners
function setupEventListeners() {
  // Open Cart Modal
  openCartBtn.addEventListener("click", () => {
    cartModal.style.display = "flex";
  });

  // Close Cart Modal
  closeCartBtn.addEventListener("click", () => {
    cartModal.style.display = "none";
  });

  // Close when clicking outside modal
  window.addEventListener("click", (e) => {
    if (e.target === cartModal) {
      cartModal.style.display = "none";
    }
  });

  // Category filter buttons
  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      categoryButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      const category = button.dataset.category;
      renderMenuItems(category);
    });
  });
}

// Add to Cart Functionality
function addToCart(e) {
  const itemId = parseInt(e.target.dataset.id);
  const menuItem = menuItems.find((item) => item.id === itemId);

  if (!menuItem) return;

  // Check if item already exists in cart
  const existingItem = cart.find((item) => item.id === itemId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: menuItem.id,
      name: menuItem.name,
      price: menuItem.price,
      quantity: 1,
    });
  }

  cartCount++;
  cartTotal += menuItem.price;

  updateCartUI();
  showAddedToCartNotification(menuItem.name);
  saveCart(); // Save after adding
}

// Update Cart UI
function updateCartUI() {
  cartCounter.textContent = cartCount;
  cartTotalCount.textContent = cartCount;
  cartTotalPrice.textContent = `₹${cartTotal}`;

  // Clear previous items
  cartItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    cartItemsContainer.innerHTML =
      '<div class="empty-cart">Your cart is empty</div>';
    return;
  }

  // Add current items
  cart.forEach((item) => {
    const cartItemElement = document.createElement("div");
    cartItemElement.className = "cart-item";
    cartItemElement.innerHTML = `
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">₹${item.price * item.quantity}</div>
        </div>
        <div class="cart-item-actions">
          <button onclick="decreaseQuantity(${item.id})">-</button>
          <span>${item.quantity}</span>
          <button onclick="increaseQuantity(${item.id})">+</button>
        </div>
      `;
    cartItemsContainer.appendChild(cartItemElement);
  });
}

// Quantity Adjustments
window.increaseQuantity = (id) => {
  const item = cart.find((item) => item.id === id);
  item.quantity++;
  cartCount++;
  cartTotal += item.price;
  updateCartUI();
  saveCart(); // Save after decreasing
};

window.decreaseQuantity = (id) => {
  const itemIndex = cart.findIndex((item) => item.id === id);
  const item = cart[itemIndex];

  if (item.quantity > 1) {
    item.quantity--;
    cartCount--;
    cartTotal -= item.price;
  } else {
    cart.splice(itemIndex, 1);
    cartCount--;
    cartTotal -= item.price;
  }

  updateCartUI();
  saveCart(); // Save after increasing
};

// Show notification when item is added to cart
function showAddedToCartNotification(itemName) {
  const notification = document.createElement("div");
  notification.className = "notification";
  notification.textContent = `${itemName} added to cart!`;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.classList.add("show");
  }, 10);

  setTimeout(() => {
    notification.classList.remove("show");
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 2000);
}

// Add notification styles dynamically
const notificationStyles = document.createElement("style");
notificationStyles.textContent = `
    .notification {
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: #4CAF50;
      color: white;
      padding: 12px 24px;
      border-radius: 4px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.2);
      z-index: 1001;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    .notification.show {
      opacity: 1;
    }
  `;
document.head.appendChild(notificationStyles);

// Open Checkout Modal
checkoutBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  // Populate order summary
  const checkoutItems = document.getElementById("checkout-items");
  checkoutItems.innerHTML = "";

  cart.forEach((item) => {
    const itemElement = document.createElement("div");
    itemElement.className = "checkout-item";
    itemElement.innerHTML = `
      <span>${item.name} × ${item.quantity}</span>
      <span>₹${item.price * item.quantity}</span>
    `;
    checkoutItems.appendChild(itemElement);
  });

  // Update total
  document.getElementById("checkout-total").textContent = `₹${cartTotal}`;

  // Show modal
  checkoutModal.style.display = "flex";
});

// Close Modals
closeModal.addEventListener("click", () => {
  checkoutModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === checkoutModal) checkoutModal.style.display = "none";
  if (e.target === successModal) successModal.style.display = "none";
});

// Form Submission
document.getElementById("checkout-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const customerName = document.getElementById("customer-name").value;
  const customerPhone = document.getElementById("customer-phone").value;
  const tableNumber =
    document.getElementById("table-number").value || "Online Order";

  // Format order details
  const orderDetails = cart
    .map(
      (item) =>
        `${item.name} (×${item.quantity}) - ₹${item.price * item.quantity}`
    )
    .join("\n");

  const message =
    `📱 *New Order Received!* \n\n` +
    `👤 *Customer:* ${customerName}\n` +
    `📞 *Phone:* ${customerPhone}\n` +
    `🪑 *Table:* ${tableNumber}\n\n` +
    `🍽️ *Order Items:*\n${orderDetails}\n\n` +
    `💰 *Total Amount:* ₹${cartTotal}\n` +
    `⏰ *Time:* ${new Date().toLocaleString()}`;

  // Encode for WhatsApp URL
  const encodedMessage = encodeURIComponent(message);

  // Replace YOUR_PHONE_NUMBER with your actual number (with country code)
  const whatsappUrl = `https://wa.me/919110115022?text=${encodedMessage}`;

  // Open WhatsApp in a new tab
  window.open(whatsappUrl, "_blank");

  // Show success modal
  checkoutModal.style.display = "none";
  successModal.style.display = "flex";

  // Clear cart
  cart = [];
  cartCount = 0;
  cartTotal = 0;
  updateCartUI();
  saveCart();
});

// Initialize the app
init();
