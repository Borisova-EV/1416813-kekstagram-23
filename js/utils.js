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

// Функция нахождения случайного элемента из массива
function getRandomElementArray(array) {
  const randomElementIndex = getRandomNumber(0, array.length - 1);
  return array[randomElementIndex];
}

//Функция создания нового элемента
function createNewElement (tagName, className) {
  const newElement = document.createElement(tagName);
  newElement.classList.add(className);
  return newElement;
}

export { getRandomNumber, getRandomElementArray, checkStringLength,  createNewElement };
