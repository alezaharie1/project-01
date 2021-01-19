"use strict";
var parts = document.URL.split("?");
var productIdParam = parts[1];
var currencyName = "RON";
var productTemplate = document.querySelector('#product-template');


	let theRequest = new XMLHttpRequest();
	theRequest.open('GET', 'https://sungarden-onlinestore.firebaseio.com/products/' + productIdParam + '.json');
	
	theRequest.onload = function () {
		
		let myProduct = JSON.parse(theRequest.responseText);
		getProductById(myProduct);
		
	}
	theRequest.onerror = function errData () {
            console.log("Nu am primit raspuns de la server");
};
theRequest.send(null);

    function getProductById(data) {
		addProductDetails(data.name, data.price, data.image, data.description, data.quantity);
    }

    function addProductDetails(name, price, imageUrl, description, quantity) {

        productTemplate.querySelector('.product-title').value = name;
        productTemplate.querySelector('img').src = imageUrl;
        productTemplate.querySelector('.product-price').value = price;
        productTemplate.querySelector('.currency').textContent = currencyName;
        productTemplate.querySelector('.product-description').value = description;
        productTemplate.querySelector('.product-quantity').value = quantity;

    }

document.getElementById("delete-product").addEventListener("click", function() {
var result = confirm("Do you want to delete?");
if (result) {
	var deleteRequest = new XMLHttpRequest();
deleteRequest.open("DELETE", 'https://sungarden-onlinestore.firebaseio.com/products/' + productIdParam + '.json', true);
deleteRequest.onload = function () {
	var users = JSON.parse(deleteRequest.responseText);
	
	if (deleteRequest.readyState == 4 && deleteRequest.status == "200") {
		document.getElementById("deleteMessage").innerHTML = 'Produsul a fost sters!';

		setTimeout(function(){
			document.getElementById("deleteMessage").innerHTML = '';}, 3000)} 
			
	else {
		console.error(users);
	}
}
deleteRequest.send(null);
}
document.querySelector(".product-description").disabled = true;
document.querySelector("#image").disabled = true;
document.querySelector(".product-title").disabled = true;
document.querySelector(".product-price").disabled = true;
document.querySelector(".product-quantity").disabled = true;
document.querySelector(".input-visibility").disabled = true;
document.querySelector("#update-product").disabled = true;
document.querySelector("#delete-product").disabled = true;

});

document.getElementById("update-product").addEventListener("click", function () {
	
var data = {};
data.description = document.querySelector(".product-description").value;
data.image  = document.querySelector("#image").value.replace("C:\\fakepath\\", "images/");
data.name = document.querySelector(".product-title").value;
data.price = document.querySelector(".product-price").value;
data.quantity = document.querySelector(".product-quantity").value;
if (document.querySelector(".input-visibility").checked === true ) {
	data.visibility = "no";
} else {
	data.visibility = "yes";
};

var json = JSON.stringify(data);
	
var updateRequest = new XMLHttpRequest();
updateRequest.open("PUT", 'https://sungarden-onlinestore.firebaseio.com/products/' + productIdParam + '.json', true);
updateRequest.setRequestHeader('Content-type','application/json; charset=utf-8');
updateRequest.onload = function () {
	
	var users = JSON.parse(updateRequest.responseText);
	if (updateRequest.readyState == 4 && updateRequest.status == "200") {
		document.getElementById("successMessage").innerHTML = 'Editare cu succes a produsului!';

		setTimeout(function(){
			document.getElementById("successMessage").innerHTML = '';}, 3000)} 
			
	else {
		console.error(users);
	}
}
updateRequest.send(json);
});
