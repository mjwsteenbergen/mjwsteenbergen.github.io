console.log(screen.width)

window.addEventListener("load", (a) => {
    const doodle = document.getElementById("doodle");
    doodle.setAttribute("width", Math.min("900", screen.width) + "px");
    const bg = document.getElementById("background-player");
    var s = (screen.width / 1717)*1920;
    bg.style = `width: ${Math.max(s, screen.height * (1920/1080))}px; height: ${Math.max(screen.height, s * (1080/1920))}px; margin-left:-100px`;

    
});

