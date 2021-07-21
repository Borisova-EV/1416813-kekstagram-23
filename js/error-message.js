import { isEscEvent } from './utils.js';
import { closeEditPopup } from './edit-photo-popup.js';

const ALERT_SHOW_TIME = 8000;

const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const errorPopup = errorTemplate.cloneNode(true);
const closeErrorPopupButton = errorPopup.querySelector('.error__button');
const errorContainer = errorPopup.querySelector('.error__inner');

const showErrorGetData = () => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'fixed';
  alertContainer.style.top = 0;
  alertContainer.style.left = 0;
  alertContainer.style.width = '100%';
  alertContainer.style.height = '100%';
  alertContainer.style.fontSize = '20px';
  alertContainer.style.lineHeight = '2em';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'rgba(220, 220, 220, 0.9)';

  const titleAlert = document.createElement('h2');
  titleAlert.style.color = '#8B0000';
  titleAlert.textContent = 'Ошибка загрузки';
  alertContainer.appendChild(titleAlert);

  const text1 = document.createElement('p');
  text1.style.color = '#D2691E';
  text1.textContent = 'При загрузке данных с сервера произошла ошибка.';
  alertContainer.append(text1);

  const text2 = document.createElement('p');
  text2.style.color = '#D2691E';
  text2.textContent = 'Проверьте сетевое подключение, обновите страницу или попробуйте позже.';
  alertContainer.append(text2);

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const onCloseErrorPopupButtonClick = () => closeErrorSendData();

const onDocumentKeydown = (evt) => {
  if (isEscEvent) {
    evt.preventDefault();
    closeErrorSendData();
  }
};

const onDocumentClick = (evt) => {
  if (evt.target !== errorContainer) {
    closeErrorSendData();
  }
};

function closeErrorSendData() {
  errorPopup.classList.add('hidden');
  closeErrorPopupButton.removeEventListener('click', onCloseErrorPopupButtonClick);
  document.removeEventListener('keydown', onDocumentKeydown);
  document.removeEventListener('click', onDocumentClick);
}

const showErrorSendData = () => {
  closeEditPopup();
  document.body.append(errorPopup);
  closeErrorPopupButton.addEventListener('click', onCloseErrorPopupButtonClick);
  document.addEventListener('keydown', onDocumentKeydown);

  document.addEventListener('click', onDocumentClick);
};

export { showErrorGetData, showErrorSendData };
