const comment = document.querySelector('.social__footer-text');

function getRandomNumber(minNumber, maxNumber) {
  if (maxNumber > minNumber && maxNumber > 0 && minNumber >= 0) {
    minNumber = Math.ceil(minNumber);
    maxNumber = Math.floor(maxNumber);
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
  }
  const error = 'Введите другие числа';
  return error;
}
getRandomNumber(1, 8);

function checkStringLength(nameString, maxValue) {
  return nameString.length <= maxValue;
}
checkStringLength(comment, 140);
