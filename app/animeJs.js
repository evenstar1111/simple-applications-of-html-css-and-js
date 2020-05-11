let playBtn = document.querySelector('#play');
let pauseBtn = document.querySelector('#pause');
let restartBtn = document.querySelector('#restart');
let slider = document.querySelector('#slider');

let elems = document.querySelectorAll('.item');

//adding event handler to change the status of buttons
playBtn.addEventListener('click', function() {
    this.classList.add('active');
    pauseBtn.classList.remove('active');
    restartBtn.classList.remove('active');
    newAnimation.play();
});

pauseBtn.addEventListener('click', function() {
    this.classList.add('active');
    playBtn.classList.remove('active');
    restartBtn.classList.remove('active');
    newAnimation.pause();
});

restartBtn.addEventListener('click', function() {
    this.classList.add('active');
    playBtn.classList.remove('active');
    pauseBtn.classList.remove('active');
    newAnimation.restart();
});



let newAnimation = anime({
    targets: elems,
    borderRadius: [0, '50%', 0],
    translateX: [0, 500, 0],
    rotate: 360,
    duration: 2000,
    delay: (el, i) => {return i * anime.random(200, 500)},
    // endDelay: 200,
    easing: 'easeInOutQuad',
    // direction: 'alternate',
    loop: true,
    autoplay: false
});




slider.oninput = function() {
    newAnimation.seek( newAnimation.duration * (slider.value / 1000) );
    console.log(slider.value)
}