$( document ).ready(function() {
    foldersquare();
});

$( window ).resize(function(){
    foldersquare();
});
    
function foldersquare(){
    $("#content").css("height", "60%");
    c_height = $("#content").height();
    $(".folder").css("height", (c_height * 0.3) + 'px');
    f_height = $(".folder").height();
    $(".folder").css("width",  f_height + 'px');
    var x = $("div:last");
    var x = x.position().top + f_height
    $("#content").css("height", x.toString() + "px");
    $(".foldertext").css('font-size', f_height/7 + 'px');
}
