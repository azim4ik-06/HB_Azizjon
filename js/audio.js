const audio = document.querySelector('#myAudio');

window.addEventListener("scroll", handleScroll);
function handleScroll() {
    const scrollValue = window.scrollY;
    if (scrollValue >= 0) {
        audio.play();
    }
}