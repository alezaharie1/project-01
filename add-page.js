"use strict";
document.getElementById('save-button').addEventListener('click', function(e) {
    var name2, imageUrl, description2, quantity2, price2, visibility2;

    name2 = document.getElementById('nume').value;
    imageUrl = document.getElementById('image').value;
    description2 = document.getElementById('description').value;
    quantity2 = document.getElementById('quantity').value;
    price2 = document.getElementById('price').value;
    if (document.querySelector(".input-visibility").checked === true) {
        visibility2 = "no";
    } else {
        visibility2 = "yes";
    };

    var xmlhttp = new XMLHttpRequest();

    var data = {
        description: description2,
        image: imageUrl.replace("C:\\fakepath\\", "images/"),
        name: name2,
        price: price2,
        quantity: quantity2,
        visibility: visibility2
    }
    var json = JSON.stringify(data);
    xmlhttp.open('POST', 'https://sungarden-onlinestore.firebaseio.com/products.json', true);
    xmlhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');


    xmlhttp.onload = function() {
        var users = JSON.parse(xmlhttp.responseText);
        if (xmlhttp.readyState == 4 && xmlhttp.status == "200") {
            document.getElementById("successMessage").innerHTML = 'Adaugare cu succes a produsului!';

            setTimeout(function() {
                document.getElementById("successMessage").innerHTML = '';

            }, 3000);
            window.location.href = "file:///C:/Users/S.O/OneDrive/Desktop/myproject/admin.html";
            //
        } else {
            console.error(users);
        }
    }



    xmlhttp.send(json);
});