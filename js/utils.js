const HIDING_CLASS = 'hidden';
const DISABLE_ATTRIBUTE = 'disabled';
const ALERT_SHOW_TIME = 8000;

// Функция нахождения случайного числа из диапазона
const getRandomNumber = (firstNumber, secondNumber) => {
  const lower = Math.ceil(Math.min(Math.abs(firstNumber), Math.abs(secondNumber)));
  const upper = Math.floor(Math.max(Math.abs(firstNumber), Math.abs(secondNumber)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Функция проверки длинны строки
const checkStringLength = (nameString, maxValue) => nameString.length > maxValue;

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

//Функция проверки фокусированного элемента
const isFocusElement = (elem) => elem === document.activeElement;


const hideElement = (elem) => elem.classList.add(HIDING_CLASS);

const showElement = (elem) => elem.classList.remove(HIDING_CLASS);

const disableButton = (button) => button.setAttribute(DISABLE_ATTRIBUTE, DISABLE_ATTRIBUTE);

const activateButton = (button) => button.removeAttribute(DISABLE_ATTRIBUTE);

const showAlert = () => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'fixed';
  alertContainer.style.top = 0;
  alertContainer.style.left = 0;
  alertContainer.style.width = '100%';
  alertContainer.style.height = '100%';
  alertContainer.style.fontSize = '20px';
  alertContainer.style.lineHeight = '2em';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'rgba(220, 220, 220, 0.9)';

  const titleAlert = document.createElement('h2');
  titleAlert.style.color = '#8B0000';
  titleAlert.textContent = 'Ошибка загрузки';
  alertContainer.appendChild(titleAlert);

  const text1 = document.createElement('p');
  text1.style.color = '#D2691E';
  text1.textContent = 'При загрузке данных с сервера произошла ошибка.';
  alertContainer.append(text1);

  const text2 = document.createElement('p');
  text2.style.color = '#D2691E';
  text2.textContent = 'Проверьте сетевое подключение, обновите страницу или попробуйте позже.';
  alertContainer.append(text2);

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export { getRandomNumber, getRandomElementArray, checkStringLength, createNewElement, isEscEvent, isFocusElement, showAlert, hideElement, disableButton, activateButton, showElement };
