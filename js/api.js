const Url = {
  SERVER: ' https://23.javascript.pages.academy/kekstagram ',
  DATA: 'https://23.javascript.pages.academy/kekstagram/data',
};

const getData = (onSuccess, onFail) => {
  fetch(Url.DATA)
    .then((response) => response.json())
    .then((photos) => onSuccess(photos))
    .catch(() => onFail());
};

export { getData };
