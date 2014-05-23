$( document ).ready(function() {
    resize();
});

$( window ).resize(function(){
    resize()
});

function resize(){
    height2 = $(".header").height();
    if (height2 < 30) {height2 = 30};
    $(".header").css('height', height2 + 'px');
    height = $(".header").height();
    $(".headerbuttontext").css('font-size', height/2 + 'px');
    $(".headertekst").css('font-size', height*4/5 + 'px');
}
    
