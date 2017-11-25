/*----------------------------------------------------------------------------------Some Functions----------*/
let toggleFunc = function (className, activeTrigger){
  className.on('click', (e) =>{
  e.preventDefault();
  let item = $(e.currentTarget);
  item.toggleClass(activeTrigger).siblings().removeClass(activeTrigger);
  });};
let hidenbarFunc = function (sectionTriggerd, sectionWhere, activeTrigger){
  sectionTriggerd.on('click', (e) =>{
  e.preventDefault();
  sectionWhere.toggleClass(activeTrigger);
  });};
/*-----------Page Scroll----------*/

/*----------------------------------------------------------------------------------Hamburger Menu----------*/
$('.hamburger__nav').on('click', (e) =>{
  e.preventDefault();
  $('.mobile-menu').toggleClass('mobile-menu--is-active');
  $('.hamburger__nav').toggleClass('hamburger__nav--is-active');
});
/*----------------------------------------------------------------------------Hiden Igredients Bar----------*/
hidenbarFunc($('.burger__options--ingredient'),$('.burger__options--hidenbar'),'burger__options--hidenbar--is-active');
hidenbarFunc( $('.exit__btn'),$('.burger__options--hidenbar'),'burger__options--hidenbar--is-active');
/*---------Burgers Menu Slider----------*/
$('.arrow__next').on('click', (e) =>{
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

$('.arrow__prev').on('click', (e) =>{
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
/*---------Delivery Modal----------*/

/*---------Map API----------*/





