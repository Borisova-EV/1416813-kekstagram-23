import { showErrorSendData } from './error-message.js';
import { showSuccessSendData } from './success-message.js';
import { sendData } from './api.js';
import { closeEditPopup, uploadPictureForm } from './edit-photo-popup.js';

const editPhotoFormSubmit = () => {
  uploadPictureForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    sendData(
      () => showSuccessSendData(),
      () => showErrorSendData(),
      new FormData(evt.target),
      () => closeEditPopup(),
    );
  });
};

export { editPhotoFormSubmit };
