const closeButton = document.querySelector('.close-nav');
const nav = document.querySelector('.nav');

closeButton.addEventListener("click", () => {
    nav.classList.remove('navigation-open');
});