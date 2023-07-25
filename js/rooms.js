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


/**Get button id tags from rooms.html  and produce sounds with the pronunciation of words*/

/**In the living room */
const armchair =  document.getElementById('armchair').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'armchair';
    speechSynthesis.speak(msg);
  
});

const curtains = document.getElementById('curtains').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'curtains';
    speechSynthesis.speak(msg);
});

const sofa = document.getElementById('sofa').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'sofa';
    speechSynthesis.speak(msg);
});

const plant = document.getElementById('plant').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'plant';
    speechSynthesis.speak(msg);
});


const coffeeTable = document.getElementById('coffeeTable').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'coffee table';
    speechSynthesis.speak(msg);
});

const carpet = document.getElementById('carpet').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'carpet';
    speechSynthesis.speak(msg);
});

const lamp = document.getElementById('lamp').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'lamp';
    speechSynthesis.speak(msg);
});

const television = document.getElementById('television').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'television';
    speechSynthesis.speak(msg);
});

const clock = document.getElementById('clock').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'clock';
    speechSynthesis.speak(msg);
});

const cushions = document.getElementById('cushions').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'cushions';
    speechSynthesis.speak(msg);
});

const sideboard = document.getElementById('sideboard').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'sideboard';
    speechSynthesis.speak(msg);
});

const windows = document.getElementById('windows').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'window';
    speechSynthesis.speak(msg);
});

const door = document.getElementById('door').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'door';
    speechSynthesis.speak(msg);
});

const bookcase = document.getElementById('bookcase').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'bookcase';
    speechSynthesis.speak(msg);
});

const phone = document.getElementById('phone').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'phone';
    speechSynthesis.speak(msg);
});

const footstool = document.getElementById('footstool').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'footstool';
    speechSynthesis.speak(msg);
});

const vase = document.getElementById('vase').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'vase';
    speechSynthesis.speak(msg);
});

const picture = document.getElementById('picture').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'picture';
    speechSynthesis.speak(msg);
});

const ceilingFan = document.getElementById('ceilingFan').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'ceiling fan';
    speechSynthesis.speak(msg);
});

const shelf = document.getElementById('shelfs').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'shelfs';
    speechSynthesis.speak(msg);
});

/**In the kitchen */
const kitchenCounter = document.getElementById('kitchenCounter').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'kitchen Counter';
    speechSynthesis.speak(msg);
})

const friger = document.getElementById('friger').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'friger';
    speechSynthesis.speak(msg);
})

const dinnerTable = document.getElementById('dinnerTable').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'dinnerTable';
    speechSynthesis.speak(msg);
})

const toaster = document.getElementById('toaster').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'toaster';
    speechSynthesis.speak(msg);
})

const bin = document.getElementById('bin').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'paddle bin';
    speechSynthesis.speak(msg);
})

const mixer = document.getElementById('mixer').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'mixer';
    speechSynthesis.speak(msg);
})

const coffeeMachine = document.getElementById('coffeeMachine').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'coffeeMachine';
    speechSynthesis.speak(msg);
})

const microwave = document.getElementById('microwave').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'microwave';
    speechSynthesis.speak(msg);
})

const kittle = document.getElementById('kittle').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'kittle';
    speechSynthesis.speak(msg);
})

const blender = document.getElementById('blender').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'blender';
    speechSynthesis.speak(msg);
})

const apron = document.getElementById('apron').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'apron';
    speechSynthesis.speak(msg);
})

const utensils = document.getElementById('utensils').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'utensils';
    speechSynthesis.speak(msg);
})

const pan = document.getElementById('pan').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'pan';
    speechSynthesis.speak(msg);
})

const pot = document.getElementById('pot').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'pot';
    speechSynthesis.speak(msg);
})

const bakingPan = document.getElementById('bakingPan').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'baking Pan';
    speechSynthesis.speak(msg);
})

const plate = document.getElementById('plate').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'plate';
    speechSynthesis.speak(msg);
})

/**In the bedroom */

const bed = document.getElementById('bed').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'bed';
    speechSynthesis.speak(msg);
})

const wardrobe = document.getElementById('wardrobe').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'wardrobe';
    speechSynthesis.speak(msg);
})

