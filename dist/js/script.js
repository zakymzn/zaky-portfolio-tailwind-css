// Navbar Fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const top = document.querySelector('#top');

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        top.classList.remove('hidden');
        top.classList.add('flex');
    }
    else {
        header.classList.remove('navbar-fixed');
        top.classList.remove('flex');
        top.classList.add('hidden');
    }
}

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// Klik di luar hamburger
window.addEventListener('click', function (e) {
    if (e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});

// Dark mode icon
const darkMode = document.querySelector('.material-symbols-outlined');

// Dark mode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

function switchToDarkMode() {
    darkMode.innerHTML = "dark_mode";
}

function switchToLightMode() {
    darkMode.innerHTML = "light_mode"
}

darkToggle.addEventListener('click', function () {
    if (darkToggle.checked) {
        html.classList.add('dark');
        switchToDarkMode();
        localStorage.theme = 'dark';
    } else {
        html.classList.remove('dark');
        switchToLightMode();
        localStorage.theme = 'light';
    }
});

// Pindahkan posisi toggle dan ubah icon sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
    switchToDarkMode();
} else {
    darkToggle.checked = false;
    switchToLightMode();
}