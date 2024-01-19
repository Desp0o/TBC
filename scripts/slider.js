const slider = document.querySelector('.slider').children
const totalSlides = slider.length
let index = 0

const leftBtn = document.getElementById('leftBtn')
const rightBtn = document.getElementById('rightBtn')

const nextSlide = () => {
    index++

    if(index === totalSlides){
        index = 0
    }

    for (let i = 0; i < slider.length; i++) {
        slider[i].classList.remove('active_slide')
    }

    slider[index].classList.add('active_slide')
}

const prevSlide = () => {
    
    if(index === 0){
        index = totalSlides - 1
    }else{
        index--
    }

    for (let i = 0; i < slider.length; i++) {
        slider[i].classList.remove('active_slide')
    }

    slider[index].classList.add('active_slide')
}

leftBtn.addEventListener("click", prevSlide)
rightBtn.addEventListener("click", nextSlide)

setInterval(nextSlide, 3000);