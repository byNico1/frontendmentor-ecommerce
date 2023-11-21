# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Screenshot

![Solution Image](./solution.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

### Links

- Solution URL: [Github](https://github.com/byNico1/frontendmentor-ecommerce)
- Live Site URL: [live site URL](https://bynico1.github.io/frontendmentor-ecommerce/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow

### What I learned

```html
<section class="wrapper">
  <div class="card-wrapper">
    <div class="card">
      <div class="product-imgs">
        <div class="img-display">
          <button
            class="hero__button hero__button--max-desktop hero__button--left left-arrow"
            id="left"
          >
            <svg
              width="12"
              height="18"
              xmlns="http://www.w3.org/2000/svg"
              id="left"
            >
              <path
                d="M11 1 3 9l8 8"
                stroke="#1D2026"
                stroke-width="3"
                fill="none"
                fill-rule="evenodd"
                id="left"
              />
            </svg>
          </button>

          <div class="img-showcase">
            <img
              class="carousel__image big-image product-img"
              src="./images/image-product-1.jpg"
              alt=""
            />
            <img
              class="carousel__image big-image product-img"
              src="./images/image-product-2.jpg"
              alt=""
            />
            <img
              class="carousel__image big-image product-img"
              src="./images/image-product-3.jpg"
              alt=""
            />
            <img
              class="carousel__image big-image product-img"
              src="./images/image-product-4.jpg"
              alt=""
            />
          </div>

          <button
            class="hero__button hero__button--max-desktop hero__button--right right-arrow"
            id="right"
          >
            <svg
              width="13"
              height="18"
              xmlns="http://www.w3.org/2000/svg"
              id="right"
            >
              <path
                d="m2 1 8 8-8 8"
                stroke="#1D2026"
                stroke-width="3"
                fill="none"
                fill-rule="evenodd"
                id="right"
              />
            </svg>
          </button>
        </div>
        <div class="img-select">
          <div class="img-item">
            <a href="#" data-id="1">
              <img
                class="product-img"
                src="./images/image-product-1.jpg"
                alt=""
              />
            </a>
          </div>
          <div class="img-item">
            <a href="#" data-id="2">
              <img
                class="product-img"
                src="./images/image-product-2.jpg"
                alt=""
              />
            </a>
          </div>
          <div class="img-item">
            <a href="#" data-id="3">
              <img
                class="product-img"
                src="./images/image-product-3.jpg"
                alt=""
              />
            </a>
          </div>
          <div class="img-item">
            <a href="#" data-id="4">
              <img
                class="product-img"
                src="./images/image-product-4.jpg"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>

      <div class="container info-product">
        <p class="product-category">Sneaker Company</p>
        <h1 class="product__name">Fall Limited Edition Sneakers</h1>
        <p class="description">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div class="price-container">
          <p class="price">$125.00 <span class="discount">50%</span></p>
          <p class="price-with-discount">$250.00</p>
        </div>
        <div class="cta">
          <div class="cta__products">
            <button class="button-products-number">
              <img src="./images/icon-minus.svg" id="minus" alt="" />
            </button>
            <p class="items item-counter"></p>
            <button class="button-products-number">
              <img src="./images/icon-plus.svg" id="plus" alt="" />
            </button>
          </div>
          <button class="cta__button">
            <img
              class="cta__cart-image"
              width="15"
              height="15"
              src="./images/icon-cart.svg"
              alt=""
            />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
```

```js
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
```

### Continued development

I really need to improve my JavaScript code I think using a framework would be much better

## Author

- Frontend Mentor - [@bynico1](https://www.frontendmentor.io/profile/byNico1)
