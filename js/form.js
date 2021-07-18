import { isEscEvent, isFocusElement } from './utils.js';
import { validationHashTags } from './validation-hash-tags.js';
import { validationComments } from './validation-comments.js';
import { decreaseScale, changeValueInputScale, changeScalePhoto, increaseScale } from './change-scale.js';
import { changeEffectPhoto, effectInputRadioContainer, noEffectPhoto } from './change-effect.js';

const uploadPictureForm = document.querySelector('.img-upload__form');
const editPicturePopup = uploadPictureForm.querySelector('.img-upload__overlay');
const uploadPictureInput = uploadPictureForm.querySelector('#upload-file');
const closeEditPictureButton = uploadPictureForm.querySelector('#upload-cancel');
const hashtagsInput = uploadPictureForm.querySelector('.text__hashtags');
const commentsInput = uploadPictureForm.querySelector('.text__description');
const smallerScaleButton = uploadPictureForm.querySelector('.scale__control--smaller');
const biggerScaleButton = uploadPictureForm.querySelector('.scale__control--bigger');
const inputScaleValue = uploadPictureForm.querySelector('.scale__control--value');

const onDocumentKeydown = (evt) => {
  if (isEscEvent(evt) && !(isFocusElement(hashtagsInput)) && !(isFocusElement(commentsInput))) {
    evt.preventDefault();
    closeEditPopup();
  }
};

const onCloseEditPictureButtonClick = () => closeEditPopup();

const onHashtagsInputChange = () => validationHashTags();

const onCommentsInputInput = () => validationComments();

const onSmallerScaleButtonClick = () => {
  decreaseScale();
  changeValueInputScale();
  changeScalePhoto();
};

const onBiggerScaleButtonClick = () => {
  increaseScale();
  changeValueInputScale();
  changeScalePhoto();
};

const onEffectInputRadioChange = (evt) => {
  if (evt.target.matches('input[type="radio"]')) {
    changeEffectPhoto(evt);
  }
};

//Функция закрытия окна редактирования загружаемого фото
function closeEditPopup() {
  editPicturePopup.classList.add('hidden');
  document.body.classList.remove('modal-open');
  uploadPictureInput.value = '';
  hashtagsInput.value = '';
  commentsInput.value = '';

  hashtagsInput.removeEventListener('change', onHashtagsInputChange);

  commentsInput.removeEventListener('input', onCommentsInputInput);

  smallerScaleButton.removeEventListener('click', onSmallerScaleButtonClick);
  biggerScaleButton.removeEventListener('click', onBiggerScaleButtonClick);

  effectInputRadioContainer.removeEventListener('change', onEffectInputRadioChange);

  document.removeEventListener('keydown', onDocumentKeydown);
  closeEditPictureButton.removeEventListener('click', onCloseEditPictureButtonClick);

}

//Функция открытия окна редактирования загружаемого фото
const openEditPopup = () => {
  editPicturePopup.classList.remove('hidden');
  document.body.classList.add('modal-open');

  hashtagsInput.addEventListener('change', onHashtagsInputChange);

  commentsInput.addEventListener('input', onCommentsInputInput);

  inputScaleValue.value = '100%';
  smallerScaleButton.addEventListener('click', onSmallerScaleButtonClick);
  biggerScaleButton.addEventListener('click', onBiggerScaleButtonClick);

  effectInputRadioContainer.addEventListener('change', onEffectInputRadioChange);

  noEffectPhoto();

  document.addEventListener('keydown', onDocumentKeydown);
  closeEditPictureButton.addEventListener('click', onCloseEditPictureButtonClick);
};

export { uploadPictureInput, hashtagsInput, commentsInput, inputScaleValue, openEditPopup };

