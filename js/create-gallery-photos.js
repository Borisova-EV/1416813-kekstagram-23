import { showBigPicture } from './create-big-photo.js';
import { closeBigPhoto } from './close-big-photo.js';

// Блок для добавленных фото
const picturesContainer = document.querySelector('.pictures');
// Шаблон добавленных фото
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const galleryPhotosFragment = document.createDocumentFragment();

// Создание галереи добавленных фото
function createGalleryPhotos(photos) {
  photos.forEach((picture) => {
    const newPicture = pictureTemplate.cloneNode(true);

    newPicture.querySelector('.picture__img').src = picture.url;
    newPicture.querySelector('.picture__likes').textContent = picture.likes;
    newPicture.querySelector('.picture__comments').textContent = picture.comments.length;

    galleryPhotosFragment.appendChild(newPicture);

    newPicture.addEventListener('click', () => showBigPicture(picture));

    closeBigPhoto();
  });

  picturesContainer.appendChild(galleryPhotosFragment);
}

export { createGalleryPhotos };
