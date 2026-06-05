/**
 * Swiper Gallery Configuration
 */

const swiper = new Swiper('.mainGallerySwiper', {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    spaceBetween: 10,
    slidesPerView: 1
});