'use strict';

//Global Variables
var imageContainer = document.getElementById('image-container');
var imageOne = document.getElementById ('image-one');
var imageTwo = document.getElementById ('image-two');
var imageThree = document.getElementById ('image-three');


var products = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var allProductArray = [];
var previouslyViewed = [];





//Constructors
function Product(name) {
    this.name = name;
    this.filepath = `img/${name}.jpg`;
    allProductArray.push(this);
    this.timesShown = 0;
    // console.log('New Product', this);
}


//Instances
function allProductArrayCalc(productArray) {
    for(var i = 0; i < productArray.length; i++) {
        new Product(productArray[i]);
		}
	
}

allProductArrayCalc(products);


//Show Random Pics
function getRandomIndex() {
	return Math.floor(Math.random() * allProductArray.length);
}

function getThreeRandomProducts() {
	var firstImage = getRandomIndex();
	while (previouslyViewed.includes(firstImage)){
		firstImage = getRandomIndex();
	}
	previouslyViewed.push(firstImage);
 
	var secondImage = getRandomIndex();
	while (previouslyViewed.includes(secondImage)){
		secondImage = getRandomIndex();
	}
	previouslyViewed.push(secondImage); 

	var thirdImage = getRandomIndex();
	while (previouslyViewed.includes(thirdImage)){
	thirdImage = getRandomIndex();
	}
	previouslyViewed.push(thirdImage);

	//DEBUG STUFF
	console.log(firstImage);
	console.log(secondImage);
	console.log(thirdImage);
}
var counter = 0;
function renderProductImages(){
	if (counter > 6){
		previouslyViewed = [];
		counter = 0;
	}
	
	getThreeRandomProducts();
	imageOne.src = allProductArray[previouslyViewed[counter]].filepath;
	counter++;
	imageTwo.src = allProductArray[previouslyViewed[counter]].filepath;
	counter++;
	imageThree.src = allProductArray[previouslyViewed[counter]].filepath;
	counter++;

	console.log(previouslyViewed);
}

//Event Handler
imageContainer.addEventListener('click', handleImagesClick);
function handleImagesClick(event) {
	console.log('Step One: Click');
	renderProductImages();
	console.log('After Product Render');
}


// //Stuff That Runs On Page
renderProductImages();
//Show the pic