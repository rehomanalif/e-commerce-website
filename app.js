const bar = document.getElementById('mobile-nav');
const close = document.getElementById('close');
const nav = document.getElementById('navmenu-list');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}

