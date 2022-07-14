import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

// Add gallery
const galleryEl = document.querySelector('.gallery')
const galleryMarkup = createGalleryMarkup(galleryItems)

galleryEl.innerHTML = galleryMarkup

galleryEl.addEventListener('click', onGalleryItemClick)


function createGalleryMarkup (gallery){
return gallery.map(({preview, original, description}) => 
`        
<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div> `).join('')
}

function onGalleryItemClick(evt){
    evt.preventDefault()
    const largeImgRef = evt.target.dataset.source

    console.log(largeImgRef);
}
