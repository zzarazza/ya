function menuToggle() {
    document.body.classList.toggle("mobile-nav--open");
}

document.querySelector('.menu-toggle').addEventListener('click', menuToggle);