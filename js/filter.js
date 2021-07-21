const filtersContainer = document.querySelector('.img-filters');
const filterDefaultButton = filtersContainer.querySelector('#filter-default');
const filterRandomButton = filtersContainer.querySelector('#filter-random');
const filterDiscussedButton = filtersContainer.querySelector('#filter-discussed');

const changeFilter = (evt) => {
  if (evt.target.matches === '.img-filters__button') {
    filtersContainer.addEventListener('click', onfiltersContainerClick);
  }
};

