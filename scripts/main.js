// Personalized welcome message code

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  myHeading.innerHTML = 'All About --> ' + myName;
}

myButton.onclick = function() {
  setUserName();
}

// Image switcher code

var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/cupcake1.jpg') {
      myImage.setAttribute ('src','images/cupcake3.jpg');
	} else {
	  myImage.setAttribute ('src','images/cupcake1.jpg');
	}
}
