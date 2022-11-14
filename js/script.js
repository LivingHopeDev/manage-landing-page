const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    nav.classList.toggle('hidden')

    nav.classList.toggle('flex')
})

var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true
    },
});