const SERVER = 'https://23.javascript.pages.academy/kekstagram';

const getData = (onSuccess, onFail) => {
  fetch(`${SERVER}/data`)
    .then((response) => response.json())
    .then((data) => onSuccess(data))
    .catch(() => onFail());
};

const sendData = (onSuccess, onFail, body, onFinally) => {
  fetch(SERVER,
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
