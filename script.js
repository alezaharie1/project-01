window.addEventListener('DOMContentLoaded', function(event) {
   // productsDB.on("value", getData, errData);

	//prin value imi ia datele din tabel si se autoapeleaza functia gotData cu datele din tabel
	// apeleaza singur functia gotData si daca apare o eroare el o apeleaza pe errData
	// aici nu se face apelarea functiei
	//gotdata e un callback function, se scrie fara paranteze, inseamna ca datorita lui .on apeleaza el mai tarziu
	// eu nu vad asta, dar data din gotData(data) e de fapt valoarea ce gotdata o primeste din firebase, "value" respectiv
	
	

	/*function descSortedData(data) {
	    productsDiv.innerHTML = "";
	    var productsArray = [];

	    data.forEach(function(product) {
	        productsArray.push(product.val());
	    });
	    var cloneArray = productsArray.reverse();
	    for (var i = 0; i < cloneArray.length; i++) {
	        var product = cloneArray[i];

	        addProduct(product.description, product.image, product.name, product.price, product.productId);
	    }
	    document.getElementById("numberOfProducts").innerHTML = productsArray.length;
	}

	

	

	document.querySelector('.select-1').addEventListener("change", function(e) {

	    if (e.target.value === "sort-price-asc") {
	        productsDB.orderByChild("price").on("value", getData, errData);
	    }
	    if (e.target.value === "sort-name-asc") {
	        productsDB.orderByChild("name").on("value", getData, errData);
	    }
	    if (e.target.value === "sort-price-desc") {
	        productsDB.orderByChild("price").on("value", descSortedData, errData);
	    }
	    if (e.target.value === "sort-name-desc") {
	        productsDB.orderByChild("name").on("value", descSortedData, errData);
	    }

	 */   

	
/*	var productss;
	function random() {
		
	productss = document.querySelectorAll('.product-details');
		productss.forEach(function (element) {
		console.log('ai intrat', element);
	});
	};
	
	random();
});*/

/* document.querySelector('.product-details').addEventListener('click', function (e) {
    console.log('hey');
});*/
});

