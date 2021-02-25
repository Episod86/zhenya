new Swiper('.image-slider',{
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'

    },

    pagination: {
        el: '.swiper-pagination',
        clicable: true,
        dynamicBullets: true
    },

    grabCursor: true,

    keyboard: {
        enabled: true,
        onlyInViewport: true
    },

    mousewheel: {
        sensitivitivi: 1
    },

    loop: true,

    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },

    effect: 'flip',

    flipEffect: {
        slideShadows: true,
        limitRotation: true
    }
});