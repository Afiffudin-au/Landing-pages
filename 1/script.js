// $('.content-about-us').on
$(window).on('load',function(){
  $('.content-about-us').addClass('translateX');
  $('.content-about-image').addClass('translateX')
  $('.Our-Product').addClass('opacity')
  $('.achievement-completed').addClass('opacity');
  $('.sponsors-content').addClass('translateX')
});

$(window).scroll(function(){
  const wScroll = $(this).scrollTop();

  if(wScroll>$('.content-about-us').offset().top-100){
   $('.content-about-us').removeClass('translateX')
   $('.content-about-us').addClass('show')

   $('.content-about-image').removeClass('translateX')
   $('.content-about-image').addClass('show')
  };

  if(wScroll>$('.Our-Product').offset().top-100){
    $('.Our-Product').removeClass('opacity')
    $('.Our-Product').addClass('show')
  }
  
  if(wScroll>$('.achievement').offset().top-200){
    $('.achievement-completed').each(function(i){
      setTimeout(function(){
         $('.achievement-completed').eq(i).removeClass('opacity')
         $('.achievement-completed').eq(i).addClass('show')
      },100 * i + 1); //muncul satu satu
    })
  }

  if(wScroll>$('.sponsors').offset().top-200){
    $('.sponsors-content').each(function(i){
      setTimeout(function(){
         $('.sponsors-content').eq(i).removeClass('translateX')
         $('.sponsors-content').eq(i).addClass('show')
      },100 * i + 1); //muncul satu satu
    })
  }
})