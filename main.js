document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".two-images img");

  // მუქი ფონის overlay
  const overlay = document.createElement("div");
  overlay.classList.add("image-overlay");
  document.body.appendChild(overlay);

  images.forEach((img) => {
    img.addEventListener("click", () => {
      const isExpanded = img.classList.contains("expanded");

      // ყველა სურათიდან მოვხსნათ გაფართოება
      images.forEach((i) => i.classList.remove("expanded"));
      overlay.classList.remove("active");

      // თუ ეს არ იყო გაფართოებული, გავაფართოოთ ახლა
      if (!isExpanded) {
        img.classList.add("expanded");
        overlay.classList.add("active");
      }
    });
  });

  // როცა overlay-ზე დააჭერს, დავხუროთ
  overlay.addEventListener("click", () => {
    images.forEach((i) => i.classList.remove("expanded"));
    overlay.classList.remove("active");
  });
});
