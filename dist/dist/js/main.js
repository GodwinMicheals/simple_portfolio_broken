// Select Dom Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuBranding = document.querySelector('.menu-branding');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State Of Menu
let showMenu = false;

// Functions
const toggleMenu = () => {
    if(!showMenu){
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show')
        navItems.forEach(item => item.classList.add('show')); 

        // set menu state
        showMenu = true;
    }else{
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show')
        navItems.forEach(item => item.classList.remove('show')); 

        // set menu state
        showMenu = false;
    }
}

// Event Listeners
menuBtn.addEventListener('click', toggleMenu);

// Copyright Year

let date = document.querySelector('#date');
const d = new Date;
date.innerHTML = d.getFullYear();