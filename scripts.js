function menuAnimate() {
  const container = document.getElementsByClassName("navbar-toggler");
  if (container.classList.contains(".navbar-expand-lg > .container")) {
    container.classList.remove(".navbar-expand-lg > .container");
  } else {
    container.classList.add("container");
  }
}
