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
msg.rate = 0.7; // 0.1 to 10
msg.pitch = 1; //0 to 2
msg.text = '';
msg.lang = 'en-US';

/**Get button id tags from city.html  and produce sounds with the pronunciation of words*/
const school = document.getElementById('school').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'school';
    speechSynthesis.speak(msg);
});

const postOffice = document.getElementById('postOffice').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'post Office';
    speechSynthesis.speak(msg);
});

const hospital = document.getElementById('hospital').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'hospital';
    speechSynthesis.speak(msg);
});

const bank = document.getElementById('bank').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'bank';
    speechSynthesis.speak(msg);
});

const fireStation = document.getElementById('fireStation').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'fire Station';
    speechSynthesis.speak(msg);
});

const supermarket = document.getElementById('supermarket').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'supermarket';
    speechSynthesis.speak(msg);
});

const departmentStore = document.getElementById('departmentStore').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'department Store';
    speechSynthesis.speak(msg);
});

const restaurant = document.getElementById('restaurant').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'restaurant';
    speechSynthesis.speak(msg);
}); 

const museum = document.getElementById('museum').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'museum';
    speechSynthesis.speak(msg);
}); 

const hotel = document.getElementById('hotel').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'hotel';
    speechSynthesis.speak(msg);
}); 

const library = document.getElementById('library').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'library';
    speechSynthesis.speak(msg);
}); 

const movieTheater = document.getElementById('movieTheater').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'movie Theater';
    speechSynthesis.speak(msg);
}); 

const factory = document.getElementById('factory').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'factory';
    speechSynthesis.speak(msg);
}); 

const houses = document.getElementById('houses').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'houses';
    speechSynthesis.speak(msg);
}); 

const policeDepartment = document.getElementById('policeDepartment').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'police Department';
    speechSynthesis.speak(msg);
}); 

const cityHall = document.getElementById('cityHall').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'city Hall';
    speechSynthesis.speak(msg);
}); 

const townHall = document.getElementById('townHall').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'town Hall';
    speechSynthesis.speak(msg);
}); 

const prison = document.getElementById('prison').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'prison';
    speechSynthesis.speak(msg);
});

const mall = document.getElementById('mall').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'mall';
    speechSynthesis.speak(msg);
}); 

const church = document.getElementById('church').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'church';
    speechSynthesis.speak(msg);
}); 

const artGallery = document.getElementById('artGallery').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'art Gallery';
    speechSynthesis.speak(msg);
});

const monument = document.getElementById('monument').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'monument';
    speechSynthesis.speak(msg);
});

const port = document.getElementById('port').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'port';
    speechSynthesis.speak(msg);
});

const busStop = document.getElementById('busStop').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'bus Stop';
    speechSynthesis.speak(msg);
});

const busStation = document.getElementById('busStation').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'bus Station';
    speechSynthesis.speak(msg);
});

const subwayStation = document.getElementById('subwayStation').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'subway Station';
    speechSynthesis.speak(msg);
});

const trainStation = document.getElementById('trainStation').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'train Station';
    speechSynthesis.speak(msg);
});

const airport = document.getElementById('airport').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'airport';
    speechSynthesis.speak(msg);
});

const shoppingCenter = document.getElementById('shoppingCenter').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'shopping Center';
    speechSynthesis.speak(msg);
});

const gasStation = document.getElementById('gasStation').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'gas Station';
    speechSynthesis.speak(msg);
});

const zoo = document.getElementById('zoo').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'zoo';
    speechSynthesis.speak(msg);
});

const park = document.getElementById('park').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'park';
    speechSynthesis.speak(msg);
});

const aquarium = document.getElementById('aquarium').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'aquarium';
    speechSynthesis.speak(msg);
});

const concertHall = document.getElementById('concertHall').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'concert Hall';
    speechSynthesis.speak(msg);
});

const circus = document.getElementById('circus').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'circus';
    speechSynthesis.speak(msg);
});

const travelAgency = document.getElementById('travelAgency').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'travel Agency';
    speechSynthesis.speak(msg);
});

const coffeeShop = document.getElementById('coffeeShop').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'coffee Shop';
    speechSynthesis.speak(msg);
});

const gym = document.getElementById('gym').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'gym';
    speechSynthesis.speak(msg);
});

const stadium = document.getElementById('stadium').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'stadium';
    speechSynthesis.speak(msg);
});

const college = document.getElementById('college').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'college';
    speechSynthesis.speak(msg);
});

const university = document.getElementById('university').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'university';
    speechSynthesis.speak(msg);
});

const academy = document.getElementById('academy').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'academy';
    speechSynthesis.speak(msg);
});

const autoRepairShop = document.getElementById('autoRepairShop').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'auto Repair Shop';
    speechSynthesis.speak(msg);
});

const parkingLot = document.getElementById('parkingLot').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'parking Lot';
    speechSynthesis.speak(msg);
});

const laundromat = document.getElementById('laundromat').addEventListener('click', (e) => {
    e.preventDefault();
    msg.text = 'laundromat';
    speechSynthesis.speak(msg);
});