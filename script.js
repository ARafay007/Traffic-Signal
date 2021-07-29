'use strict';

const redLight = document.querySelector('.red');
const yellowLight = document.querySelector('.yellow');
const greenLight = document.querySelector('.green');

const redLight2 = document.querySelector('.red2');
const yellowLight2 = document.querySelector('.yellow2');
const greenLight2 = document.querySelector('.green2');

const redLight3 = document.querySelector('.red3');
const yellowLight3 = document.querySelector('.yellow3');
const greenLight3 = document.querySelector('.green3');

const redLight4 = document.querySelector('.red4');
const yellowLight4 = document.querySelector('.yellow4');
const greenLight4 = document.querySelector('.green4');

let count = 1, timer = 0;

const changeLights = () => {
    if(count === 1){
        redLight.style.backgroundColor = 'white';
        yellowLight.style.backgroundColor = 'white';
        greenLight.style.backgroundColor = 'green';

        redLight2.style.backgroundColor = 'red';
        yellowLight2.style.backgroundColor = 'white';
        greenLight2.style.backgroundColor = 'white';

        redLight3.style.backgroundColor = 'red';
        yellowLight3.style.backgroundColor = 'white';
        greenLight3.style.backgroundColor = 'white';

        redLight4.style.backgroundColor = 'red';
        yellowLight4.style.backgroundColor = 'white';
        greenLight4.style.backgroundColor = 'white';

        count++;
        timer = 3000;
    } else if(count === 2){
        redLight2.style.backgroundColor = 'white';
        yellowLight2.style.backgroundColor = 'yellow';
        greenLight2.style.backgroundColor = 'white';

        count++;
        timer = 1000;
    } else if(count === 3){
        redLight.style.backgroundColor = 'red';
        yellowLight.style.backgroundColor = 'white';
        greenLight.style.backgroundColor = 'white';

        redLight2.style.backgroundColor = 'white';
        yellowLight2.style.backgroundColor = 'white';
        greenLight2.style.backgroundColor = 'green';

        count++;
        timer = 3000;
    } else if(count === 4){
        redLight3.style.backgroundColor = 'white';
        yellowLight3.style.backgroundColor = 'yellow';
        greenLight3.style.backgroundColor = 'white';

        count++;
        timer = 1000;
    } else if(count === 5){
        redLight2.style.backgroundColor = 'red';
        yellowLight2.style.backgroundColor = 'white';
        greenLight2.style.backgroundColor = 'white';

        redLight3.style.backgroundColor = 'white';
        yellowLight3.style.backgroundColor = 'white';
        greenLight3.style.backgroundColor = 'green';

        count++;
        timer = 3000;
    } else if(count === 6){
        redLight4.style.backgroundColor = 'white';
        yellowLight4.style.backgroundColor = 'yellow';
        greenLight4.style.backgroundColor = 'white';

        count++;
        timer = 1000;
    } else if(count === 7){
        redLight3.style.backgroundColor = 'red';
        yellowLight3.style.backgroundColor = 'white';
        greenLight3.style.backgroundColor = 'white';

        redLight4.style.backgroundColor = 'white';
        yellowLight4.style.backgroundColor = 'white';
        greenLight4.style.backgroundColor = 'green';

        count++;
        timer = 3000;
    } else if(count === 8){
        redLight.style.backgroundColor = 'white';
        yellowLight.style.backgroundColor = 'yellow';
        greenLight.style.backgroundColor = 'white';

        count = 1;
        timer = 1000;
    }
};

const trafficSignal = () => {
    changeLights();
    setTimeout(trafficSignal, timer);
};

setTimeout(trafficSignal, timer);