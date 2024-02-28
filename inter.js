// Function to generate a random color
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to change iframe border color and footer w computedstyle
function changeBorderColor() {
  var iframe = document.querySelector(".container");
  if (iframe) {
    iframe.style.borderColor = getRandomColor();
  }
  var buton = document.querySelector("button");
  var iframeComputedStyle = window.getComputedStyle(iframe);
  var iframeBorderColor = iframeComputedStyle.getPropertyValue('border-color');
  buton.style.backgroundColor = iframeBorderColor;
}




// Change border color every second for 5 seconds
var intervalId = setInterval(changeBorderColor, 100);
setTimeout(function () {
  clearInterval(intervalId);

  var iframe = document.querySelector(".container");
  if (iframe) {
    iframe.style.borderColor = '#2c3950';
  var buton = document.querySelector("button");  
  var iframeComputedStyle = window.getComputedStyle(iframe);
  var iframeBorderColor = iframeComputedStyle.getPropertyValue('border-color');
  buton.style.backgroundColor = iframeBorderColor;
  }

}, 5000);
