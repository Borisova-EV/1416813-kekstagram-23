import { uploadPictureInput } from './edit-photo-popup.js';

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const photoPreviewContainer = document.querySelector('.img-upload__preview');
const photoPreview = photoPreviewContainer.querySelector('img');

const isValidationTypeFile = (name) => FILE_TYPES.some((el) => name.endsWith(el));

const showPreviewUnloadedPhoto = () => {
  const file = uploadPictureInput.files[0];
  const fileName = file.name.toLowerCase();
  if (isValidationTypeFile(fileName)) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      photoPreview.src = reader.result;
    });

    reader.readAsDataURL(file);
  }
};

export { photoPreviewContainer, photoPreview, showPreviewUnloadedPhoto };
