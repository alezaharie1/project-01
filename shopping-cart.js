var currencyName = "RON";
var productsDiv = document.querySelector("#products");
var productTemplate = document.querySelector('#product-template');
productTemplate.id = "";

function addProductDetails(id, name, price, imageUrl, quantity) {

    var newProduct = productTemplate.cloneNode(true);
    newProduct.classList.remove("hidden");

    newProduct.querySelector('.delete-button').id = id;
    newProduct.querySelector('.product-title').textContent = name;
    newProduct.querySelector('#imageProd').src = imageUrl;
    newProduct.querySelector('.price').textContent = quantity + " x " + price + " = " + price * quantity;
    newProduct.querySelector('.price').id = "price-" + id;
    newProduct.querySelector('.currency').textContent = currencyName;
    newProduct.querySelector('#prod-quantity').value = quantity;
    newProduct.querySelector('#prod-quantity').id = "input-" + id;
    newProduct.querySelector('.plus-btn').id = id;
    newProduct.querySelector('.minus-btn').id = id;
    newProduct.querySelector('.buttonModifica').id = id;
    newProduct.querySelector('.buttonSterge').id = id;

    productsDiv.appendChild(newProduct);
}

function removeProductFromCart(productId) {
    delete cart[productId];
    saveCart();
    location.reload();
}

var output = document.getElementById('output');
var imgProduct = document.getElementById('imgs');

function displayItems() {
    var total = 0;

    for (let key in cart) {

        let theRequest = new XMLHttpRequest();
        theRequest.open('GET', 'https://sungarden-onlinestore.firebaseio.com/products/' + key + '.json');
        theRequest.onload = function() {

            let myProduct = JSON.parse(theRequest.responseText);
            addProductDetails(key, myProduct.name, myProduct.price, myProduct.image, cart[key]);
            total += (myProduct.price * cart[key]);
            document.querySelector('#total-comanda').textContent = "Valoarea totala este: " + total + " " + currencyName;
        }

        theRequest.onerror = function errData() {
            console.log("Nu am primit raspuns de la server");
        };

        theRequest.send(null);

    }
}


displayItems();

function up(id) {
    var elem = "input-" + id;
    document.getElementById(elem).value = parseInt(document.getElementById(elem).value) + 1;
}

function down(id) {
    var elem = "input-" + id;
    document.getElementById(elem).value = parseInt(document.getElementById(elem).value) - 1;
}

function modifyQuantity(id) {

    cart[id] = document.getElementById("input-" + id).value;
    saveCart();
    location.reload();
}

function deleteItem(id) {
    localStorage.removeItem(id);
    location.reload();
}