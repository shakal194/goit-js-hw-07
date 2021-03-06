import { galleryItems } from "./gallery-items.js";
// Change code below this line

const makeImage = ({ preview, original, description }) => {
  return `
  <li>
    <a class="gallery__item" href="${original}">
    <img 
    style="display:block"
    class="gallery__image"
    src="${preview}"
    alt="${description}"
    />
  </a>
  </li>
  `;
};

const markupImage = galleryItems.map(makeImage).join("");

const galleryRef = document.querySelector(".gallery");

galleryRef.insertAdjacentHTML("beforeend", markupImage);

new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});
