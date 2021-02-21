module.exports = function() {

  // begin burger and mobile menu
  $('#burger-submenu').on('click', function (e){
    e.preventDefault();

    $(this).toggleClass("active");
    $(this).find(".burger-submenu__icon").toggleClass("active");

    $("#subheader").toggleClass("active");

    $('.main').toggleClass('no-scroll');
  });
  // end burger and mobile menu

};