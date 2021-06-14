//Импорт зависимостей
import { getRandomNumber } from './utils.js';
import { createComment } from './create-comment.js';

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

export { createComments };
