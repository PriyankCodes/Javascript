const dateElement = document.getElementById('currentDate');
const today = new Date();
dateElement.textContent = today.toLocaleDateString();

const items = [
    { name: "Phone", price: 100 },
    { name: "Laptop", price: 500 },
    { name: "Tablet", price: 200 },
    { name: "Smartwatch", price: 70 },
    { name: "Bluetooth Speaker", price: 50 }
];


const itemSelect = document.getElementById('itemSelect');

items.forEach(item => {
    const option = document.createElement('option');
    option.value = item.name;
    option.setAttribute('data-price', item.price);
    option.textContent = `${item.name} - ₹${item.price}`;
    itemSelect.appendChild(option);
});

const quantityInput = document.getElementById('quantityInput');
const addToCartBtn = document.getElementById('addToCartBtn');
const cartBody = document.getElementById('cartBody');
const finalTotalDisplay = document.getElementById('finalTotal');

let cart = [];

addToCartBtn.addEventListener('click', () => {
    const selectedOption = itemSelect.options[itemSelect.selectedIndex];
    const itemName = selectedOption.value;
    const price = parseFloat(selectedOption.dataset.price);
    const quantity = parseInt(quantityInput.value);

    if (quantity < 1 || isNaN(quantity)) {
        alert("Please enter a valid quantity.");
        return;
    }

    const existingItem = cart.find(item => item.name === itemName);
    if (existingItem) {
        existingItem.quantity = quantity;
    } else {
        cart.push({ name: itemName, price, quantity });
    }
    quantityInput.value = '1';
    addCart();
});

function addCart() {
    cartBody.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${item.name}</td>
          <td>${item.quantity}</td>
          <td>₹${item.price}</td>
          <td>₹${itemTotal}</td>
        `;
        cartBody.append(row);
    });

    finalTotalDisplay.textContent = `₹${total}`;
}