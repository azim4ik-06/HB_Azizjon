var audio = document.getElementById("background-audio");
var isPlaying = false;

window.addEventListener("scroll", function() {
  if (isScrolledIntoView(audio) && !isPlaying) {
    audio.play();
    isPlaying = true;
  } else if (!isScrolledIntoView(audio) && isPlaying) {
    audio.pause();
    isPlaying = false;
  }
});

function isScrolledIntoView(element) {
  var rect = element.getBoundingClientRect();
  var elemTop = rect.top;
  var elemBottom = rect.bottom;

  // Проверяем, находится ли элемент в видимой области окна просмотра
  var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
  return isVisible;
}