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
    
});