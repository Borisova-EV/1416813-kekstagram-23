import { bigPictureContainer } from './create-big-photo.js';

const bigPictureCloseButton = bigPictureContainer.querySelector('.big-picture__cancel');

function closeBigPhoto() {
  document.addEventListener('keydown', (evt) => {
    if (evt.code === 'Escape') {
      bigPictureContainer.classList.add('hidden');
      document.body.classList.remove('modal-open');
    }
  });

  bigPictureCloseButton.addEventListener('click', () => {
    bigPictureContainer.classList.add('hidden');
    document.body.classList.remove('modal-open');
  });
}

export { closeBigPhoto };
