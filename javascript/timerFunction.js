let timer = document.getElementById('timer');
let mainContainer = document.querySelector('.main-container');
let btnStart = document.querySelectorAll('button')[0];
let message = document.getElementById('info');
let minutes = 24;
let seconds = 60;
let interval;

message.style.display = 'none';
let startPomodoro = () => {
    interval = setInterval(()=> {
        //Countdown
        seconds = seconds - 1;

        if (seconds == 0) {
            minutes  = minutes - 1;
            seconds = 59;
        }

        //Adding "0" if single value
        seconds < 10 && (seconds = `0${seconds}`);

        //Stop Interval
        if (minutes < 0) {
            clearInterval(interval);
            message.style.display = 'block';
            message.innerHTML = 'Tómate 5 minutos de descanso';
            mainContainer.style.display = 'none';
            document.getElementById('audio').play();
            setTimeout(() => {
                location.reload();
            }, 300000);

            minutes = 25;
            seconds = 0 + '0';
        }
        timer.innerHTML = `${minutes}:${seconds}`;
    }, 1000)
}

btnStart.addEventListener('click', startPomodoro);