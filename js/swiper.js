var swiper = new Swiper('.swiper-container', {
    loop: true,  // Для безкінечного циклу
    pagination: {
        el: '.swiper-pagination',
        clickable: true,  // Дозволяє клікати на пагінацію
        type: 'bullets',  // Встановлює тип пагінації як кружечки
        bulletClass: 'swiper-pagination-bullet', // Клас для кружечка
        bulletActiveClass: 'swiper-pagination-bullet-active'  // Клас для активного кружечка
    },
    navigation: false,  // Вимикаємо стрілочки
});