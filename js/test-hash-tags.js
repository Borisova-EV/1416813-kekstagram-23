import { hashtagsInput, AMOUNT_HASH_TAGS } from './form.js';

// запись хештегов в массив
const createHashTags = () => hashtagsInput.value.split(' ');


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
  return duplicates.length >= 1;
};

// Проверка на количество хеш-тегов
const isTooMushHashTags = () => createHashTags().length > AMOUNT_HASH_TAGS;

export { createHashTags, matchingPattern, isDuplicate, isTooMushHashTags };
