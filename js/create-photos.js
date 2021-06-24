// Импорт зависимостей
import { createPhoto } from './create-photo.js';

// Количество фото
const AMOUNT_PHOTOS = 25;

// Функция создание массива объектов с Фото
function createPhotos() {
  const createDescriptionPhotos = new Array(AMOUNT_PHOTOS)
    .fill(null)
    .map((el, index) => createPhoto(index + 1));
  return createDescriptionPhotos;
}

export { createPhotos };
