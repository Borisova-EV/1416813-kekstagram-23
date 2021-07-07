import { createNewElement } from './utils.js';
import { closeBigPhotoPopup } from './close-big-photo.js';

const WIDTH_USER_AVATAR = '35';
const HEIGHT_USER_AVATAR = '35';
const AMOUNT_SHOWN_COMMENTS = 5;

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
const countLoaderComments = commentsCountContainer.querySelector('.count-loader-comments');
const bigPictureImage = bigPicture.querySelector('img');


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
  for (let i = 1; i <= amount; i++) {
    commentsFragment.appendChild(createCommentElement());
  }
};

// Добавление описания комментариев
const addDescriptionComments = (comments) => {
  const commentLIstFragment = commentsFragment.children;
  for (let i = 0; i < commentLIstFragment.length; i++) {
    const commentUser = commentLIstFragment[i];
    const avatar = commentUser.querySelector('.social__picture');
    avatar.src = comments[i].avatar;
    avatar.alt = comments[i].name;
    const textComment = commentUser.querySelector('.social__text');
    textComment.textContent = comments[i].message;
  }
};

//Удаление комментариев
const removeComments = () => {
  for (let i = commentsItem.length - 1; i >= 0; i--) {
    commentsItem[i].remove();
  }
};

// Добавление  комментариев
const addComments = (picture) => {
  const amountLoaderComments = (picture.comments.length >= AMOUNT_SHOWN_COMMENTS) ? AMOUNT_SHOWN_COMMENTS : picture.comments.length;

  createCommentsUser(amountLoaderComments);
  addDescriptionComments(picture.comments);

  picture.comments.splice(0, amountLoaderComments);

  commentsList.appendChild(commentsFragment);

  countLoaderComments.textContent = commentsItem.length;
};


// Показ полноэкранного изображения
const showBigPicture = (picture) => {
  bigPictureContainer.classList.remove('hidden');

  bigPictureImage.src = picture.url;
  likesCount.textContent = picture.likes;
  commentsCount.textContent = picture.comments.length;
  textPhoto.textContent = picture.description;

  removeComments();
  addComments(picture);

  commentsLoader.addEventListener('click', () => addComments(picture));

  document.body.classList.add('modal-open');

  closeBigPhotoPopup();
};

export { bigPictureContainer, showBigPicture };
