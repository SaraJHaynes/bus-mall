'use strict';

//Global Variables
var storePics = document.getElementById('storePics');
var products = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var imagesArray = [];





//Constructors
function Product(name) {
    this.name = name;
    this.filepath = `img/${name}.jpg`;
    imagesArray.push(this);
    this.timesShown = 0;
    console.log('New Product', this);
}

// var beast = document.getElementById('beasts');

// beasts.addEventListener('click', handleBeastClick);

// function handleBeastClick(event) {
//   console.log(`${event.target.textContent} done got clicked, y\'all`);
//   event.target.textContent = 'clicked';
// }


//Instances
function imagesArrayCalc(productArray) {
    for(var i = 0; i < productArray.length; i++) {
        new Product(productArray[i]);
    }
}

imagesArrayCalc(products);





//Show Random Pics



//Event Handler



//Stuff That Runs On Page



//Show the pic