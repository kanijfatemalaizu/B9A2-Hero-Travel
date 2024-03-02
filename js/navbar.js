const classToggle = () => {
  const navbar = document.querySelectorAll(".nav-items");
  // console.log(navs);
  navbar.forEach((nav) => nav.classList.toggle("nav-toggle-show"));
};

document
  .querySelector(".nav-link-toggle")
  .addEventListener("click", classToggle);
