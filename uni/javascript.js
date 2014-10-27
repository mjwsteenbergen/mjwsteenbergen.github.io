$(window).scroll(function(){
    var offset = $(window).scrollTop()-300;
    if(offset < 0)
    { offset = 0;}
    if (offset > $("#under").width())
    { offset = $("#under").width() }
    $("#top").css("margin-left", offset + "px");
    $("body").css("background-color","white");
});