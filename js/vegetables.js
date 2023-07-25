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


/**Get button id tags from vegetables.html  and produce sounds with the pronunciation of words*/
const carrots =  document.getElementById('carrots').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'carrots';
    speechSynthesis.speak(msg);
  
});

const broccoli =  document.getElementById('broccoli').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'broccoli';
    window.speechSynthesis.speak(msg);
  
  });

const asparagus =  document.getElementById('asparagus').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'asparagus';
    window.speechSynthesis.speak(msg);
  
  });

const cauliflower =  document.getElementById('cauliflower').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'cauliflower';
    window.speechSynthesis.speak(msg);
  
  });

const corn =  document.getElementById('corn').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'corn';
    window.speechSynthesis.speak(msg);
  
  });
const cucumber =  document.getElementById('cucumber').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'cucumber';
    window.speechSynthesis.speak(msg);
  
  });

const eggplant =  document.getElementById('eggplant').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'eggplant';
    window.speechSynthesis.speak(msg);
  
  });

const geenPepper =  document.getElementById('greenPapper').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'green pepper';
    window.speechSynthesis.speak(msg);
  
  });

const lettuce =  document.getElementById('lettuce').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'lettuce';
    window.speechSynthesis.speak(msg);
  
  });

const mushrooms =  document.getElementById('mushrooms').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'mushrooms';
    window.speechSynthesis.speak(msg);
  
  });
const onion =  document.getElementById('onion').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'onion';
    window.speechSynthesis.speak(msg);
  
  });

const cabbage =  document.getElementById('cabbage').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'cabbage';
    window.speechSynthesis.speak(msg);
  
  });

const potato =  document.getElementById('potato').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'potato';
    window.speechSynthesis.speak(msg);
  
  });

const pumpkin =  document.getElementById('pumpkin').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'pumpkin';
    window.speechSynthesis.speak(msg);
  
  });

const redPepper =  document.getElementById('redPepper').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'red pepper';
    window.speechSynthesis.speak(msg);
  
  });

const tomato =  document.getElementById('tomato').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'tomato';
    window.speechSynthesis.speak(msg);
  
  });

const peas =  document.getElementById('peas').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'peas';
    window.speechSynthesis.speak(msg);
  
  });
const beetroot =  document.getElementById('beetroot').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'beetroot';
    window.speechSynthesis.speak(msg);
  
  });

const zucchine =  document.getElementById('zucchine').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'zucchine';
    window.speechSynthesis.speak(msg);
  
  });

const radish =  document.getElementById('radish').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'radish';
    window.speechSynthesis.speak(msg);
  
  });

const sweetPotato =  document.getElementById('sweetPotato').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'sweet potato';
    window.speechSynthesis.speak(msg);
  
  });

const artichoke =  document.getElementById('artichoke').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'artichoke';
    window.speechSynthesis.speak(msg);
  
  });

const leek =  document.getElementById('leek').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'leek';
    window.speechSynthesis.speak(msg);
  
  });

const celery =  document.getElementById('celery').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'celery';
    window.speechSynthesis.speak(msg);
  
  });

const chilli =  document.getElementById('chilli').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'chilli';
    window.speechSynthesis.speak(msg);
  
  });

const garlic =  document.getElementById('garlic').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'garlic';
    window.speechSynthesis.speak(msg);
  
  });

const chickpea =  document.getElementById('chickpea').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'chickpea';
    window.speechSynthesis.speak(msg);
  
  });

const lentil =  document.getElementById('lentil').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'lentil';
    window.speechSynthesis.speak(msg);
  
  });