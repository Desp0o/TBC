//select all span tag in navbar to create animation

const btn = document.querySelector(".burger-menu");

btn.addEventListener("click", () => {
  btn.querySelectorAll("span").forEach((item) => {
    item.classList.toggle("open");
    btn.classList.toggle("open");
  });
});

//animation for responsive pannel and overlay bg
const burgerBtn = document.querySelector(".burger-menu")
const resMenuPanel = document.querySelector(".res_menu_panel")
const overlay = document.querySelector(".overlay")

burgerBtn.addEventListener("click", ()=> {
  resMenuPanel.classList.toggle("open")
  overlay.classList.toggle("open")
})
