
let modalContainer = document.querySelector('#modal-container');

document.querySelector('#open-btn').addEventListener(
    'click',
    function () {
        modalContainer.classList.remove('hidden');
    }
)

document.querySelector('#close-btn').addEventListener(
    'click',
    function () {
        modalContainer.classList.add('hidden');
    }
)

window.addEventListener(
    'click',
    function (e) {
        if (e.target === modalContainer) {
            modalContainer.classList.add('hidden');
        }
    }
)
