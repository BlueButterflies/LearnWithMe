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


/**Get button id tags from foodsBeverages.html  and produce sounds with the pronunciation of words*/

/**Foods */
const bread = document.getElementById('bread').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'bread';
    speechSynthesis.speak(msg);
  
});

const buns = document.getElementById('buns').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'buns';
    speechSynthesis.speak(msg);
  
});

const butter = document.getElementById('butter').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'butter';
    speechSynthesis.speak(msg);
  
});

const cake = document.getElementById('cake').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'cake';
    speechSynthesis.speak(msg);
  
});

const cheese = document.getElementById('cheese').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'chees';
    speechSynthesis.speak(msg);
  
});

const chips = document.getElementById('chips').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'chips';
    speechSynthesis.speak(msg);
  
});

const eggs = document.getElementById('eggs').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'eggs';
    speechSynthesis.speak(msg);
  
});

const hamburger = document.getElementById('hamburger').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'hamburger';
    speechSynthesis.speak(msg);
  
});

const iceCream = document.getElementById('iceCream').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'ice cream';
    speechSynthesis.speak(msg);
  
});

const pizza = document.getElementById('pizza').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'pizza';
    speechSynthesis.speak(msg);
  
});

const sandwich = document.getElementById('sandwich').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'sandwich';
    speechSynthesis.speak(msg);
  
});

const sausages = document.getElementById('sausages').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'sausages';
    speechSynthesis.speak(msg);
  
});

const bacon = document.getElementById('bacon').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'bacon';
    speechSynthesis.speak(msg);
  
});

const crisps = document.getElementById('crisps').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'crisps';
    speechSynthesis.speak(msg);
  
});

const chicken = document.getElementById('chicken').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'chiken';
    speechSynthesis.speak(msg);
  
});

const chocolate = document.getElementById('chocolate').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'chocolate';
    speechSynthesis.speak(msg);
  
});

const honey = document.getElementById('honey').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'honey';
    speechSynthesis.speak(msg);
  
});

const meat = document.getElementById('meat').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'meat';
    speechSynthesis.speak(msg);
  
});

const yogurt = document.getElementById('yogurt').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'yogurt';
    speechSynthesis.speak(msg);
  
});

const salad = document.getElementById('salad').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'salad';
    speechSynthesis.speak(msg);
  
});

const soup = document.getElementById('soup').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'soup';
    speechSynthesis.speak(msg);
  
});

const sugar = document.getElementById('sugar').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'sugar';
    speechSynthesis.speak(msg);
  
});

const fish = document.getElementById('fish').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'fish';
    speechSynthesis.speak(msg);
  
});

const rice = document.getElementById('rice').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'rice';
    speechSynthesis.speak(msg);
  
});

const milk = document.getElementById('milk').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'milk';
    speechSynthesis.speak(msg);
  
});

const coffee = document.getElementById('coffee').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'coffee';
    speechSynthesis.speak(msg);
  
});

const tea = document.getElementById('tea').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'tea';
    speechSynthesis.speak(msg);
  
});

const water = document.getElementById('water').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'water';
    speechSynthesis.speak(msg);
  
});

const lemonade = document.getElementById('lemonade').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'lemonade';
    speechSynthesis.speak(msg);
  
});

const beer = document.getElementById('beer').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'beer';
    speechSynthesis.speak(msg);
  
});

const juice = document.getElementById('juice').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'juice';
    speechSynthesis.speak(msg);
  
});

const hotChocolate = document.getElementById('hotChocolate').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'hot chocolate';
    speechSynthesis.speak(msg);
  
});


const coke = document.getElementById('coke').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'coke';
    speechSynthesis.speak(msg);
  
});

const wine = document.getElementById('wine').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'wine';
    speechSynthesis.speak(msg);
  
});

const champagne = document.getElementById('champagne').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'champagne';
    speechSynthesis.speak(msg);
  
});

const milkshake = document.getElementById('milkshake').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'milkshake';
    speechSynthesis.speak(msg);
  
});