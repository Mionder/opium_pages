$(document).ready(function() {
    $(".header-wrap-mobile input + label" ).click(function() {
        $(this).toggleClass("fixed");
        $(".box:nth-child(2)").toggleClass('open');
        $(".box:nth-child(4)").toggleClass('open');
        $(".box:nth-child(6)").toggleClass('open');
        $(".box:nth-child(8)").toggleClass('open');
    });
    $('.clients-slider').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        variableWidth: true
      });
});