const pillow = document.getElementById('pillow').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'pillow';
    speechSynthesis.speak(msg);
})

const tableLamp = document.getElementById('tableLamp').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'table Lamp';
    speechSynthesis.speak(msg);
})

const dresser = document.getElementById('dresser').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'Chest of drawers or Dresser';
    speechSynthesis.speak(msg);
})

const desk = document.getElementById('desk').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'Bureau or Desk';
    speechSynthesis.speak(msg);
})

const chair = document.getElementById('chair').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'chair';
    speechSynthesis.speak(msg);
})

const bedsideTable = document.getElementById('bedsideTable').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'bedside Table';
    speechSynthesis.speak(msg);
})

const blanket = document.getElementById('blanket').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'blanket';
    speechSynthesis.speak(msg);
})

const mirror = document.getElementById('mirror').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'mirror';
    speechSynthesis.speak(msg);
})

const curtain = document.getElementById('curtain').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'curtains';
    speechSynthesis.speak(msg);
})

const shelfs = document.getElementById('shelf').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'shelf';
    speechSynthesis.speak(msg);
})

const books = document.getElementById('books').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'books';
    speechSynthesis.speak(msg);
})

const alarmClock = document.getElementById('alarmClock').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'alarm Clock';
    speechSynthesis.speak(msg);
})

const dressingTable = document.getElementById('dressingTable').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'dressing Table';
    speechSynthesis.speak(msg);
})

const rug = document.getElementById('rug').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'rug';
    speechSynthesis.speak(msg);
})

/**In the bathroom */
const blusherBrush = document.getElementById('blusherBrush').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'blusher Brush';
    speechSynthesis.speak(msg);
})

const toothpaste = document.getElementById('toothpaste').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'toothpaste';
    speechSynthesis.speak(msg);
})

const hairDryer = document.getElementById('hairDryer').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'hair Dryer';
    speechSynthesis.speak(msg);
})

const saop = document.getElementById('saop').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'saop';
    speechSynthesis.speak(msg);
})

const toiletPaper = document.getElementById('toiletPaper').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'toilet Paper';
    speechSynthesis.speak(msg);
})

const toothbrush = document.getElementById('toothbrush').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'toothbrush';
    speechSynthesis.speak(msg);
})

const hairbrush = document.getElementById('hairbrush').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'hairbrush';
    speechSynthesis.speak(msg);
})

const shower = document.getElementById('shower').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'shower';
    speechSynthesis.speak(msg);
})

const comb = document.getElementById('comb').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'comb';
    speechSynthesis.speak(msg);
})

const toilet = document.getElementById('toilet').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'toilet';
    speechSynthesis.speak(msg);
})

const toiletBrush = document.getElementById('toiletBrush').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'toiletBrush';
    speechSynthesis.speak(msg);
})

const lookingGlass = document.getElementById('lookingGlass').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'looking Glass';
    speechSynthesis.speak(msg);
})

const bathrobe = document.getElementById('bathrobe').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'bathrobe';
    speechSynthesis.speak(msg);
})

const sink = document.getElementById('sink').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'sink';
    speechSynthesis.speak(msg);
})

const bathtub = document.getElementById('bathtub').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'bathtub';
    speechSynthesis.speak(msg);
})

const towel = document.getElementById('towel').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'towel';
    speechSynthesis.speak(msg);
})

const cottonBuds = document.getElementById('cottonBuds').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'cotton Buds';
    speechSynthesis.speak(msg);
})

const bathSponge = document.getElementById('bathSponge').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'bath Sponge';
    speechSynthesis.speak(msg);
})

const cabinet = document.getElementById('cabinet').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'cabinet';
    speechSynthesis.speak(msg);
})

const makeup = document.getElementById('makeup').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'makeup';
    speechSynthesis.speak(msg);
})

const shampoo = document.getElementById('shampoo').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'shampoo';
    speechSynthesis.speak(msg);
})

const showerGel = document.getElementById('showerGel').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'shower Gel';
    speechSynthesis.speak(msg);
})

const shavingFoam = document.getElementById('shavingFoam').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'shaving Foam';
    speechSynthesis.speak(msg);
})

const razor = document.getElementById('razor').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text =  'razor';
    speechSynthesis.speak(msg);
})
