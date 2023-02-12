let burger = document.querySelector('#burger');
console.log(burger);
let nav = document.querySelector('header > nav');
console.log(nav);

burger.addEventListener('click', function(){
    if(nav.classList.contains('nav-off')){
        nav.classList.replace('nav-off', 'nav-on');
    } else {
        nav.classList.replace('nav-on', 'nav-off');
    }
});

let nextBtn = document.querySelector('#next-btn');
console.log(nextBtn);
let prevBtn = document.querySelector('#prev-btn');
console.log(prevBtn);

let slide1 = document.querySelector('#slide1');
console.log(slide1);
let slide2 = document.querySelector('#slide2');
console.log(slide2);
let slide3 = document.querySelector('#slide3');
console.log(slide3);
let slide4 = document.querySelector('#slide4');
console.log(slide4);
let slide5 = document.querySelector('#slide5');
console.log(slide5);

