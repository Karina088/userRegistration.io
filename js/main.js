const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: false,
    slidesPerView: 2,
    spaceBetween: 0,
    mousewheel: true,
    freeMode: true,
    autoplay: true,

    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

document.querySelectorAll('.swiper-content')
    .forEach(el => el.addEventListener('click', () => {
        el.classList.toggle('swiper-slide-active');
    }));

const bellEl = document.querySelector('.bell');
bellEl.addEventListener('pointerover', () => { bellEl.classList.toggle('bell-active'); });