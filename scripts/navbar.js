
const navbar = document.querySelector(".navbar")
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

// transparent

window.addEventListener("scroll", () => {
  if(window.scrollY > 0) {
    console.log(0);
  }

  window.scrollY > 0 ? navbar.classList.add('transparent') : navbar.classList.remove('transparent')
})