// Импорт модулей
import { getRandomNumber } from './utils.js';
import { createComment } from './create-comment.js';
import { createPhoto } from './create-photo.js';

// Количество фото
const AMOUNT_PHOTOS = 25;

// Количество комментариев
const MAX_AMOUNT_COMMENTS = 15;

// Создание массива объектов с комментариями
function createComments() {
  const amountComments = getRandomNumber(0, MAX_AMOUNT_COMMENTS);
  const createDescriptionComments = new Array(amountComments)
    .fill(null)
    .map((el, index) => createComment(index + 1));
  return createDescriptionComments;
}

// Функция создание массива объектов с Фото
function createPhotos() {
  const createDescriptionPhotos = new Array(AMOUNT_PHOTOS)
    .fill(null)
    .map((el, index) => createPhoto(index + 1, createComments()));
  return createDescriptionPhotos;
}
createPhotos();
