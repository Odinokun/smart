module.exports = function() {

  // begin header search field
  $('.header__search-open').on('click', function (e){
    e.preventDefault();

    $('.header-search').addClass('active');
    $(this).addClass('hidden');
  });
  // end header search field

};