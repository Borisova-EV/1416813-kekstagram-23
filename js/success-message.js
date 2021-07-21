import { isEscEvent } from './utils.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const successPopup = successTemplate.cloneNode(true);
const closeSuccessPopupButton = successPopup.querySelector('.success__button');
const successContainer = successPopup.querySelector('.success__inner');

const onCloseSuccessPopupButtonClick = () => closeSuccessSendData();

const onDocumentKeydown = (evt) => {
  if (isEscEvent) {
    evt.preventDefault();
    closeSuccessSendData();
  }
};

const onDocumentClick = (evt) => {
  if (evt.target !== successContainer) {
    closeSuccessSendData();
  }
};

function closeSuccessSendData() {
  successPopup.classList.add('hidden');
  closeSuccessPopupButton.removeEventListener('click', onCloseSuccessPopupButtonClick);
  document.removeEventListener('keydown', onDocumentKeydown);
  document.removeEventListener('click', onDocumentClick);
}

const showSuccessSendData = () => {
  document.body.append(successPopup);
  successPopup.classList.remove('hidden');
  closeSuccessPopupButton.addEventListener('click', onCloseSuccessPopupButtonClick);
  document.addEventListener('keydown', onDocumentKeydown);
  document.addEventListener('click', onDocumentClick);
};

export { showSuccessSendData };
