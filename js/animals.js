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
msg.rate = 0.5; // 0.1 to 10
msg.pitch = 1; //0 to 2
msg.text = '';
msg.lang = 'en-US';

/*Get emelents by id from animals.html page and produce sounds with the pronunciation of words*/

//Farm animals
const hen =  document.getElementById('hen').addEventListener('click', (e) => {
  e.preventDefault();
  msg.text = 'hen';
  window.speechSynthesis.speak(msg);

});

const pig =  document.getElementById('pig').addEventListener('click', (e) => {
  e.preventDefault();
  msg.text = 'pig';
  window.speechSynthesis.speak(msg);

});

const rabbit =  document.getElementById('rabbit').addEventListener('click', (e) => {
  e.preventDefault();
  msg.text = 'rabbit';
  window.speechSynthesis.speak(msg);

});

const horse =  document.getElementById('horse').addEventListener('click', (e) => {
  e.preventDefault();
  msg.text = 'horse';
  window.speechSynthesis.speak(msg);

});

const sheep =  document.getElementById('sheep').addEventListener('click', (e) => {
  e.preventDefault();
  msg.text = 'sheep';
  window.speechSynthesis.speak(msg);

});

const goose =  document.getElementById('goose').addEventListener('click', (e) => {
  e.preventDefault();
  msg.text = 'goose';
  window.speechSynthesis.speak(msg);

});

const cow =  document.getElementById('cow').addEventListener('click', (e) => {
  e.preventDefault();
  msg.text = 'cow';
  window.speechSynthesis.speak(msg);

});

const goat =  document.getElementById('goat').addEventListener('click', (e) => {
  e.preventDefault();
  msg.text = 'a goat';
  window.speechSynthesis.speak(msg);

});

const donkey =  document.getElementById('donkey').addEventListener('click', (e) => {
  e.preventDefault();
  msg.text = 'donkey';
  window.speechSynthesis.speak(msg);

});

const rooster =  document.getElementById('rooster').addEventListener('click', (e) => {
  e.preventDefault();
  msg.text = 'rooster';
  window.speechSynthesis.speak(msg);

});

//Forest animals
const fox = document.getElementById('fox').addEventListener('click', (e) => {
  e.preventDefault();
  msg.text = 'fox';
  window.speechSynthesis.speak(msg);

});

const bear = document.getElementById('bear').addEventListener('click', (e) => {
  e.preventDefault();
  msg.text = 'bear';
  window.speechSynthesis.speak(msg);

});

const deer = document.getElementById('deer').addEventListener('click', (e) => {
  e.preventDefault();
  msg.text = 'deer';
  window.speechSynthesis.speak(msg);

});

const hedgehog = document.getElementById('hedgehog').addEventListener('click', (e) => {
  e.preventDefault();
  msg.text = 'hedgehog';
  window.speechSynthesis.speak(msg);

});

const squirrel = document.getElementById('squirrel').addEventListener('click', (e) => {
  e.preventDefault();
  msg.text = 'squirrel';
  window.speechSynthesis.speak(msg);

});

const weasel = document.getElementById('weasel').addEventListener('click', (e) => {
  e.preventDefault();
  msg.text = 'weasel';
  window.speechSynthesis.speak(msg);

});

const wolf = document.getElementById('wolf').addEventListener('click', (e) => {
  e.preventDefault();
  msg.text = 'wolf';
  window.speechSynthesis.speak(msg);

});

const boar = document.getElementById('boar').addEventListener('click', (e) => {
  e.preventDefault();
  msg.text = 'boar';
  window.speechSynthesis.speak(msg);

});

const owl = document.getElementById('owl').addEventListener('click', (e) => {
  e.preventDefault();
  msg.text = 'owl';
  window.speechSynthesis.speak(msg);

});

const bat = document.getElementById('bat').addEventListener('click', (e) => {
  e.preventDefault();
  msg.text = 'bat';
  window.speechSynthesis.speak(msg);

});

const marmot = document.getElementById('marmot').addEventListener('click', (e) => {
  e.preventDefault();
  msg.text = 'marmot';
  window.speechSynthesis.speak(msg);

});

const skunk = document.getElementById('skunk').addEventListener('click', (e) => {
  e.preventDefault();
  msg.text = 'skunk';
  window.speechSynthesis.speak(msg);

});

const turtle = document.getElementById('turtle').addEventListener('click', (e) => {
  e.preventDefault();
  msg.text = 'turtle';
  window.speechSynthesis.speak(msg);

});

//Savannah animanls
const crocodile = document.getElementById('crocodile').addEventListener('click', (e) => {
  e.preventDefault();
  msg.text = 'crocodile';
  window.speechSynthesis.speak(msg);

});

const ostrich = document.getElementById('ostrich').addEventListener('click', (e) => {
  e.preventDefault();
  msg.text = 'ostrich';
  window.speechSynthesis.speak(msg);

});

const zebra = document.getElementById('zebra').addEventListener('click', (e) => {
  e.preventDefault();
  msg.text = 'zebra';
  window.speechSynthesis.speak(msg);

});

const lion = document.getElementById('lion').addEventListener('click', (e) => {
  e.preventDefault();
  msg.text = 'lion';
  window.speechSynthesis.speak(msg);

});

const tiger = document.getElementById('tiger').addEventListener('click', (e) => {
  e.preventDefault();
  msg.text = 'tiger';
  window.speechSynthesis.speak(msg);

});

const elephant = document.getElementById('elephant').addEventListener('click', (e) => {
  e.preventDefault();
  msg.text = 'elephant';
  window.speechSynthesis.speak(msg);

});

const gazelle = document.getElementById('gazelle').addEventListener('click', (e) => {
  e.preventDefault();
  msg.text = 'gazelle';
  window.speechSynthesis.speak(msg);

});

