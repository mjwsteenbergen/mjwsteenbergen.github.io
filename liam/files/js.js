console.log(screen.width)

window.addEventListener("load", (a) => {
    const doodle = document.getElementById("doodle");
    doodle.setAttribute("width", Math.min("900", screen.width) + "px");
    const bg = document.getElementById("background-player");
    bg.style = `width: ${Math.max(screen.width, window.innerHeight * (1920 / 1080))}px; height: ${window.innerHeight}px;`;

    
});

