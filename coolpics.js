const menuButton = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", function () {
    nav.classList.toggle("open");
});

const galleryImages = document.querySelectorAll(".pictures img");
const imageModal = document.querySelector(".image-modal");
const modalImage = imageModal.querySelector("img");
const closeModalButton = document.querySelector(".close-modal");

galleryImages.forEach(function (image) {
    image.addEventListener("click", function (event) {
        event.preventDefault();

        modalImage.src = "https://wddbyui.github.io/wdd131/images/norris-full.jpg";
        modalImage.alt = image.alt;

        imageModal.showModal();
    });
});

closeModalButton.addEventListener("click", function () {
    imageModal.close();
});

imageModal.addEventListener("click", function (event) {
    if (event.target === imageModal) {
        imageModal.close();
    }
});

imageModal.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        imageModal.close();
    }
});
