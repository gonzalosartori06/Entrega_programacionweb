document.addEventListener("DOMContentLoaded", function () {
  const hoverImg = document.getElementById("hover-img");

  if (hoverImg) {
    const originalSrc = hoverImg.src;
    const hoverSrc = "imagenes/mueble-antes.jpeg";

    hoverImg.addEventListener("mouseenter", function () {
      hoverImg.src = hoverSrc;
    });

    hoverImg.addEventListener("mouseleave", function () {
      hoverImg.src = originalSrc;
    });
  }
});
