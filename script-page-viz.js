window.addEventListener('DOMContentLoaded', function(event) {
    var parts = document.URL.split("?");
    var productIdParam = parts[1];

    var currencyName = "RON";
    var productsDiv = document.querySelector("#products");
    var productTemplate = document.querySelector('#product-template');

    let theRequest = new XMLHttpRequest();
    theRequest.open('GET', 'https://sungarden-onlinestore.firebaseio.com/products/' + productIdParam + '.json');

    theRequest.onload = function() {

        let myProduct = JSON.parse(theRequest.responseText);
        getProductById(myProduct);

    }
    theRequest.onerror = function errData() {
        console.log("Nu am primit raspuns de la server");
    };

    theRequest.send(null);

    function getProductById(data) {

        addProductDetails(data.name, data.price, data.image, data.description, data.quantity);
    }

    function addProductDetails(name, price, imageUrl, description, quantity) {

        productTemplate.querySelector('.product-title').textContent = name;
        productTemplate.querySelector('img').src = imageUrl;
        productTemplate.querySelector('.price').textContent = price;
        productTemplate.querySelector('.currency').textContent = currencyName;
        productTemplate.querySelector('.product-description').textContent = description;
        productTemplate.querySelector('.product-quantity').textContent = quantity;

    }
    document.querySelector("#up").addEventListener('click', function(e) {
        document.getElementById("myNumber").value = parseInt(document.getElementById("myNumber").value) + 1;
        console.log(parseInt(document.querySelector('.product-quantity').textContent));
        if (document.getElementById("myNumber").value >= parseInt(document.querySelector('.product-quantity').textContent)) {
            document.getElementById("myNumber").value = parseInt(document.querySelector('.product-quantity').textContent);
        }
    });
    document.querySelector("#down").addEventListener('click', function(e) {
        document.getElementById("myNumber").value = parseInt(document.getElementById("myNumber").value) - 1;
        if (document.getElementById("myNumber").value <= 1) {
            document.getElementById("myNumber").value = 1;
        }
    });

    var inpNumber = document.getElementById("myNumber");

    document.querySelector('#add-to-cart').addEventListener('click', function(e) {

        var key = productIdParam;
        setProductCartQuantity(key, inpNumber.value);
    });
});