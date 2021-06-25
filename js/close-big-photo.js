const bigPictureCloseButton = document.querySelector('.big-picture__cancel');

function closeBigPhoto(container) {
  document.addEventListener('keydown', (evt) => {
    if (evt.code === 'Escape') {
      container.classList.add('hidden');
      document.body.classList.remove('modal-open');
    }
  });

  bigPictureCloseButton.addEventListener('click', () => {
    container.classList.add('hidden');
    document.body.classList.remove('modal-open');
  });
}

export { closeBigPhoto };
