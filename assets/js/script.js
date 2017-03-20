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

})

// LIGHTBOX
$('.lightbox-img').addClass("hide");
$('#lightbox-bg').addClass("hide");

// CONCERTS 1
$('#concerts-1').click(function() { 
  console.log('gallery image clicked');
  $('#lightbox-bg').removeClass("hide").addClass("show");
  $('#concerts-1-show').removeClass("hide").addClass("show");
  
})

$('#lightbox-bg').click(function() { 
  console.log('lightbox-bg clicked');
  
  if($('#lightbox-bg').hasClass('show')){
  $('#lightbox-bg').removeClass("show").addClass("hide");
  $('#concerts-1-show').removeClass("show").addClass("hide");
  }
})

$(document).keyup(function(e) {
     if ($('#lightbox-bg').hasClass('show')) { 
      $('#lightbox-bg').removeClass("show").addClass("hide");
      $('#concerts-1-show').removeClass("show").addClass("hide");
    }
});

// CONCERTS 2

$('#concerts-2').click(function() { 
  console.log('gallery image clicked');
  $('#lightbox-bg').removeClass("hide").addClass("show");
  $('#concerts-2-show').removeClass("hide").addClass("show");
  
})

$('#lightbox-bg').click(function() { 
  console.log('lightbox-bg clicked');
  
  if($('#lightbox-bg').hasClass('show')){
    $('#lightbox-bg').removeClass("show").addClass("hide");
  }

  if($('#concerts-2-show').hasClass('show')){
   $('#concerts-2-show').removeClass("show").addClass("hide");
  }
})

$(document).keyup(function(e) {
  if($('#lightbox-bg').hasClass('show')){
    $('#lightbox-bg').removeClass("show").addClass("hide");
  }

  if($('#concerts-2-show').hasClass('show')){
   $('#concerts-2-show').removeClass("show").addClass("hide");
  }
});

// CONCERTS 3

$('#concerts-3').click(function() { 
  console.log('gallery image clicked');
  $('#lightbox-bg').removeClass("hide").addClass("show");
  $('#concerts-3-show').removeClass("hide").addClass("show");
  
})

$('#lightbox-bg').click(function() { 
  console.log('lightbox-bg clicked');
  
  if($('#lightbox-bg').hasClass('show')){
    $('#lightbox-bg').removeClass("show").addClass("hide");
  }

  if($('#concerts-3-show').hasClass('show')){
   $('#concerts-3-show').removeClass("show").addClass("hide");
  }
})

$(document).keyup(function(e) {
  if($('#lightbox-bg').hasClass('show')){
    $('#lightbox-bg').removeClass("show").addClass("hide");
  }

  if($('#concerts-3-show').hasClass('show')){
   $('#concerts-3-show').removeClass("show").addClass("hide");
  }
});

// CONCERTS 4

$('#concerts-4').click(function() { 
  console.log('gallery image clicked');
  $('#lightbox-bg').removeClass("hide").addClass("show");
  $('#concerts-4-show').removeClass("hide").addClass("show");
  
})

$('#lightbox-bg').click(function() { 
  console.log('lightbox-bg clicked');
  
  if($('#lightbox-bg').hasClass('show')){
    $('#lightbox-bg').removeClass("show").addClass("hide");
  }

  if($('#concerts-4-show').hasClass('show')){
   $('#concerts-4-show').removeClass("show").addClass("hide");
  }
})

$(document).keyup(function(e) {
  if($('#lightbox-bg').hasClass('show')){
    $('#lightbox-bg').removeClass("show").addClass("hide");
  }

  if($('#concerts-4-show').hasClass('show')){
   $('#concerts-4-show').removeClass("show").addClass("hide");
  }
});

// CONCERTS 5

$('#concerts-5').click(function() { 
  console.log('gallery image clicked');
  $('#lightbox-bg').removeClass("hide").addClass("show");
  $('#concerts-5-show').removeClass("hide").addClass("show");
  
})

$('#lightbox-bg').click(function() { 
  console.log('lightbox-bg clicked');
  
  if($('#lightbox-bg').hasClass('show')){
    $('#lightbox-bg').removeClass("show").addClass("hide");
  }

  if($('#concerts-5-show').hasClass('show')){
   $('#concerts-5-show').removeClass("show").addClass("hide");
  }
})

$(document).keyup(function(e) {
  if($('#lightbox-bg').hasClass('show')){
    $('#lightbox-bg').removeClass("show").addClass("hide");
  }

  if($('#concerts-5-show').hasClass('show')){
   $('#concerts-5-show').removeClass("show").addClass("hide");
  }
});

// CONCERTS 6

$('#concerts-6').click(function() { 
  console.log('gallery image clicked');
  $('#lightbox-bg').removeClass("hide").addClass("show");
  $('#concerts-6-show').removeClass("hide").addClass("show");
  
})

$('#lightbox-bg').click(function() { 
  console.log('lightbox-bg clicked');
  
  if($('#lightbox-bg').hasClass('show')){
    $('#lightbox-bg').removeClass("show").addClass("hide");
  }

  if($('#concerts-6-show').hasClass('show')){
   $('#concerts-6-show').removeClass("show").addClass("hide");
  }
})

$(document).keyup(function(e) {
  if($('#lightbox-bg').hasClass('show')){
    $('#lightbox-bg').removeClass("show").addClass("hide");
  }

  if($('#concerts-6-show').hasClass('show')){
   $('#concerts-6-show').removeClass("show").addClass("hide");
  }
});

// CONCERTS 7

