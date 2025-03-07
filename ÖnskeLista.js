let wishlist = [];

function addToWishlist(name) {
    wishlist.push({ name });
    updateWishlist();
}

function removeFromWishlist(index) {
    wishlist.splice(index, 1);
    updateWishlist();
}

function updateWishlist() {
    let wishlistList = document.getElementById('wishlistItems');
    wishlistList.innerHTML = '';
    wishlist.forEach((item, index) => {
        let li = document.createElement('li');
        li.textContent = item.name;
        let removeButton = document.createElement('button');
        removeButton.textContent = "Ta bort";
        removeButton.onclick = () => removeFromWishlist(index);
        li.appendChild(removeButton);
        wishlistList.appendChild(li);
    });
}

function toggleWishlist() {
    var wishlist = document.getElementById("wishlist");
    wishlist.classList.toggle("show");
}
