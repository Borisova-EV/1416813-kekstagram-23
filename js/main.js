// Импорт модулей
import { createPhotos } from './create-photos.js';
import { createGalleryPhotos } from './create-gallery-photos.js';
import { uploadPictureInput, openEditPopup } from './form.js';

const photos = createPhotos();
createGalleryPhotos(photos);

uploadPictureInput.addEventListener('change', () => openEditPopup());
