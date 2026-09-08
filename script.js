const display = document.getElementById('display');
let pauseBtn = document.getElementById('pause-btn');
let startBtn = document.getElementById('start-btn');
let resetBtn = document.getElementById('reset-btn');

let seconds = 0
let timerId = null;

startBtn.addEventListener('click',()=>{
    if( timerId !== null)return;

    timerId = setInterval(()=>{
        seconds++
        display.innerText = 0 + seconds
    },1000)
})

pauseBtn.addEventListener('click', ()=>{
    clearInterval(timerId);
    timerId = null;

})

resetBtn.addEventListener('click', ()=>{
    display.innerText= 0;
    seconds = 0;
    clearInterval(timerId);
    timerId = null
})

