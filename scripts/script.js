addEventListener("resize", (event) => {
    console.log(window.innerWidth);

    resizeText()
})

function resizeText() {
    if (window.innerWidth < 768) {
        if (window.innerWidth < 375) {
            return;
        }

        document.querySelector(".wrapper .hero h2").style.width = window.innerWidth - 53 + "px";
        console.log(window.innerWidth - 53);
    }
}