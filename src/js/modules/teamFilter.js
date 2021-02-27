module.exports = function() {

  // begin remove no-js class
  $('.team-menu__item').on('click', function (e) {
    if ($(this).hasClass('active')) {
      e.preventDefault();
      $('.team-menu').toggleClass('open');
    } else {
      e.preventDefault();
      $('.team-menu__item').removeClass('active');
      $(this).addClass('active');
      $('.team-menu').removeClass('open');
    }
  });
  $('.team-menu__btn').on('click', function (e) {
      e.preventDefault();
      console.log('OPEN');
      $('.team-menu').addClass('open');
  });
  $('.team-menu__close').on('click', function (e) {
      e.preventDefault();
      $('.team-menu').removeClass('open');
  })
  // end remove no-js class

};