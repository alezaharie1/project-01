var currencyName = "RON";
var productsDiv = document.querySelector("#products");
var productTemplate = document.querySelector('#product-template');

function addProduct(description, imageUrl, name, price, productId) {

    var newProduct = productTemplate.cloneNode(true);

    newProduct.classList.remove("hidden");
    newProduct.querySelector('.product-link').textContent = name;
    newProduct.querySelector('img').src = imageUrl;
    newProduct.querySelector('.price').textContent = price;
    newProduct.querySelector('.currency').textContent = currencyName;
    newProduct.querySelector('.product-description').textContent = description;
    newProduct.querySelector('.product-details').id = productId;

    productsDiv.appendChild(newProduct);
}

function numberOfProducts(data) {

    document.getElementById("numberOfProducts").innerHTML = Object.keys(data).length;
    // data e un obiect, iar obiectele au key si valori. aici numara lungimea numarului de key
}
var xhrRequest = new XMLHttpRequest();
xhrRequest.open('GET', 'https://sungarden-onlinestore.firebaseio.com/products.json');


xhrRequest.onload = function() {
    let myProducts = JSON.parse(xhrRequest.responseText);

    if (myProducts != null) {


        for (let i in myProducts) {
            if ((window.location.href.indexOf("index.html") > -1) && (myProducts[i].visibility === "yes")) {
                addProduct(myProducts[i].description, myProducts[i].image, myProducts[i].name, myProducts[i].price, i);
            } else if (window.location.href.indexOf("admin.html") > -1) {
                addProduct(myProducts[i].description, myProducts[i].image, myProducts[i].name, myProducts[i].price, i);
            }
        };
        sort(myProducts);
        numberOfProducts(myProducts);
    }
}


xhrRequest.onerror = function errData() {
    console.log("Nu am primit raspuns de la server");
};

xhrRequest.send(null);

function builtArray(data) {
    var array = [];
    for (var i in data) {
        array.push([i, data[i]]);
    }
    return array;
}


function displayArray(sampleArray) {
    for (var j in sampleArray) {
        var product = sampleArray[j];
        addProduct(product[1].description, product[1].image, product[1].name, product[1].price, product[0]);
    }
}



function sort(data) {

    document.querySelector('.select-1').addEventListener("change", function(e) {
        productsDiv.innerHTML = "";
        var array = builtArray(data);
        if (e.target.value === "sort-price-asc") {

            array.sort(function(a, b) {
                return a[1].price - b[1].price;
            });

            displayArray(array);

        }
        if (e.target.value === "sort-name-asc") {

            array.sort(function(a, b) {
                return a[1].name.localeCompare(b[1].name);
            });

            displayArray(array);
        }
        if (e.target.value === "sort-price-desc") {

            array.sort(function(a, b) {
                return b[1].price - a[1].price;
            });

            displayArray(array);

        }
        if (e.target.value === "sort-name-desc") {

            array.sort(function(a, b) {
                return b[1].name.localeCompare(a[1].name);
            });

            displayArray(array);
        }
    });
}