$(document).ready(function(){

  /* slider-left */
  
  var widthMv = $("#slider_left").width();
  var dir = -1;

  setInterval(function(){
    
    $("#slider_left ul").animate( { "marginLeft": widthMv*dir}, 400, function(){
      $(this).find("li").eq(0).appendTo($(this));
      $(this).css("margin-left", 0);
    });

  },3000)

  /* slider-top */
  
  var heightMv = $("#slider_top").height();

  setInterval(function(){
    
    $("#slider_top ul").animate( { "marginTop": heightMv*dir}, 400, function(){
      $(this).find("li").eq(0).appendTo($(this));
      $(this).css("margin-top", 0);
    });

  },3000)

  /* slider-fade */

  var classNm = "show";
  var count = 0;
  var total = $("#slider_fade li").length;

  setInterval(function(){
    count++;
    count %= total;

    $("#slider_fade li").eq(count).addClass(classNm).siblings().removeClass(classNm)
    

  },3000)

  /* button */

  var classOn = "on";

  $("#btn1").click(function(){
    $("#slider div").eq(0).removeClass(classOn).siblings().addClass(classOn)
  })
  $("#btn2").click(function(){
    $("#slider div").eq(1).removeClass(classOn).siblings().addClass(classOn)
  })
  $("#btn3").click(function(){
    $("#slider div").eq(2).removeClass(classOn).siblings().addClass(classOn)
  })
  $("#btnAll").click(function(){
    $("#slider div").removeClass(classOn)
  })

})
