const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: false,
    slidesPerView: 5, // показывать по 5 изображению
    spaceBetween: 22, // расстояние между слайдами
    mousewheel: true,
    freeMode: true, // при перетаскивании превью ведет себя как при скролле
    // autoplay: true, // автоматическая прокрутка

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