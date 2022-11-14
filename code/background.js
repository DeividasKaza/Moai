 let audio = new Audio(chrome.runtime.getURL('assets/audio/sound.ogg'));
 let image = chrome.runtime.getURL('assets/images/Moai.png');

document.addEventListener('click', function () {
    let chance = Math.floor(Math.random() * 10);

    if (chance == 0) {
        audio.play();
        let img = document.createElement('img');
        img.src = image;
 
        img.style = 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); opacity: 0; transition: opacity 0s; z-index: 9999; width: 40%; height: auto; pointer-events: none;';
        document.body.appendChild(img);
        
        setTimeout(function () { img.style.opacity = 1; }, 0);
        setTimeout(function () { img.style.transition = 'opacity 1s'; img.style.opacity = 0; }, 500);
        setTimeout(function () { img.remove(); }, 2000);
    }
})