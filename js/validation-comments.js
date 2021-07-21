import { checkStringLength } from './utils.js';
import { commentsInput } from './edit-photo-popup.js';

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
    commentsInput.style.border = '5px solid red';
  } else {
    commentsInput.setCustomValidity('');
    commentsInput.style.border = '';
  }
};

export { validationComments };
