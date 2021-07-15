import { inputScaleValue } from './form.js';

const photoPreviewContainer = document.querySelector('.img-upload__preview');
const photoPreview = photoPreviewContainer.querySelector('img');

let scalePercent = 100;

const changeScalePhoto = () => {
  const value = scalePercent / 100;
  photoPreview.style.transform = `scale(${value})`;
};

const decreaseScale = () => {
  if (scalePercent !== 25) {
    scalePercent -= 25;
  }
};

const increaseScale = () => {
  if (scalePercent !== 100) {
    scalePercent += 25;
  }
};

const changeValueInputScale = () => inputScaleValue.value = `${scalePercent}%`;

export { decreaseScale, changeValueInputScale, changeScalePhoto, increaseScale, photoPreview };
