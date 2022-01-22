interaction = false;
document.addEventListener('click', function() {
    interaction = true;
});

function play() {
    var audio = new Audio(browser.runtime.getURL('sounds/sound.ogg'));
    if (interaction) {
        audio.play();
        document.getElementById("Moai").style.width = "50rem";
        setTimeout(() => {
            document.getElementById("Moai").style.width = "0rem";
        }, 3000);
    }
}

image = browser.runtime.getURL('images/Moai.png')
document.body.innerHTML += `<img src="${image}" id="Moai" style="position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);z-index:9999; width: 0rem;">`;
setInterval(play, Math.floor(Math.random() * 10000) + 1000);