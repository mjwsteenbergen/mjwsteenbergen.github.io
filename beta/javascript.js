$(document).ready(function () {
    init();
    $(".titel").css({
        backgroundColor: "white"
    });
});

function init() {
    $(".socitem").hover(function () {
        $(this).children("div").animate({
            height: "100%",
            width: "100%",
            top: "0%",
            left: "0%"

        }, 400)
    }, function () {
        $(this).children("div").animate({
            height: "0%",
            width: "0%",
            top: "50%",
            left: "50%"

        }, 400)
    });


}

$(window).resize(function () {
    if ($(window).width() < 1000) {
        $("body").css("width", "1000px");
    } else {
        $("body").css("width", "auto");
    }

});


$(window).scroll(function () {
    var offset = $(window).scrollTop();

//    $("#content1").css("background-position", "0px " + offset + "px");
//$("#content1").css("height", "5" + " px");

    if ($("#l1").offset().top - (offset + $(window).height()) < 0) {
        $("#l1").animate({
            width: "40%"
        }, 1000);
    }

    if ($("#l2").offset().top - (offset + $(window).height()) < 0) {
        $("#l2").animate({
            width: "40%"
        }, 1000);
    }
});