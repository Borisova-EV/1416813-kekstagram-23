//Импорт зависимостей
import {getRandomNumber} from './utils.js';

// Количество лайков
const MIN_AMOUNT_LIKE = 15;
const MAX_AMOUNT_LIKE = 200;

// Функция создания объекта с фото
function createPhoto(numberPhoto, comments) {
  return {
    id: numberPhoto,
    url: `photos/${numberPhoto}.jpg`,
    description: 'Новое фото пользователя',
    likes: getRandomNumber(MIN_AMOUNT_LIKE, MAX_AMOUNT_LIKE),
    comments: comments, //наверное не очень хорошее название параметра
  };
}

export {createPhoto};
