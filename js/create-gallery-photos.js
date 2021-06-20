// Блок для добавленных фото
const PICTURES_CONTAINER = document.querySelector('.pictures');
// Шаблон добавленных фото
const PICTURE_TEMPLATE = document.querySelector('#picture').content.querySelector('.picture');

// Создание галереи добавленных фото
function createGalleryPhotos(photos) {
  photos.forEach((picture) => {
    const newPicture = PICTURE_TEMPLATE.cloneNode(true);
    newPicture.querySelector('.picture__img').src = picture.url;
    newPicture.querySelector('.picture__likes').textContent = picture.likes;
    newPicture.querySelector('.picture__comments').textContent = picture.comments.length;
    PICTURES_CONTAINER.appendChild(newPicture);
  });
}

export { createGalleryPhotos };
