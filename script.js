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

// Handle adding products for the farmer dashboard
document.getElementById('add-product-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const productName = document.getElementById('product-name').value;
    const productPrice = document.getElementById('product-price').value;
    const productImage = document.getElementById('product-image-url').value;

    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.innerHTML = `
        <img src="${productImage}" alt="${productName}">
        <h4>${productName}</h4>
        <p>$${productPrice}</p>
    `;

    // Add product card to the product list
    document.getElementById('product-list').appendChild(productCard);
});

// Display products for customers
function displayProducts() {
    const productList = document.getElementById('product-list');
    
    // Sample products data
    const products = [
        { name: 'Tomatoes', price: 5, image: 'https://via.placeholder.com/150?text=Tomatoes' },
        { name: 'Potatoes', price: 3, image: 'https://via.placeholder.com/150?text=Potatoes' },
        { name: 'Carrots', price: 4, image: 'https://via.placeholder.com/150?text=Carrots' },
        { name: 'Onions', price: 2.5, image: 'https://via.placeholder.com/150?text=Onions' },
        { name: 'Lettuce', price: 2, image: 'https://via.placeholder.com/150?text=Lettuce' },
        { name: 'Cabbage', price: 3.5, image: 'https://via.placeholder.com/150?text=Cabbage' }
    ];

    // Loop through the products and create a product card for each one
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h4>${product.name}</h4>
            <p>$${product.price}</p>
            <button>Add to Cart</button>
        `;
        productList.appendChild(productCard);
    });
}

// Call the displayProducts function when the page loads for customer dashboard
if (window.location.pathname === '/customer-dashboard.html') {
    displayProducts(); // Show products on customer dashboard
}
