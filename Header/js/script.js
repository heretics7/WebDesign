$(document).ready(function(){

var classOn = "on";

$("#btn1").click(function(){
    $("#bd header").eq(0).addClass(classOn).siblings().removeClass(classOn)
})
$("#btn2").click(function(){
    $("#bd header").eq(1).addClass(classOn).siblings().removeClass(classOn)
})
$("#btn3").click(function(){
    $("#bd header").eq(2).addClass(classOn).siblings().removeClass(classOn)
})
$("#btn4").click(function(){
    $("#bd header").eq(3).addClass(classOn).siblings().removeClass(classOn)
})
$("#btn5").click(function(){
    $("#bd header").eq(4).addClass(classOn).siblings().removeClass(classOn)
})

})