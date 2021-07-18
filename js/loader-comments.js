import { createNewElement } from './utils.js';

const WIDTH_USER_AVATAR = '35';
const HEIGHT_USER_AVATAR = '35';
const AMOUNT_SHOWN_COMMENTS = 5;

const bigPictureContainer = document.querySelector('.big-picture');
const uploadedCommentsContainer = bigPictureContainer.querySelector('.social__comments');
const uploadedCommentsList = uploadedCommentsContainer.children;
const commentsCountContainer = bigPictureContainer.querySelector('.social__comment-count');
const countUnloaderComments = commentsCountContainer.querySelector('.count-loader-comments');
const commentsLoaderButton = bigPictureContainer.querySelector('.comments-loader');

//Количество загружаемых комментариев
let amountDownloadableComments = 0;

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
const createCommentsUser = (amount) => {
  const commentsFragment = document.createDocumentFragment();
  for (let i = 1; i <= amount; i++) {
    commentsFragment.appendChild(createCommentElement());
  }
  return commentsFragment;
};

// Добавление описания комментариев
const addComments = (amount, comments) => {
  const containerElements = createCommentsUser(amount);
  const commentsList = containerElements.children;
  for (let i = 0; i < commentsList.length; i++) {
    const avatar = commentsList[i].querySelector('.social__picture');
    avatar.src = comments[i].avatar;
    avatar.alt = comments[i].name;
    const textComment = commentsList[i].querySelector('.social__text');
    textComment.textContent = comments[i].message;
  }
  uploadedCommentsContainer.appendChild(containerElements);
  comments.splice(0, amount);
  countUnloaderComments.textContent = uploadedCommentsList.length;

};

//Удаление комментариев
const removeComments = () => {
  for (let i = uploadedCommentsList.length - 1; i >= 0; i--) {
    uploadedCommentsList[i].remove();
  }
  amountDownloadableComments = 0;
  commentsLoaderButton.classList.remove('hidden');
  commentsCountContainer.classList.remove('hidden');
};

// //Проверка наличия комментариев
const haveComments = (comments) => comments.length === 0;

//Убираем дальнейшую загрузку комментариев
const hiddenLoaderComments = () => {
  commentsLoaderButton.classList.add('hidden');
};

// Добавление всех комментариев
function addAllComments(comments) {
  if (comments.length <= AMOUNT_SHOWN_COMMENTS) {
    amountDownloadableComments = comments.length;
    addComments(amountDownloadableComments, comments);
    hiddenLoaderComments();
  } else {
    amountDownloadableComments = AMOUNT_SHOWN_COMMENTS;
    addComments(amountDownloadableComments, comments);
    commentsLoaderButton.addEventListener('click', () => addAllComments(comments));
  }
}

// Итоговая функция
const loadingComments = (comments) => {
  if (haveComments(comments)) {
    commentsLoaderButton.classList.add('hidden');
    commentsCountContainer.classList.add('hidden');
  } else {
    addAllComments(comments);
  }
};

export { removeComments, loadingComments };
