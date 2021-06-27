import { bigPictureContainer } from './create-big-photo.js';
const bigPictureCloseButton = document.querySelector('.big-picture__cancel');

const closePhoto = () => {
  bigPictureContainer.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

const keyDownEsc = (evt) => {
  if (evt.code === 'Escape') {
    closePhoto();
  }
};

function closeBigPhotoPopup() {
  document.addEventListener('keydown', keyDownEsc);
  bigPictureCloseButton.addEventListener('click', closePhoto);
}

export { closeBigPhotoPopup };
