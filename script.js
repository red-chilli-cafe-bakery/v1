// Menu Data
const menuItems = [
  {
    id: 10,
    name: "Masala dosa",
    price: 50,
    category: "Dosa",
    image: "images/Masala_Dosa.jpg",
  },
  {
    id: 111,
    name: "butter masala dosa",
    price: 60,
    category: "Dosa",
    image: "images/Masala_Dosa.jpg",
  },
  {
    id: 12,
    name: "cheese masala dosa",
    price: 100,
    category: "Dosa",
    image: "images/Masala_Dosa.jpg",
  },
  {
    id: 100,
    name: "Mattar paneer",
    price: {
      half: 75, // Half plate price
      full: 125, // Full plate price
    },
    category: "main",
    image: "images/mattar_paneer.jpg",
  },
  {
    id: 101,
    name: "Kadhai Paneer",
    price: {
      half: 100, // Half plate price
      full: 190, // Full plate price
    },
    category: "main",
    image: "images/kadhai_paneer.jpg",
  },
  {
    id: 102,
    name: "Paneer do pyaza",
    price: {
      half: 110, // Half plate price
      full: 185, // Full plate price
    },
    category: "main",
    image: "images/paneer_do_pyaza.jpg",
  },
  {
    id: 103,
    name: "Mix Veg",
    price: {
      half: 75, // Half plate price
      full: 120, // Full plate price
    },
    category: "main",
    image: "images/mix_veg.jpg",
  },
  {
    id: 104,
    name: "Shahi Paneer",
    price: {
      half: 100, // Half plate price
      full: 195, // Full plate price
    },
    category: "main",
    image: "images/shahi_paneer.jpg",
  },
  {
    id: 105,
    name: "Paneer butter masala",
    price: {
      half: 95, // Half plate price
      full: 170, // Full plate price
    },
    category: "main",
    image: "images/paneer_butter_masala.jpg",
  },
  {
    id: 106,
    name: "Mashroom butter masala",
    price: 210,
    category: "main",
    image: "images/mashroom_butter_masala.jpg",
  },
  {
    id: 107,
    name: "Paneer Lababdar",
    price: 195,
    category: "main",
    image: "images/paneer_lababdar.jpg",
  },
  {
    id: 108,
    name: "Paneer Malai Kofta",
    price: 210,
    category: "main",
    image: "images/Paneer_Malai_Kofta.jpg",
  },
  {
    id: 109,
    name: "Gobi Paneer",
    price: 175,
    category: "main",
    image: "images/gobi_paneer.jpg",
  },
  {
    id: 110,
    name: "Palak Paneer",
    price: 165,
    category: "main",
    image: "images/palak_paneer.jpg",
  },
  {
    id: 111,
    name: "Daal Makhani",
    price: 90,
    category: "main",
    image: "images/daal_makhani.jpg",
  },
  {
    id: 112,
    name: "Veg Manchurian",
    price: {
      half: 70, // Half plate price
      full: 130, // Full plate price
    },
    category: "main",
    image: "images/veg_manchurian.jpg",
  },
  {
    id: 113,
    name: "Paneer Manchurian",
    price: {
      half: 80, // Half plate price
      full: 150, // Full plate price
    },
    category: "main",
    image: "images/paneer_manchurian.jpg",
  },
  {
    id: 114,
    name: "Paneer Chilli",
    price: {
      half: 85, // Half plate price
      full: 160, // Full plate price
    },
    category: "main",
    image: "images/paneer_chilli.jpg",
  },
  {
    id: 115,
    name: "Veg Lollipop",
    price: 140,
    category: "main",
    image: "images/veg_lollipop.jpg",
  },
  {
    id: 116,
    name: "Paneer Lollipop",
    price: 160,
    category: "main",
    image: "images/paneer_lollipop.jpg",
  },
  {
    id: 117,
    name: "Baby Corn Cryspy",
    price: 155,
    category: "main",
    image: "images/baby_corn_crispy.jpg",
  },
  {
    id: 118,
    name: "Mashroom Chilli",
    price: 220,
    category: "main",
    image: "images/mushroom_chili.jpg",
  },
  {
    id: 119,
    name: "Green Salad",
    price: 50,
    category: "main",
    image: "images/green_salad.jpg",
  },
  {
    id: 200,
    name: "Veg Noodles",
    price: 50,
    category: "Noodles",
    image: "images/veg_noodles.jpg",
  },
  {
    id: 201,
    name: "Veg Garlic Noodles",
    price: 60,
    category: "Noodles",
    image: "images/Veg_Garlic_Noodles.jpg",
  },
  {
    id: 202,
    name: "Paneer Schezwan Noodles",
    price: 65,
    category: "Noodles",
    image: "images/paneer_schezwan_noodles.jpg",
  },
  {
    id: 203,
    name: "Veg hakka Noodles",
    price: 65,
    category: "Noodles",
    image: "images/hakka_noodles.jpg",
  },
  {
    id: 204,
    name: "Maggi masala Butter",
    price: 50,
    category: "Noodles",
    image: "images/maggi_masala_butter.jpg",
  },
  {
    id: 205,
    name: "Cheese Capsicum Maggi",
    price: 55,
    category: "Noodles",
    image: "images/cheese_capsicum_maggi.jpg",
  },
  {
    id: 300,
    name: "Veg Steam Momo",
    price: 50,
    category: "Momos",
    image: "images/veg_steam_momo.png",
  },
  {
    id: 301,
    name: "Veg Fry Momo",
    price: 55,
    category: "Momos",
    image: "images/fry_momo.jpeg",
  },
  {
    id: 302,
    name: "Paneer Momo",
    price: 60,
    category: "Momos",
    image: "images/veg_steam_momo.png",
  },
  {
    id: 303,
    name: "Paneer Fry Momo",
    price: 65,
    category: "Momos",
    image: "images/fry_momo.jpeg",
  },
  {
    id: 304,
    name: "Veg Kurkure Momo",
    price: 100,
    category: "Momos",
    image: "images/kurkure_momo.jpg",
  },
  {
    id: 305,
    name: "Paneer Kurkure Momo",
    price: 110,
    category: "Momos",
    image: "images/kurkure_momo.jpg",
  },
  {
    id: 306,
    name: "Chilli Gravy Momo",
    price: 125,
    category: "Momos",
    image: "images/chilli_gravy_momo.jpeg",
  },
  {
    id: 400,
    name: "Veg Sandwich",
    price: 40,
    category: "Sandwich",
    image: "images/sandwich.png",
  },
  {
    id: 401,
    name: "Paneer Sandwich",
    price: 50,
    category: "Sandwich",
    image: "images/sandwich.png",
  },
  {
    id: 402,
    name: "Garlic Sandwich",
    price: 55,
    category: "Sandwich",
    image: "images/sandwich.png",
  },
  {
    id: 403,
    name: "Cheese Sandwich",
    price: 65,
    category: "Sandwich",
    image: "images/sandwich.png",
  },
  {
    id: 404,
    name: "Chocolate Sandwich",
    price: 60,
    category: "Sandwich",
    image: "images/chocolate_sandwich.jpg",
  },
  {
    id: 500,
    name: "Potato chips Burger",
    price: 50,
    category: "Burger",
    image: "images/potato_chips_burger.jpg",
  },
  {
    id: 501,
    name: "Red Chilli Specail Burger",
    price: 60,
    category: "Burger",
    image: "images/burger.png",
  },
  {
    id: 502,
    name: "Cheese Burger",
    price: 65,
    category: "Burger",
    image: "images/burger.png",
  },
  {
    id: 503,
    name: "Paneer Chips Burger",
    price: 70,
    category: "Burger",
    image: "images/burger.png",
  },
  {
    id: 600,
    name: "Masala Pav Bhaji",
    price: 60,
    category: "Pav Bhaji",
    image: "images/pav_bhaji.png",
  },
  {
    id: 601,
    name: "Red Chilli Spl Pav Bhaji",
    price: 70,
    category: "Pav Bhaji",
    image: "images/pav_bhaji.png",
  },
  {
    id: 600,
    name: "French Fries",
    price: 60,
    category: "French Fries",
    image: "images/french_fries.jpg",
  },
  {
    id: 601,
    name: "Honey Chilli Potato",
    price: 80,
    category: "French Fries",
    image: "images/french_fries.png",
  },
  {
    id: 700,
    name: "Baby Corn Onion Pizza",
    price: {
      half: 110, // Half plate price
      full: 150, // Full plate price
    },
    category: "pizza",
    image: "images/baby_corn_pizza.jpg",
  },
  {
    id: 701,
    name: "Capsicum onion pizza",
    price: {
      half: 130, // Half plate price
      full: 165, // Full plate price
    },
    category: "pizza",
    image: "images/capsicum_onion.jpg",
  },
  {
    id: 702,
    name: "Paneer capsicum pizza",
    price: {
      half: 140, // Half plate price
      full: 200, // Full plate price
    },
    category: "pizza",
    image: "images/Paneer_Pizza.jpg",
  },
  {
    id: 703,
    name: "Mushroom corn pizza",
    price: {
      half: 170, // Half plate price
      full: 210, // Full plate price
    },
    category: "pizza",
    image: "images/mashroom_corn_pizza.jpg",
  },
  {
    id: 704,
    name: "Red Chilli special pizza",
    price: {
      half: 180, // Half plate price
      full: 225, // Full plate price
    },
    category: "pizza",
    image: "images/pizza.jpg",
  },
  {
    id: 800,
    name: "Tikki Papdi chaat",
    price: 60,
    category: "chaat",
    image: "images/tikki_chaat.jpg",
  },
  {
    id: 900,
    name: "Paneer Cheese Roll",
    price: 95,
    category: "Roll",
    image: "images/paneer_cheese_roll.jpg",
  },
  {
    id: 901,
    name: "Veg Kathi Roll",
    price: 85,
    category: "Roll",
    image: "images/veg_kathi_roll.jpg",
  },
  {
    id: 902,
    name: "Red Chilli Special Roll",
    price: 110,
    category: "Roll",
    image: "images/red_chilli_spl_roll.png",
  },
  {
    id: 1000,
    name: "Jeera Rice",
    price: 70,
    category: "Rice & Biryani",
    image: "images/jeera_rice.jpg",
  },
  {
    id: 1001,
    name: "Veg Fry Rice",
    price: 95,
    category: "Rice & Biryani",
    image: "images/veg_fried_rice.jpg",
  },
  {
    id: 1002,
    name: "Paneer Fry Rice",
    price: 125,
    category: "Rice & Biryani",
    image: "images/paneer_fried_rice.jpg",
  },
  {
    id: 1003,
    name: "Veg Biryani",
    price: 145,
    category: "Rice & Biryani",
    image: "images/vegetable_biryani.jpg",
  },
  {
    id: 1100,
    name: "Butter Roti",
    price: 10,
    category: "Roti & Paratha",
    image: "images/butter_roti.jpg",
  },
  {
    id: 1101,
    name: "Lachha Paratha",
    price: 25,
    category: "Roti & Paratha",
    image: "images/lachha_paratha.jpg",
  },
  {
    id: 1102,
    name: "Plain Paratha",
    price: 15,
    category: "Roti & Paratha",
    image: "images/plain_paratha.jpg",
  },
  {
    id: 1103,
    name: "Aloo Paratha",
    price: 30,
    category: "Roti & Paratha",
    image: "images/aloo_paratha.jpg",
  },
  {
    id: 1104,
    name: "Paneer Paratha",
    price: 45,
    category: "Roti & Paratha",
    image: "images/paneer_paratha.jpg",
  },
  {
    id: 1200,
    name: "Strawberry Shake",
    price: 60,
    category: "Drinks",
    image: "images/strawberry_shake.jpg",
  },
  {
    id: 1201,
    name: "Pineapple Shake",
    price: 70,
    category: "Drinks",
    image: "images/pineapple_shake.jpg",
  },
  {
    id: 1202,
    name: "Butterscoch Shake",
    price: 80,
    category: "Drinks",
    image: "images/butterscotch_shake.jpg",
  },
  {
    id: 1203,
    name: "Oreo Shake",
    price: 90,
    category: "Drinks",
    image: "images/oreo_shake.jpg",
  },
  {
    id: 1204,
    name: "Hot Coffee",
    price: 55,
    category: "Drinks",
    image: "images/hot_coffee.jpg",
  },
  {
    id: 1205,
    name: "Cold Coffee",
    price: 70,
    category: "Drinks",
    image: "images/cold_coffee.jpg",
  },
  {
    id: 1206,
    name: "Chocolate Coffee",
    price: 70,
    category: "Drinks",
    image: "images/chocolate_coffee.jpg",
  },
  {
    id: 1300,
    name: "Veg Soup",
    price: 55,
    category: "Soup",
    image: "images/vegetable_soup.jpg",
  },
  {
    id: 1301,
    name: "Tomato Soup",
    price: 55,
    category: "Soup",
    image: "images/tomato_soup.jpg",
  },
  {
    id: 1302,
    name: "Red Chilli Special Soup",
    price: 70,
    category: "Soup",
    image: "images/red_chilli_spl_soup.jpg",
  },
];

