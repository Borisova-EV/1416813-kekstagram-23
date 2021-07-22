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
  const message = (isInvalidLengthComments()) ? `Уменьшите длину комментария на ${commentsInput.value.length - LENGTH_COMMENTS} симв.` : '';
  const border = (isInvalidLengthComments()) ? '5px solid red' : '';

  commentsInput.setCustomValidity(message);
  commentsInput.style.border = border;
};

export { validationComments };
