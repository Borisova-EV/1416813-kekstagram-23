import { bigPictureContainer } from './create-big-photo.js';
import { isEscEvent } from './utils.js';

const bigPictureCloseButton = document.querySelector('.big-picture__cancel');

const onDocumentKeydown = (evt) => {
  if (isEscEvent) {
    evt.preventDefault();
    closeBigPhoto();
  }
};

const onBigPictureCloseButtonClick = () => closeBigPhoto();

function closeBigPhoto() {
  bigPictureContainer.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  bigPictureCloseButton.removeEventListener('click', onBigPictureCloseButtonClick);
}

const closeBigPhotoPopup = () => {
  document.addEventListener('keydown', onDocumentKeydown);
  bigPictureCloseButton.addEventListener('click', onBigPictureCloseButtonClick);
};

export { closeBigPhotoPopup };