const giraffe = document.getElementById('giraffe').addEventListener('click', (e) => {
  e.preventDefault();
  msg.text = 'giraffe';
  window.speechSynthesis.speak(msg);

});

const hippopotamus = document.getElementById('hippopotamus').addEventListener('click', (e) => {
  e.preventDefault();
  msg.text = 'hippopotamus';
  window.speechSynthesis.speak(msg);

});

const rhinoceros = document.getElementById('rhinoceros').addEventListener('click', (e) => {
  e.preventDefault();
  msg.text = 'rhinoceros';
  window.speechSynthesis.speak(msg);

});

//Bugs animanls
const ant = document.getElementById('ant').addEventListener('click', (e) => {
  e.preventDefault();
  msg.text = 'ant';
  window.speechSynthesis.speak(msg);

});

const butterfly = document.getElementById('butterfly').addEventListener('click', (e) => {
  e.preventDefault();
  msg.text = 'butterfly';
  window.speechSynthesis.speak(msg);

});

const bee = document.getElementById('bee').addEventListener('click', (e) => {
  e.preventDefault();
  msg.text = 'bee';
  window.speechSynthesis.speak(msg);

});

const grasshopper = document.getElementById('grasshopper').addEventListener('click', (e) => {
  e.preventDefault();
  msg.text = 'grasshopper';
  window.speechSynthesis.speak(msg);

});

const fly = document.getElementById('fly').addEventListener('click', (e) => {
  e.preventDefault();
  msg.text = 'fly';
  window.speechSynthesis.speak(msg);

});

const spider = document.getElementById('spider').addEventListener('click', (e) => {
  e.preventDefault();
  msg.text = 'spider';
  window.speechSynthesis.speak(msg);

});

const snail = document.getElementById('snail').addEventListener('click', (e) => {
  e.preventDefault();
  msg.text = 'snail';
  window.speechSynthesis.speak(msg);

});

const cockroach = document.getElementById('cockroach').addEventListener('click', (e) => {
  e.preventDefault();
  msg.text = 'cockroach';
  window.speechSynthesis.speak(msg);

});

const worm = document.getElementById('worm').addEventListener('click', (e) => {
  e.preventDefault();
  msg.text = 'worm';
  window.speechSynthesis.speak(msg);

});

//Sea animanls
const whale = document.getElementById('whale').addEventListener('click', (e) => {
  e.preventDefault();
  msg.text = 'whale';
  window.speechSynthesis.speak(msg);

});

const dolphin = document.getElementById('dolphin').addEventListener('click', (e) => {
  e.preventDefault();
  msg.text = 'dolphin';
  window.speechSynthesis.speak(msg);

});

const seaTurtle = document.getElementById('seaTurtle').addEventListener('click', (e) => {
  e.preventDefault();
  msg.text = 'sea turtle';
  window.speechSynthesis.speak(msg);

});

const octopus = document.getElementById('octopus').addEventListener('click', (e) => {
  e.preventDefault();
  msg.text = 'octopus';
  window.speechSynthesis.speak(msg);

});

const jellyfish = document.getElementById('jellyfish').addEventListener('click', (e) => {
  e.preventDefault();
  msg.text = 'jellyfish';
  window.speechSynthesis.speak(msg);

});

const shark = document.getElementById('shark').addEventListener('click', (e) => {
  e.preventDefault();
  msg.text = 'shark';
  window.speechSynthesis.speak(msg);

});

const crab = document.getElementById('crab').addEventListener('click', (e) => {
  e.preventDefault();
  msg.text = 'crab';
  window.speechSynthesis.speak(msg);

});

const killerWhale = document.getElementById('killerWhale').addEventListener('click', (e) => {
  e.preventDefault();
  msg.text = 'killer whale';
  window.speechSynthesis.speak(msg);

});

//Jungle animanls
const chameleon = document.getElementById('chameleon').addEventListener('click', (e) => {
  e.preventDefault();
  msg.text = 'chameleon';
  window.speechSynthesis.speak(msg);

});

const toucan = document.getElementById('toucan').addEventListener('click', (e) => {
  e.preventDefault();
  msg.text = 'toucan';
  window.speechSynthesis.speak(msg);

});

const iguana = document.getElementById('iguana').addEventListener('click', (e) => {
  e.preventDefault();
  msg.text = 'iguana';
  window.speechSynthesis.speak(msg);

});

const jungleCat = document.getElementById('jungleCat').addEventListener('click', (e) => {
  e.preventDefault();
  msg.text = 'jungle cat';
  window.speechSynthesis.speak(msg);

});

const lemur = document.getElementById('lemur').addEventListener('click', (e) => {
  e.preventDefault();
  msg.text = 'lemur';
  window.speechSynthesis.speak(msg);

});

const monkey = document.getElementById('monkey').addEventListener('click', (e) => {
  e.preventDefault();
  msg.text = 'monkey';
  window.speechSynthesis.speak(msg);

});

const parrot = document.getElementById('parrot').addEventListener('click', (e) => {
  e.preventDefault();
  msg.text = 'parrot';
  window.speechSynthesis.speak(msg);

});

const sloth = document.getElementById('sloth').addEventListener('click', (e) => {
  e.preventDefault();
  msg.text = 'sloth';
  window.speechSynthesis.speak(msg);

});

const snake = document.getElementById('snake').addEventListener('click', (e) => {
  e.preventDefault();
  msg.text = 'snake';
  window.speechSynthesis.speak(msg);

});

const tapir = document.getElementById('tapir').addEventListener('click', (e) => {
  e.preventDefault();
  msg.text = 'tapir';
  window.speechSynthesis.speak(msg);

});
