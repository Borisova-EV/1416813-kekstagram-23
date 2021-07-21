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

const sendData = (onSuccess, onFail, body, onFinally) => {
  fetch(Url.SERVER,
    {
      method: 'POST',
      body: body,

    })
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => onFail())
    .finally(() => onFinally());
};

export { getData, sendData };
