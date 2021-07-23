import { hideElement, showElement } from './utils.js';
import {photoPreview} from './show-preview-unload-photo.js';

const defaultOptions = {
  min: 0,
  max: 1,
  start: 1,
  step: 0.1,
  connect: 'lower',
};

const styles = [
  {
    title: 'chrome',
    style: 'grayscale',
    units: '',
  }, {
    title: 'sepia',
    style: 'sepia',
    units: '',
  }, {
    title: 'marvin',
    style: 'invert',
    units: '%',
  }, {
    title: 'phobos',
    style: 'blur',
    units: 'px',
  }, {
    title: 'heat',
    style: 'brightness',
    units: '',
  },
];

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

const effectLevelContainer = document.querySelector('.effect-level');
const effectValueLevelInput = effectLevelContainer.querySelector('.effect-level__value');
const effectInputRadioContainer = document.querySelector('.effects__list');
const effectLevelSlider = effectLevelContainer.querySelector('.effect-level__slider');

noUiSlider.create(effectLevelSlider, {
  range: {
    min: defaultOptions.min,
    max: defaultOptions.max,
  },
  start: defaultOptions.start,
  step: defaultOptions.step,
  connect: defaultOptions.connect,
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

const changeLevelEffect = ({ style, units }) => {
  effectLevelSlider.noUiSlider.on('update', (values) => {
    changeValueInputEffect(values);
    const styleFilter = style;
    const filterUnit = units;
    photoPreview.style.filter = `${styleFilter}(${values}${filterUnit})`;
  });
};

const removeEffectPhoto = () => {
  hideElement(effectLevelContainer);
  photoPreview.style.filter = '';
  photoPreview.className = '';
};

const changeEffectPhoto = (value) => {
  const effect = value;
  if (effect === 'none') {
    removeEffectPhoto();
  } else {
    showElement(effectLevelContainer);
    photoPreview.className = '';
    photoPreview.classList.add(`effects__preview--${effect}`);
    const options = OPTIONS_SLIDERS.find((elem) => elem.title === effect);
    updateSlider(options);
    const style = styles.find((elem) => elem.title === effect);
    changeLevelEffect(style);
  }
};

export { changeEffectPhoto, effectInputRadioContainer, removeEffectPhoto };
