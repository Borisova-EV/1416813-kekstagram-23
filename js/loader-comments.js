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
const createCommentElement = () => {
  const commentUser = createNewElement('li', 'social__comment');
  const user = createNewElement('img', 'social__picture');
  user.width = WIDTH_USER_AVATAR;
  user.height = HEIGHT_USER_AVATAR;
  commentUser.appendChild(user);
  const textComment = createNewElement('p', 'social__text');
  commentUser.appendChild(textComment);
  return commentUser;
};

// Создание всех видимых комментариев
const createUserComments = (amount) => {
  const commentsFragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    commentsFragment.appendChild(createCommentElement());
  }
  return commentsFragment;
};

const fillComments = (amount, comments) => {
  const containerOfElements = createUserComments(amount);
  const commentsList = containerOfElements.children;
  for (let i = 0; i < commentsList.length; i++) {
    const avatar = commentsList[i].querySelector('.social__picture');
    avatar.src = comments[i].avatar;
    avatar.alt = comments[i].name;
    const textComment = commentsList[i].querySelector('.social__text');
    textComment.textContent = comments[i].message;
  }
  return containerOfElements;
};


const addComments = (amount, comments) => {
  uploadedCommentsContainer.appendChild(fillComments(amount, comments));
  comments.splice(0, amount);
  countUnloadedComments.textContent = uploadedCommentsList.length;

};

//Удаление комментариев
const removeComments = () => {
  let i = uploadedCommentsList.length - 1;
  while (i >= 0) {
    uploadedCommentsList[i].remove();
    i--;
  }
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
