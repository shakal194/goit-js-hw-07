import { galleryItems } from "./gallery-items.js";
// Change code below this line

const makeImage = ({ preview, original, description }) => {
  return `
 <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
    style="display:block"
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    />
  </a>
</div>
    `;
};

const markupImage = galleryItems.map(makeImage).join("");

const galleryRef = document.querySelector(".gallery");
galleryRef.insertAdjacentHTML("beforeend", markupImage);

galleryRef.addEventListener("click", onImageClick);

function onImageClick(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  event.preventDefault();
  modalShow(event.target.dataset.source);
}

let instance;
function modalShow(src) {
  instance = basicLightbox.create(
    `<img src="${src}" style="height:100vh; display:block"></img>`,
    {
      onShow: () => {
        onBtnEscAddListener();
      },
      onClose: () => {
        onBtnEscRemoveListener();
      },
    }
  );
  instance.show();
}

function onBtnEscAddListener() {
  window.addEventListener("keydown", onEscClick);
}

function onEscClick(event) {
  if (event.code === "Escape") instance.close();
}

function onBtnEscRemoveListener() {
  window.removeEventListener("keydown", onEscClick);
}
