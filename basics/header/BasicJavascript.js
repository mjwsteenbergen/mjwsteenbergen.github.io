$( document ).ready(function() {
    resize();
    init();
});

$( window ).resize(function(){
    resize()
});

function resize(){
    height2 = $(window).height()*0.05*0;
    if (height2 < 35) {height2 = 35};
    $(".header").css('height', height2 + 'px');
    height = $(".header").height();
    $(".headerbuttontext").css('font-size', height/2 + 'px');
    $(".headertekst").css('font-size', height*4/5 + 'px');
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
