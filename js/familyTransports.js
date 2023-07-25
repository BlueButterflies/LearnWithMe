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


/**Get button id tags from familyTransports.html  and produce sounds with the pronunciation of words*/

/**Family */
const father =  document.getElementById('dad').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'father';
    speechSynthesis.speak(msg);
  
});

const mother =  document.getElementById('mom').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'mother';
    speechSynthesis.speak(msg);
  
});

const brother =  document.getElementById('bro').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'brother';
    speechSynthesis.speak(msg);
  
});

const sister =  document.getElementById('sis').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'sister';
    speechSynthesis.speak(msg);
  
});

const uncle =  document.getElementById('uncle').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'uncle';
    speechSynthesis.speak(msg);
  
});

const aunt =  document.getElementById('aunt').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'aunt';
    speechSynthesis.speak(msg);
  
});

const cousinM =  document.getElementById('cousinM').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'cousin';
    speechSynthesis.speak(msg);
  
});

const cousinF =  document.getElementById('cousinF').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'cousin';
    speechSynthesis.speak(msg);
  
});

const grandfather =  document.getElementById('grandad').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'grandfather';
    speechSynthesis.speak(msg);
  
});

const grandmother =  document.getElementById('grandmom').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'grandmother';
    speechSynthesis.speak(msg);
  
});

const greatGrandfather =  document.getElementById('greatdad').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'great Grandfather';
    speechSynthesis.speak(msg);
  
});

const greatGrandmother =  document.getElementById('greatmom').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'great Grandmother';
    speechSynthesis.speak(msg);
  
});

/**Types of transport */
const bicycle =  document.getElementById('bicycle').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'bicycle';
    speechSynthesis.speak(msg);
  
});

const coach = document.getElementById('coach').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'coach';
    speechSynthesis.speak(msg);
});

const tukTuk = document.getElementById('tukTuk').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'tuk Tuk';
    speechSynthesis.speak(msg);
});

const cableCar = document.getElementById('cableCar').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'cableCar';
    speechSynthesis.speak(msg);
});

const aeroplane = document.getElementById('aeroplane').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'aeroplane';
    speechSynthesis.speak(msg);
});

const duneBuggy = document.getElementById('duneBuggy').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'dune Buggy';
    speechSynthesis.speak(msg);
});

const narrowboat = document.getElementById('narrowboat').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'narrowboat';
    speechSynthesis.speak(msg);
});

const moped = document.getElementById('moped').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'moped';
    speechSynthesis.speak(msg);
});

const yacht = document.getElementById('yacht').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'yacht';
    speechSynthesis.speak(msg);
});

const monorail = document.getElementById('monorail').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'monorail';
    speechSynthesis.speak(msg);
});

const tram = document.getElementById('tram').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'tram';
    speechSynthesis.speak(msg);
});

const gondola = document.getElementById('gondola').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'gondola';
    speechSynthesis.speak(msg);
});

const cruiseShip = document.getElementById('cruiseShip').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'cruise Ship';
    speechSynthesis.speak(msg);
});

const car = document.getElementById('car').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'car';
    speechSynthesis.speak(msg);
});

const helicopter = document.getElementById('helicopter').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'helicopter';
    speechSynthesis.speak(msg);
});

const submarine = document.getElementById('submarine').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'submarine';
    speechSynthesis.speak(msg);
});

const truck = document.getElementById('truck').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'truck';
    speechSynthesis.speak(msg);
});

const snowmobile = document.getElementById('snowmobile').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'snowmobile';
    speechSynthesis.speak(msg);
});

const train = document.getElementById('train').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'train';
    speechSynthesis.speak(msg);
});

const canoe = document.getElementById('canoe').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'canoe';
    speechSynthesis.speak(msg);
});