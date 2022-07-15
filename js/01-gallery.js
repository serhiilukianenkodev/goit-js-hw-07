import { galleryItems } from './gallery-items.js';
// Change code below this line

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

    createModal(largeImgRef)
  
}

function createModal(url){
      const instance = basicLightbox.create(`
    <div class="modal">
      <img src=${url} style = 'width: 70vw'>
    </div>
`)

instance.show()
document.addEventListener("keydown", onKeydown);
  
  function onKeydown( { key  }){
        if (key === 'Escape'){
        instance.close()
        document.removeEventListener("keydown", onKeydown)
        }
  }
}

