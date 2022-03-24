$(document).ready(function(){

    /* popup */
    $('.notice li:nth-child(1)').click(function(){
        $('.popUpBox').show();
    })
    $('.popUpBox button').click(function(){
        $('.popUpBox').hide();
    })
    
    /* modal */
    $('.notice li:nth-child(2)').click(function(){
        $('.popUpModal').show();
    })
    $('.popUpBox1 button').click(function(){
        $('.popUpModal').hide();
    })
    
    /* tab */
    $('.tab h3').click(function(){
        $('.tab > div').removeClass('on');
        $(this).parent().addClass('on');
    })
})