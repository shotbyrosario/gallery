const cards = document.querySelectorAll(".card img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");
const lightboxInner = document.getElementById("lightbox-inner");

cards.forEach(img => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightbox.classList.remove("hidden");
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.classList.add("hidden");
});

// Close modal if background is clicked (but not the modal content)
lightbox.addEventListener("click", (e) => {
  if (!lightboxInner.contains(e.target)) {
    lightbox.classList.add("hidden");
  }
});
