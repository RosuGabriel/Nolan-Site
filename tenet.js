const textElement = document.getElementById("text");
const text2Element = document.getElementById("text2");

setTimeout(function() {
  textElement.remove();
  text2Element.remove();
}, 8000);

const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.appendChild(overlay);

setTimeout(() => {
  overlay.remove();
}, 8000);

document.addEventListener('keydown', function(event) {
  if (event.code === 'Space') {
    event.preventDefault();
    if (overlay.parentElement && textElement.parentElement && text2Element.parentElement) {
      overlay.remove();
      textElement.remove();
      text2Element.remove();
    }
  }
});

document.addEventListener('click', function(event) {
  if (overlay.parentElement && textElement.parentElement && text2Element.parentElement) {
    overlay.remove();
    textElement.remove();
    text2Element.remove();
  }
});
