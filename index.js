import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    mobile: {
        breakpoint: 0,
        smooth: true
    },
    tablet: {
        breakpoint: 0,
        smooth: true
    }
});

const loader = document.querySelector('.loader');
const logo = document.querySelector('.logo');
const navBtn = document.querySelector('.navBtn');
const navListDesktop = document.querySelector('.nav-list-desktop');
const burgerBackground = document.querySelector('.burger_background');
const titleElements = document.getElementsByClassName('title_element');
const voireMenuBtn = document.querySelector('.voire_menu');
const figures = document.getElementsByClassName('figure');

scroll.stop();

window.addEventListener('load', () => {
    loader.classList.add('loader_off');
    setTimeout(() => {
        loader.style.display = "none";
        logo.style.animation = "logoEntry 1.5s forwards ease-in-out";
        navBtn.style.animation = "navEntry 1.5s forwards ease-in-out";
        navListDesktop.style.animation = "navEntry 1.5s forwards ease-in-out";
        burgerBackground.style.animation = " mainImgPop 1.5s forwards 0.6s";
        Object.values(titleElements).forEach(titleElement => {
            titleElement.style.animation = "textAparition 1.2s forwards 1.2s";
        });
        voireMenuBtn.style.animation = "firstBtnEntry 1.5s forwards 2s";
        Object.values(figures).forEach(figure => {
            figure.style.animation = "figursEntry 2s forwards 2.5s";
        });
        setTimeout(() => {
            scroll.start();
        }, 2500);
    }, 2000);
})

const homeSection = document.querySelector("#accuiel");
const menuSection = document.querySelector("#menu");
const addressSection = document.querySelector("#address");
const contactSection = document.querySelector("#contact");

// ************************ Nav *************************

const burgerMenuBtn = document.querySelector('#check');
const navList = document.querySelector('.nav-list');
const navLinkHome = document.querySelector('.nav-link-home');
const navLinkMenu = document.querySelector('.nav-link-menu');
const navLinkAddress = document.querySelector('.nav-link-address');
const navLinkContact = document.querySelector('.nav-link-contact');

// desck
const desckNavlinkHome = document.querySelector('#nav_link_home');
const desckNavlinkMenu = document.querySelector('#nav_link_menu');
const desckNavlinkAddress = document.querySelector('#nav_link_address');
const desckNavlinkContact = document.querySelector('#nav_link_contact');

burgerMenuBtn.addEventListener('change', () => {
    let checkBoxState = burgerMenuBtn.checked;
    if (checkBoxState) {
        scroll.stop();
        navList.style.display = "flex";
        navList.classList.remove("hideNav");
        navList.classList.add("displayNav");
    } else {
        scroll.start();
        navList.style.display = "none";
    }
})

navLinkHome.addEventListener('click', () => {
        scroll.start();
    burgerMenuBtn.checked = false;
    navList.style.display = "none";
    scroll.scrollTo(homeSection)
})

desckNavlinkHome.addEventListener('click', () => {
    scroll.scrollTo(homeSection)
})

navLinkMenu.addEventListener('click', () => {
        scroll.start();
    burgerMenuBtn.checked = false;
    navList.style.display = "none";
    scroll.scrollTo(menuSection)
})

desckNavlinkMenu.addEventListener('click', () => {
    scroll.scrollTo(menuSection)
})


navLinkAddress.addEventListener('click', () => {
        scroll.start();
    burgerMenuBtn.checked = false;
    navList.style.display = "none";
    scroll.scrollTo(addressSection)
})

desckNavlinkAddress.addEventListener('click', () => {
    scroll.scrollTo(addressSection)
})


navLinkContact.addEventListener('click', () => {
        scroll.start();
    burgerMenuBtn.checked = false;
    navList.style.display = "none";
    scroll.scrollTo(contactSection)
})

desckNavlinkContact.addEventListener('click', () => {
    scroll.scrollTo(contactSection)
})


// ******************************************************

// ********************** carousel **********************

const carousel = document.querySelector(".carousel");
const tuto = document.querySelector(".tuto_menu");

let currentPosition = 0;

const dragSlide = (e) => {
    tuto.style.display = "none";
    let screenWidth = window.innerWidth;
    let prevPageX = e.pageX;
    if (prevPageX > (screenWidth / 2) && currentPosition > -1 && currentPosition < 1) {
        currentPosition ++;
        carousel.style.transform = `translateX(-${currentPosition * 100}vw)`;
    } else if (prevPageX < (screenWidth / 2) &&currentPosition > -1 && currentPosition === 1) {
        currentPosition --;
        carousel.style.transform = `translateX(${currentPosition * 100}vw)`;
    }
}

carousel.addEventListener("mousedown", dragSlide);
tuto.addEventListener("mousedown", dragSlide);

// *****************************************************

// ******************* btn animation *******************

const homeBtn = document.querySelector('.voire_menu');
const menuBtn = document.querySelector('.order');
const addressBtn = document.querySelector('.itineraires');
const sendSection = document.querySelector('.send');

function btnAnimation(theBtn, url) {
    theBtn.style.transform = "translate(5px,4px)";
    theBtn.style.boxShadow = "0px 0px 0px var(--yellow)";
    setTimeout(() => {
        theBtn.style.transform = "translate(0px,0px)";
        theBtn.style.boxShadow = "5px 4px 0px var(--yellow)";
        window.location.href = url;
    }, 200);
}

function homeBtnAnimation(theBtn) {
    theBtn.style.top = "5px";
    theBtn.style.left = "4px";
    theBtn.style.boxShadow = "0px 0px 0px var(--yellow)";
    setTimeout(() => {
        theBtn.style.top = "0px";
        theBtn.style.left = "0px";
        theBtn.style.boxShadow = "5px 4px 0px var(--yellow)";
        scroll.scrollTo(menuSection);
    }, 200);
}

homeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    homeBtnAnimation(homeBtn);
})

menuBtn.addEventListener('click', (e) => {
    e.preventDefault();
    btnAnimation(menuBtn, 'https://glovoapp.com/ma/fr/casablanca/smoky-burgers/');
})

addressBtn.addEventListener('click', (e) => {
    e.preventDefault();
    btnAnimation(addressBtn, 'https://www.google.com/maps/dir//Smoky+Burgers,+18A+avenue+tantan+Residence+jardin+du+phare,+Casablanca+20350/@33.6002733,-7.6845907,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0xda7d397a4e97d7f:0xdb5532fbf4b6878e!2m2!1d-7.6495713!2d33.6002067!3e0');
})

sendSection.addEventListener('click', (e) => {
    e.preventDefault();
    btnAnimation(sendSection, '');
})

// *****************************************************