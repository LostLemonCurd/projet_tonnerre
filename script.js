let burger = document.querySelector('#burger');
console.log(burger);
let nav = document.querySelector('.nav');
console.log(nav);

burger.addEventListener('click', function(){
    if(nav.classList.contains('navOff')){
        nav.classList.replace('navOff', 'navOn');
    } else {
        nav.classList.replace('navOn', 'navOff');
    }
});

let imgSlider = document.querySelectorAll('.carousel-item');
let bio = document.querySelectorAll('.carousel-inner .bio');

for (let i = 0; i < imgSlider.length; i++) {
    imgSlider[i].addEventListener('mouseover', () => {
        bio[i].style.display = 'block';
    });
    imgSlider[i].addEventListener('mouseout', () => {
        bio[i].style.display = 'none';
    });
}

