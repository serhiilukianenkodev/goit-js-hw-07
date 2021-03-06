import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryEl = document.querySelector('.gallery')
const galleryMarkup = createGalleryMarkup(galleryItems)

galleryEl.innerHTML = galleryMarkup

let gallery = new SimpleLightbox('.gallery a', {
	captions: true,
	captionSelector: 'img',
	captionType: 'attr',
	captionsData: 'alt',
	captionPosition: 'bottom',
	captionDelay: 250,
	});

function createGalleryMarkup (gallery){
return gallery.map(({preview, original, description}) => 
`
<li class="gallery__item">        
<a class="gallery__link" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li> `).join('')
}
