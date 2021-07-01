//Импорт зависимостей
import { getRandomNumber } from './utils.js';
import { createComments } from './create-comments.js';

// Количество лайков
const MIN_AMOUNT_LIKE = 15;
const MAX_AMOUNT_LIKE = 200;

// Функция создания объекта с фото
const createPhoto = (numberPhoto) => ({
  id: numberPhoto,
  url: `photos/${numberPhoto}.jpg`,
  description: 'Новое фото пользователя',
  likes: getRandomNumber(MIN_AMOUNT_LIKE, MAX_AMOUNT_LIKE),
  comments: createComments(),
});

export { createPhoto };
