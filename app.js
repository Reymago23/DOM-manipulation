
document.querySelector("#sports").addEventListener
    (
        "click",
        function (e) {
            console.log(e.target.innerText);
            const bgColor = "bg-slate-200";
            const li = e.target;
            if (li.matches('li')) {
                if (li.classList.contains(bgColor)) {
                    li.classList.remove(bgColor)
                } else {
                    li.classList.add(bgColor)
                }
            }
        }
    )