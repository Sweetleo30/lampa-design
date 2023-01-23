/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Autoplay, Pagination, Lazy, Keyboard } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation, Keyboard
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
// import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.swiper')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.swiper', { // Указываем класс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Autoplay, Pagination, Lazy, Keyboard],
			observer: true,
			observeParents: true,
			slidesPerView: 1, // Количество слайдов для показа
			spaceBetween: 0, // Отступ между слайдами
			autoHeight: true, // Автовысота
			speed: 800,
			// watchOverflow: true, // Откл. если слайдов меньше чем нужно


			touchRatio: 1, // Чувствительность свайпа
			simulateTouch: false, // Перетаскивания на ПК
			loop: true, // Бесконечная прокрутка слайдов // скролл нужно откл.
			preloadImages: false, // Принудительно загружает все изображения
			lazy: true,

			// freeMode: true, // Свободный режим

			// Эффекты
			// effect: 'fade',

			// Дполнение к fade
			// fadeEffect: {
			// 	crossFade: true, // Параллейная смена прозрачности
			// },

			// Автопрокрутка
			autoplay: {
				delay: 3000, //Пауза между прокруткой
				disableOnInteraction: false, //Откл после ручного переключения 
			},

			// Пагинация
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets', //Буллеты
				clickable: true,
				dynamicBullets: true, //Динамические Буллеты
			},

			// Упрвыление клавиатурой
			keyboard: {
				enabled: true, // Вкл/Выкл
				onlyInViewport: true, // Вкл/Выкл только когда слайдер в пределах вьюперта
				pageUpDown: true, // Вкл/Выкл управление клавишами pageUp, pageDown
			},


			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1, // Кол-во пролистываемых слайдов
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {

			}
		});
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});