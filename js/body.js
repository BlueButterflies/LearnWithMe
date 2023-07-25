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

const msg = new SpeechSynthesisUtterance();
msg.volume = 1; // 0 to 2
msg.rate = 0.5; // 0.1 to 10
msg.pitch = 1; //0 to 2
msg.text = '';
msg.lang = 'en-US';

/**Get button id tags from body.html  and produce sounds with the pronunciation of words*/
const head = document.getElementById('head').addEventListener('click', (e) => {
  e.preventDefault();
  msg.text = 'head';
  window.speechSynthesis.speak(msg);

});

const eyes =  document.getElementById('eyes').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'eyes';
    window.speechSynthesis.speak(msg);
})

const ear =  document.getElementById('ear').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'ear';
    window.speechSynthesis.speak(msg);
})

const nose =  document.getElementById('nose').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'nose';
    window.speechSynthesis.speak(msg);
})

const mouth =  document.getElementById('mouth').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'mouth';
    window.speechSynthesis.speak(msg);
})

const hands =  document.getElementById('hands').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'hands';
    window.speechSynthesis.speak(msg);
})

const finger =  document.getElementById('finger').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'finger';
    window.speechSynthesis.speak(msg);
})

const neek =  document.getElementById('neck').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'neck';
    window.speechSynthesis.speak(msg);
})

const arm =  document.getElementById('arm').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'arm';
    window.speechSynthesis.speak(msg);
})

const leg =  document.getElementById('leg').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'leg';
    window.speechSynthesis.speak(msg);
})


const foot =  document.getElementById('foots').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'foots';
    window.speechSynthesis.speak(msg);
})

const heel =  document.getElementById('heel').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'heel';
    window.speechSynthesis.speak(msg);
})

const toes =  document.getElementById('toes').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'toes';
    window.speechSynthesis.speak(msg);
})

const knee =  document.getElementById('knee').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'knee';
    window.speechSynthesis.speak(msg);
})

const elbow =  document.getElementById('elbow').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'elbow';
    window.speechSynthesis.speak(msg);
})

const jaw =  document.getElementById('jaw').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'jaw';
    window.speechSynthesis.speak(msg);
})

const hair =  document.getElementById('hair').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'hair';
    window.speechSynthesis.speak(msg);
})

const shoulder =  document.getElementById('shoulder').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'shoulder';
    window.speechSynthesis.speak(msg);
})

const chest =  document.getElementById('chest').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'chest';
    window.speechSynthesis.speak(msg);
})

const cheek =  document.getElementById('cheek').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'cheek';
    window.speechSynthesis.speak(msg);
})

const eyebrows =  document.getElementById('eyebrows').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'eyebrows';
    window.speechSynthesis.speak(msg);
})

const eyelash =  document.getElementById('eyelash').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'eyelash';
    window.speechSynthesis.speak(msg);
})

const teeth =  document.getElementById('teeth').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'teeth';
    window.speechSynthesis.speak(msg);
})

const stomach =  document.getElementById('stomach').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'stomach';
    window.speechSynthesis.speak(msg);
})

