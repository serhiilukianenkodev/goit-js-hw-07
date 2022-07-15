import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery')
const galleryMarkup = createGalleryMarkup(galleryItems)

galleryEl.innerHTML = galleryMarkup

function createGalleryMarkup (gallery){
return gallery.map(({preview, original, description}) => 
`        
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a> `).join('')
}

let gallery = new SimpleLightbox('.gallery a');

gallery.on('show.simplelightbox', function () {
	// do something…
});

console.log(gallery);

gallery.on('error.simplelightbox', function (e) {
	console.log(e); // some usefull information
});