
const products = [
    { id: 'product1', name: 'Product 1', price: 50.00 },
    
];

let cart = [];


function addToCart(productId, price) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCart();
    }
}


function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total-price');

    cartItemsElement.innerHTML = '';
    let totalPrice = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsElement.appendChild(li);
        totalPrice += item.price;
    });

    cartTotalElement.textContent = `$${totalPrice.toFixed(2)}`;
}


function checkout() {
    alert('Thank you for your purchase!');
    cart = [];
    updateCart();
}
