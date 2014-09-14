$( document ).ready(function() {
    //init();
    $(".titel").css({
    backgroundColor: "white"
    });
});

function init(){
    $(".balk").css({
        height: $("#timeline").css("width"),
        width: 0.25*$("#picture-martijn").position().left + "px"
    });
}

$( window ).resize(function(){
    if($(window).width() < 1000)
    {
        $("body").css("width", "1000px");
    }
    else
    {
        $("body").css("width", "auto");
    }
    
    $()
    
});


$(window).scroll(function(){
    var offset = $(window).scrollTop() * 2;
    if(offset < 0)
    { offset = 0;}
    if (offset > $("#img1").width())
    { offset = $("#img1").width() }
    $("#block1").css("margin-left", offset + "px");
    
    var offset2 = $(window).scrollTop() * 2 - $("#block2").offset().top ;
    if(offset2 < 0)
    { offset2 = 0;}
    if (offset2 > $("#img2").width())
    { offset2 = $("#img2").width() }
    $("#block2").css("margin-right", offset2 + "px");
});