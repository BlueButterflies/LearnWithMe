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

//Audio buttons
const audioFirst = document.getElementById('audioFirst');
const audioSecond = document.getElementById('audioSecond');

const playPauseFirst = document.getElementById('playPauseFirst');
const playPauseSecond = document.getElementById('playPauseSecond');

const stopFirst = document.getElementById('stopFirst');
const stopSecond= document.getElementById('stopSecond');
let counter =  0;

function PlayPauseFirst(){
  if(counter == 0){
    counter = 1;
    audioFirst.play();

    playPauseFirst.innerHTML = '&#10074;&#10074;';
  }else{
    counter = 0;
    audioFirst.pause();

    playPauseFirst.innerHTML = '&#9658;';
  }
}

function PlayPauseSecond(){
  if(counter == 0){
    counter = 1;
    audioSecond.play();

    playPauseSecond.innerHTML = '&#10074;&#10074;';
  }else{
    counter = 0;
    audioSecond.pause();

    playPauseSecond.innerHTML = '&#9658;';
  }
}

function StopFirst(){

  if(PlayPauseFirst()){
    PlayPauseFirst();
    audioFirst.pause();
    audioFirst.currentTime = 0;

    playPauseFirst.innerHTML = '&#9658;';
  }
}

function StopSecond(){
  PlayPauseSecond();
    audioSecond.pause();
    audioSecond.currentTime = 0;

    playPauseSecond.innerHTML = '&#9658;';
}

//Read button
const firstStory = document.getElementById('readFirst');
const secondStory = document.getElementById('readSecond');

const close = document.getElementById('close');
const title = document.getElementById('title');
const tile = document.getElementById('tile');

