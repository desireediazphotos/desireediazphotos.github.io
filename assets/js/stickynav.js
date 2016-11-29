$(document).ready(function() {

// jQuery used: offset, (scrollTop, addClass, removeClass)

var navbarY = $(".navbar").offset().top;

  $(window).scroll(function(){
    var currentScroll = $(window).scrollTop();
    
    if(currentScroll >= navbarY){
      console.log("AT THE TOP");
      $(".navbar").addClass("navbar-fixed");
    }
    else {
      $(".navbar").removeClass("navbar-fixed");
    }
  })

})
