//select all span tag in navbar to create animation

const btn = document.querySelector(".burger-menu");

btn.addEventListener("click", () => {
  btn.querySelectorAll("span").forEach((item) => {
    item.classList.toggle("open");
    btn.classList.toggle("open");
  });
});
