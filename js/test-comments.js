import { checkStringLength } from './utils.js';
import { commentsInput, LENGTH_COMMENTS } from './form.js';

// Проверка длины комментария
const isValidityLengthComments = () => {
  const comments = commentsInput.value;
  return checkStringLength(comments, LENGTH_COMMENTS);
};

export { isValidityLengthComments };
