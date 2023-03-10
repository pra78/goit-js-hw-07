import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

const makeGalleryContainerMarkup = image => {
  const { preview, original, description } = image;
    return `
        <li class="gallery-item">
            <a href="${original}">
                <img src="${preview}" alt="${description}" class="gallery-img">
            </a>
        </li>`;
};

const makeGalleryCard = galleryItems.map(makeGalleryContainerMarkup).join("");

const makeGalleryList = `<ul>${makeGalleryCard}</ul>`;

galleryContainer.insertAdjacentHTML("afterbegin", makeGalleryList);

console.log(galleryItems);