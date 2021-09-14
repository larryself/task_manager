import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

// const li = document.querySelectorAll('.gallery__item');
// const cards = document.querySelectorAll('.content-card');
// const modal = document.querySelector('.modal-swiper');
//
// function addContent(mySwiper) {
//   const swiperContainer = document.querySelector('.swiper-wrapper');
//   const contentToSwiper = document.querySelectorAll('.content-card');
//   contentToSwiper.forEach((el) => {
//     el.classList.remove('content-card');
//     el.classList.add('swiper-slide');
//     swiperContainer.appendChild(el);
//   });
// }
// li.forEach((el) => {
//   el.addEventListener('click', function () {
//     // swiper.slideTo(1);
//     const sdf = new Swiper('.swiper', {
//       direction: 'horizontal', // горизонтальная прокрутка
//       // расстояние между слайдами
//       mousewheel: true,
//       navigation: {
//         // задаем кнопки навигации
//         nextEl: '.swiper-button-next', // кнопка Next
//         prevEl: '.swiper-button-prev', // кнопка Prev
//       },
//       // slideClass: '.content-card',
//       grabCursor: true, // менять иконку курсора
//     });
//     const mySwiper = document.querySelector('.swiper').swiper;
//     addContent(mySwiper);
//     mySwiper.update();
//     modal.classList.add('active');
//     console.log(cards);
//     console.log(123);
//     this.classList.add('swiper-slide-active');
//     console.log(this.classList.add('swiper-slide-active'));
//   });
// });
