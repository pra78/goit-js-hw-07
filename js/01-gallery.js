import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

galleryContainer.addEventListener('click', onClick);

const makeGalleryContainerMarkup = galleryItems.map((image) => {
    const { preview, original, description } = image;
    return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>`;
}).join("");

galleryContainer.insertAdjacentHTML("afterbegin", makeGalleryContainerMarkup);

function onClick(event) {
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    event.preventDefault();

    const html = `<img width="1400" height="900" src="${event.target.dataset.source}">`
    
    const currentBasicLightbox = basicLightbox.create(html, {
        onShow: (basicLightbox) => {
	        document.onkeydown = function(event) {
		        if (event.code === "Escape") {
			        basicLightbox.close();
		        }
	        };
        },
    }).show()
}