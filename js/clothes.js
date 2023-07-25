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
/**Get button id from clothes and accessories html, and produce sounds with the pronunciation of words*/

//Clothes
const jumper =  document.getElementById('jumper').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'jumper';
    window.speechSynthesis.speak(msg);
  
  });

const raincoat =  document.getElementById('raincoat').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'raincoat';
    window.speechSynthesis.speak(msg);
  
  });

const shorts =  document.getElementById('shorts').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'shorts';
    window.speechSynthesis.speak(msg);
})

const sweater =  document.getElementById('sweater').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'sweater';
    window.speechSynthesis.speak(msg);
})

const cardigan =  document.getElementById('cardigan').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'cardigan';
    window.speechSynthesis.speak(msg);
})

const pants =  document.getElementById('pants').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'pants';
    window.speechSynthesis.speak(msg);
})

const shirt =  document.getElementById('shirt').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'shirt';
    window.speechSynthesis.speak(msg);
})

const tShirt =  document.getElementById('tShirt').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 't-shirt';
    window.speechSynthesis.speak(msg);
})

const skirt =  document.getElementById('skirt').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'skirt';
    window.speechSynthesis.speak(msg);
})

const jeans =  document.getElementById('jeans').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'jeans';
    window.speechSynthesis.speak(msg);
})

const leggings =  document.getElementById('leggings').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'leggings';
    window.speechSynthesis.speak(msg);
})

const dress =  document.getElementById('dress').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'dress';
    window.speechSynthesis.speak(msg);
})

const tanktop =  document.getElementById('tanktop').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'tanktop';
    window.speechSynthesis.speak(msg);
})

const blazer =  document.getElementById('blazer').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'blazer';
    window.speechSynthesis.speak(msg);
})

const jacket =  document.getElementById('jacket').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'jacket';
    window.speechSynthesis.speak(msg);
})

const coat =  document.getElementById('coat').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'coat';
    window.speechSynthesis.speak(msg);
})

const vest =  document.getElementById('vest').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'vest';
    window.speechSynthesis.speak(msg);
})

const pajamas =  document.getElementById('pajama').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'pajama';
    window.speechSynthesis.speak(msg);
})

const nightgown =  document.getElementById('nightgown').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'nightgown';
    window.speechSynthesis.speak(msg);
})

const socks =  document.getElementById('socks').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'socks';
    window.speechSynthesis.speak(msg);
})

const tops =  document.getElementById('top').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'top';
    window.speechSynthesis.speak(msg);
})

const bra =  document.getElementById('bra').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'bra';
    window.speechSynthesis.speak(msg);
})

const corset =  document.getElementById('corset').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'corset';
    window.speechSynthesis.speak(msg);
})

const panty =  document.getElementById('panty').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'panty';
    window.speechSynthesis.speak(msg);
})


//Shoes
const slippers =  document.getElementById('slippers').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'slippers';
    window.speechSynthesis.speak(msg);
})

const sandals =  document.getElementById('sandals').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'sandals';
    window.speechSynthesis.speak(msg);
})

const boots =  document.getElementById('boots').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'boots';
    window.speechSynthesis.speak(msg);
})

const sneakers =  document.getElementById('sneakers').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'sneakers';
    window.speechSynthesis.speak(msg);
})

const balletFlats =  document.getElementById('balletFlats').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'ballet flats';
    window.speechSynthesis.speak(msg);
})

const highHeels =  document.getElementById('highHeels').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'high heels';
    window.speechSynthesis.speak(msg);
})

const loafers =  document.getElementById('loafers').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'loafers';
    window.speechSynthesis.speak(msg);
})

const wellingtonBoots =  document.getElementById('wellingtonBoots').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'wellington boots';
    window.speechSynthesis.speak(msg);
})

//Accessosries
const jewels =  document.getElementById('jewels').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'jewels';
    window.speechSynthesis.speak(msg);
})

const necklace =  document.getElementById('necklace').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'necklace';
    window.speechSynthesis.speak(msg);
})

const earings =  document.getElementById('earings').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'earings';
    window.speechSynthesis.speak(msg);
})

const bracelet =  document.getElementById('bracelet').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'bracelet';
    window.speechSynthesis.speak(msg);
})

const hairClip =  document.getElementById('hairClip').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'hair clip';
    window.speechSynthesis.speak(msg);
})

const rubberBand=  document.getElementById('rubberBand').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'rubber band';
    window.speechSynthesis.speak(msg);
})

const handBag =  document.getElementById('handBag').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'handbag';
    window.speechSynthesis.speak(msg);
})

const backPack =  document.getElementById('backpack').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'backpack';
    window.speechSynthesis.speak(msg);
})

const belt =  document.getElementById('belt').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'belt';
    window.speechSynthesis.speak(msg);
})

const tie =  document.getElementById('tie').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'tie';
    window.speechSynthesis.speak(msg);
})

const wallet =  document.getElementById('wallet').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'wallet';
    window.speechSynthesis.speak(msg);
})

const hat =  document.getElementById('hat').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'hat';
    window.speechSynthesis.speak(msg);
})

const gloves =  document.getElementById('gloves').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'gloves';
    window.speechSynthesis.speak(msg);
})

const scarf =  document.getElementById('scarf').addEventListener('click', (e) =>{
    e.preventDefault();
    msg.text = 'scarf';
    window.speechSynthesis.speak(msg);
})