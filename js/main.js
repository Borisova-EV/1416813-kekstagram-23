// Импорт модулей
import { createGalleryPhotos } from './create-gallery-photos.js';
import { getData } from './api.js';
import { showAlert } from './utils.js';

getData(createGalleryPhotos, showAlert);
