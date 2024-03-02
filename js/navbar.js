const classToggle = () => {
  const navs = document.querySelectorAll(".nav-items");
  // console.log(navs);
  navs.forEach((nav) => nav.classList.toggle("nav-toggle-show"));
};

document
  .querySelector(".nav-link-toggle")
  .addEventListener("click", classToggle);
