

// Функция создание массива объектов с Фото
function createPhotos() {
  for (let i = 0; i < AMOUNT_PHOTOS; i++) {
    photos[i] = createPhoto(i + 1);
  }
  return photos;
}
createPhotos();
