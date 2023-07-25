/* MIT License Learn with me
Copyright (c) 2023 Butterfly Tech Creative Solution
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
*/


//Variables
const msg = new SpeechSynthesisUtterance();
msg.volume = 1; // 0 to 2
msg.rate = 0.5; // 0.1 to 10
msg.pitch = 1; //0 to 2
msg.text = '';
msg.lang = 'en-US';


/**Get button id tags from colorsGeometricFigures.html  and produce sounds with the pronunciation of words*/
/**Colors */
const white = document.getElementById('white').addEventListener('click', (e) => {
    e.preventDefault();

    msg.text = 'white';
    speechSynthesis.speak(msg);
})

const black = document.getElementById('black').addEventListener('click', (e) => {
    e.preventDefault();

    msg.text = 'black';
    speechSynthesis.speak(msg);
})

const gray = document.getElementById('gray').addEventListener('click', (e) => {
    e.preventDefault();

    msg.text = 'gray';
    speechSynthesis.speak(msg);
})

const red = document.getElementById('red').addEventListener('click', (e) => {
    e.preventDefault();

    msg.text = 'red';
    speechSynthesis.speak(msg);
})

const blue = document.getElementById('blue').addEventListener('click', (e) => {
    e.preventDefault();

    msg.text = 'blue';
    speechSynthesis.speak(msg);
})

const yellow = document.getElementById('yellow').addEventListener('click', (e) => {
    e.preventDefault();

    msg.text = 'yellow';
    speechSynthesis.speak(msg);
})

const green = document.getElementById('green').addEventListener('click', (e) => {
    e.preventDefault();

    msg.text = 'green';
    speechSynthesis.speak(msg);
})

const orange = document.getElementById('orange').addEventListener('click', (e) => {
    e.preventDefault();

    msg.text = 'orange';
    speechSynthesis.speak(msg);
})

const brown = document.getElementById('brown').addEventListener('click', (e) => {
    e.preventDefault();

    msg.text = 'brown';
    speechSynthesis.speak(msg);
})

const pink = document.getElementById('pink').addEventListener('click', (e) => {
    e.preventDefault();

    msg.text = 'pink';
    speechSynthesis.speak(msg);
})

const purple = document.getElementById('purple').addEventListener('click', (e) => {
    e.preventDefault();

    msg.text = 'purple';
    speechSynthesis.speak(msg);
})

const lightBlue = document.getElementById('lightBlue').addEventListener('click', (e) => {
    e.preventDefault();

    msg.text = 'lightBlue';
    speechSynthesis.speak(msg);
})

/**Geometric figures */
const square = document.getElementById('square').addEventListener('click', (e) => {
    e.preventDefault();

    msg.text = 'square';
    speechSynthesis.speak(msg);

})

const triangle = document.getElementById('triangle').addEventListener('click', (e) => {
    e.preventDefault();

    msg.text = 'triangle';
    speechSynthesis.speak(msg);

})

const circle = document.getElementById('circle').addEventListener('click', (e) => {
    e.preventDefault();

    msg.text = 'circle';
    speechSynthesis.speak(msg);

})

const rectangle = document.getElementById('rectangle').addEventListener('click', (e) => {
    e.preventDefault();

    msg.text = 'rectangle';
    speechSynthesis.speak(msg);

})

const rightTriangle = document.getElementById('rightTriangle').addEventListener('click', (e) => {
    e.preventDefault();

    msg.text = 'rightaTriangle';
    speechSynthesis.speak(msg);

})

const parallelogram = document.getElementById('parallelorgam').addEventListener('click', (e) => {
    e.preventDefault();

    msg.text = 'parallelorgam';
    speechSynthesis.speak(msg);

})

const ellipse = document.getElementById('ellipse').addEventListener('click', (e) => {
    e.preventDefault();

    msg.text = 'ellipse';
    speechSynthesis.speak(msg);

})

const trapezoid = document.getElementById('trapezoid').addEventListener('click', (e) => {
    e.preventDefault();

    msg.text = 'trapezoid';
    speechSynthesis.speak(msg);

})

const rhombus = document.getElementById('rhombus').addEventListener('click', (e) => {
    e.preventDefault();

    msg.text = 'rhombus';
    speechSynthesis.speak(msg);

})

const hexagon = document.getElementById('hexagon').addEventListener('click', (e) => {
    e.preventDefault();

    msg.text = 'hexagon';
    speechSynthesis.speak(msg);

})

const petangon = document.getElementById('petangon').addEventListener('click', (e) => {
    e.preventDefault();

    msg.text = 'pentagon';
    speechSynthesis.speak(msg);

})

const heptagon = document.getElementById('heptagon').addEventListener('click', (e) => {
    e.preventDefault();

    msg.text = 'heptagon';
    speechSynthesis.speak(msg);

})


const heart = document.getElementById('heart').addEventListener('click', (e) => {
    e.preventDefault();

    msg.text = 'heart';
    speechSynthesis.speak(msg);

})

const star = document.getElementById('star').addEventListener('click', (e) => {
    e.preventDefault();

    msg.text = 'star';
    speechSynthesis.speak(msg);

})

const cross = document.getElementById('cross').addEventListener('click', (e) => {
    e.preventDefault();

    msg.text = 'croos';
    speechSynthesis.speak(msg);

})

const arrow = document.getElementById('arrow').addEventListener('click', (e) => {
    e.preventDefault();

    msg.text = 'arrow';
    speechSynthesis.speak(msg);

})

const octagon = document.getElementById('octagon').addEventListener('click', (e) => {
    e.preventDefault();

    msg.text = 'octagon';
    speechSynthesis.speak(msg);

})

const cylinder = document.getElementById('cylinder').addEventListener('click', (e) => {
    e.preventDefault();

    msg.text = 'cylinder';
    speechSynthesis.speak(msg);

})

const decagon = document.getElementById('decagon').addEventListener('click', (e) => {
    e.preventDefault();

    msg.text = 'decagon';
    speechSynthesis.speak(msg);

})

const cube = document.getElementById('cube').addEventListener('click', (e) => {
    e.preventDefault();

    msg.text = 'cube';
    speechSynthesis.speak(msg);

})

