// Функция нахождения случайного числа из диапазона
const getRandomNumber = (firstNumber, secondNumber) => {
  const lower = Math.ceil(Math.min(Math.abs(firstNumber), Math.abs(secondNumber)));
  const upper = Math.floor(Math.max(Math.abs(firstNumber), Math.abs(secondNumber)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Функция проверки длинны строки
const checkStringLength = (nameString, maxValue) => nameString.length <= maxValue;

// Функция нахождения случайного элемента из массива
const getRandomElementArray = (array) => {
  const randomElementIndex = getRandomNumber(0, array.length - 1);
  return array[randomElementIndex];
};

//Функция создания нового элемента
const createNewElement = (tagName, className) => {
  const newElement = document.createElement(tagName);
  newElement.classList.add(className);
  return newElement;
};

//Функция проверки нажатия клавиши Esc
const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

export { getRandomNumber, getRandomElementArray, checkStringLength, createNewElement, isEscEvent };
