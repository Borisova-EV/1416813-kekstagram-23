import { inputScaleValue } from './form.js';

const MIN_VALUE_SCALE = 25;
const MAX_VALUE_SCALE = 100;
const STEP_CHANGE_SCALE = 25;

const photoPreviewContainer = document.querySelector('.img-upload__preview');
const photoPreview = photoPreviewContainer.querySelector('img');

let scalePercent = 100;

const changeScalePhoto = () => {
  const value = scalePercent / 100;
  photoPreview.style.transform = `scale(${value})`;
};

const decreaseScale = () => {
  if (scalePercent !== MIN_VALUE_SCALE) {
    scalePercent -= STEP_CHANGE_SCALE;
  }
};

const increaseScale = () => {
  if (scalePercent !== MAX_VALUE_SCALE) {
    scalePercent += STEP_CHANGE_SCALE;
  }
};

const changeValueInputScale = () => inputScaleValue.value = `${scalePercent}%`;

export { decreaseScale, changeValueInputScale, changeScalePhoto, increaseScale, photoPreview };
