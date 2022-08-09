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
<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li> `).join('')
}

function onGalleryItemClick(evt){
    evt.preventDefault()
    if(evt.target.nodeName !== 'IMG') return;
    const largeImgRef = evt.target.dataset.source

    createModal(largeImgRef)
}

function createModal(url){
      const instance = basicLightbox.create(`
      <img src=${url} width="800" height="600">`, 
      {onShow: () => document.addEventListener("keydown", onKeydown), 
      onClose: () => document.removeEventListener("keydown", onKeydown)}
      )

instance.show()
  
  function onKeydown( { key  }){
        if (key === 'Escape'){
        instance.close()
        }
  }
}

