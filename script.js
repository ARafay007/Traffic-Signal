'use strict';

const redLight = document.querySelector('.red');
const yellowLight = document.querySelector('.yellow');
const greenLight = document.querySelector('.green');
let count = 1, timer = 0;

const changeLights = () => {
    if(count === 1){
        redLight.style.backgroundColor = 'red';
        yellowLight.style.backgroundColor = greenLight.style.backgroundColor = 'white';
        count++;
        timer = 3000;
    } else if(count === 2){
        yellowLight.style.backgroundColor = 'yellow';
        redLight.style.backgroundColor = greenLight.style.backgroundColor = 'white';
        count++;
        timer = 1000;
    } else if(count === 3){
        greenLight.style.backgroundColor = 'green';
        redLight.style.backgroundColor = yellowLight.style.backgroundColor = 'white';
        count = 1;
        timer = 3000;
    }
};

const trafficSignal = () => {
    changeLights();
    setTimeout(trafficSignal, timer);
};

setTimeout(trafficSignal, timer);