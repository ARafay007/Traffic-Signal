'use strict';

const redLight = document.querySelectorAll('.red');
const yellowLight = document.querySelectorAll('.yellow');
const greenLight = document.querySelectorAll('.green');

const redLight2 = document.querySelectorAll('.red2');
const yellowLight2 = document.querySelectorAll('.yellow2');
const greenLight2 = document.querySelectorAll('.green2');

let count = 1, timer = 0;

const changeLights = () => {
    if(count === 1){
        redLight.forEach(el => el.style.backgroundColor = 'red');
        yellowLight.forEach(el => el.style.backgroundColor = 'white');
        greenLight.forEach(el => el.style.backgroundColor = 'white');

        redLight2.forEach(el => el.style.backgroundColor = 'white');
        yellowLight2.forEach(el => el.style.backgroundColor = 'white');
        greenLight2.forEach(el => el.style.backgroundColor = 'green');

        count++;
        timer = 3000;
    } else if(count === 2){
        redLight.forEach(el => el.style.backgroundColor = 'white');
        yellowLight.forEach(el => el.style.backgroundColor = 'yellow');
        greenLight.forEach(el => el.style.backgroundColor = 'white');

        count++;
        timer = 1000;
    } else if(count === 3){
        redLight.forEach(el => el.style.backgroundColor = 'white');
        yellowLight.forEach(el => el.style.backgroundColor = 'white');
        greenLight.forEach(el => el.style.backgroundColor = 'green');

        redLight2.forEach(el => el.style.backgroundColor = 'red');
        yellowLight2.forEach(el => el.style.backgroundColor = 'white');
        greenLight2.forEach(el => el.style.backgroundColor = 'white');

        count++;
        timer = 3000;
    } else if(count === 4){
        redLight2.forEach(el => el.style.backgroundColor = 'white');
        yellowLight2.forEach(el => el.style.backgroundColor = 'yellow');
        greenLight2.forEach(el => el.style.backgroundColor = 'white');

        count=1;
        timer = 1000;
    }
};

const trafficSignal = () => {
    changeLights();
    setTimeout(trafficSignal, timer);
};

setTimeout(trafficSignal, timer);