const audio = document.querySelector('#myAudio');

window.addEventListener("click", handleClick);
function handleClick() {
    audio.play();
}