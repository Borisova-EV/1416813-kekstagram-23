function getRandomNumber (minNumber, maxNumber) {
  if (maxNumber > minNumber) {
    minNumber = Math.ceil(minNumber);
    maxNumber = Math.floor(maxNumber);
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
  }
  const error  = 'Введите другие числа';
  return error;
}
getRandomNumber ();

function checkStringLength (nameString, maxValue) {
  return nameString.length < maxValue;
}
checkStringLength ();
