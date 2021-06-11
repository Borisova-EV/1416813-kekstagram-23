// Количество фото
const AMOUNT_PHOTOS = 25;

// Количество лайков
const MIN_AMOUNT_LIKE = 15;
const MAX_AMOUNT_LIKE = 200;

// Количество комментариев
const MAX_AMOUNT_COMMENTS = 15;

// Идентификатор аватарок пользователей
const MIN_AVATAR_IMAGE_NUMBER = 1;
const MAX_AVATAR_IMAGE_NUMBER = 6;

// Итоговый массив фото
const photos = [];

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
function getRandomElementArray(array) {
  const randomElementIndex = getRandomNumber(0, array.length - 1);
  return array[randomElementIndex];
}

// Функция создания объекта с комментариями
function createComment(numberComment) {
  return {
    id: numberComment,
    avatar: `img/avatar-${getRandomNumber(MIN_AVATAR_IMAGE_NUMBER, MAX_AVATAR_IMAGE_NUMBER)}.svg`,
    message: getRandomElementArray(COMMENT_MESSAGES),
    name: getRandomElementArray(NAME_USERS),
  };
}

// Создание массива объектов с комментариями
function createComments() {
  const comments = [];
  const amountComments = getRandomNumber(0, MAX_AMOUNT_COMMENTS); //хотела объявить с помощью let но линтер дает ошибку
  for (let i = 0; i < amountComments; i++) {
    comments[i] = createComment(i + 1);
  }
  return comments;
}

// Функция создания объекта с фото
function createPhoto(numberPhoto) {
  return {
    id: numberPhoto,
    url: `photos/${numberPhoto}.jpg`,
    description: 'Новое фото пользователя',
    likes: getRandomNumber(MIN_AMOUNT_LIKE, MAX_AMOUNT_LIKE),
    comments: createComments(),
  };
}

// Функция создание массива объектов с Фото
function createPhotos() {
  for (let i = 0; i < AMOUNT_PHOTOS; i++) {
    photos[i] = createPhoto(i + 1);
  }
  return photos;
}
createPhotos();
