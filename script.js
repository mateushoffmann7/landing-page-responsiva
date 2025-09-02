document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".button-mobile");
  const menu = document.querySelector(".menu");

  button.addEventListener("click", function () {
    const currentDisplay = window.getComputedStyle(menu).display;

    if (currentDisplay === "none") {
      menu.style.display = "flex";
    } else {
      menu.style.display = "none";
    }
  });

  document.addEventListener("click", function (event) {
    if (window.innerWidth <= 600) {
      if (!menu.contains(event.target) && !button.contains(event.target)) {
        menu.style.display = "none";
      }
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      menu.style.display = "none";
    }
  });
});
