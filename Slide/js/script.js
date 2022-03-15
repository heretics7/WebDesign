$(document).ready(function(){

  /* Slide-left */
  
  var widthMv = $("#slider_left").width();
  var dir = -1;

  setInterval(function(){
    
    $("#slider_left ul").animate( { "marginLeft": widthMv*dir}, 400, function(){
      $(this).find("li").eq(0).appendTo($(this));
      $(this).css("margin-left", 0);
    });

  },3000)

  /* Slide-top */
  
  var heightMv = $("#slider_top").height();

  setInterval(function(){
    
    $("#slider_top ul").animate( { "marginTop": heightMv*dir}, 400, function(){
      $(this).find("li").eq(0).appendTo($(this));
      $(this).css("margin-top", 0);
    });

  },3000)

  /* Fade */
  var classNm = "show";
  var count = 0;
  var total = $("#slider_fade li").length;

  setInterval(function(){
    count++;
    count %= total;

    $("#slider_fade li").eq(count).addClass(classNm).siblings().removeClass(classNm)
    

  },3000)
  

  $("#btn1").click( function(){
    $("#slider_left").toggleClass("d-block");
  })
  $("#btn2").click( function(){
    $("#slider_top").toggleClass("d-block");
  })
  $("#btn3").click( function(){
    $("#slider_fade").toggleClass("d-block");
  })
})
