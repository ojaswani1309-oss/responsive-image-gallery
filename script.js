const images = document.querySelectorAll(".gallery img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const filterBtns = document.querySelectorAll(".filters button");

let currentIndex = 0;
let visibleImages = [...images];

// Open lightbox
images.forEach((img) => {
  img.addEventListener("click", () => {
    currentIndex = visibleImages.indexOf(img);
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

// Close lightbox
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Next image
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % visibleImages.length;
  lightboxImg.src = visibleImages[currentIndex].src;
});

// Previous image
prevBtn.addEventListener("click", () => {
  currentIndex =
    (currentIndex - 1 + visibleImages.length) % visibleImages.length;
  lightboxImg.src = visibleImages[currentIndex].src;
});

// Filters
filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;
    visibleImages = [];

    images.forEach(img => {
      if (filter === "all" || img.dataset.category === filter) {
        img.style.display = "block";
        visibleImages.push(img);
      } else {
        img.style.display = "none";
      }
    });
  });
});
