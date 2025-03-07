let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    updateCart();
}

function removeFromCart(index) {
    total -= cart[index].price;
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    let cartList = document.getElementById('cart');
    cartList.innerHTML = '';
    cart.forEach((item, index) => {
        let li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price}kr `;
        let removeButton = document.createElement('button');
        removeButton.textContent = "Ta bort";
        removeButton.onclick = () => removeFromCart(index);
        li.appendChild(removeButton);
        cartList.appendChild(li);
    });
    document.getElementById('total').textContent = total;
}
function toggleMenu() {
var menu = document.getElementById("menu")
menu.classList.toggle("show");
}

