$(document).ready(function () {
    $(".center").each(function (n, e) {
        var heightofChild = e.lastElementChild.offsetTop + e.lastElementChild.offsetHeight;
        var heightofMe = e.offsetTop + e.scrollHeight;
        e.style.padding = (heightofMe - heightofChild) / 2 + "px";
    });
});