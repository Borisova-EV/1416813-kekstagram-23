// Идентификатор описания фото id
const FIRST_ID =  1;
const  LAST_ID = 25;

// Количество лайков
const MIN_AMOUNT_LIKE = 15;
const MAX_AMOUNT_LIKE = 200;

// Идентификатор комментариев
const FIRST_ID_COMMENT = 1;
const LAST_ID_COMMENT = 3;

// Идентификатор аватарок пользователей
const FIRST_AVATAR = 1;
const LAST_AVATAR =6;

// Количество комментариев
const AMOUNT_COMMENT = 3;

// Количество итоговых массивов с описанием фото
const AMOUNT_DESCRIPTION_PHOTO = 25;

// Массив со случайными не повторяющимися числами для id
const RANDOM_ORIGINAL_NUMBERS = [];

// Массив с комментариями
const COMMENT_MESSAGES =
[
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

// Массив с именами
const NAME_USERS =
[
  'Земфира Рамазанова',
  'Диана Арбенина',
  'Илья Лагутенко',
  'Андрей Лысиков',
];

// Функция нахождения случайного числа из диапазона
function getRandomNumber(firstNumber, secondNumber) {
  const lower = Math.ceil(Math.min(Math.abs(firstNumber), Math.abs(secondNumber)));
  const upper = Math.floor(Math.max(Math.abs(firstNumber), Math.abs(secondNumber)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

// Функция проверки длинны строки
function checkStringLength(nameString, maxValue) {
  return nameString.length <= maxValue;
}
checkStringLength('comment', 140);

// Функция нахождения случайного элемента из массива
function getRandomElementArray (array) {
  const randomElementIndex = getRandomNumber(0, array.length);
  return array[randomElementIndex];
}

// Генерация случайного неповторяющегося числа для нахождения id фото
const getRandomOriginalNumber = function (array) {
  const numberIndex = getRandomNumber(FIRST_ID, LAST_ID);
  if (array.indexOf(numberIndex) === -1) {
    array.push(numberIndex);
  }
  getRandomOriginalNumber(array);
};

// Описание комментария
function createCommentDescription () {
  return {
    id: getRandomNumber(FIRST_ID_COMMENT,LAST_ID_COMMENT),
    avatar: `img/avatar-${  getRandomNumber(FIRST_AVATAR, LAST_AVATAR)  }.svg`,
    message: getRandomElementArray(COMMENT_MESSAGES),
    name: getRandomElementArray(NAME_USERS),
  };
}
const commentsDescription = new Array(AMOUNT_COMMENT).fill(null).map(() => createCommentDescription());

// Описание добавленного фото
function createDescriptionPhoto () {
  return {
    id: getRandomOriginalNumber(RANDOM_ORIGINAL_NUMBERS),
    url: `photos/${  getRandomOriginalNumber(RANDOM_ORIGINAL_NUMBERS)  }.jpg`,
    description: 'Новое фото пользователя',
    likes: getRandomNumber(MIN_AMOUNT_LIKE, MAX_AMOUNT_LIKE),
    comments: commentsDescription,
  };
}

// Создание итоговых массивов объектов
function createDescriptionPhotos () {
  return new Array(AMOUNT_DESCRIPTION_PHOTO).fill(null).map(() => createDescriptionPhoto());
}
createDescriptionPhotos ();
