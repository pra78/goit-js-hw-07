import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

const makeGalleryContainerMarkup = galleryItems.map((image) => {
    const { preview, original, description } = image;

    // <div class="gallery__item">
        //     <a class="gallery__link" href="large-image.jpg">
        //         <img
        //             class="gallery__image"
        //             src="small-image.jpg"
        //             data-source="large-image.jpg"
        //             alt="Image description"
        //         />
        //     </a>
        // </div>

    return `
        <li class="gallery__item">
            <a href="${original}" class="gallery__link">
                <img
                    class="gallery__image"
                    src="${preview}" 
                    data-source="${original}"
                    alt="${description}" 
                />
            </a>
        </li>`;
}).join("");

const makeGalleryList = `<ul class="gallery">${makeGalleryContainerMarkup}</ul>`;

galleryContainer.insertAdjacentHTML("afterbegin", makeGalleryList);

console.log(galleryItems);