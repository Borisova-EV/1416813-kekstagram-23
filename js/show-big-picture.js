import { showElement } from './utils.js';
import { removeComments, loadingComments } from './loader-comments.js';
import { closeBigPhotoPopup } from './close-big-photo.js';

const bigPictureContainer = document.querySelector('.big-picture');
const bigPicture = bigPictureContainer.querySelector('.big-picture__img');
const likesCount = bigPictureContainer.querySelector('.likes-count');
const amountComments = bigPictureContainer.querySelector('.comments-count');
const textPhoto = bigPictureContainer.querySelector('.social__caption');
const bigPictureImage = bigPicture.querySelector('img');

// Показ полноэкранного изображения
const showBigPicture = (picture) => {
  showElement(bigPictureContainer);

  bigPictureImage.src = picture.url;
  likesCount.textContent = picture.likes;
  amountComments.textContent = picture.comments.length;
  textPhoto.textContent = picture.description;

  removeComments();
  loadingComments(picture.comments);

  document.body.classList.add('modal-open');

  closeBigPhotoPopup();
};

export { bigPictureContainer, showBigPicture };
