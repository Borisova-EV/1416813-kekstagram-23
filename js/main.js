function getRandomNumber(firstNumber, secondNumber) {
  const lower = Math.ceil(Math.min(Math.abs(firstNumber), Math.abs(secondNumber)));
  const upper = Math.floor(Math.max(Math.abs(firstNumber), Math.abs(secondNumber)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function checkStringLength(nameString, maxValue) {
  return nameString.length <= maxValue;
}
checkStringLength('comment', 140);

// Функция нахождения случайного элемента из массива
function getRandomElementArray (array) {
  const randomElementIndex = Math.floor(Math.random() * (array.length));
  return array[randomElementIndex];
}

// Генерация рандомного неповторяющегося числа
const numberArray = [];
const getRandomOriginalNumber = function (array) {
  const numberIndex = getRandomNumber(1, 25);
  if (array.indexOf(numberIndex) === -1) {
    array.push(numberIndex);
  }
  getRandomOriginalNumber(array);
};

// Массив с комментариями
const COMMENT_MESSAGE =
[
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

// Массив с именами
const NAME_USER =
[
  'Земфира Рамазанова',
  'Диана Арбенина',
  'Илья Лагутенко',
  'Андрей Лысиков',
];

// Описание комментария
function createCommentDescription () {
  return {
    id: getRandomNumber(1,3),
    avatar: `img/avatar-${  getRandomNumber(1, 6)  }.svg`,
    message: getRandomElementArray(COMMENT_MESSAGE),
    name: getRandomElementArray(NAME_USER),
  };
}
const commentsDescription = new Array(3).fill(null).map(() => createCommentDescription());

// Описание добавленного фото
function createDescriptionPhoto () {
  return {
    id: getRandomOriginalNumber(numberArray),
    url: `photos/${  getRandomOriginalNumber(numberArray)  }.jpg`,
    description: 'Новое фото пользователя',
    likes: getRandomNumber(15, 200),
    comments: commentsDescription,
  };
}
const createDescriptionPhotos = new Array(25).fill(null).map(() => createDescriptionPhoto());
createDescriptionPhotos;
