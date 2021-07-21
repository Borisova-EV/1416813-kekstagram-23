import { picturesContainer, createGalleryPhotos } from './create-gallery-photos.js';
import { getRandomElementArray } from './utils.js';

const AMOUNT_RANDOM_PHOTOS = 10;
const NUMBER_OF_PERMANENT_ELEMENTS = 2;

const filtersContainer = document.querySelector('.img-filters');
const filterForm = filtersContainer.querySelector('.img-filters__form');
const filterButtons = filtersContainer.querySelectorAll('.img-filters__button');

let filterPhotos = [];

const createSortByCommentsPhotos = (data) => {
  filterPhotos = data.slice().sort( (a, b) => b.comments.length - a.comments.length);
  return filterPhotos;
};

const createRandomPhotos = (data) => {
  for (let i = 0; filterPhotos.length < AMOUNT_RANDOM_PHOTOS; i++) {
    const randomElement = getRandomElementArray(data);
    if (!filterPhotos.includes(randomElement)) {
      filterPhotos.push(randomElement);
    }
  }
  return filterPhotos;
};


const changeFilter = (data) => {
  filtersContainer.classList.remove('img-filters--inactive');
  filterForm.addEventListener('click', (evt) => {
    if (evt.target.matches('#filter-random')) {
      filterPhotos = createRandomPhotos(data);
    } else if (evt.target.matches('#filter-discussed')) {
      filterPhotos = createSortByCommentsPhotos(data);
    } else {
      filterPhotos = data;
    }
    filterButtons.forEach( (elem) => elem.classList.remove('img-filters__button--active'));
    evt.target.classList.add('img-filters__button--active');
    let i = picturesContainer.children.length - 1;
    while (i > NUMBER_OF_PERMANENT_ELEMENTS) {
      picturesContainer.children[i].remove();
      i--;
    }
    createGalleryPhotos(filterPhotos);
  });
};

export { changeFilter };
