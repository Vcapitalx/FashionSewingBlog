
// Shopping Cart
const cartItems = [];
const cartList = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

// Add to Cart functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const name = button.getAttribute('data-name');
    const price = parseFloat(button.getAttribute('data-price'));

    cartItems.push({ name, price });
    updateCart();
  });
});

// Update cart
function updateCart() {
  cartList.innerHTML = '';
  let total = 0;

  cartItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = ${item.name} - $${item.price};
    cartList.appendChild(li);
    total += item.price;
  });

  cartTotal.textContent = Total: $${total};
}

// Checkout
document.getElementById('checkout').addEventListener('click', () => {
  alert('Thank you for your purchase!');
  cartItems.length = 0;
  updateCart();
});

// Order Form
document.getElementById('order-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Order submitted successfully! We will contact you shortly.');
  this.reset();
});
