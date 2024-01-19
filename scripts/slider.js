const slider = document.querySelector('.slider').children
const totalSlides = slider.length
let index = 0

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

