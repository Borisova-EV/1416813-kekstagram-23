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