$('#concerts-7').click(function() { 
  console.log('gallery image clicked');
  $('#lightbox-bg').removeClass("hide").addClass("show");
  $('#concerts-7-show').removeClass("hide").addClass("show");
  
})

$('#lightbox-bg').click(function() { 
  console.log('lightbox-bg clicked');
  
  if($('#lightbox-bg').hasClass('show')){
    $('#lightbox-bg').removeClass("show").addClass("hide");
  }

  if($('#concerts-7-show').hasClass('show')){
   $('#concerts-7-show').removeClass("show").addClass("hide");
  }
})

$(document).keyup(function(e) {
  if($('#lightbox-bg').hasClass('show')){
    $('#lightbox-bg').removeClass("show").addClass("hide");
  }

  if($('#concerts-7-show').hasClass('show')){
   $('#concerts-7-show').removeClass("show").addClass("hide");
  }
});

// CONCERTS 8

$('#concerts-8').click(function() { 
  console.log('gallery image clicked');
  $('#lightbox-bg').removeClass("hide").addClass("show");
  $('#concerts-8-show').removeClass("hide").addClass("show");
  
})

$('#lightbox-bg').click(function() { 
  console.log('lightbox-bg clicked');
  
  if($('#lightbox-bg').hasClass('show')){
    $('#lightbox-bg').removeClass("show").addClass("hide");
  }

  if($('#concerts-8-show').hasClass('show')){
   $('#concerts-8-show').removeClass("show").addClass("hide");
  }
})

$(document).keyup(function(e) {
  if($('#lightbox-bg').hasClass('show')){
    $('#lightbox-bg').removeClass("show").addClass("hide");
  }

  if($('#concerts-8-show').hasClass('show')){
   $('#concerts-8-show').removeClass("show").addClass("hide");
  }
});

// CONCERTS 9

$('#concerts-9').click(function() { 
  console.log('gallery image clicked');
  $('#lightbox-bg').removeClass("hide").addClass("show");
  $('#concerts-9-show').removeClass("hide").addClass("show");
  
})

$('#lightbox-bg').click(function() { 
  console.log('lightbox-bg clicked');
  
  if($('#lightbox-bg').hasClass('show')){
    $('#lightbox-bg').removeClass("show").addClass("hide");
  }

  if($('#concerts-9-show').hasClass('show')){
   $('#concerts-9-show').removeClass("show").addClass("hide");
  }
})

$(document).keyup(function(e) {
  if($('#lightbox-bg').hasClass('show')){
    $('#lightbox-bg').removeClass("show").addClass("hide");
  }

  if($('#concerts-9-show').hasClass('show')){
   $('#concerts-9-show').removeClass("show").addClass("hide");
  }
});

// CONCERTS 10

$('#concerts-10').click(function() { 
  console.log('gallery image clicked');
  $('#lightbox-bg').removeClass("hide").addClass("show");
  $('#concerts-10-show').removeClass("hide").addClass("show");
  
})

$('#lightbox-bg').click(function() { 
  console.log('lightbox-bg clicked');
  
  if($('#lightbox-bg').hasClass('show')){
    $('#lightbox-bg').removeClass("show").addClass("hide");
  }

  if($('#concerts-10-show').hasClass('show')){
   $('#concerts-10-show').removeClass("show").addClass("hide");
  }
})

$(document).keyup(function(e) {
  if($('#lightbox-bg').hasClass('show')){
    $('#lightbox-bg').removeClass("show").addClass("hide");
  }

  if($('#concerts-10-show').hasClass('show')){
   $('#concerts-10-show').removeClass("show").addClass("hide");
  }
});

// CONCERTS 11

$('#concerts-11').click(function() { 
  console.log('gallery image clicked');
  $('#lightbox-bg').removeClass("hide").addClass("show");
  $('#concerts-11-show').removeClass("hide").addClass("show");
  
})

$('#lightbox-bg').click(function() { 
  console.log('lightbox-bg clicked');
  
  if($('#lightbox-bg').hasClass('show')){
    $('#lightbox-bg').removeClass("show").addClass("hide");
  }

  if($('#concerts-11-show').hasClass('show')){
   $('#concerts-11-show').removeClass("show").addClass("hide");
  }
})

$(document).keyup(function(e) {
  if($('#lightbox-bg').hasClass('show')){
    $('#lightbox-bg').removeClass("show").addClass("hide");
  }

  if($('#concerts-11-show').hasClass('show')){
   $('#concerts-11-show').removeClass("show").addClass("hide");
  }
});

// CONCERTS 12

$('#concerts-12').click(function() { 
  console.log('gallery image clicked');
  $('#lightbox-bg').removeClass("hide").addClass("show");
  $('#concerts-12-show').removeClass("hide").addClass("show");
  
})

$('#lightbox-bg').click(function() { 
  console.log('lightbox-bg clicked');
  
  if($('#lightbox-bg').hasClass('show')){
    $('#lightbox-bg').removeClass("show").addClass("hide");
  }

  if($('#concerts-12-show').hasClass('show')){
   $('#concerts-12-show').removeClass("show").addClass("hide");
  }
})

$(document).keyup(function(e) {
  if($('#lightbox-bg').hasClass('show')){
    $('#lightbox-bg').removeClass("show").addClass("hide");
  }

  if($('#concerts-12-show').hasClass('show')){
   $('#concerts-12-show').removeClass("show").addClass("hide");
  }
});

// LOCK SCROLL

if ($('#lightbox-bg').hasClass('show')){
  $("html").css({ height: '100%', overflow: 'hidden' }); 
}

});




