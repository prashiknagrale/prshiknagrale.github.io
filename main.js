//image switcher
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'Images/first-image.png') {
      myImage.setAttribute ('src','Images/second-image.png');
    } else {
      myImage.setAttribute ('src','Images/first-image.png');
    }
}

//user switcher
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Imagine Dragons is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Imagine Dragons is cool, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}


