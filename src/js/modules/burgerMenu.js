module.exports = function() {

  // begin burger and mobile menu
  $('#burger-menu').on('click', function (e){
    e.preventDefault();

    $(this).toggleClass("active");
    $(this).find(".burger-menu__icon").toggleClass("active");

    $("#header__right").toggleClass("active");

    $('.main').toggleClass('no-scroll');
  });
  // end burger and mobile menu

};