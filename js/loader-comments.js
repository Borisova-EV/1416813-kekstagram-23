import { createNewElement, hideElement, showElement, activateButton } from './utils.js';

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
let array = [];

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

  countUnloadedComments.textContent = uploadedCommentsList.length;
  comments.splice(0, amount);
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

const onCommentsLoaderButtonClick = () => addAllComments(array);

// Добавление всех комментариев
function addAllComments(comments) {
  if (comments.length <= AMOUNT_SHOWN_COMMENTS) {
    count = comments.length;

    addComments(count, comments);

    hideElement(commentsLoaderButton);

    commentsLoaderButton.removeEventListener('click', onCommentsLoaderButtonClick);
  } else {
    count = AMOUNT_SHOWN_COMMENTS;

    addComments(count, comments);

    commentsLoaderButton.addEventListener('click', onCommentsLoaderButtonClick);
  }
}

// Итоговая функция
const loadingComments = (comments) => {
  if (haveComments(comments)) {
    showElement(commentsLoaderButton);
    array = comments.slice();
    addAllComments(array);
  } else {
    hideElement(commentsLoaderButton);
    hideElement(commentsCountContainer);
  }
};

export { removeComments, loadingComments, commentsLoaderButton, addAllComments, onCommentsLoaderButtonClick };
