const audio = document.querySelector('#myAudio');

window.addEventListener("scroll", handleClick);
function handleClick() {
    const scrollValue = window.scrollY;
    if (scrollValue >= 0) {
        audio.play();
    }
}