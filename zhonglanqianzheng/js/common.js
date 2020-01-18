//留言板
$(".top span:last-of-type").click(function(){
    $(".liuyan").toggleClass("min")
    $(this).toggleClass("huanimg")
})

//滚动条侧事件
$(window).scroll(function(){
    if($(window).scrollTop()>200){
        $("#slider .back a").css("display","block")
    }else{
        $("#slider .back a").css("display","none")
    }
})
$("#slider li:nth-of-type(5)").click(function(){
    $("body,html").animate({
        "scrollTop":0
    },500) 
})