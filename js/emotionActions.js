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

/**Get button id tags from emotionActions.html  and produce sounds with the pronunciation of words*/
/**Emotion */
const happiness = document.getElementById('happiness').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'happiness';
    speechSynthesis.speak(msg);
});

const anger = document.getElementById('anger').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'anger';
    speechSynthesis.speak(msg);
});

const disgust = document.getElementById('disgust').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'disgust';
    speechSynthesis.speak(msg);
});

const fear = document.getElementById('fear').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'fear';
    speechSynthesis.speak(msg);
});

const shame = document.getElementById('shame').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'shame';
    speechSynthesis.speak(msg);
});

const sick = document.getElementById('sick').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'sick';
    speechSynthesis.speak(msg);
});

const sadness = document.getElementById('sadness').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'sadness';
    speechSynthesis.speak(msg);
});

const anxiety = document.getElementById('anxiety').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'anxiety';
    speechSynthesis.speak(msg);
});

const tired = document.getElementById('tired').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'tired';
    speechSynthesis.speak(msg);
});

const furious = document.getElementById('furious').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'furious';
    speechSynthesis.speak(msg);
});

const surprised = document.getElementById('surprised').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'surprised';
    speechSynthesis.speak(msg);
});

const embarassed = document.getElementById('embarassed').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'embarassed';
    speechSynthesis.speak(msg);
});

const hungry = document.getElementById('hungry').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'hungry';
    speechSynthesis.speak(msg);
});

const sleepy = document.getElementById('sleepy').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'sleepy';
    speechSynthesis.speak(msg);
});

const loved = document.getElementById('loved').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'loved';
    speechSynthesis.speak(msg);
});

const calm = document.getElementById('calm').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'calm';
    speechSynthesis.speak(msg);
});

/**Actions */

const run = document.getElementById('run').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'run';
    speechSynthesis.speak(msg);
});

const crawl = document.getElementById('crawl').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'crawl';
    speechSynthesis.speak(msg);
});

const walk = document.getElementById('walk').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'walk';
    speechSynthesis.speak(msg);
});

const dance = document.getElementById('dance').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'dance';
    speechSynthesis.speak(msg);
});

const stand = document.getElementById('stand').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'stand';
    speechSynthesis.speak(msg);
});

const play = document.getElementById('play').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'play';
    speechSynthesis.speak(msg);
});

const jump = document.getElementById('jump').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'jump';
    speechSynthesis.speak(msg);
});

const laugh = document.getElementById('laugh').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'laugh';
    speechSynthesis.speak(msg);
});
const read = document.getElementById('read').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'read';
    speechSynthesis.speak(msg);
});

const think = document.getElementById('think').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'think';
    speechSynthesis.speak(msg);
});

const write = document.getElementById('write').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'write';
    speechSynthesis.speak(msg);
});

const drink = document.getElementById('drink').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'drink';
    speechSynthesis.speak(msg);
});

const sing = document.getElementById('sing').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'sing';
    speechSynthesis.speak(msg);
});

const sneeze = document.getElementById('sneeze').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'sneeze';
    speechSynthesis.speak(msg);
});

const clap = document.getElementById('clap').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'clap';
    speechSynthesis.speak(msg);
});

const kick = document.getElementById('kick').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'calm';
    speechSynthesis.speak(msg);
});

const ride = document.getElementById('ride').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'ride';
    speechSynthesis.speak(msg);
});

const cry = document.getElementById('cry').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'cry';
    speechSynthesis.speak(msg);
});

const clean = document.getElementById('clean').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'clean';
    speechSynthesis.speak(msg);
});

const sleep = document.getElementById('sleep').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'sleep';
    speechSynthesis.speak(msg);
});

const eat = document.getElementById('eat').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'eat';
    speechSynthesis.speak(msg);
});