
// $('.content-about-us').on
$(window).on('load',function(){
  $('.university-img').addClass('translateX')
  $('.cardBox').addClass('translateX')
  $('.newsCard').addClass('opacity')
  $('.upcoming-event-date').addClass('translateY')
  $('.countries__imgThumb').addClass('translateY')
  $('.testimonial__card').addClass('opacity')
  $('.join').addClass('opacity')
});

$(window).scroll(function(){
  const wScroll = $(this).scrollTop();

  if(wScroll>$('.about-us').offset().top-100){
   $('.university-img').each(function(i){
    setTimeout(function(){
       $('.university-img').eq(i).removeClass('translateX')
       $('.university-img').eq(i).addClass('show')
    },100 * i + 1); //muncul satu satu
  })
  };
  if(wScroll>$('.our-servce').offset().top-100){
    $('.cardBox').each(function(i){
     setTimeout(function(){
        $('.cardBox').eq(i).removeClass('translateX')
        $('.cardBox').eq(i).addClass('show')
     },100 * i + 1); //muncul satu satu
   })
   };
   if(wScroll>$('.news').offset().top-100){
    $('.newsCard').removeClass('opacity')
    $('.newsCard').addClass('show')
   };

   if(wScroll>$('.upcoming-event').offset().top-400){
     console.log('ok')
    $('.upcoming-event-date').each(function(i){
     setTimeout(function(){
        $('.upcoming-event-date').eq(i).removeClass('translateY')
        $('.upcoming-event-date').eq(i).addClass('show')
     },200 * i + 1); //muncul satu satu
   })
   };

   if(wScroll>$('.countries').offset().top-400){
   $('.countries__imgThumb').each(function(i){
    setTimeout(function(){
       $('.countries__imgThumb').eq(i).removeClass('translateY')
       $('.countries__imgThumb').eq(i).addClass('show')
    },200 * i + 1); //muncul satu satu
  })
  };

  if(wScroll>$('.testimonial').offset().top-400){
    $('.testimonial__card').each(function(i){
     setTimeout(function(){
        $('.testimonial__card').eq(i).removeClass('opacity')
        $('.testimonial__card').eq(i).addClass('show')
     },200 * i + 1); //muncul satu satu
   })
   };
   if(wScroll>$('.join').offset().top-400){
    $('.join').removeClass('opacity')
    $('.join').addClass('show')
   };

})