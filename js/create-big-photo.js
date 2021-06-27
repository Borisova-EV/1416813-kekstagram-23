import { createNewElement } from './utils.js';
import { closeBigPhotoPopup } from './close-big-photo.js';

const bigPictureContainer = document.querySelector('.big-picture');
const bigPicture = bigPictureContainer.querySelector('.big-picture__img');
const likesCount = bigPictureContainer.querySelector('.likes-count');
const commentsCount = bigPictureContainer.querySelector('.comments-count');
const commentsList = bigPictureContainer.querySelector('.social__comments');
const commentsFragment = document.createDocumentFragment();
const commentsItem = commentsList.children;
const textPhoto = bigPictureContainer.querySelector('.social__caption');
const commentsCountContainer = bigPictureContainer.querySelector('.social__comment-count');
const commentsLoader = bigPictureContainer.querySelector('.comments-loader');
const bigPictureImage = bigPicture.querySelector('img');


// Создание одного комментария
function createCommentElement() {
  const commentUser = createNewElement('li', 'social__comment');
  const user = createNewElement('img', 'social__picture');
  user.width = '35';
  user.height = '35';
  commentUser.appendChild(user);
  const textComment = createNewElement('p', 'social__text');
  commentUser.appendChild(textComment);
  return commentUser;
}

// Создание всех видимых комментариев
function createCommentsUser(amount) {
  const commentAmount = (amount >= 5) ? 5 : amount;

  for (let i = 1; i <= commentAmount; i++) {
    commentsFragment.appendChild(createCommentElement());
  }

  commentsList.appendChild(commentsFragment);
}

// Добавление описания комментариев
function addDescriptionComments(comments) {

  for (let i = 0; i < commentsItem.length; i++) {
    const commentUser = commentsItem[i];
    const avatar = commentUser.querySelector('.social__picture');
    avatar.src = comments[i].avatar;
    avatar.alt = comments[i].name;
    const textComment = commentUser.querySelector('.social__text');
    textComment.textContent = comments[i].message;
  }
}

// Редактирование комментариев
function editComments(picture) {
  for (let i = commentsItem.length - 1; i >= 0; i--) {
    commentsItem[i].remove();
  }
  createCommentsUser(picture.comments.length);
  addDescriptionComments(picture.comments);

  commentsCountContainer.classList.add('hidden');
  commentsLoader.classList.add('hidden');
}

// Показ полноэкранного изображения
function showBigPicture(picture) {
  bigPictureContainer.classList.remove('hidden');

  bigPictureImage.src = picture.url;
  likesCount.textContent = picture.likes;
  commentsCount.textContent = picture.comments.length;
  textPhoto.textContent = picture.description;

  editComments(picture);

  document.body.classList.add('modal-open');

  closeBigPhotoPopup();
}

export { bigPictureContainer, showBigPicture };
