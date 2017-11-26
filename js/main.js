/*----------------------------------------------------------------------------------Some Functions----------*/
let toggleFunc = (className, activeTrigger) => {
  className.on('click touchstart', (e) =>{
  e.preventDefault();
  let item = $(e.currentTarget);
  item.toggleClass(activeTrigger).siblings().removeClass(activeTrigger);
});};
let hidenbarFunc = (sectionTriggerd, sectionWhere, activeTrigger) => {
  sectionTriggerd.on('click touchstart', (e) =>{
  e.preventDefault();
  sectionWhere.toggleClass(activeTrigger);
});};
let defineSections = sections =>{
  let activeSection = sections.filter('.active');
  return {
    activeSection: activeSection,
    nextSection: activeSection.next(),
    prevSection: activeSection.prev()
  }
};
let switchMenuActiveClass = sectionEq => {
  $('.aside__item').eq(sectionEq).addClass('aside__item--active').siblings().removeClass('aside__item--active');
};
let performTransition = sectionEq =>{
  let position = sectionEq * -100 + '%';

  if(inScroll) return
  inScroll = true
  
  display.css({
    'transform' : `translateY(${position})`,
    '-webkit-transform' : `translateY(${position})`
  });
  sections.eq(sectionEq).addClass('active').siblings().removeClass('active');
  setTimeout(()=>{
  inScroll = false;
  }, 1500);
  setTimeout(()=>{
    switchMenuActiveClass(sectionEq)
    }, 500);
};
let scrollToSection = direction =>{
  let section = defineSections(sections);
  if(inScroll) return;
  if(direction == 'up' && section.nextSection.length){
    performTransition(section.nextSection.index())
  };
  if(direction == 'down' && section.prevSection.length){
    performTransition(section.prevSection.index())
  }

};
/*-----------Page Scroll-----------*/
let display = $('.sitecontent');
let sections = $('.section');
let inScroll = false;
let md = new MobileDetect(window.navigator.userAgent);
let isMobile = md.mobile();

$('.wrapper').on({
  wheel : e => {
    let deltaY = e.originalEvent.deltaY;
    let direction = (deltaY > 0)?'up':'down';
    scrollToSection(direction);
  },
  touchmove : e => (e.preventDefault())
} );

$(document).on('keydown', (e) =>{
  let section = defineSections(sections);
  if(inScroll) return;
  switch(e.keyCode){
    case 40 :
    if(!section.nextSection.length) return;
    performTransition(section.nextSection.index());
    break;
    case 38 :
    if(!section.prevSection.length) return;
    performTransition(section.prevSection.index());
    break;
  }
})

$('[data-scroll-to]').on('click touchstart', (e) =>{
  e.preventDefault();
  let elem = $(e.currentTarget);
  let elemIndex = parseInt(elem.attr('data-scroll-to'));
  performTransition(elemIndex);
});

if(isMobile){
  $(window).swipe( {
    swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
    scrollToSection(direction); 
    }
  });
}
/*----------------------------------------------------------------------------------Hamburger Menu----------*/
$('.hamburger__nav').on('click touchstart', (e) =>{
  e.preventDefault();
  $('.mobile-menu').toggleClass('mobile-menu--is-active');
  $('.hamburger__nav').toggleClass('hamburger__nav--is-active');
  });
/*----------------------------------------------------------------------------Hiden Igredients Bar----------*/
hidenbarFunc($('.burger__options--ingredient'),$('.burger__options--hidenbar'),'burger__options--hidenbar--is-active');
hidenbarFunc( $('.exit__btn'),$('.burger__options--hidenbar'),'burger__options--hidenbar--is-active');
/*-----------------------------------------------------------------------------Burgers Menu Slider----------*/
$('.arrow__next').on('click touchstart', (e) =>{
  e.preventDefault();
  let itemList = $('.burger__slider'),
      items = itemList.find('.slider__item'),
      activeItem = items.filter('.slider__item--is-active'),
      reqItem = activeItem.next(),
      reqIndex = reqItem.index(),
      duration = 400;
  if(reqItem.length){
    itemList.animate({
        'left' : -reqIndex * 100 + '%'
    }, duration, function() {
      activeItem.removeClass('slider__item--is-active');
      reqItem.addClass('slider__item--is-active');
    })
  }
});

