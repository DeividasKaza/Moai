interaction = false;
document.addEventListener('click', function () {
interaction = true;
});

function play() {
    var audio = new Audio(chrome.runtime.getURL('sounds/sound.mp3'));
    audio.volume = 1
    audio.play();
}

document.body.innerHTML += '<img src="https://cdn.discordapp.com/attachments/713653773037469756/932692265900584980/Moai.png" id="Moai" style="position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);z-index:9999; width: 0rem;">';
setInterval(sus, Math.floor(Math.random()* 10000) + 1000);

function sus2(){
    document.getElementById("Moai").style.width = "0rem";
}

function sus(){
    if (interaction) {
    play();
    document.getElementById("Moai").style.width = "50rem";
    setTimeout(sus2, 5000);
    }
}