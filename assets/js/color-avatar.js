const colorSwatches = document.querySelectorAll(".color-swatch");
const avatarImages = document.querySelectorAll(".avatar-image");

colorSwatches.forEach((swatch) => {
  swatch.addEventListener("mouseover", () => {
    const index = swatch.dataset.index;
    if (index !== undefined && avatarImages[index]) {
      colorSwatches.forEach(swatch => swatch.classList.remove('active'));
      avatarImages.forEach((image) => image.classList.remove("active"));
      avatarImages[index].classList.add("active");
      swatch.classList.add('active');
    }
  });
});
