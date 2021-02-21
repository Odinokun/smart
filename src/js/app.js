$(function() {

  // begin SVG for IE
  require('./modules/svg4everybody')();

  // begin no-JS
  require('./modules/noJs')();

  // begin language
  require('./modules/lang')();

  // begin header search field
  require('./modules/header-search')();


  // begin burger and mobile menu
  require('./modules/burgerMenu')();
  require('./modules/burgerSubmenu')();


  // begin Slick slider
  require('./modules/slick')();

});