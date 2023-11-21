// Mobile Img Slider

const carousel = document.querySelector(".img-showcase");
const carouselModal = document.querySelector(".img-showcase-2");

let firstImg = document.querySelectorAll(".carousel__image")[0];
let secondImg = document.querySelectorAll(".carousel__image-modal")[0];
const images = document.querySelectorAll(".carousel__image");
const totalImages = Object.keys(images).length;

const modalImages = document.querySelectorAll(".carousel__image-modal");
const modalTotalImages = Object.keys(modalImages).length;

const leftArrow = document.querySelectorAll(".left-arrow");
const rightArrow = document.querySelectorAll(".right-arrow");

const bigImages = document.querySelectorAll(".big-image"),
  secondImageWrapper = document.querySelector(".second-img-wrapper"),
  closeModal = document.querySelector(".close__btn");

bigImages.forEach((image) =>
  image.addEventListener("click", () => {
    if (document.documentElement.clientWidth >= 1000) {
      secondImageWrapper.classList.remove("hidden");
    } else {
      secondImageWrapper.classList.add("hidden");
    }
  })
);

closeModal.addEventListener("click", () =>
  secondImageWrapper.classList.add("hidden")
);

let currentIndex = 0;
let prevIndex;

const imageWidth = firstImg.clientWidth;
const secondImageWidth = secondImg.clientWidth;

rightArrow.forEach((arrow) =>
  arrow.addEventListener("click", () => {
    if (arrow.id === "right-modal") {
      carouselModal.classList.add("sliding-transition");

      prevIndex = currentIndex;
      currentIndex = (currentIndex + 1) % modalTotalImages;

      carouselModal.style.transform = `translateX(-${secondImageWidth}px)`;

      carouselModal.appendChild(modalImages[prevIndex]);
      carouselModal.classList.remove("sliding-transition");
      carouselModal.style.transform = "";
      return;
    }
    carousel.classList.add("sliding-transition");

    prevIndex = currentIndex;
    currentIndex = (currentIndex + 1) % totalImages;

    carousel.style.transform = `translateX(-${imageWidth}px)`;

    carousel.appendChild(images[prevIndex]);
    carousel.classList.remove("sliding-transition");
    carousel.style.transform = "";
  })
);

leftArrow.forEach((arrow) =>
  arrow.addEventListener("click", () => {
    if (arrow.id === "left-modal") {
      prevIndex = currentIndex;
      currentIndex = (currentIndex - 1 + modalTotalImages) % modalTotalImages;

      // Move Carousel to the left by one image, and insert the image at currentIndex at the beginning of carousel's DOM
      carouselModal.style.transform = `translateX(-${secondImageWidth}px)`;
      carouselModal.insertBefore(
        modalImages[currentIndex],
        carouselModal.firstChild
      );

      // Now, let's start the transition effect, from -520 px to 0 px.
      carouselModal.style.transform = "";
      carouselModal.classList.add("sliding-transition");

      carouselModal.classList.remove("sliding-transition");
      return;
    }
    prevIndex = currentIndex;
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;

    // Move Carousel to the left by one image, and insert the image at currentIndex at the beginning of carousel's DOM
    carousel.style.transform = `translateX(-${imageWidth}px)`;
    carousel.insertBefore(images[currentIndex], carousel.firstChild);

    // Now, let's start the transition effect, from -520 px to 0 px.
    carousel.style.transform = "";
    carousel.classList.add("sliding-transition");

    // By removing the transition class, we ensure that the transition only occurs when we want it to and that we have full control over the carousel's movement.
    carousel.classList.remove("sliding-transition");
  })
);

// Desktop Img slider

const imgs = document.querySelectorAll(".img-select a");
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
  imgItem.addEventListener("click", (event) => {
    event.preventDefault();
    if (imgId !== imgItem.dataset.id) {
      document.querySelectorAll(`a[data-id="${imgId}"]`).forEach((selector) => {
        selector.parentNode.classList.remove("selected");
        selector.style.opacity = 1;
      });
      imgItem.parentNode.classList.add("selected");
      imgItem.style.opacity = 0.3;
    }

    imgId = imgItem.dataset.id;
    if (imgItem.dataset.slider === "2") {
      slideImage2();
      return;
    }
    slideImage();
  });
});

function slideImage() {
  const displayWidth = document.querySelector(
    ".img-showcase img:first-child"
  ).clientWidth;

  document.querySelector(".img-showcase").style.transform = `translateX(${
    -(imgId - 1) * displayWidth
  }px)`;
}

function slideImage2() {
  const displayWidth = document.querySelector(
    ".img-showcase-2 img:first-child"
  ).clientWidth;

  document
    .querySelectorAll(".img-showcase-2")
    .forEach(
      (el) =>
        (el.style.transform = `translateX(${-(imgId - 1) * displayWidth}px)`)
    );
}

window.addEventListener("resize", slideImage);

const productsNumber = document.querySelector(".item-counter");
const modalProducts = document.querySelector(".modal__products-number");
const modalProductsPrice = document.querySelector(".modal__products-price");
const cartProducts = document.querySelector(".cart-items");
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");

let counter = 0;

cartProducts.innerText = counter;
productsNumber.innerText = counter;

minus.addEventListener("click", () => {
  if (counter <= 0) {
    return;
  } else {
    counter--;
    productsNumber.innerText = counter;
  }
});

plus.addEventListener("click", () => {
  counter++;
  productsNumber.innerText = counter;
});

const cta = document.querySelector(".cta__button");

cta.addEventListener("click", () => {
  if (counter > 0) {
    cartProducts.innerText = counter;
    modalProducts.innerText = counter;
    modalProductsPrice.innerText = `$${counter * 125}.00`;
    cartModal.classList.add("hidden");
  } else {
    cartModal.classList.add("hidden");
    cartProducts.innerText = counter;
  }
});

const navCart = document.querySelector(".nav__cart-container");
const cartModal = document.querySelector(".cart-modal");
const modalDelete = document.querySelector(".modal-delete");

const modalContent = document.querySelector(".modal-content");
const emptyText = document.querySelector(".empty-message");
const modalCta = document.querySelector(".modal-cta__button");

navCart.addEventListener("click", () => {
  cartModal.classList.toggle("hidden");

  if (counter === 0) {
    modalContent.classList.add("hidden");
    modalCta.classList.add("hidden");
    emptyText.classList.toggle("hidden");
  } else {
    emptyText.classList.add("hidden");
    modalContent.classList.remove("hidden");
    modalCta.classList.remove("hidden");
  }
});

modalDelete.addEventListener("click", () => {
  counter = 0;
  modalContent.classList.add("hidden");
  modalCta.classList.add("hidden");
  emptyText.classList.toggle("hidden");
  cartProducts.innerText = counter;
  productsNumber.innerText = counter;
});

// Menu button

const mobileMenu = document.querySelectorAll(".mobile-menu");
const menuContainer = document.querySelector(".menu-container");

mobileMenu.forEach((menu) =>
  menu.addEventListener("click", () => {
    menuContainer.classList.toggle("hidden");
  })
);
