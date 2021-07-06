import { bigPictureContainer } from './create-big-photo.js';
import { onDocumentKeyDown } from './utils.js';

const bigPictureCloseButton = document.querySelector('.big-picture__cancel');

const closeBigPhoto = () => {
  bigPictureContainer.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

const onBigPhotoPopupEscKeyDown = (evt) => onDocumentKeyDown (evt, closeBigPhoto);

const onBigPhotoPopupButtonClick = () => closeBigPhoto();

const closeBigPhotoPopup = () => {
  document.addEventListener('keydown', onBigPhotoPopupEscKeyDown);
  bigPictureCloseButton.addEventListener('click', onBigPhotoPopupButtonClick);
};

export { closeBigPhotoPopup };
