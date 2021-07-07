import { onDocumentKeyDown, isFocusElement } from './utils.js';
import { validationHashTags } from './validation-hash-tags.js';
import { validationComments } from './validation-comments.js';

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

const onEditPopupEscKeyDown = (evt) => onDocumentKeyDown(evt, closeEditPopup);

const onCloseEditPictureButtonClick = () => closeEditPopup();

// Отмена закрытия формы при заполнении полей
const removeCloseHandler = () => {
  if (isFocusElement(hashtagsInput)) {
    document.removeEventListener('keydown', onEditPopupEscKeyDown);
  } else if (isFocusElement(commentsInput)) {
    document.removeEventListener('keydown', onEditPopupEscKeyDown);
  } else {
    document.addEventListener('keydown', onEditPopupEscKeyDown);
  }
};

//Функция открытия окна редактирования загружаемого фото
const openEditPopup = () => {
  editPicturePopup.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onEditPopupEscKeyDown);
  closeEditPictureButton.addEventListener('click', onCloseEditPictureButtonClick);

  removeCloseHandler();
};

uploadPictureInput.addEventListener('change', () => openEditPopup());

// Заполнение полей формы

//Поле ввода хэш-тэгов
hashtagsInput.addEventListener('change', () => validationHashTags());
/*
// Отмена закрытия формы при заполнении полей
hashtagsInput.addEventListener('focus', () => {
  document.removeEventListener('keydown', onEditPopupEscKeyDown);
});

hashtagsInput.addEventListener('blur', () => {
  document.addEventListener('keydown', onEditPopupEscKeyDown);
});
*/
//Поле ввода комментариев
commentsInput.addEventListener('input', () => validationComments());
/*
// Отмена закрытия формы при заполнении поля комментариев
commentsInput.addEventListener('focus', () => {
  document.removeEventListener('keydown', onEditPopupEscKeyDown);
});

commentsInput.addEventListener('blur', () => {
  document.addEventListener('keydown', onEditPopupEscKeyDown);
});*/

export { hashtagsInput, commentsInput };
