import { createNewElement, hideElement, showElement, disableButton, activateButton } from './utils.js';

const WIDTH_USER_AVATAR = '35';
const HEIGHT_USER_AVATAR = '35';
const AMOUNT_SHOWN_COMMENTS = 5;

const bigPictureContainer = document.querySelector('.big-picture');
const uploadedCommentsContainer = bigPictureContainer.querySelector('.social__comments');
const uploadedCommentsList = uploadedCommentsContainer.children;
const commentsCountContainer = bigPictureContainer.querySelector('.social__comment-count');
const countUnloadedComments = commentsCountContainer.querySelector('.social__loaded-comment-count');
const commentsLoaderButton = bigPictureContainer.querySelector('.comments-loader');

//Количество загружаемых комментариев
let count = 0;

// Создание одного комментария
const createCommentElement = (comment) => {
  const commentUser = createNewElement('li', 'social__comment');
  const user = createNewElement('img', 'social__picture');
  user.width = WIDTH_USER_AVATAR;
  user.height = HEIGHT_USER_AVATAR;
  user.src = comment.avatar;
  user.alt = comment.name;
  commentUser.appendChild(user);
  const textComment = createNewElement('p', 'social__text');
  textComment.textContent = comment.message;
  commentUser.appendChild(textComment);
  return commentUser;
};

// Создание всех видимых комментариев
const createUserComments = (amount, comments) => {
  const commentsFragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    commentsFragment.appendChild(createCommentElement(comments[i]));
  }
  return commentsFragment;
};

const addComments = (amount, comments) => {
  uploadedCommentsContainer.appendChild(createUserComments(amount, comments));
  comments.splice(0, amount);
  countUnloadedComments.textContent = uploadedCommentsList.length;
};

//Удаление комментариев
const removeComments = () => {
  uploadedCommentsContainer.innerHTML = '';

  count = 0;
  activateButton(commentsLoaderButton);
  showElement(commentsCountContainer);
};

// //Проверка наличия комментариев
const haveComments = (comments) => comments.length > 0;

// Добавление всех комментариев
const addAllComments = (comments) => {
  if (comments.length <= AMOUNT_SHOWN_COMMENTS) {
    count = comments.length;
    addComments(count, comments);
    disableButton(commentsLoaderButton);
  } else {
    count = AMOUNT_SHOWN_COMMENTS;
    addComments(count, comments);
    commentsLoaderButton.addEventListener('click', () => addAllComments(comments));
  }
};

// Итоговая функция
const loadingComments = (comments) => {
  if (haveComments(comments)) {
    const commentsCopy = comments.slice();
    addAllComments(commentsCopy);
  } else {
    disableButton(commentsLoaderButton);
    hideElement(commentsCountContainer);
  }
};

export { removeComments, loadingComments };
