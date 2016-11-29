$(document).ready(function() {

// jQuery used: scrollTop, css, addClass, hasClass, removeClass, click

// PARALLAX
    function parallax() {
    	var scrolled = $(window).scrollTop();
    	$('.parallax').css('top',-(scrolled * 0.75) + 'px');
    }

    $(window).scroll(function(){
    	parallax();
    })

// STICKY NAV HERE - other file - only apply to resume page



//CAROUSEL 

	$('#carousel-next').click(function(){
  console.log("clicked next");
  
  var left = parseInt($('#carousel').css('margin-left').replace("px", ""));
  
  console.log(left);

  if (left == -10560){  
    return false
  } else {
    $('#carousel').css("margin-left", "-=960");
  };

})

$('#carousel-prev').click(function(){
  console.log("clicked previous");
  
  var left = parseInt($('#carousel').css('margin-left').replace("px", ""));
  
  console.log(left);

  if (left == 0){
      return false
    } else {
      $('#carousel').css("margin-left", "+=960");
    };
})

// SOCIAL BAR
$('.social-circle').addClass('hidden');

$('#social-button').click(function() { 
  console.log('social button clicked');
  
  if($('.social-circle').hasClass('hidden')){
    $('.social-circle').removeClass('hidden').addClass('active');
  }
  else{
    $('.social-circle').removeClass('active').addClass('hidden');
  }

});


})