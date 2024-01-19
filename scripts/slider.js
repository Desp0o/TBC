const slider = document.querySelector('.slider').children;
const totalSlides = slider.length;
let currentIndex = 0;

// We need this for interval, to start and clear it,
// otherwise we may miss any slide on click events
let interval; 

const leftBtn = document.getElementById('leftBtn');
const rightBtn = document.getElementById('rightBtn');
const dot1 = document.getElementById('dot1');
const dot2 = document.getElementById('dot2');
const dot3 = document.getElementById('dot3');

const dotsArr = [dot1, dot2, dot3];

//change index and slide on click each dots
dotsArr.forEach((dot, dotIndex) => {
    dot.addEventListener("click", () => {
        currentIndex = dotIndex
        updateSlider(currentIndex);
    });
});

//update slide on dot click 
const updateSlider = (updatedIndex) => {
    for (let i = 0; i < slider.length; i++) {
        slider[i].classList.remove('active_slide');
    }

    slider[updatedIndex].classList.add('active_slide');

    clearInterval(interval) //we need clear interval to restart timer for slider when it gets any click action
    startInterval() //start timer again to change sliders even without clicks
};

//click event for next slide
const nextSlide = () => {
    currentIndex++;

    if (currentIndex === totalSlides) {
        currentIndex = 0;
    }

    for (let i = 0; i < slider.length; i++) {
        slider[i].classList.remove('active_slide');
    }
    
    slider[currentIndex].classList.add('active_slide')

    clearInterval(interval) //we need clear interval to restart timer for slider when it gets any click action
    startInterval() //start timer again to change sliders even without clicks
};

//click event for previous event
const prevSlide = () => {
    if (currentIndex === 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex--;
    }

    for (let i = 0; i < slider.length; i++) {
        slider[i].classList.remove('active_slide');
    }

    slider[currentIndex].classList.add('active_slide')

    clearInterval(interval) //we need clear interval to restart timer for slider when it gets any click action
    startInterval() //start timer again to change sliders even without clicks
};


leftBtn.addEventListener("click", () => {
    prevSlide();
});
rightBtn.addEventListener("click", () => {
    nextSlide();
});

// Timer function for slider to change slides automatically
const startInterval = () => {
    interval = setInterval(() => {
        nextSlide();
    }, 4000);
};

startInterval()

