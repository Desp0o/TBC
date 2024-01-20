
const body = document.body
const navbar = document.querySelector(".navbar")
const burgerButton = document.querySelector(".burger-menu");

//this function for burger menu "sticks" span aniamtions
burgerButton.addEventListener("click", () => {
  burgerButton.querySelectorAll("span").forEach((item) => {
    item.classList.toggle("open");
    burgerButton.classList.toggle("open");
  });
});

//animation for responsive pannel and overlay bg
const burgerBtn = document.querySelector(".burger-menu")
const resMenuPanel = document.querySelector(".res_menu_panel")
const overlay = document.querySelector(".overlay")

burgerBtn.addEventListener("click", ()=> {
  body.classList.toggle('overflow_Hiddne') //overflow
  resMenuPanel.classList.toggle("open")
  overlay.classList.toggle("open")
})

//close on click overlay res menu panel and also close burger menu and close itselv overlay
overlay.addEventListener("click", ()=> {
  resMenuPanel.classList.remove("open") //overflow
  overlay.classList.remove("open")
  body.classList.remove('overflow_Hiddne')

  burgerBtn.querySelectorAll("span").forEach((item) => {
    item.classList.remove("open");
    burgerBtn.classList.remove("open");
  });
})


///////// scrolling animations
let lastScrollPosition = 0;
window.addEventListener("scroll", () => {

  window.scrollY > 0 ? navbar.classList.add('transparent') : navbar.classList.remove('transparent') //add transparent to nav on scroll

  //check if window width is less then 700px 
  if(window.innerWidth < 700){

    //if above is everythin OK then hide nav when scrollY is more then 69
    if(window.scrollY > 69){
      navbar.classList.add('hide')
    }else{
      navbar.classList.remove('hide')
    }

    //check window scroll to show nav on scroll up
    let currentScrollPos = document.documentElement.scrollTop;
    if (currentScrollPos < lastScrollPosition) {
      navbar.classList.remove('hide')
    }

    lastScrollPosition = currentScrollPos;

    //if we want to appear nav when page refreshed
    window.onload =()=>{
      navbar.classList.remove('hide')
    }

    //when we reach MAX bottom side nav appears
    const scrolledBottom = document.documentElement.scrollHeight - window.innerHeight;
    if(window.scrollY === scrolledBottom){
      navbar.classList.remove('hide')
    }
  }
})