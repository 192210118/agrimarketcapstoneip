// Simple login logic to redirect to different dashboards
function login(role) {
    event.preventDefault(); // Prevent form submission

    // Redirect based on role
    if (role === 'farmer') {
        window.location.href = 'farmer-dashboard.html';
    } else if (role === 'customer') {
        window.location.href = 'customer-dashboard.html';
    }
}

// Sample products data for customers to view
const products = [
    { name: 'Tomatoes', price: 5, image: 'https://via.placeholder.com/150?text=Tomatoes' },
    { name: 'Potatoes', price: 3, image: 'https://via.placeholder.com/150?text=Potatoes' },
    { name: 'Carrots', price: 4, image: 'https://via.placeholder.com/150?text=Carrots' },
    { name: 'Onions', price: 2.5, image: 'https://via.placeholder.com/150?text=Onions' },
    { name: 'Lettuce', price: 2, image: 'https://via.placeholder.com/150?text=Lettuce' },
    { name: 'Cabbage', price: 3.5, image: 'https://via.placeholder.com/150?text=Cabbage' }
];

// Display products for customers
function displayProducts() {
    const productList = document.getElementById('product-list');
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h4>${product.name}</h4>
            <p>$${product.price}</p>
            <button onclick="addToCart('${product.name}', ${product.price}, '${product.image}')">Add to Cart</button>
        `;
        productList.appendChild(productCard);
    });
}

// Function to add product to the cart
function addToCart(name, price, image) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the product already exists in the cart
    const productIndex = cart.findIndex(item => item.name === name);
    if (productIndex === -1) {
        // Add the product to the cart
        cart.push({ name, price, image });
    }

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update cart display
    displayCart();
}

// Function to display the cart
function displayCart() {
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = ''; // Clear previous cart content

    // Get the cart data from localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        cartList.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('product-card');
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <h4>${item.name}</h4>
                <p>$${item.price}</p>
            `;
            cartList.appendChild(cartItem);
        });
    }
}

// Call the displayProducts function when the page loads for customer dashboard
if (window.location.pathname === '/customer-dashboard.html') {
    displayProducts();  // Show products on customer dashboard
    displayCart();      // Show the current cart items on the page
}
