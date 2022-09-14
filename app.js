const revealBtn = document.querySelector(".reveal-btn");
const hiddenContent = document.querySelector(".hidden-content");
const container = document.querySelector(".kontainer");

revealBtn.addEventListener('click', revealContent);
function revealContent() {
    if (hiddenContent.classList.contains('hidden')) {
        hiddenContent.classList.remove('hidden');
        container.classList.add('flex');
    } else {
        hiddenContent.classList.add('hidden');
        container.classList.remove('flex');
    }
}

function hoverState() {
    this.classList.add('font-bold');
}
function hoverLeave() {
    this.classList.remove('font-bold');
}

revealBtn.addEventListener('mouseover', hoverState);
revealBtn.addEventListener('mouseleave', hoverLeave);