firstStory.addEventListener('click', function(){
  document.querySelector('.popup').style.display = 'flex';
  title.innerHTML = 'Snow White';
  tile.innerHTML = 'Once upon a time, a princess named Snow White lived in a castle with her father, the King, and her stepmother, the Queen. Her father had always said to his daughter that she must be fair to everyone at court.<br>- Said he: "People come here to the castle when they have a problem. They need the ruler to make a fair decision. Nothing is more important than to be fair."'+
    '<br>The Queen, Snow White’s stepmother, knew how much this meant to her husband. At the first chance, she rushed to her magic mirror.<br>-  "Mirror, mirror, on the wall," said the Queen.  “Who is the fairest of them all?"' +
    '<br>- "Snow White is the fairest of them all!" said the Magic Mirror.' +
    '<br>-"What?!" yelled the Queen. "No one is more fair than I!  The Queen must have the best of everything - everyone knows that. What could be more fair?"' +
    '<br>-"Snow White is the fairest of them all!" repeated the Magic Mirror.<br>-"What do you know – you’re a mirror!" roared the Queen.  And she stormed off. ' +
    '<br>Still, the Queen was bothered.  So bothered was she that the Queen decided to be rid of the girl, once and for all.<br>- "I cannot wait another day!" she declared.  The Queen called for her servant, a huntsman.  "Find a reason to take Snow White deep into the woods," she said, pointing her long finger at the servant. "Then kill her."' +
    '<br>The huntsman was shocked!  But she was the Queen and what could he do?  The next day he took Snow White into the woods.  As he drew his knife to slay her, Snow White turned around.' +
    '<br>-"Look," she said, taking something out of her pocket."You have always been good to me."She held in front of him six perfect arrowheads that she had carefully shaped."Do you like them?" she said."They are for you."' +
    '<br>-"That\'s not what I meant," said the servant.  He dropped to his knees.' +
    '<br>-"How can I say this to you? The Queen, your step-mother, ordered me to kill you," he said." But I cannot!"' +
    '<br>-"She did what?" Snow White called out with alarm.' +
    '<br>-"You must run away!" said the huntsman."Far into the woods. Now!  And never come back to the castle!"' +
    '<br>Snow White turned and ran into the woods as fast as she could. Deeper and deeper she ran. It was getting dark, and the wolves were starting to howl. She tripped and her skirt was torn.  Tall tree branches seemed to reach down to the very ground to grab her. She was scratched, bleeding and scared. Yet she ran on and on.' +
    '<br>Then all of a sudden, far away, there was a light. Who was living so deep in the woods? She stepped up closer. It was a cottage! Yet no sound came from the cottage, only light from the windows.' +
    '<br>-"Hello?" she said, knocking softly on the door."Hello?" No answer. The door was a little bit open.  She opened it some more and stepped in."Hello, is anyone home?"<br>She looked around.  What a mess!  She had never seen a messier living room.'+
    '<br>"This cottage may be the biggest mess I ever saw," she thought."But it\'s a roof over my head for tonight. Maybe if I clean up around here, I can earn my sleep."' +
    '<br>As she cleaned, she thought of someone she already missed.  Before her father had re-married, she and a Prince who lived in the next kingdom were getting to know each other.  They would take long walks in the royal garden and tell each other stories, and laugh.' +
    '<br>After the Queen had moved into the castle, her stepmother had made a new rule – no more visitors.  Now the Prince had to slip over the palace gate in secret. He would call out to her from under her window and they could talk a bit that way. It wasn’t as good as the long walks but it was the best they could manage. Now that she had to run away from home, would she ever see him again?' +
    '<br>After Snow White cleaned up the living room, she went upstairs.  On the second floor, there were seven little beds lined up in a row, as if for children.  Tired from cleaning, Snow White yawned and lay across all seven of the beds.  Soon she fell fast asleep.In the meantime, the Seven Dwarfs were heading home from a long day of working in the jewel mines.  When they opened the door, you can imagine their surprise when they saw their cottage all cleaned up!' +
    '<br>-"What kind of magic is this?" said one of the Dwarfs, whose name was Doc.' +
    '<br>-"I wouldn’t mind more magic like this!" said another of the Dwarfs with a smile.  His name was Dopey.' +
    '<br>-"We\'d better check upstairs," said another Dwarf, whose name was Grumpy."Something is fishy around here, that’s for sure."' +
    '<br>There – lying across all their beds, was a young lady, fast asleep. ' +
    '<br>"Who are you?" said all the Dwarfs at once.'+
    '<br>Snow White bolted awake. The Seven Dwarfs could tell she was as surprised as they were. Soon they all relaxed and shared their stories. Snow White learned their names – Bashful, Doc, Dopey, Grumpy, Happy, Sleepy, and Sneezy. She told them all about her step-mother. That her stepmother had tried to get the huntsman to kill her, that the huntsman had set her free in the woods, and that she could never go back home again.'+
    '<br>-"Stay here, with us," said Bashful.' +
    '<br>-"That\’s sweet," said Snow White."But if I were to stay here at your home, I would have to do something for all of you."' +
    '<br>-You already cleaned up our place," said Sneezy.' +
    '<br>-"Keeping the house clean will be easy," said Snow White, "as long as we all pitch in. I will let everyone know what part they can do, and I will do my share too, of course."' +
    '<br>-"That\’s fair," said Happy.' +
    '<br>"But there must be something else I can do for you," said Snow White.' +
    '<br>The Seven Dwarfs shrugged.' +
    '<br>-"Do you know how to read?" said Doc."We have these books filled with wonderful tales and would love to be able to read them." And so it was agreed that Snow White would teach them how to read.' +
    '<br>To celebrate their new friendship, Snow White and the Seven Dwarfs sang and danced the night away.'+
    '<br>The next morning before they left for work, the Seven Dwarfs warned Snow White she must not open the door to anyone. After all, who knows what evil her stepmother might do?  The princess nodded in agreement, and the Dwarfs left the house. The princess prepared her first reading lesson. She also prepared a good hot meal for the Seven Dwarfs when they returned home that night. And so the days passed.'+
    '<br>Back at the castle, the Queen marched up to her mirror."Mirror, mirror on the wall," she demanded.  "Who is the fairest of them all?"' +
    '<br>-Snow White is the fairest of them all!” said the Magic Mirror.' +
    '<br>-"That\’s impossible!" screamed the Queen."The girl is no longer alive!"' +
    '<br>-"Snow White lives!" said the Magic Mirror. And an image was shown on the mirror of Snow White living in the cottage of the Seven Dwarfs.' +
    '<br>The Queen turned red with rage. She screamed, "Who does she think she is?! Snow White will not get away with this!"' +
    '<br>At the cottage of the Dwarfs the next afternoon, when the Seven Dwarfs were away at work, there was a knock on the door.' +
    '<br>-"Who is it?" said Snow White. She remembered the warning of the Seven Dwarfs not to open the door to anyone.' +
    '<br>-"It\’s only a poor old woman," came a squeaky voice, "selling apples." Yet it was the evil Queen, disguised as an old woman. "It\’s raining out here, my dear," said her voice through the door. "Please let me in."' +
    '<br>-"Poor thing," thought Snow White, "having to go door to door selling apples in the rain."  And so she opened the door.' +
    '<br>-"Take a look at this big red apple," said the old woman, who as you know by now was really the Queen in disguise. She held the red apple close to Snow White\’s face. "Lovely, my dear, isn\’t it?"' +
    '<br>-"I would like very much to buy your apple," said Snow White. "But I have no money."' +
    '<br>-"That fine comb in your hair will make a good trade," said the old woman.' +
    '<br>-"Well, all right then!" said Snow White. She took the comb out of her hair and gave it to the old woman, who then gave her the apple. Snow White took a big bite. Alas, the fruit was poisoned! At once, Snow White fell to the ground in a deep sleep.' +
    '<br>-"YES!" shouted the Queen, pumping the air with her fists.' +
    '<br>Just then the door flew open. In marched the Seven Dwarfs, home from the day\'s work. Shocked indeed they were to find Snow White lying on the floor and what must be her stepmother beside her, laughing! They chased that evil Queen out the door, and into the storm.  Up to the very top of a mountain they chased her.  All of a sudden, lightning hit the mountain!  The Queen fell, and she was never seen again. But there was nothing to help poor Snow White.  She stayed absolutely still in her deep sleep.  The Seven Dwarfs gently lifted her into a glass coffin. Day and night they kept watch over her.' +
    '<br>One day, the Prince happened to pass through. Ever since he had learned that Snow White was missing at the castle, he was searching for her, far and wide. Now he had finally found her, but in such a state! The Prince pulled open the glass coffin. Her face seemed so fresh, even in that deep sleep. He gently took one of Snow White\'s hands in his own and kissed it.  At once, Snow White\’s eyes opened!  With Love\'s First Kiss, the evil Queen\'s spell was forever gone. Now nothing stood in the way for Snow White and the Prince to be together forever.  They returned to the Prince\'s kingdom and lived happily ever after.';
})

