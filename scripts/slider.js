const slider = document.querySelector('.slider').children
const totalSlides = slider.length
let index = 0

const leftBtn = document.getElementById('leftBtn')
const rightBtn = document.getElementById('rightBtn')
const dot1 = document.getElementById('dot1')
const dot2 = document.getElementById('dot2')
const dot3 = document.getElementById('dot3')

const dotsArr = [dot1, dot2, dot3]

dotsArr.forEach( (dot, dotIndex) => {
    dot.addEventListener("click", () => {
        updateSlider(dotIndex)
    })
})

const updateSlider = (updatedIndex) => {
    for (let i = 0; i < slider.length; i++) {
        slider[i].classList.remove('active_slide');
    }

    slider[updatedIndex].classList.add('active_slide');
};

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