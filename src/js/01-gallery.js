// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const imagesMarkup = createImagesMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', imagesMarkup);
galleryContainer.addEventListener('click', onImageClick);

function createImagesMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
        <a
          class="gallery__link"
          href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"/>
        </a>
      </div>`;
    })
    .join('');
}

function onImageClick(evt) {
  evt.preventDefault();
  const target = evt.target;
  if (target.nodeName !== 'IMG') {
    return;
  }
  console.log(target);
}

console.log(galleryItems);

galleryContainer.addEventListener('click', onImgClick);
const instance = basicLightbox.create(`<img class="modal-img" src="">`, {
  onShow: instance => {
    window.addEventListener('keydown', onEscClick);
  },

  onClose: instance => {
    window.removeEventListener('keydown', onEscClick);
  },
});

function onImgClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  instance.element().querySelector('img').src = evt.target.dataset.source;

  instance.show();
}

function onEscClick(evt) {
  if (evt.key === 'Escape') {
    instance.close();
    return;
  }
}
console.log(galleryItems);
