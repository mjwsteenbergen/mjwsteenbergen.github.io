$(document).ready(function () {
    init();
    $(".titel").css({
        backgroundColor: "white"
    });
});

function init() {
    $(".socitem").hover(function () {
        $(this).children("div").children("p").css("visibility", "visible");
        $(this).children("div").css("visibility", "visible");
        $(this).children("div").animate({
            height: "104%",
            width: "104%",
            top: "-2%",
            left: "-2%"
        }, 400)
    }, function () {
        $(this).children("div").animate({
            height: "0%",
            width: "0%",
            top: "50%",
            left: "50%"
        }, 400)
        $(this).children("div").children("p").css("visibility", "hidden");
    });
    $(".socitem").children("div").animate({
        height: "0%",
        width: "0%",
        top: "50%",
        left: "50%"
    }, 3);
    $("#headerh").load("bestanden/Bovenbalk.html", function () {
        $("#header").fadeOut(0);
    });
}
$(window).resize(function () {
    // if ($(window).width() < 1000) {
    // $("body").css("width", "1000px");
    // } else {
    // $("body").css("width", "auto");
    // }
    if ($(window).width() > 1200) {
        $("#p1").css("font-size", "500%");
    } else {
        $("#p1").css("font-size", "300%");
    }
    var windowheight = $(window).height();
    $(".oneheight").css("height", windowheight);
    $(".23height").css("height", (2 / 3) * windowheight);
    $(".80height").css("height", 0.8 * windowheight);
    $(".gheight").css("height", (((1 + Math.sqrt(5)) / 2) - 1) * windowheight);
});
$(window).scroll(function () {
    var offset = $(window).scrollTop();
    // var tes1 = $(window).scrollTop() - ($("#project1").offset().top - $(window).height());
    // var tes2 = $(window).scrollTop() - ($("#project1").height() + $("#project1").offset().top);
    //
    // if (tes1 > 0 && tes2 < 0) {
    // var total = (-$(window).scrollTop() + ($("#project1").height() + $("#project1").offset().top)) / ($("#project1").height() + $("#project1").offset().top);
    // $("#phone").css("marginTop", 27 * total + "%");
    // }
    if ($("#content1").height() * 0.75 < offset) {
        $("#header").fadeIn("slow");
        $("#c2desc").animate({
            opacity: 1
        }, 800);
    }
    if ($("#content1").height() * 0.75 > offset) {
        $("#header").fadeOut("slow");
    }
});