import { hideElement, showElement } from './utils.js';

const effectLevelContainer = document.querySelector('.effect-level');
const effectValueLevelInput = effectLevelContainer.querySelector('.effect-level__value');
const effectInputRadioContainer = document.querySelector('.effects__list');
const effectLevelSlider = effectLevelContainer.querySelector('.effect-level__slider');
const photoPreview = document.querySelector('img');

const OPTIONS_SLIDERS = [
  {
    title: 'chrome',
    min: 0,
    max: 1,
    start: 1,
    step: 0.1,
  },
  {
    title: 'sepia',
    min: 0,
    max: 1,
    start: 1,
    step: 0.1,
  },
  {
    title: 'marvin',
    min: 0,
    max: 100,
    start: 100,
    step: 1,
  },
  {
    title: 'phobos',
    min: 0,
    max: 3,
    start: 3,
    step: 0.1,
  },
  {
    title: 'heat',
    min: 1,
    max: 3,
    start: 3,
    step: 0.1,
  },
];
noUiSlider.create(effectLevelSlider, {
  range: {
    min: 0,
    max: 1,
  },
  start: 0,
  step: 0.1,
  connect: 'lower',
});

const updateSlider = ({ min, max, step }) => {
  effectLevelSlider.noUiSlider.updateOptions({
    range: {
      min: min,
      max: max,
    },
    start: max,
    step: step,
  });
  effectLevelSlider.noUiSlider.set(max);
};

const changeValueInputEffect = (value) => effectValueLevelInput.value = value;

const changeLevelEffect = (effect) => {
  effectLevelSlider.noUiSlider.on('update', (values) => {
    changeValueInputEffect(values);
    let nameFilter;
    switch (effect) {
      case 'chrome':
        nameFilter = `grayscale(${values})`;
        break;
      case 'sepia':
        nameFilter = `sepia(${values})`;
        break;
      case 'marvin':
        nameFilter = `invert(${values}%)`;
        break;
      case 'phobos':
        nameFilter = `blur(${values}px)`;
        break;
      case 'heat':
        nameFilter = `brightness(${values})`;
        break;
      default:
        nameFilter = '';
    }
    photoPreview.style.filter = nameFilter;
  });
};

const removeEffectPhoto = () => {
  hideElement(effectLevelContainer);
  photoPreview.style.filter = '';
  photoPreview.className = '';
};

const changeEffectPhoto = (evt) => {
  const effect = evt.target.value;
  if (effect === 'none') {
    removeEffectPhoto();
  } else {
    showElement(effectLevelContainer);
    photoPreview.className = '';
    photoPreview.classList.add(`effects__preview--${effect}`);
    const options = OPTIONS_SLIDERS.find((elem) => elem.title === effect);
    updateSlider(options);
    changeLevelEffect(effect);
  }
};

export { changeEffectPhoto, effectInputRadioContainer, removeEffectPhoto };
