import './bootstrap';

document.addEventListener("DOMContentLoaded", function(event) {

    initCounters();
    initImageSliders();
    initSubMenu();

});

function initCounters() {
    let counter = document.querySelectorAll('.content-element-counter .counter');
    const steps = 20;
    const time = 10;

    counter.forEach((element) => {
        let max = parseInt(element.getAttribute('data-value'));
        let current = 0;

        let interval = setInterval( ()=> {

            current +=  max / (steps * time);
            current = Math.min(current, max);
            element.innerHTML = Math.ceil(current).toLocaleString();

            if( current >= max) {
                clearInterval(interval);
            }
        }, time);

    });
}

function initImageSliders() {
    let imageSliders = document.querySelectorAll('.image-slider-controller');

    imageSliders.forEach((imageSlider) => {
        let target = imageSlider.getAttribute('data-target');
        let container = document.getElementById( target );

        imageSlider.addEventListener('input', (element) => {
            let index = event.target.value;
            let sliderElements = document.querySelectorAll(target + ' .image-slider-element')

            sliderElements.forEach( (sliderElement) => {
                (sliderElement.getAttribute('data-index') == index) ? sliderElement.classList.remove('hidden') : sliderElement.classList.add('hidden')
            })
        });
    });
}


function initSubMenu() {
    document.addEventListener("scroll", (event) => {
        let subMenus = document.querySelectorAll('.submenu ');
        subMenus.forEach((subMenu)=> {
            let distance = subMenu.offsetTop - window.scrollY;
            distance <= 0 ? subMenu.classList.add('is-shrinked') : subMenu.classList.remove('is-shrinked');
        });
    });
}
