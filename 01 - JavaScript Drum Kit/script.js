function removeTransition(e)
{
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

function playSound(event)
{
    var audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    var key = document.querySelector(`div[data-key="${event.keyCode}"]`);

    if(!audio) return ;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
    setTimeout(removeTransition(key),40000);

}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

addEventListener('keydown',playSound);