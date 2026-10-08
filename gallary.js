let gallarySection = document.querySelector('.gallary');
let modal = document.querySelector('dialog');
let modalImage = modal.querySelector('img');
let closeButton = document.querySelector('.close-viewer');

gallarySection.addEventListener('click', (event) => {
    if (event.target.src !== undefined){
        modalImage.src = event.target.src.replace('-sm', '-full');
        modal.showModal();
    }
});
    
// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});
          