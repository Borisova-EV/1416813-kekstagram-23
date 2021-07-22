import { hashtagsInput } from './edit-photo-popup.js';

const AMOUNT_HASH_TAGS = 5;

// запись хештегов в массив
const createHashTags = () => hashtagsInput.value.trim().split(' ');


//Проверка написания хештегов по регулярному выражению
const matchingPattern = () => {
  const hashtagTemplate = /^#[A-Za-zА-Яа-я0-9]{1,19}$/;
  return createHashTags().every((elem) => hashtagTemplate.test(elem));
};

// Проверка на дублирование
const isDuplicate = () => {
  const lowerCaseHashTags = createHashTags().map((elem) => elem.toLowerCase());
  lowerCaseHashTags.sort();
  const duplicates = lowerCaseHashTags.filter((item, index) =>
    item === lowerCaseHashTags[index + 1]);
  return duplicates.length > 0;
};

// Проверка на количество хеш-тегов
const isTooMushHashTags = () => createHashTags().length > AMOUNT_HASH_TAGS;

//Валидация поля для заполнения Хештегов
const validationHashTags = () => {
  let border = '';
  let message = '';

  if (!matchingPattern()) {
    border = '5px solid red';
    message = 'Проверьте правильность написания хештегов: хештег должен начинаться с #, содержать только буквы и числа и не превышать 20 символов';
  } else if (isDuplicate()) {
    border = '5px solid red';
    message = 'Один и тот же хэш-тег не может быть использован дважды';
  } else if (isTooMushHashTags()) {
    border = '5px solid red';
    message = `Уменьшите количество хэш-тегов на ${createHashTags().length - AMOUNT_HASH_TAGS}`;
  } else {
    border = '';
    message = '';
  }
  hashtagsInput.style.border = border;
  hashtagsInput.setCustomValidity(message);
};

export { validationHashTags };
