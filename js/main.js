$(function () {
  var mixir = mixitup('.gallery__content');

  $('.gallery__video-link').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });


  $('.blog__slider-inner').slick({
    dots: true,
    arrows: false,
  });
});