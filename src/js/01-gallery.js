// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryRef = document.querySelector('.gallery');
const galleryGrid = galleryItems.map(createItemsMarkup).join('');

galleryRef.innerHTML = galleryGrid;

const lightboxOptions = {
  captions: true,
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionDelay: 250,
};
let gallery = new SimpleLightbox('.gallery a', lightboxOptions);

function createItemsMarkup({ preview, original, description }) {
  return `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
`;
}
