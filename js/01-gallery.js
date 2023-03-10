import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

const makeGalleryContainerMarkup = galleryItems.map((image) => {
    const { preview, original, description } = image;
    return `
        <li class="gallery__item">
            <a href="${original}" class="gallery__link">
                <img src="${preview}" alt="${description}" class="gallery__image">
            </a>
        </li>`;
}).join("");

const makeGalleryList = `<ul class="gallery">${makeGalleryContainerMarkup}</ul>`;

galleryContainer.insertAdjacentHTML("afterbegin", makeGalleryList);

console.log(galleryItems);