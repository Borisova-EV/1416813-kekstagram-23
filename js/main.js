// Импорт модулей
import { createGalleryPhotos } from './create-gallery-photos.js';
import { getData } from './api.js';
import { showErrorGetData } from './error-messages.js';
import { uploadPictureInput, openEditPopup } from './edit-photo-popup.js';
import { changeFilter } from './change-filter.js';


getData((data) => {
  createGalleryPhotos(data);
  changeFilter(data);
}, showErrorGetData);

uploadPictureInput.addEventListener('change', () => openEditPopup());
