$(document).ready(function() {
    resize();
});

$(window).resize(function(){
    resize()
});

$(window).scroll(function(){
    resize()
});

function resize(){
//    if ($(window).height() < 380)
        {$(".sShot").css('height', $(window).height() - $(window).height() * 0.15 + 'px')}
//    else
//        {$("#screenshots").css('height', '60%')}
    
    
//    height2 = $(window).height()*0.05;
//    if (height2 < 50) {height2 = 50};
//    $(".header").css('height', height2 + 'px');
//    height = $(".header").height();
//    $(".headerbuttontext").css('font-size', height/2 + 'px');
//    $(".headertekst").css('font-size', height*4/5 + 'px');
//    $(".underheader").css('height', height);
}