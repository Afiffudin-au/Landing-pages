$(document).ready(function(){
  $("#default_option").click(function(){
    $(this).parent().toggleClass("active");
  })

  $("#select_ul li").click(function(){
    var currentele = $(this).html();
    $("#default_option li").html(currentele);
    $(this).parents("#select_wrap").removeClass("active");
  })

  $("#default_option2").click(function(){
    $(this).parent().toggleClass("active");
  })

  $("#select_ul2 li").click(function(){
    var currentele = $(this).html();
    $("#default_option2 li").html(currentele);
    $(this).parents("#select_wrap2").removeClass("active");
  })

  $('.slick').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical : true,
    prevArrow: null,
    nextArrow: null,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});
