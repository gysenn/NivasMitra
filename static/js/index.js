const toTop = document.querySelector(".to_top");

let lastScroll = window.scrollY;

window.addEventListener("scroll", () => {
    let currentScroll = window.scrollY;

    if (currentScroll > lastScroll && currentScroll > 300) {
        // Scrolling down
        toTop.classList.add("show");
    } else {
        // Scrolling up
        toTop.classList.remove("show");
    }

    lastScroll = currentScroll;
});