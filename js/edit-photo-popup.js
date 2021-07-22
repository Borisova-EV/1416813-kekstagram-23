import { isEscEvent, isFocusElement, hideElement, showElement } from './utils.js';
import { validationHashTags } from './validation-hash-tags.js';
import { validationComments } from './validation-comments.js';
import { decreaseScale, increaseScale } from './change-scale.js';
import { changeEffectPhoto, effectInputRadioContainer, removeEffectPhoto } from './change-effect.js';
import { editPhotoFormSubmit } from './form-submit.js';

const START_VALUE_EFFECT = '100%';

const uploadPictureForm = document.querySelector('.img-upload__form');
const editPicturePopup = uploadPictureForm.querySelector('.img-upload__overlay');
const uploadPictureInput = uploadPictureForm.querySelector('#upload-file');
const closeEditPictureButton = uploadPictureForm.querySelector('#upload-cancel');
const hashtagsInput = uploadPictureForm.querySelector('.text__hashtags');
const commentsInput = uploadPictureForm.querySelector('.text__description');
const smallerScaleButton = uploadPictureForm.querySelector('.scale__control--smaller');
const biggerScaleButton = uploadPictureForm.querySelector('.scale__control--bigger');
const inputScale = uploadPictureForm.querySelector('.scale__control--value');

const onDocumentKeydown = (evt) => {
  if (isEscEvent(evt) && !(isFocusElement(hashtagsInput)) && !(isFocusElement(commentsInput))) {
    evt.preventDefault();
    closeEditPopup();
  }
};

const onCloseEditPictureButtonClick = () => closeEditPopup();

const onHashtagsInputChange = () => validationHashTags();

const onCommentsInputInput = () => validationComments();

const onSmallerScaleButtonClick = () => decreaseScale();

const onBiggerScaleButtonClick = () => increaseScale();

const onEffectInputRadioContainerChange = (evt) => {
  if (evt.target.matches('input[type="radio"]')) {
    changeEffectPhoto(evt.target.value);
  }
};

//Функция закрытия окна редактирования загружаемого фото
function closeEditPopup() {
  hideElement(editPicturePopup);

  document.body.classList.remove('modal-open');

  uploadPictureForm.reset();

  hashtagsInput.removeEventListener('change', onHashtagsInputChange);

  commentsInput.removeEventListener('input', onCommentsInputInput);

  smallerScaleButton.removeEventListener('click', onSmallerScaleButtonClick);
  biggerScaleButton.removeEventListener('click', onBiggerScaleButtonClick);

  effectInputRadioContainer.removeEventListener('change', onEffectInputRadioContainerChange);

  document.removeEventListener('keydown', onDocumentKeydown);
  closeEditPictureButton.removeEventListener('click', onCloseEditPictureButtonClick);

}

//Функция открытия окна редактирования загружаемого фото
const openEditPopup = () => {
  showElement(editPicturePopup);

  document.body.classList.add('modal-open');

  inputScale.value = START_VALUE_EFFECT;

  removeEffectPhoto();

  hashtagsInput.addEventListener('change', onHashtagsInputChange);

  commentsInput.addEventListener('input', onCommentsInputInput);

  smallerScaleButton.addEventListener('click', onSmallerScaleButtonClick);
  biggerScaleButton.addEventListener('click', onBiggerScaleButtonClick);

  effectInputRadioContainer.addEventListener('change', onEffectInputRadioContainerChange);

  editPhotoFormSubmit();

  document.addEventListener('keydown', onDocumentKeydown);
  closeEditPictureButton.addEventListener('click', onCloseEditPictureButtonClick);
};

export { uploadPictureForm, uploadPictureInput, commentsInput, hashtagsInput, closeEditPopup, openEditPopup, inputScale, biggerScaleButton, smallerScaleButton };

