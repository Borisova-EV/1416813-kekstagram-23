import { isEscEvent } from './utils.js';
import { createHashTags, matchingPattern, isDuplicate, isTooMushHashTags } from './test-hash-tags.js';
import { isValidityLengthComments } from './test-comments.js';

const AMOUNT_HASH_TAGS = 5;
const LENGTH_COMMENTS = 140;

const uploadPictureForm = document.querySelector('.img-upload__form');
const editPicturePopup = uploadPictureForm.querySelector('.img-upload__overlay');
const uploadPictureInput = uploadPictureForm.querySelector('#upload-file');
const closeEditPictureButton = uploadPictureForm.querySelector('#upload-cancel');
const hashtagsInput = uploadPictureForm.querySelector('.text__hashtags');
const commentsInput = uploadPictureForm.querySelector('.text__description');

//Функция закрытия окна редактирования загружаемого фото
const closeEditPopup = () => {
  editPicturePopup.classList.add('hidden');
  document.body.classList.remove('modal-open');
  uploadPictureInput.value = '';
  hashtagsInput.value = '';
  commentsInput.value = '';
};

const onEditPopupEscKeyDown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeEditPopup();
  }
};

const onCloseEditPictureButtonClick = () => closeEditPopup();

//Функция открытия окна редактирования загружаемого фото
const openEditPopup = () => {
  editPicturePopup.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onEditPopupEscKeyDown);
  closeEditPictureButton.addEventListener('click', onCloseEditPictureButtonClick);
};

uploadPictureInput.addEventListener('change', () => openEditPopup());

//Валидация поля для заполнения Хештегов
hashtagsInput.addEventListener('change', () => {
  if (!matchingPattern()) {
    hashtagsInput.setCustomValidity('Проверьте правильность написания хештегов: хештег должен начинаться с #, содержать только буквы и числа и не превышать 20 символов');
  } else if (isDuplicate()) {
    hashtagsInput.setCustomValidity('Один и тот же хэш-тег не может быть использован дважды');
  } else if (isTooMushHashTags()) {
    hashtagsInput.setCustomValidity(`Уменьшите количество хэш-тегов на ${createHashTags().length - AMOUNT_HASH_TAGS}`);
  } else {
    hashtagsInput.setCustomValidity('');
  }
});

// Отмена закрытия формы при заполнении поля хеш-тегов
hashtagsInput.addEventListener('focus', () => {
  document.removeEventListener('keydown', onEditPopupEscKeyDown);
});

hashtagsInput.addEventListener('blur', () => {
  document.addEventListener('keydown', onEditPopupEscKeyDown);
});

//Валидация поля для заполнения комментариев
commentsInput.addEventListener('input', () => {
  if (!isValidityLengthComments()) {
    commentsInput.setCustomValidity(`Уменьшите длину комментария на ${commentsInput.value.length - LENGTH_COMMENTS} симв.`);
  } else {
    commentsInput.setCustomValidity('');
  }
});

// Отмена закрытия формы при заполнении поля комментариев
commentsInput.addEventListener('focus', () => {
  document.removeEventListener('keydown', onEditPopupEscKeyDown);
});

commentsInput.addEventListener('blur', () => {
  document.addEventListener('keydown', onEditPopupEscKeyDown);
});

export { AMOUNT_HASH_TAGS, LENGTH_COMMENTS, hashtagsInput, commentsInput };
