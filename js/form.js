import { isEscEvent } from './utils.js';

const uploadPictureForm = document.querySelector('.img-upload__form');
const editPicturePopup = uploadPictureForm.querySelector('.img-upload__overlay');
const uploadPictureInput = uploadPictureForm.querySelector('#upload-file');
const closeEditPictureButton = uploadPictureForm.querySelector('#upload-cancel');
const hashtagsInput = uploadPictureForm.querySelector('.text__hashtags');

//Функция закрытия окна редактирования загружаемого фото
const closeEditPopup = () => {
  editPicturePopup.classList.add('hidden');
  document.body.classList.remove('modal-open');
  uploadPictureInput.value = '';
};


const onEditPopupEscKeyDown = (evt) => {
  if (isEscEvent ()) {
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
// запись хештегов в массив
const createHashTags = () => hashtagsInput.value.split(' ');

//Проверка написания хештегов по регулярному выражению
const hashtagTemplate = /^#[A-Za-zА-Яа-я0-9]{1,19}$/;

const matchingPattern = () => {
  createHashTags().forEach((elem) => hashtagTemplate.test(elem));
};

// Проверка на дублирование
const isDuplicate = () => {
  const lowerCaseHashTags = createHashTags().map((elem) => elem.toLowerCase());
  lowerCaseHashTags.sort();
  const duplicates = lowerCaseHashTags.filter((item, index) =>
    item === lowerCaseHashTags[index + 1]);
  return duplicates.length >= 1;
};

hashtagsInput.addEventListener('change', () => {
  if (!matchingPattern()) {
    hashtagsInput.setCustomValidity('Проверьте правильность написания хештегов: хештег должен начинаться с # и содержать только буквы и числа');
  } else {
    hashtagsInput.setCustomValidity('');
  }
  if (isDuplicate()) {
    hashtagsInput.setCustomValidity('Один и тот же хэш-тег не может быть использован дважды');
  } else {
    hashtagsInput.setCustomValidity('');
  }

});

