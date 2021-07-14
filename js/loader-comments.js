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
//Количество загруженных комментариев
let amountUploadedComments = 0;
//Количество незагруженных комментариев
let amountUnloadedComments = 0;

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
    const indexDownloadableComments = i + amountUploadedComments;
    const avatar = commentsList[i].querySelector('.social__picture');
    avatar.src = comments[indexDownloadableComments].avatar;
    avatar.alt = comments[indexDownloadableComments].name;
    const textComment = commentsList[i].querySelector('.social__text');
    textComment.textContent = comments[indexDownloadableComments].message;
  }
  uploadedCommentsContainer.appendChild(containerElements);
  amountUploadedComments = amountUploadedComments + amountDownloadableComments;
  countUnloaderComments.textContent = amountUploadedComments;

};

//Удаление комментариев
const removeComments = () => {
  for (let i = uploadedCommentsList.length - 1; i >= 0; i--) {
    uploadedCommentsList[i].remove();
  }
  amountDownloadableComments = 0;
  amountUploadedComments = 0;
  amountUnloadedComments = 0;
  commentsLoaderButton.classList.remove('hidden');
  commentsCountContainer.classList.remove('hidden');
};

// //Проверка наличия комментариев
const haveComments = (comments) => comments.length === 0;

//Убираем дальнейшую загрузку комментариев
const hiddenLoaderComments = () => {
  commentsLoaderButton.classList.add('hidden');
};

// Обработчик клика по кнопке "загрузить еще"
const onCommentsLoaderButtonClick = (comments) => {
  addAllComments(comments);
};

// Добавление всех комментариев
function addAllComments(comments) {

  amountUnloadedComments = comments.length - amountUploadedComments;
  if (amountUnloadedComments <= AMOUNT_SHOWN_COMMENTS) {
    amountDownloadableComments = amountUnloadedComments;
    addComments(amountDownloadableComments, comments);
    hiddenLoaderComments();
  } else {
    amountDownloadableComments = AMOUNT_SHOWN_COMMENTS;
    addComments(amountDownloadableComments, comments);
    commentsLoaderButton.addEventListener('click', () => onCommentsLoaderButtonClick(comments));
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