const firebaseConfig = {
  apiKey: "AIzaSyBlPq367AIQhchXlSc6b10GKjdbEDGjWI0",
  authDomain: "red-chilli-cafe.firebaseapp.com",
  databaseURL:
    "https://red-chilli-cafe-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "red-chilli-cafe",
  storageBucket: "red-chilli-cafe.firebasestorage.app",
  messagingSenderId: "379073161391",
  appId: "1:379073161391:web:ef7969e00f2adfee638c5a",
  measurementId: "G-L8K69S717J",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Cart State
let cart = [];
let cartCount = 0;
let cartTotal = 0;

///new java

// Order Status Functions
function showActiveOrder(orderId) {
  const statusBtn = document.getElementById("order-status-btn");
  statusBtn.style.display = "inline-flex"; // Keep this for fallback
  statusBtn.classList.add("show"); // Add smooth transition class
  document.getElementById("order-status-btn").style.display = "inline-flex";
  document.getElementById("order-banner").style.display = "block";
  document.getElementById("current-order-id").textContent = orderId;
  localStorage.setItem("activeOrder", orderId);

  // Start checking order status
  checkOrderStatus(orderId);
}

function checkOrderStatus(orderId) {
  const orderRef = database.ref("orders/" + orderId);

  orderRef.on("value", (snapshot) => {
    const orderData = snapshot.val();
    if (orderData) {
      updateOrderStatusUI(orderData);
    } else {
      clearActiveOrder();
    }
  });
}

function updateOrderStatusUI(orderData) {
  const statusText = document.getElementById("order-status-text");
  let displayStatus = "New Order";

  if (orderData.status === "in-progress") {
    displayStatus = "In Progress";
  } else if (orderData.status === "completed") {
    displayStatus = "Completed";
  }

  statusText.textContent = displayStatus;

  // Update status in modal if open
  if (
    document.getElementById("modal-order-id")?.textContent === orderData.orderId
  ) {
    updateOrderStatusModal(orderData);
  }
}

function updateOrderStatusModal(orderData) {
  document.getElementById("modal-order-id").textContent = orderData.orderId;

  const orderTime = new Date(orderData.timestamp);
  document.getElementById("modal-order-time").textContent =
    orderTime.toLocaleString();

  // Update timeline based on status
  const status = orderData.status || "new";
  const statusElements = {
    new: "status-new",
    "in-progress": "status-progress",
    completed: "status-completed",
  };

  // Reset all steps
  Object.values(statusElements).forEach((stepId) => {
    const step = document.getElementById(stepId);
    step.className = "status-step";
  });

  // Update status display text
  let displayStatus = "New Order";
  if (status === "in-progress") {
    displayStatus = "In Progress";
  } else if (status === "completed") {
    displayStatus = "Completed";
  }
  document.getElementById("modal-order-status").textContent = displayStatus;

  // Activate current step
  let foundCurrent = false;
  for (const [statusName, stepId] of Object.entries(statusElements)) {
    const step = document.getElementById(stepId);

    if (statusName === status) {
      step.classList.add("active");
      foundCurrent = true;
    } else if (!foundCurrent) {
      step.classList.add("completed");
    }
  }

  // **NEW: Display Ordered Items**
  const orderItemsContainer = document.getElementById("modal-order-items");
  if (orderItemsContainer) {
    orderItemsContainer.innerHTML = ""; // Clear previous items

    if (orderData.items && orderData.items.length > 0) {
      orderData.items.forEach((item) => {
        const itemElement = document.createElement("div");
        itemElement.className = "order-item";
        itemElement.innerHTML = `
          <div class="order-item-name">${item.name}</div>
          <div class="order-item-quantity">× ${item.quantity}</div>
          <div class="order-item-price">₹${item.price * item.quantity}</div>
        `;
        orderItemsContainer.appendChild(itemElement);
      });

      // Add total price
      const totalElement = document.createElement("div");
      totalElement.className = "order-total";
      totalElement.innerHTML = `
        <div class="order-total-label">Total:</div>
        <div class="order-total-price">₹${orderData.total}</div>
      `;
      orderItemsContainer.appendChild(totalElement);
    } else {
      orderItemsContainer.innerHTML =
        '<div class="empty-order">No items found</div>';
    }
  }
}

function checkActiveOrder() {
  const activeOrderId = localStorage.getItem("activeOrder");
  if (activeOrderId) {
    showActiveOrder(activeOrderId);
  }
}

// Initialize order status check on page load
window.addEventListener("DOMContentLoaded", () => {
  checkActiveOrder(); // Now this will work

  // Rest of your existing code...
});

// Initialize order status check on page load
window.addEventListener("DOMContentLoaded", () => {
  checkActiveOrder();

  // Add click handler for view order button
  document.getElementById("view-order-btn")?.addEventListener("click", () => {
    const orderId = localStorage.getItem("activeOrder");
    if (orderId) {
      showOrderStatusModal(orderId);
    }
  });

  // Add click handler for order status button
  document.getElementById("order-status-btn")?.addEventListener("click", () => {
    const orderId = localStorage.getItem("activeOrder");
    if (orderId) {
      showOrderStatusModal(orderId);
    }
  });
});

function showOrderStatusModal(orderId) {
  const modal = document.getElementById("order-status-modal");
  modal.style.display = "block";

  // Close modal when clicking X
  modal.querySelector(".close").onclick = () => {
    modal.style.display = "none";
  };

  // Close modal when clicking outside
  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };

  // Load order data
  database
    .ref("orders/" + orderId)
    .once("value")
    .then((snapshot) => {
      const orderData = snapshot.val();
      if (orderData) {
        updateOrderStatusModal(orderData);
      }
    });
}
//new java end

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

    // Handle different price formats
    const priceHTML =
      typeof item.price === "object"
        ? `
          <div class="price-options">
            <button class="price-btn" data-id="${item.id}" data-portion="half">
              Half: ₹${item.price.half}
            </button>
            <button class="price-btn" data-id="${item.id}" data-portion="full">
              Full: ₹${item.price.full}
            </button>
          </div>
        `
        : `<div class="menu-card-price">₹${item.price}</div>`;

    menuCard.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="menu-card-body">
          <h3 class="menu-card-title">${item.name}</h3>
          ${priceHTML}
          <button class="add-to-cart-btn" data-id="${item.id}">Add to Cart</button>
        </div>
      `;
    menuItemsContainer.appendChild(menuCard);
  });

  // Add event listeners to ALL buttons
  setupButtonListeners();
}

// New function to handle button events
function setupButtonListeners() {
  // Price selection buttons
  document.querySelectorAll(".price-btn").forEach((button) => {
    button.addEventListener("click", (e) => {
      document
        .querySelectorAll(`.price-btn[data-id="${e.target.dataset.id}"]`)
        .forEach((btn) => btn.classList.remove("active"));
      e.target.classList.add("active");
    });
  });

  // Add to cart buttons
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

// Add to Cart Functionality - FIXED VERSION
function addToCart(e) {
  const itemId = parseInt(e.target.dataset.id);
  const menuItem = menuItems.find((item) => item.id === itemId);

  if (!menuItem) return;

  // Handle both price formats
  let price, portion;
  if (typeof menuItem.price === "object") {
    // Item has half/full options
    portion =
      document.querySelector(`.price-btn[data-id="${itemId}"].active`)?.dataset
        .portion || "full";
    price = menuItem.price[portion];
  } else {
    // Item has single price
    portion = "standard";
    price = menuItem.price;
  }

  // Check if item already exists in cart
  const existingItem = cart.find(
    (item) => item.id === itemId && item.portion === portion
  );

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: menuItem.id,
      name: menuItem.name,
      price: price,
      portion: portion,
      quantity: 1,
    });
  }

  cartCount++;
  cartTotal += price;
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

// Order Counter (stored in localStorage to persist across page refreshes)

// Generate a unique order ID using Firebase
async function generateOrderId() {
  try {
    // Create a reference to a counter in Firebase
    const counterRef = database.ref("orderCounter");

    // Atomically increment the counter
    const result = await counterRef.transaction((currentValue) => {
      return (currentValue || 0) + 1;
    });

    // Format the order ID with date and counter
    const today = new Date();
    const dateStr = today.toISOString().slice(0, 10).replace(/-/g, "");
    const orderNumber = result.snapshot.val().toString().padStart(6, "0");

    return `ORD${dateStr}${orderNumber}`;
  } catch (error) {
    console.error("Error generating order ID:", error);
    // Fallback to timestamp-based ID if Firebase fails
    return `ORD${Date.now()}`;
  }
}

function logOrderToAdmin(orderData) {
  // Ensure Firebase is initialized
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  const database = firebase.database();

  // Validate required fields
  if (!orderData.orderId || !orderData.timestamp) {
    console.error("Invalid order data:", orderData);
    return;
  }

  // Save to Firebase with error handling
  database
    .ref("orders/" + orderData.orderId)
    .set(orderData)
    .then(() => console.log("Order saved successfully"))
    .catch((error) => {
      console.error("Firebase save error:", error);
      alert("Failed to save order to database");
    });
}
// Form Submission
document
  .getElementById("checkout-form")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
      // Disable submit button to prevent duplicate submissions
      const submitBtn = e.target.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.textContent = "Processing...";

      // Generate order ID first
      const orderId = await generateOrderId();
      const customerName = document.getElementById("customer-name").value;
      const customerPhone = document.getElementById("customer-phone").value;
      const Address =
        document.getElementById("Address").value || "Online Order";

      // Create order object

      const orderData = {
        orderId: orderId,
        customerName: customerName,
        customerPhone: customerPhone,
        address: Address,
        items: cart.map((item) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          portion: item.portion || "full",
          quantity: item.quantity,
        })),
        total: cartTotal,
        timestamp: new Date().getTime(),
        status: "new", // Initial status
        statusUpdatedAt: null,
      };
      // Save to Firebase
      await database.ref("orders/" + orderId).set(orderData);

      // Format order details for WhatsApp
      const orderDetails = cart
        .map(
          (item) =>
            `${item.name} (×${item.quantity}) - ₹${item.price * item.quantity}`
        )
        .join("\n");

      const message =
        `📱 *Send Order Details!* \n\n` +
        `*NEW ORDER #${orderId}*\n\n` +
        `👤 *Customer:* ${customerName}\n` +
        `📞 *Phone:* ${customerPhone}\n` +
        `🪑 *Address:* ${Address}\n\n` +
        `🍽️ *Order Items:*\n${orderDetails}\n\n` +
        `💰 *Total Amount:* ₹${cartTotal}\n` +
        `⏰ *Time:* ${new Date().toLocaleString()}`;

      // Encode for WhatsApp URL
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/919263872597?text=${encodedMessage}`;

      // Open WhatsApp in a new tab
      // window.open(whatsappUrl, "_blank");

      // Show success modal with order ID
      document.getElementById("success-order-id").textContent = orderId;
      checkoutModal.style.display = "none";
      successModal.style.display = "flex";

      showActiveOrder(orderId);

      // Clear cart
      cart = [];
      cartCount = 0;
      cartTotal = 0;
      updateCartUI();
      saveCart();
    } catch (error) {
      console.error("Order submission failed:", error);
      alert("Failed to submit order. Please try again.");
    } finally {
      // Re-enable submit button
      const submitBtn = e.target.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = "Place Order";
      }
    }
  });

// Initialize the app
init();
