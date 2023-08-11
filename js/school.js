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

/**Get button id tags from school.html  and produce sounds with the pronunciation of words*/
const board = document.getElementById('board').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'board';
    window.speechSynthesis.speak(msg);

});

const desk = document.getElementById('desk').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'desk';
    window.speechSynthesis.speak(msg);

});

const chair = document.getElementById('chair').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'chair';
    window.speechSynthesis.speak(msg);

});

const books = document.getElementById('books').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'books';
    window.speechSynthesis.speak(msg);

});

const bookcase = document.getElementById('bookcase').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'bookcase';
    window.speechSynthesis.speak(msg);

});

const door = document.getElementById('door').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'door';
    window.speechSynthesis.speak(msg);

});

const teacherDesk = document.getElementById('teacherDesk').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = "teacher's Desk";
    window.speechSynthesis.speak(msg);
});

const schoolBag = document.getElementById('schoolBag').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = "school bag";
    window.speechSynthesis.speak(msg);
});

const map = document.getElementById('map').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = "map";
    window.speechSynthesis.speak(msg);
});

const globes = document.getElementById('globes').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = "globes";
    window.speechSynthesis.speak(msg);
});

const pensilCase = document.getElementById('pensilCase').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = "pensil case";
    window.speechSynthesis.speak(msg);
});

const notebook = document.getElementById('notebook').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = "notebook";
    window.speechSynthesis.speak(msg);
});

const windows = document.getElementById('window').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = "window";
    window.speechSynthesis.speak(msg);
});

const cupboard = document.getElementById('cupboard').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = "cupboard";
    window.speechSynthesis.speak(msg);
});

const ruler = document.getElementById('ruler').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = "ruler";
    window.speechSynthesis.speak(msg);
});

const pensil = document.getElementById('pensil').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = "pensil";
    window.speechSynthesis.speak(msg);
});

const clock = document.getElementById('clock').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = "clock";
    window.speechSynthesis.speak(msg);
});

const pen = document.getElementById('pen').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = "pen";
    window.speechSynthesis.speak(msg);
});

const eraser = document.getElementById('eraser').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = "eraser";
    window.speechSynthesis.speak(msg);
});

const watercolors = document.getElementById('watercolors').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = "watercolors";
    window.speechSynthesis.speak(msg);
});

const palette = document.getElementById('palette').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = "palette";
    window.speechSynthesis.speak(msg);
  });

  const crayon = document.getElementById('crayon').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = "crayon";
    window.speechSynthesis.speak(msg);
  });

  const paintBrushes = document.getElementById('paintBrushes').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = "paint brushes";
    window.speechSynthesis.speak(msg);
  });

  const colourPensils = document.getElementById('colourPencils').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = "colour pensils";
    window.speechSynthesis.speak(msg);
  });

  const scissors = document.getElementById('scissors').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = "scissors";
    window.speechSynthesis.speak(msg);
  });

  const bin = document.getElementById('bin').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = "bin";
    window.speechSynthesis.speak(msg);
  });

  const sharpner = document.getElementById('sharpner').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = "sharpner";
    window.speechSynthesis.speak(msg);
  });

  const papers = document.getElementById('papers').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = "papers";
    window.speechSynthesis.speak(msg);
  });

  const glue = document.getElementById('glue').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = "glue";
    window.speechSynthesis.speak(msg);
  });

  const chalk = document.getElementById('chalk').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = "chalk";
    window.speechSynthesis.speak(msg);
  });

  const calendar = document.getElementById('calendar').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = "calendar";
    window.speechSynthesis.speak(msg);
  });

  const compass = document.getElementById('compass').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = "compass";
    window.speechSynthesis.speak(msg);
  });

  const marker = document.getElementById('marker').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = "marker";
    window.speechSynthesis.speak(msg);
  });

  const paperClips = document.getElementById('paperClips').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = "paper clips";
    window.speechSynthesis.speak(msg);
  });

  const folders = document.getElementById('folders').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = "folders";
    window.speechSynthesis.speak(msg);
  });

  const bell = document.getElementById('bell').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = "bell";
    window.speechSynthesis.speak(msg);
  });