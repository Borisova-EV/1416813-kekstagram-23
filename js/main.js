// Количество фото
const MIN_AMOUNT_PHOTO = 1;
const MAX_AMOUNT_PHOTO = 25;

// Количество лайков
const MIN_AMOUNT_LIKE = 15;
const MAX_AMOUNT_LIKE = 200;

// Количество комментариев
const FIRST_COMMENT = 1;
const LAST_COMMENT = 3;

// Идентификатор аватарок пользователей
const FIRST_AVATAR = 1;
const LAST_AVATAR = 6;

// Массив с комментариями
const descriptionComments = [];

// Итоговый массив фото
const Photos = [];

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
function createDescriptionComments(numberComment) {
  return {
    id: numberComment,
    avatar: `img/avatar-${getRandomNumber(FIRST_AVATAR, LAST_AVATAR)}.svg`,
    message: getRandomElementArray(COMMENT_MESSAGES),
    name: getRandomElementArray(NAME_USERS),
  };
}

// Создание массива объектов с комментариями
for (let int = FIRST_COMMENT; int <= LAST_COMMENT; int++) {
  descriptionComments[int] = createDescriptionComments(int);
}

// Функция создания объекта с фото
function createDescriptionPhotos(numberPhoto) {
  return {
    id: numberPhoto,
    url: `photos/${numberPhoto}.jpg`,
    description: 'Новое фото пользователя',
    likes: getRandomNumber(MIN_AMOUNT_LIKE, MAX_AMOUNT_LIKE),
    comments: descriptionComments,
  };
}

// Создание массива объектов с Фото
for (let int = MIN_AMOUNT_PHOTO; int <= MAX_AMOUNT_PHOTO; int++) {
  Photos[int] = createDescriptionPhotos(int);
}
