import { isEscEvent, isFocusElement } from './utils.js';
import { validationHashTags } from './validation-hash-tags.js';
import { validationComments } from './validation-comments.js';

const uploadPictureForm = document.querySelector('.img-upload__form');
const editPicturePopup = uploadPictureForm.querySelector('.img-upload__overlay');
const uploadPictureInput = uploadPictureForm.querySelector('#upload-file');
const closeEditPictureButton = uploadPictureForm.querySelector('#upload-cancel');
const hashtagsInput = uploadPictureForm.querySelector('.text__hashtags');
const commentsInput = uploadPictureForm.querySelector('.text__description');

const onDocumentKeydown = (evt) => {
  if (isEscEvent(evt) && !(isFocusElement(hashtagsInput)) && !(isFocusElement(commentsInput))) {
    evt.preventDefault();
    // eslint-disable-next-line no-use-before-define
    closeEditPopup();
  }
};

// eslint-disable-next-line no-use-before-define
const onCloseEditPictureButtonClick = () => closeEditPopup();

//Функция закрытия окна редактирования загружаемого фото
function closeEditPopup() {
  editPicturePopup.classList.add('hidden');
  document.body.classList.remove('modal-open');
  uploadPictureInput.value = '';
  hashtagsInput.value = '';
  commentsInput.value = '';
  document.removeEventListener('keydown', onDocumentKeydown);
  closeEditPictureButton.removeEventListener('click', onCloseEditPictureButtonClick);
}

//Функция открытия окна редактирования загружаемого фото
const openEditPopup = () => {
  editPicturePopup.classList.remove('hidden');
  document.body.classList.add('modal-open');

  hashtagsInput.addEventListener('change', () => validationHashTags());

  commentsInput.addEventListener('input', () => validationComments());

  document.addEventListener('keydown', onDocumentKeydown);
  closeEditPictureButton.addEventListener('click', onCloseEditPictureButtonClick);
};

export { hashtagsInput, commentsInput,uploadPictureInput, openEditPopup};
