let typed = new Typed('.typeText',{
    strings: ['анимешник', 'дизайнер','вообщем творческая личность'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: true,
});

let moon = document.querySelector('.moon');
let sun = document.querySelector('.sun');

moon.addEventListener('click',()=>{
    sun.style.display='inline-block'
    moon.style.display='none'
    document.querySelector('body').classList.add('nightMood')
});
sun.addEventListener('click',()=>{
    sun.style.display='none'
    moon.style.display='inline-block'
    document.querySelector('body').classList.remove('nightMood')
});

let AllTabs = document.querySelectorAll('.tab');
let AllProject = document.querySelectorAll('.project');

const removeActive =()=> AllTabs.forEach(tab=>{
    tab.classList.remove('active')
})

const filterGallery =()=> AllTabs.forEach(tab=>{
    tab.addEventListener('click',(event)=>{
        removeActive();
        tab.classList.add('active');

        let filterName = event.target.getAttribute('data-name');

        AllProject.forEach(projct=>{
            let projctName = projct.getAttribute('data-name');
            if((projctName == filterName) || filterName == 'All'){
                projct.style.display='block'
            }
            else{
                projct.style.display='none'
            }
        })
    })
});

window.addEventListener('load', filterGallery())

let swiper = new Swiper('.mySwiper',{
    slidesPerView: 3,
    loop: true,
    spaceBetween:20,

    breakpoints:{
        0:{
            slidesPerView: 1,
            spaceBetween: 0,
        },
        600:{
            slidesPerView: 2,
            spaceBetween: 10,
        
        },
        1024:{
            slidesPerView: 3,
            spaceBetween: 20,
        
        },
    },
    pagination:{
        el: '.swiper-pagination',
        clickable: true,
    },
});

window.addEventListener('scroll',()=>{
    let nav = document.querySelector('nav');

    nav.classList.toggle('nav-scroll', window.scrollY > 0);
});

let phoneMenuA = document.querySelectorAll('a')
let navlinkA = document.querySelectorAll('.nav-links li a');
const removeNavActive =()=> navlinkA.forEach(link=>{
    link.classList.remove('active');
})

navlinkA.forEach(link=>{
    link.addEventListener('click',()=>{
        removeNavActive();
        link.classList.add('active');
    })
})

const removeMenuActive =()=> phoneMenuA.forEach(menu=>{
    menu.classList.remove('active')
})

phoneMenuA.forEach(menu=>{
    menu.addEventListener('click',()=>{
        removeMenuActive();
        menu.classList.add('active')
    })
})