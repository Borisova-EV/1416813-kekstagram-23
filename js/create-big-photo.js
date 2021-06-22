import { createNewElement } from './utils.js';

const bigPictureContainer = document.querySelector('.big-picture');
const bigPicture = bigPictureContainer.querySelector('.big-picture__img');
const likesCount = bigPictureContainer.querySelector('.likes-count');
const allCommentsAmount = bigPictureContainer.querySelector('.comments-count');
const commentsList = bigPictureContainer.querySelector('.social__comments');
const commentsFragment = document.createDocumentFragment();
const commentsItem = commentsList.children;
const textPhoto = bigPictureContainer.querySelector('.social__caption');
const commentsCount = bigPictureContainer.querySelector('.social__comment-count');
const commentsLoader = bigPictureContainer.querySelector('.comments-loader');


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
  const commentAmount = amount >= 5 ? '5' : amount;
  for (let i = 1; i <= commentAmount; i++) {
    commentsFragment.appendChild(createCommentElement());
  }
  commentsList.appendChild(commentsFragment);
}

// Добавление описания комментариев
function addDescriptionComments(comments) {
  commentsItem.forEach((element, index) => {
    const avatar = element.querySelector('.social__picture');
    avatar.src = comments[index].avatar;
    avatar.alt = comments[index].name;
    const textComment = element.querySelector('.social__text');
    textComment.textComment = comments[index].message;
  });
}

// Показ полноэкранного изображения
function showBigPicture(pictures) {
  bigPictureContainer.classList.remove('hidden');
  bigPicture.img.src = pictures.url;
  likesCount.textContent = pictures.likes;
  allCommentsAmount.textContent = pictures.comments.length;
  commentsList.removeChild(commentsItem[1]);
  commentsList.removeChild(commentsItem[0]);
  createCommentsUser(pictures.comments.length);
  addDescriptionComments(pictures.comments);
  textPhoto.textContent = pictures.description;
  commentsCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  document.body.classList.add('modal-open');
}

export { showBigPicture };

/*
Напишите код для закрытия окна по нажатию клавиши Esc и клике по иконке закрытия.*/
