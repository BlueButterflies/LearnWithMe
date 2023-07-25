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

/**Get button id tags from seasonWeekMonths.html  and produce sounds with the pronunciation of words*/

/**Seasons */
const spring =  document.getElementById('spring').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'spring';
    speechSynthesis.speak(msg);
});

const summer = document.getElementById('summer').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'summer';
    speechSynthesis.speak(msg);
});

const autumn = document.getElementById('autumn').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'autumn';
    speechSynthesis.speak(msg);
});

const winter = document.getElementById('winter').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'winter';
    speechSynthesis.speak(msg);
});

/**Days of the week*/
const monday = document.getElementById('monday').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'monday';
    speechSynthesis.speak(msg);
});

const tuesday = document.getElementById('tuesday').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'tuesday';
    speechSynthesis.speak(msg);
});

const wednesday = document.getElementById('wednesday').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'wednesday';
    speechSynthesis.speak(msg);
});

const thursday = document.getElementById('thursday').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'thursday';
    speechSynthesis.speak(msg);
});

const friday = document.getElementById('friday').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'friday';
    speechSynthesis.speak(msg);
});

const saturday = document.getElementById('saturday').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'saturday';
    speechSynthesis.speak(msg);
});

const sunday = document.getElementById('sunday').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'sunday';
    speechSynthesis.speak(msg);
});

/**Mounths */
const january = document.getElementById('january').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'january';
    speechSynthesis.speak(msg);
});

const february = document.getElementById('february').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'february';
    speechSynthesis.speak(msg);
});

const march = document.getElementById('march').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'march';
    speechSynthesis.speak(msg);
});

const april = document.getElementById('april').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'april';
    speechSynthesis.speak(msg);
});

const may = document.getElementById('may').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'may';
    speechSynthesis.speak(msg);
});

const june = document.getElementById('june').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'june';
    speechSynthesis.speak(msg);
});

const july = document.getElementById('july').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'july';
    speechSynthesis.speak(msg);
});

const august = document.getElementById('august').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'august';
    speechSynthesis.speak(msg);
});

const september = document.getElementById('september').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'september';
    speechSynthesis.speak(msg);
});

const october = document.getElementById('october').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'october';
    speechSynthesis.speak(msg);
});

const november = document.getElementById('november').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'november';
    speechSynthesis.speak(msg);
});

const december = document.getElementById('december').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'december';
    speechSynthesis.speak(msg);
});