const galleryImages = document.querySelectorAll(".gallery-item img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

/* Open Lightbox */
galleryImages.forEach((img, index) => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
        currentIndex = index;
    });
});

/* Close Lightbox */
closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

/* Next Image */
nextBtn.addEventListener("click", () => {
    currentIndex++;

    if (currentIndex >= galleryImages.length) {
        currentIndex = 0;
    }

    lightboxImg.src = galleryImages[currentIndex].src;
});

/* Previous Image */
prevBtn.addEventListener("click", () => {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = galleryImages.length - 1;
    }

    lightboxImg.src = galleryImages[currentIndex].src;
});

/* Close on outside click */
lightbox.addEventListener("click", (e) => {
    if (e.target !== lightboxImg &&
        e.target !== nextBtn &&
        e.target !== prevBtn) {
        lightbox.style.display = "none";
    }
});

/* Filter Functionality */
const filterButtons = document.querySelectorAll(".filter-buttons button");
const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        document.querySelector(".filter-buttons .active")
            .classList.remove("active");

        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        galleryItems.forEach(item => {

            if (filter === "all" ||
                item.classList.contains(filter)) {

                item.style.display = "block";

            } else {

                item.style.display = "none";
            }
        });
    });
});