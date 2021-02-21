module.exports = function() {

  // begin language
  $('.header-langs__item').on('click', function (e){
    $('.header-langs__item').removeClass('active');
    $(this).addClass('active');
  });
  // end language

};