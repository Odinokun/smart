module.exports = function() {

  // begin price accordion
  $('.price-question').on('click', function (){
    let item = $(this).parent('.price__row');

    $(this).toggleClass('active');
    $(item).find('.price-answer').slideToggle();
  })
  // end price accordion

};