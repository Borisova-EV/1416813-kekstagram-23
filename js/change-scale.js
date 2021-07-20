import { inputScaleValue, smallerScaleButton, biggerScaleButton } from './form.js';
import { disableButton } from './utils.js';

const Scale = {
  MIN_VALUE: 25,
  MAX_VALUE: 100,
  STEP_CHANGE: 25,
};

const photoPreviewContainer = document.querySelector('.img-upload__preview');


let scalePercent = Scale.MAX_VALUE;

const changeScalePhoto = () => {
  const value = scalePercent / 100;
  photoPreviewContainer.style.transform = `scale(${value})`;
};

const decreaseValueScale = () => {
  if (scalePercent !== Scale.MIN_VALUE) {
    scalePercent -= Scale.STEP_CHANGE;
  } else {
    disableButton(smallerScaleButton);
  }
};

const increaseValueScale = () => {
  if (scalePercent !== Scale.MAX_VALUE) {
    scalePercent += Scale.STEP_CHANGE;
  } else {
    disableButton(biggerScaleButton);
  }
};

const changeValueInputScale = () => inputScaleValue.value = `${scalePercent}%`;

const increaseScale = () => {
  increaseValueScale();
  changeValueInputScale();
  changeScalePhoto();
};

const decreaseScale = () => {
  decreaseValueScale();
  changeValueInputScale();
  changeScalePhoto();
};

export { decreaseScale, increaseScale };
