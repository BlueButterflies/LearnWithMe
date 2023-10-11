// MIT License Learn with me
//
// Copyright (c) 2023 Butterfly Tech Creative Solution
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
//


//Variables
const msg = new SpeechSynthesisUtterance();
msg.volume = 1; // 0 to 2
msg.rate = 0.8; // 0.1 to 10
msg.pitch = 1; //0 to 2
msg.text = '';
msg.lang = 'en-US';

const clockOne = document.getElementById('clockOne').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = "It is five o'clock";
    window.speechSynthesis.speak(msg);
})

const clockTwo = document.getElementById('clockTwo').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'It is twelve to four';
    window.speechSynthesis.speak(msg);
});

const clockThree = document.getElementById('clockThree').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'It is ten past ten';
    window.speechSynthesis.speak(msg);
});

const clockFour = document.getElementById('clockFour').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'It is two to ten';
    window.speechSynthesis.speak(msg);
});

const clockFive = document.getElementById('clockFive').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'It is three o\'clock';
    window.speechSynthesis.speak(msg);
});

const clockSix = document.getElementById('clockSix').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'It is four past four';
    window.speechSynthesis.speak(msg);
});

const clockSeven = document.getElementById('clockSeven').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'It is five to ten';
    window.speechSynthesis.speak(msg);
});

const clockEight = document.getElementById('clockEight').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'It is twelve o\'clock';
    window.speechSynthesis.speak(msg);
});

const clockNine = document.getElementById('clockNine').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'It is eleven past twenty';
    window.speechSynthesis.speak(msg);
});

const clockTen = document.getElementById('clockTen').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'It is ten to twenty';
    window.speechSynthesis.speak(msg);
});

const clockEleven = document.getElementById('clockEleven').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'It is eight past five';
    window.speechSynthesis.speak(msg);
});

const clockTwelve = document.getElementById('clockTwelve').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'It is a quarter to nine';
    window.speechSynthesis.speak(msg);
});

const clockThirteen = document.getElementById('clockThirteen').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'It is a quarter past two';
    window.speechSynthesis.speak(msg);
});

const clockFourteen = document.getElementById('clockFourteen').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'It is half past eleven';
    window.speechSynthesis.speak(msg);
});

const clockFifteen = document.getElementById('clockFifteen').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'It is thirty to eleven';
    window.speechSynthesis.speak(msg);
});

const clockSixteen = document.getElementById('clockSixteen').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'It is fifteen past twelve';
    window.speechSynthesis.speak(msg);
});