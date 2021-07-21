// Импорт модулей
import { createGalleryPhotos } from './create-gallery-photos.js';
import { getData} from './api.js';
import { showErrorGetData } from './error-messages.js';
import {uploadPictureInput, openEditPopup} from './edit-photo-popup.js';

getData(createGalleryPhotos, showErrorGetData);
uploadPictureInput.addEventListener('change', () => openEditPopup());
