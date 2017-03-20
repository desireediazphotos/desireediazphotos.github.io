$(document).ready(function() {

// jQuery used: offset, (scrollTop, addClass, removeClass)

$("#menu-button-black").addClass("hide");

var pageY = $(".page").offset().top;

  $(window).scroll(function(){
    var currentScroll = $(window).scrollTop();
    
    if(currentScroll >= pageY){
      console.log("AT THE TOP");
      $("#menu-button-black").removeClass("hide").addClass("show");
    }
    else {
      $("#menu-button-black").removeClass("show").addClass("hide");
    }
  })

})
