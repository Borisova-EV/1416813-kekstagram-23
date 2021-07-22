import { bigPictureContainer } from './show-big-picture.js';
import { isEscEvent, hideElement } from './utils.js';

const bigPictureCloseButton = document.querySelector('.big-picture__cancel');

const onDocumentKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeBigPhoto();
  }
};

const onBigPictureCloseButtonClick = () => closeBigPhoto();

function closeBigPhoto() {
  hideElement(bigPictureContainer);
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  bigPictureCloseButton.removeEventListener('click', onBigPictureCloseButtonClick);
}

const closeBigPhotoPopup = () => {
  document.addEventListener('keydown', onDocumentKeydown);
  bigPictureCloseButton.addEventListener('click', onBigPictureCloseButtonClick);
};

export { closeBigPhotoPopup };
