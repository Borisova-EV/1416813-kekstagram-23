// Импорт модулей
import { createPhotos } from './create-photos.js';
import { createGalleryPhotos } from './create-gallery-photos.js';
import './form.js';

const photos = createPhotos();
createGalleryPhotos(photos);
