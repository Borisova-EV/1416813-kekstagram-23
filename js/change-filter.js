import { picturesContainer, createGalleryPhotos } from './create-gallery-photos.js';
import { getRandomElementArray } from './utils.js';
import { debounce } from './debounce.js';

const AMOUNT_RANDOM_PHOTOS = 10;
const NUMBER_OF_PERMANENT_ELEMENTS = 2;
const TIMEOUT_DELAY = 500;

const filtersContainer = document.querySelector('.img-filters');
const filterForm = filtersContainer.querySelector('.img-filters__form');
const filterButtons = filtersContainer.querySelectorAll('.img-filters__button');

const createSortByCommentsPhotos = (data) => data.slice().sort((a, b) => b.comments.length - a.comments.length);


const createRandomPhotos = (data) => {
  const filterPhotos = [];
  for (let i = 0; filterPhotos.length < AMOUNT_RANDOM_PHOTOS; i++) {
    const randomElement = getRandomElementArray(data);
    if (!filterPhotos.includes(randomElement)) {
      filterPhotos.push(randomElement);
    }
  }
  return filterPhotos;
};

const removePhotos = () => {
  let i = picturesContainer.children.length - 1;
  while (i >= NUMBER_OF_PERMANENT_ELEMENTS) {
    picturesContainer.children[i].remove();
    i--;
  }
};

const useFilter = (evt, data) => {
  if (evt.target.matches('#filter-random')) {
    createGalleryPhotos(createRandomPhotos(data));
  } else if (evt.target.matches('#filter-discussed')) {
    createGalleryPhotos(createSortByCommentsPhotos(data));
  } else {
    createGalleryPhotos(data);
  }
};

const changeFilter = (data) => {
  filtersContainer.classList.remove('img-filters--inactive');

  filterForm.addEventListener('click', (evt) => {
    filterButtons.forEach((elem) => elem.classList.remove('img-filters__button--active'));
    evt.target.classList.add('img-filters__button--active');
    debounce( removePhotos(), TIMEOUT_DELAY);
    debounce( useFilter(evt, data), TIMEOUT_DELAY);
  });
};

export { changeFilter };
