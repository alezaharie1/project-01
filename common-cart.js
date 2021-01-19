let cart = {};

loadCart();

function loadCart() {
	if (localStorage.cart !== undefined) {
		cart = JSON.parse(localStorage.cart);
	}
}

function saveCart() {
	localStorage.cart = JSON.stringify(cart);
}

function addToCart(productId) {
	if (cart[productId] === undefined) {
		cart[productId] = 1;
	} else {
		cart[productId] += 1;
	}
	saveCart();
}

function setProductCartQuantity(productId, quantity) {
	cart[productId] = quantity;
	saveCart();
}