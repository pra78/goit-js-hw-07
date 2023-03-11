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
    console.log(event.target.dataset.source);
}

console.log(galleryItems);