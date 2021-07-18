import { photoPreview } from './change-scale.js';

const effectValueLevelInput = document.querySelector('.effect-level__value');
const effectInputRadioContainer = document.querySelector('.effects__list');
const effectLevelSlider = document.querySelector('.effect-level__slider');

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

const updateSlider = (minValue, maxValue, stepValue) => {
  effectLevelSlider.noUiSlider.updateOptions({
    range: {
      min: minValue,
      max: maxValue,
    },
    start: maxValue,
    step: stepValue,
  });
  effectLevelSlider.noUiSlider.set(maxValue);
};

const changeLevelEffect = (effect) => {
  effectLevelSlider.noUiSlider.on('update', (values) => {
    effectValueLevelInput.value = values;
    let nameFilter;
    if (effect === 'chrome') {
      nameFilter = `grayscale(${values})`;
    } else if (effect === 'sepia') {
      nameFilter = `sepia(${values})`;
    } else if (effect === 'marvin') {
      nameFilter = `invert(${values}%)`;
    } else if (effect === 'phobos') {
      nameFilter = `blur(${values}px)`;
    } else if (effect === 'heat') {
      nameFilter = `brightness(${values})`;
    } else {
      nameFilter = '';
    }
    photoPreview.style.filter = nameFilter;
  });
};

const noEffectPhoto = () => {
  effectLevelSlider.classList.add('hidden');
  photoPreview.style.filter = '';
  photoPreview.className = '';
};

const changeEffectPhoto = (evt) => {
  const effect = evt.target.value;
  if (effect === 'none') {
    noEffectPhoto();
  } else {
    effectLevelSlider.classList.remove('hidden');
    photoPreview.className = '';
    photoPreview.classList.add(`effects__preview--${effect}`);
    const options = OPTIONS_SLIDERS.find((elem) => elem.title === effect);
    updateSlider(options.min, options.max, options.step);
    changeLevelEffect(effect);
  }
};

export { changeEffectPhoto, effectInputRadioContainer, noEffectPhoto };