$('.arrow__prev').on('click touchstart', (e) =>{
  e.preventDefault();
  let itemList = $('.burger__slider'),
      items = itemList.find('.slider__item'),
      activeItem = items.filter('.slider__item--is-active'),
      reqItem = activeItem.prev(),
      reqIndex = reqItem.index(),
      duration = 400;
  if(reqItem.length){
    itemList.animate({
        'left' : -reqIndex * 100 + '%'
    }, duration, function() {
      activeItem.removeClass('slider__item--is-active');
      reqItem.addClass('slider__item--is-active');
    })
  }
});
/*-------------------------------------------------------------------------------------Team Toggle----------*/
toggleFunc($('.team__section'),'team__section--active');
/*-------------------------------------------------------------------------------------Menu Toggle----------*/
toggleFunc($('.menu__accordeon-item'),'item--is-activ');
/*----------------------------------------------------------------------------------Delivery Modal----------*/
$('.delivery__form--button_submit').on('click touchstart', (e) =>{
  e.preventDefault();
  $('.delivery__modal').addClass('delivery__modal--is-active');
});
$('.modal__btn').on('click touchstart', (e) =>{
  e.preventDefault();
  $('.delivery__modal').removeClass('delivery__modal--is-active');
});
/*-----------------------------------------------------------------------------------Reviews Modal----------*/
$('.btn__link--phones').on('click touchstart', (e) =>{
  e.preventDefault();
  $('.revew__modal').addClass('revew__modal--is-active');
});
$('.revew__modal__btn').on('click touchstart', (e) =>{
  e.preventDefault();
  $('.revew__modal').removeClass('revew__modal--is-active');
});
/*-----------------------------------------------------------------------------------------Map API----------*/
ymaps.ready(init);
var myMap, 
    myPlacemark;


var placemarks = [ // Массив объектов который мы перебираем методом forEach
  {
    latitude: 55.75, 
    longitude: 37.62,
    hintContent: '<div class="map__hint">Брестская ул. д. 14</div>',
    balloonContent: [
      '<div class="map__balloon">',
      '<img class="map__burger-img" src="../img/ymap/burger.png" alt="Бургер"/>',
      "Самые вкусные бургеры, заходите в гости",
      "</div>"
    ]
  },
  {
    latitude: 55.76, 
    longitude: 37.63,
    hintContent: '<div class="map__hint">Брестская ул. д. 14</div>',
    balloonContent: [
      '<div class="map__balloon">',
      '<img class="map__burger-img" src="../img/ymap/burger.png" alt="Бургер"/>',
      "Самые вкусные бургеры, заходите в гости",
      "</div>"
    ]
  },
  {
    latitude: 55.74, 
    longitude: 37.60,
    hintContent: '<div class="map__hint">Брестская ул. д. 14</div>',
    balloonContent: [
      '<div class="map__balloon">',
      '<img class="map__burger-img" src="../img/ymap/burger.png" alt="Бургер"/>',
      "Самые вкусные бургеры, заходите в гости",
      "</div>"
    ]
  }
];
/*Инициализация функции создания карты и добавление на карту placemark*/
function init() {
  var map = new ymaps.Map("map", {
    center: [55.76, 37.64],
    zoom: 13,
    controls: ["zoomControl"], // Выводим только кнопки зума
    behaviors: ["drag"]
  });
  placemarks.forEach(function(item){
    var placemark = new ymaps.Placemark(
        [item.latitude, item.longitude],
        {
          hintContent: item.hintContent,
          balloonContent: item.balloonContent.join("")
        },
        {
          iconLayout: "default#image",
          iconImageHref: "./img/ymap/map-marker.png",
          iconImageSize: [46, 57],
          iconImageOffset: [-23, -57]
        });
        map.geoObjects.add(placemark);
  })
}
/*-------------------------------------------------------------------------------------AJAX POST------------*/
