
const accordion = document.getElementsByClassName('content-container');

for (let index = 0; index < accordion.length; index++) {
    const container = accordion[index];
    const element = accordion[index].lastElementChild;
    console.log(element);
    container.addEventListener(
        'click',
        function () {
            this.lastElementChild.classList.toggle('h-0');
            if (this.firstElementChild.classList.contains("after:content-['+']")) {
                this.firstElementChild.classList.remove("after:content-['+']");
                this.firstElementChild.classList.add("after:content-['-']");
            } else {
                this.firstElementChild.classList.add("after:content-['+']");
                this.firstElementChild.classList.remove("after:content-['-']");
            }


        }
    )
}