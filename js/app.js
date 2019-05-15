'use strict';

//Global Variables

var imageContainer = document.getElementById('image-container');
var imageList = document.getElementById('image-list');
var imageOne = document.getElementById ('image-one');
var imageTwo = document.getElementById ('image-two');
var imageThree = document.getElementById ('image-three');
var allProductArray = [];
var previouslyViewed = [0,1,2];
var votesRemaining = 25;
var products = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var productVotes = [];




//Constructors
function Product(name) {
    this.name = name;
    this.filepath = `img/${name}.jpg`;
    allProductArray.push(this);
		this.timesShown = 0;
		this.votes = 0;
    console.log('New Product', this);
}


//Instances
function allProductArrayCalc(productArray) {
    for(var i = 0; i < productArray.length; i++) {
        new Product(productArray[i]);
		}
	
}

allProductArrayCalc(products);
function getRandomIndex() {
	return Math.floor(Math.random() * allProductArray.length);
}


function getThreeRandomProducts() {
	console.log('inside of get three random products')
	while (previouslyViewed.length > 6) {
		previouslyViewed.shift();
	}
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

}

function renderProductImages(){
	console.log('inside of render product images')
	getThreeRandomProducts();

	imageOne.src = allProductArray[previouslyViewed[3]].filepath;
	imageTwo.src = allProductArray[previouslyViewed[4]].filepath;
	imageThree.src = allProductArray[previouslyViewed[5]].filepath;

	imageOne.alt = allProductArray[previouslyViewed[3]].name;
	imageTwo.alt = allProductArray[previouslyViewed[4]].name;
	imageThree.alt = allProductArray[previouslyViewed[5]].name;

	imageOne.title = allProductArray[previouslyViewed[3]].name;
	imageTwo.title = allProductArray[previouslyViewed[4]].name;
	imageThree.title = allProductArray[previouslyViewed[5]].name;

	allProductArray[previouslyViewed[3]].timesShown++;
	allProductArray[previouslyViewed[4]].timesShown++;
	allProductArray[previouslyViewed[5]].timesShown++;

}

// ++++++++++++++++++++++++++++++++++++++++++++
// CHART STUFF
// Charts rendered using Chart JS v.2.7.2
// http://www.chartjs.org/
// ++++++++++++++++++++++++++++++++++++++++++++

function getData(){
	for (var i = 0; i < allProductArray.length; i++){
		productVotes.push(allProductArray[i].votes)
	}
}

var data = {
	labels: products, // titles array we declared earlier
	
  datasets: [{
		label: "Bus Mall Chart",
		
    data: productVotes, // votes array we declared earlier
    backgroundColor: [

      'bisque',
      'darkgray',
      'burlywood',
      'lightblue',
			'navy',
			'pink',
			'purple',
			'yellow',
			'bisque',
      'darkgray',
      'burlywood',
      'lightblue',
			'navy',
			'pink',
			'purple',
			'yellow','bisque',
      'darkgray',
      'burlywood',
      'lightblue',
			'navy',
			'pink',
			'purple',
			'yellow',
    ],
    hoverBackgroundColor: [
      'purple',
      'blue',
      'yellow',
      'blue',
			'purple',
			'yellow',
    ]
  }]
};

function drawChart() {
  var ctx = document.getElementById('image-chart').getContext('2d');
	
	busChart = new Chart(ctx, {
    type: 'bar',
		data: data,
    options: {
      responsive: false,
      animation: {
        duration: 2500,
        easing: 'easeOutBounce'
			}
			
    },
    scales: {
      yAxes: [{
        ticks: {
          max: 10,
          min: 0,
          stepSize: 1.0
        }
      }]
    }
  });

  chartDrawn = true;
}

// TRYING TO PUT DATA IN A CHART//////////////////////////////////////////
function chartData(){
  for (var i=0; i<allProductArray.length; i++){
    nameArray.push(allProductArray[i].name);
    voteArray.push(allProductArray[i].timesShown);
	} 
}

//Event Handler Function
function handleImagesClick(event) {
	votesRemaining--;

	for(var i = 0; i < allProductArray.length; i++){
		if(event.target.alt === allProductArray[i].name){
			allProductArray[i].votes++;
		}
	}

	if(votesRemaining === 0){
		imageContainer.removeEventListener('click', handleImagesClick);
		getData();
		console.log('array info' + productVotes)
		//call render list function
		
		renderList();
		drawChart();
	}
	renderProductImages();
}

var ulEl = document.createElement('ul');
	imageList.appendChild(ulEl);
	
function renderList(){
	for(var i = 0; i < allProductArray.length; i++){
			var liEl = document.createElement('li');
			liEl.textContent = `${allProductArray[i].name} got ${allProductArray[i].votes} votes`;
			ulEl.appendChild(liEl);
	}
}

imageContainer.addEventListener('click', handleImagesClick);
renderProductImages();

