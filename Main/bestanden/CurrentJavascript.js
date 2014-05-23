//$(window).resize(resize());
//
//function resize(){
//    var height = $( window ).height();
//    var width = $(window).width();
//    var posWinHeight = $("document").scrollTop();
//    alert( $(document).height());
//    $(".titel").height( $(window).height() - $(".header").height());
//}
//
//$( window ).onerror(function(){
//    alert("Error has occured");
//});

function setWitdh(circle, LorR){  
    var dx = 0.5*$(window).width() - $(".balk").width();
    var dy = 0.5*$(window).height();
    var wid = (dy/dx)*($(circle).offset().top-$(window).scrollTop()-0.3*$(window).height());
        if (wid < 0){var wid = 0;}
    if (LorR == "right"){
        $(circle).css({
            marginLeft: wid + "px"
        });
    } else {
        $(circle).css({
            marginRight: wid + "px"
        });
    }
    var marR = $(circle).css("marginRight");
    alert(marR.substr(0,(marR.length()-2)));
    if (marR.substr(0,marR.length()-2) > 0){
        $(circle).css({
            display: "none"
        });
    }
    
    //Temp

}

$( document ).ready(function() {
    init();
    $(".titel").css({
    backgroundColor: "black"
    });
});

function init(){
    $(".balk").css({
        height: $("#timeline").css("width"),
        width: 0.25*$("#picture-martijn").position().left + "px"
    });
}

$( window ).scroll(function(){
    $(".circle").css({
        display: "inline"
    });
    
    $(".balk").css({
        opacity: ($(window).scrollTop()-0.4*$(window).height())/(0.15*$( window ).width())
    });

    setWitdh($("#picture-martijn"), "right");
    setWitdh($("#picture-Delft"), "left");
});