let menuButton = document.querySelector('.menu-btn');

menuButton.addEventListener('click', (e) => {
    menuButton.classList.toggle('change');
    let nav = document.querySelector('nav');
    nav.classList.toggle('show');
});

// Ignore