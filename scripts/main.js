var myImage = document.querySelector("img");

myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "images/my-image.jpg") {
    myImage.setAttribute("src", "images/iamout.jpg");
  } else {
    myImage.setAttribute("src", "images/my-image.jpg");
  }
};

/*
document.querySelector("img").onclick = function () {
  alert("Я тигр, арррр!");
};
*/

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName() {
  var myName = prompt("Как вы хотите назвать киску?");
  localStorage.setItem("name", myName);
  myHeading.textContent = "Мудрое решение " + myName;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  var storedName = localStorage.getItem("name");
  myHeading.textContent = "Мудрое решение " + storedName;
}

myButton.onclick = function () {
  setUserName();
};