secondStory.addEventListener('click', function(){
  document.querySelector('.popup').style.display = 'flex';
  title.innerHTML = 'Cinderella';
  tile.innerHTML = 'Once upon a time a girl named Cinderella lived with her stepmother and two stepsisters. Poor Cinderella had to work hard all day long so the others could rest. It was she who had to wake up each morning when it was still dark and cold to start the fire. It was she who cooked the meals. It was she who kept the fire going. The poor girl could not stay clean, from all the ashes and cinders by the fire.' +
    '<br>-"What a mess!" her two stepsisters laughed. And that is why they called her "Cinderella."' +
    '<br>One day, big news came to town. The King and Queen were going to have a ball! It was time for the Prince to find a bride. All of the young ladies in the land were invited to come.  They were wild with joy! They would wear their most beautiful gown and fix their hair extra nice. Maybe the prince would like them!' +
    '<br>At Cinderella\’s house, she now had extra work to do. She had to make two brand-new gowns for her step-sisters.' +
    '<br>-"Faster!" shouted one step-sister.' +
    '<br>-"You call that a dress?" screamed the other.' +
    '<br>-Oh, dear!" said Cinderella. "When can I? - "The stepmother marched into the room. "When can you what?"' +
    '<br>-"Well" - said the girl, "when will I have time to make my own dress for the ball?"' +
    '<br>-"You?" yelled the stepmother.  "Who said you were going to the ball?"' +
    '<br>-"What a laugh!" said one step-sister.' +
    '<br>-"Such a mess!" They pointed at Cinderella. All of them laughed."' +
    '<br>-"Cinderella said to herself, "When they look at me, maybe they see a mess. But I am not that way. And if I could, I would go to the ball."' +
    '<br>Soon the time came for the stepmother and step-sisters to leave for the big party. Their fine carriage came to the door. The stepmother and step-sisters hopped inside. And they were off.'+
    '<br>-"Good-bye!" called Cinderella. "Have a good time!" But her stepmother and step-sisters did not turn around to see her.' +
    '<br>-"Ah, me!" said Cinderella sadly. The carriage rode down the street. She said aloud, "I wish I could go to the ball, too!"' +
    '<br>Then - Poof! All of a sudden, in front of her was a fairy.' +
    '<br>-"You called?" said the fairy.' +
    '<br>-"Did I?" said Cinderella. "Who are you?"' +
    '<br>-"Why, your Fairy Godmother, of course! I know your wish. And I have come to grant it."' +
    '<br>-"But…" said Cinderella, "my wish is impossible."' +
    '<br>-"Excuse me!" said the Fairy Godmother in a huff. "Did I not just show up out of thin air?"' +
    '<br>-"Yes, you did," said Cinderella. "Then let me be the one to say what is possible or not!"' +
    '<br>-"Well, I think you know I want to go to the ball, too." She looked down at her dirty clothes.' +
    '<br>-"But look at me."' +
    '<br>-"You do look a bit of a mess, child," said the Fairy Godmother.' +
    '<br>-"Even if I had something nice to wear," said the girl, "I would have no way to get there."' +
    '<br>-"Dear me, all of that is possible," said the Fairy. With that, she tapped her wand on Cinderella\’s head.' +
    '<br>At once, Cinderella was all clean.  She was dressed in a beautiful blue gown.  Her hair was set up high on her head inside a golden band.' +
    '<br>-"This is wonderful!" said Cinderella.'+
    '<br>-"Who said I was done?" said the Fairy Godmother. She tapped her wand again. At once, a beautiful carriage came to be, with a driver and four white horses.' +
    '<br<-"Am I dreaming?" said Cinderella, looking around her."' +
    '<br<-"It is as real, as real can be," said the Fairy Godmother. "But there is one thing you must know." <br>-"What is that?"' +
    '<br>-"All of this lasts only to midnight. Tonight, at the stroke of midnight, it will all be over. Everything will go back to how it was before."' +
    '<br>-"Then I must be sure to leave the ball before midnight!" said Cinderella.' +
    '<br>-"Good idea" - said the Fairy Godmother. She stepped back. "My work is done." And with that, the Fairy Godmother was gone.' +
    '<br>Cinderella looked around her. "Did that even happen?" But there she stood in a fine gown, and with a golden band in her hair. And there were her driver and four horses before her, waiting.' +
    '<br>-"Coming?" called the driver.' +
    '<br>She stepped into the carriage. And they were off.' +
    '<br>Over at the ball, the Prince did not know what to think. "Why do you have that sad look on your face?" the Queen said to her son. "Look around you! You could not ask for finer maidens than these."' +
    '<br>-"I know, Mother," said the Prince. Yet he knew something was wrong. He had met many of the young women. Yet after he said "hello", one by one, he could find nothing more to say.' +
    '<br>-"Look!" Someone pointed to the front door."Who is that?"' +
    '<br>All heads turned. Who was that lovely maiden stepping down the stairs? She held her head tall and looked as if she belonged. But no one knew her.' +
    '<br>-"There is something about her", said the Prince to himself. "I will ask her to dance." And he walked over to Cinderella.' +
    '<br>-"Have we met?" said the Prince.' +
    '<br>-"I am pleased to meet you now", said Cinderella with a bow.'+
    '<br>-"I feel as if I know you", said the Prince. "But of course, that is impossible."' +
    '<br>-"Many things are possible", said Cinderella, "if you wish them to be true."' +
    '<br>The Prince felt a leap in his heart.  He and Cinderella danced. When the song was over, they danced again.  And then they danced again, and yet again. Soon the other maidens at the ball grew jealous.' +
    '<br>-"Why is he dancing all the time with her?" they said. "How rude!"' +
    '<br>But all the Prince could see was Cinderella. They laughed and talked, and they danced some more. In fact, they danced for so long that Cinderella did not see the clock.' +
    '<br>-"Dong!" said the clock.' +
    '<br>Cinderella looked up.' +
    '<br>"Dong!"+ went the clock again.' +
    '<br>She looked up again. "Oh, my!" she cried out. "It is almost midnight!"' +
    '<br>"Dong!" rung the clock.' +
    '<br>-"Why does that matter?" said the Prince.' +
    '<br>"Dong!" called the clock.' +
    '<br>-"I must go!" said Cinderella.' +
    '<br>"Dong!" went the clock.' +
    '<br>-"But we just met!" said the Prince. "Why leave now?"' +
    '<br>"Dong!" rung the clock.' +
    '<br>-"I must go!" said Cinderella. She ran to the steps.' +
    '<br>"Dong!" said the clock.' +
    '<br>-"I cannot hear you," said the Prince. "The clock is too loud!"' +
    '<br>"Dong!" rung the clock.' +
    '<br>-"Goodbye!" said Cinderella. Up, up the stairs she ran.' +
    '<br>"Dong!" went the clock.' +
    '<br>-"Please, stop for a moment!" said the Prince.' +
    '<br>-"Oh, dear!" she said as one glass slipper fell off her foot on the stair. But Cinderella kept running up.' +
    '<br>"Dong!" said the clock.' +
    '<br>-"Please wait a moment!" said the Prince.' +
    '<br>"Dong!" rung the clock.' +
    '<br>-"Goodbye!" Cinderella turned one last time. Then she rushed out the door.' +
    '<br>"Dong!" The clock was quiet. It was midnight.' +
    '<br>-"Wait!" called the Prince. He picked up her glass slipper and rushed out the door.'+
    '<br>He looked around but could not see her blue dress anywhere. "This is all I have left from her," he said, looking down at the glass slipper. He saw that it was made in a special way, to fit a foot like none other.'+ 
    '<br>-"Somewhere there is the other glass slipper," he said. "And when I find it, I will find her, too. Then I will ask her to be my bride!"' +
    '<br>From hut to hut, from house to house, went the Prince. One young woman after another tried to fit her foot inside the glass slipper. But none could fit. And so the Prince moved on.' +
    '<br>At last the Prince came to Cinderella’s house.' +
    '<br>-"He is coming!" called one step-sister as she looked out the window.' +
    '<br>-"At the door!" screamed the other step-sister.' +
    '<br>-"Quick!" yelled the stepmother. "Get ready! One of you must be the one to fit your foot in that slipper. No matter what!"' +
    '<br>The Prince knocked. The stepmother flew open the door. "Come in!" she said. "I have two lovely daughters for you to see."' +
    '<br>The first step-sister tried to place her foot in the glass slipper. She tried hard, but it just would not fit. Then the second step-sister tried to fit her foot inside. She tried and tried with all her might, too. But no dice.' +
    '<br>-"Are there no other young women in the house?" said the Prince.' +
    '<br>-"None," said the stepmother.' +
    '<br<-"Then I must go," said the Prince.' +
    '<br>-"Maybe there is one more," said Cinderella, stepping into the room.' +
    '<br>-"I thought you said there were no other young women here," said the Prince.' +
    '<br>-"None who matter!" said the stepmother in a hiss.' +
    '<br>-"Come here," said the Prince.' +
    '<br>Cinderella stepped up to him. The Prince got down on one knee and tried the glass slipper on her foot. It fit perfectly! Then, from her pocket Cinderella took out something. It was the other glass slipper!' +
    '<br>-"I knew it!" he cried. "You are the one!"' +
    '<br>"What?" shouted a step-sister.' +
    '<br>"Not her!" screamed the other step-sister.' +
    '<br>-"This cannot be!" yelled the stepmother.' +
    '<br>But it was too late. The prince knew that Cinderella was the one. He looked into her eyes. He did not see the cinders in her hair or the ashes on her face.' +
    '<br>-"I have found you!" he said.' +
    '<br>-"And I have found you," said Cinderella.' +
    '<br>And so Cinderella and the Prince were married, and they lived happily ever after.';
})

close.addEventListener('click', function(){
  document.querySelector('.popup').style.display = 'none';
})



