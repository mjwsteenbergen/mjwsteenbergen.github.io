$( document ).ready(function() {
    resize();
    init();
});

$( window ).resize(function(){
    resize()
});

function resize(){
    height2 = $(window).height()*0.1;
    if (height2 < 50) {height2 = 50};
    $(".header").css('height', height2 + 'px');
    height = $(".header").height();
    $(".headerbuttontext").css('font-size', height/3.5 + 'px');
    $(".headertekst").css('font-size', height*2/5 + 'px');
    $(".underheader").css('height', height);
}

function init(){
    var cook = document.cookie;
    if (cook == null){
        $(".header").css({
            marginTop: -$(".header").height()
        })
        $(".header").animate({"marginTop": "+="+$(".header").height()});
        document.cookie="Hello"
    }
}
