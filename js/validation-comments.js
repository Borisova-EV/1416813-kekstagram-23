import { checkStringLength } from './utils.js';
import { commentsInput } from './form.js';

const LENGTH_COMMENTS = 140;

// Проверка длины комментария
const isInvalidLengthComments = () => {
  const comments = commentsInput.value;
  return checkStringLength(comments, LENGTH_COMMENTS);
};

//Валидация поля для заполнения комментариев
const validationComments = () => {
  if (isInvalidLengthComments()) {
    commentsInput.setCustomValidity(`Уменьшите длину комментария на ${commentsInput.value.length - LENGTH_COMMENTS} симв.`);
  } else {
    commentsInput.setCustomValidity('');
  }
};

export { validationComments };
