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

//Tales title and tales - array variables
const titles = [
  'Snow White', 
  'Cinderella', 
  'Rapunzel', 
  'The Ugly Duckling',
  'Pinocchio'
];

const tales = [
  'Once upon a time, a princess named Snow White lived in a castle with her father, the King, and her stepmother, the Queen. Her father had always said to his daughter that she must be fair to everyone at court.<br>- Said he: "People come here to the castle when they have a problem. They need the ruler to make a fair decision. Nothing is more important than to be fair."' +
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
    '<br>-"Hello?" she said, knocking softly on the door."Hello?" No answer. The door was a little bit open.  She opened it some more and stepped in."Hello, is anyone home?"<br>She looked around.  What a mess!  She had never seen a messier living room.' +
    '<br>"This cottage may be the biggest mess I ever saw," she thought."But it\'s a roof over my head for tonight. Maybe if I clean up around here, I can earn my sleep."' +
    '<br>As she cleaned, she thought of someone she already missed.  Before her father had re-married, she and a Prince who lived in the next kingdom were getting to know each other.  They would take long walks in the royal garden and tell each other stories, and laugh.' +
    '<br>After the Queen had moved into the castle, her stepmother had made a new rule – no more visitors.  Now the Prince had to slip over the palace gate in secret. He would call out to her from under her window and they could talk a bit that way. It wasn’t as good as the long walks but it was the best they could manage. Now that she had to run away from home, would she ever see him again?' +
    '<br>After Snow White cleaned up the living room, she went upstairs.  On the second floor, there were seven little beds lined up in a row, as if for children.  Tired from cleaning, Snow White yawned and lay across all seven of the beds.  Soon she fell fast asleep.In the meantime, the Seven Dwarfs were heading home from a long day of working in the jewel mines.  When they opened the door, you can imagine their surprise when they saw their cottage all cleaned up!' +
    '<br>-"What kind of magic is this?" said one of the Dwarfs, whose name was Doc.' +
    '<br>-"I wouldn’t mind more magic like this!" said another of the Dwarfs with a smile.  His name was Dopey.' +
    '<br>-"We\'d better check upstairs," said another Dwarf, whose name was Grumpy."Something is fishy around here, that’s for sure."' +
    '<br>There – lying across all their beds, was a young lady, fast asleep. ' +
    '<br>"Who are you?" said all the Dwarfs at once.' +
    '<br>Snow White bolted awake. The Seven Dwarfs could tell she was as surprised as they were. Soon they all relaxed and shared their stories. Snow White learned their names – Bashful, Doc, Dopey, Grumpy, Happy, Sleepy, and Sneezy. She told them all about her step-mother. That her stepmother had tried to get the huntsman to kill her, that the huntsman had set her free in the woods, and that she could never go back home again.' +
    '<br>-"Stay here, with us," said Bashful.' +
    '<br>-"That\’s sweet," said Snow White."But if I were to stay here at your home, I would have to do something for all of you."' +
    '<br>-You already cleaned up our place," said Sneezy.' +
    '<br>-"Keeping the house clean will be easy," said Snow White, "as long as we all pitch in. I will let everyone know what part they can do, and I will do my share too, of course."' +
    '<br>-"That\’s fair," said Happy.' +
    '<br>"But there must be something else I can do for you," said Snow White.' +
    '<br>The Seven Dwarfs shrugged.' +
    '<br>-"Do you know how to read?" said Doc."We have these books filled with wonderful tales and would love to be able to read them." And so it was agreed that Snow White would teach them how to read.' +
    '<br>To celebrate their new friendship, Snow White and the Seven Dwarfs sang and danced the night away.' +
    '<br>The next morning before they left for work, the Seven Dwarfs warned Snow White she must not open the door to anyone. After all, who knows what evil her stepmother might do?  The princess nodded in agreement, and the Dwarfs left the house. The princess prepared her first reading lesson. She also prepared a good hot meal for the Seven Dwarfs when they returned home that night. And so the days passed.' +
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
    '<br>One day, the Prince happened to pass through. Ever since he had learned that Snow White was missing at the castle, he was searching for her, far and wide. Now he had finally found her, but in such a state! The Prince pulled open the glass coffin. Her face seemed so fresh, even in that deep sleep. He gently took one of Snow White\'s hands in his own and kissed it.  At once, Snow White\’s eyes opened!  With Love\'s First Kiss, the evil Queen\'s spell was forever gone. Now nothing stood in the way for Snow White and the Prince to be together forever.  They returned to the Prince\'s kingdom and lived happily ever after.',

    'Once upon a time a girl named Cinderella lived with her stepmother and two stepsisters. Poor Cinderella had to work hard all day long so the others could rest. It was she who had to wake up each morning when it was still dark and cold to start the fire. It was she who cooked the meals. It was she who kept the fire going. The poor girl could not stay clean, from all the ashes and cinders by the fire.' +
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
    '<br>Soon the time came for the stepmother and step-sisters to leave for the big party. Their fine carriage came to the door. The stepmother and step-sisters hopped inside. And they were off.' +
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
    '<br>-"This is wonderful!" said Cinderella.' +
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
    '<br>-"I am pleased to meet you now", said Cinderella with a bow.' +
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
    '<br>-"Wait!" called the Prince. He picked up her glass slipper and rushed out the door.' +
    '<br>He looked around but could not see her blue dress anywhere. "This is all I have left from her," he said, looking down at the glass slipper. He saw that it was made in a special way, to fit a foot like none other.' +
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
    '<br>And so Cinderella and the Prince were married, and they lived happily ever after.',

    'Once upon a time, there lived a carpenter and his wife. More than anything, they wanted a child of their own. At long last, their wish came true –  the wife was going to have a baby!' +
    '<br>From the second floor window of their small house, the wife could see into the garden next door. Such fine fresh rows of plants and flowers there were! But no one dared to go over the garden wall to see them up close. For the garden belonged to a witch!' +
    '<br>One day the wife was looking down at the garden from her window. How fresh-looking were those big green heads of lettuce! "It is just what I need to eat!" said the wife to her husband. "You must go and get me some."' +
    '<br>-"But we cannot!” said the carpenter. "You know as well as I do that the garden belongs to the witch, who lives next door."' +
    '<br>-"If I cannot have that lettuce" - said the wife,"I will not eat anything at all! I will die!"' +
    '<br>What could the carpenter do? Late that night, he climbed over the garden wall. With very quiet steps, he took one green head of lettuce. With more quiet steps, he went back over the garden wall. His wife ate up the lettuce right away.' +
    '<br>But eating the lettuce only made her want more! If she could not have more lettuce, she said, there was nothing she would eat at all! So the next night, the carpenter climbed back over the garden wall.  He picked up one more head of lettuce. All at once came a high, loud, voice.' +
    '<br>-"Stop! What do you think you are doing?"<br>-"I…uh…am getting lettuce for my wife," said the carpenter."You thief!" yelled the witch. "You will pay for this!"' +
    '<br>-"Please!" said the carpenter. "My wife is going to have a baby. She saw your lettuce and wanted it so very much." "Why should I care about that?" shouted the witch.' +
    '<br>-"I will do anything!" said the carpenter. He thought, "Maybe I can build her something."<br>"You say you will do anything?"said the witch.<br>-"Yes!" - he said.' +
    '<br>-"Fine!2 said the witch. "Here\'s the deal. Go ahead - take all the lettuce you want. Your wife will have a baby girl. And when she does, the baby will be mine!"<br>-"What?" said the carpenter."I would never agree to that!"' +
    '<br>-"You already did!" said the witch. And she laughed an evil laugh.' +
    '<br>Soon the wife had a baby girl, just as the witch had said. To keep the baby safe from the witch, the carpenter built a tall tower deep in the woods. He built stairs that led up to a room at the very top, a room with one window. He and his wife took turns staying with the baby.' +
    '<br>But the witch had a magic ball. The ball showed her just where the baby was, at the top room of the tower. One day when the carpenter and his wife were both in the house, she cast a spell over both of them. They fell into a deep, deep sleep. And at once, the witch went to the tower.' +
    '<br>At the top room, the witch said to the baby, "I will call you Rapunzel. For that is the name of the lettuce that brought you to me.  Now Rapunzel, you are mine!"' +
    '<br>But the witch did not know how to take care of a baby. Rapunzel grew into a child, and the witch did not even know how to cut her hair. The girl\’s blond hair grew longer and longer every day.' +
    '<br>All the witch could do was keep the child locked in the room at the very top of the tower. She told the girl that the world was a very bad place. That was why she could not leave the tower.' +
    '<br>-As she grew up, many times Rapunzel said to the witch, "There is nothing here for me to do! Why must I stay in this tower all the time?"' +
    '<br>And the witch shouted back, "I already told you so many times! The world is a very bad place. Now go comb your hair and be quiet."' +
    '<br>"But is it really so bad out there? Sometimes I hear people laughing down below," Rapunzel would say sometimes.' +
    '<br>At such times the witch would yell, "How many times do I have to repeat myself? Don\'t listen to anything you see or hear out there.  The world is much worse than you think! You will stay in this tower forever, Rapunzel. So get used to it!"' +
    '<br>-On her 12th birthday, Rapunzel said to the witch, "I do not care what you say anymore! I am so tired of staying here alone all the time! When you are gone, I will chip away at the door. I will make a hole. I will run down the stairs and outside, no matter what you say!"' +
    '<br>-"Think again!" said the witch. With her power, she made all the stairs in the tower fall down. She made the doors close up. Now there was no way for Rapunzel to escape!' +
    '<br>By then, Rapunzel\’s hair had grown very, very long. Once the stairs were gone, when it was time for the witch to visit her in the tower, she would call from outside, "Rapunzel, Rapunzel! Let down your hair!"' +
    '<br>Rapunzel would throw her long blond braid out of the window. The witch would grab hold of her hair like a rope. And that is how the witch climbed up the tower wall to the window in Rapunzel\’s room.' +
    '<br>Five more long years went by.  Poor Rapunzel! She knew she must stay in the room. All she could do was to sing sad songs out of the window. Sometimes birds at the treetops would join in her songs. Then she would feel a bit better.<br>But not much.' +
    '<br>One day, a prince was riding through the woods. He heard a beautiful singing voice. Where was it coming from? He rode closer and closer to the sound. At last, he came to the tower.' +
    '<br>-"This is odd!" he said, looking around the tower wall. "There is no door at the bottom. Yet someone is singing at the very top. How does anyone get in or out of there?" Each day, the prince came back to the tower. There was something about that voice that pulled him back. Who was that young woman singing at the top?  Could he ever meet her?' +
    '<br>One day when the prince rode up, he saw an old woman standing below the tower. He jumped behind a tree to hide. It was a witch! He heard her call out, "Rapunzel, Rapunzel! Let down your hair!" A long blond braid was thrown out from a window at the very top. The old woman grabbed onto the braid. And she climbed the wall to the window at the top of the tower.' +
    '<br>-"Ah, ha!" said the prince. "So that is how it is done!" He waited.' +
    '<br>After a bit, the braid was thrown from the window again. The witch climbed back down the tower wall. Then she left.' +
    '<br>The prince waited. He stepped up to the tower. In a voice that sounded as much like the witch as he could, he called out, "Rapunzel, Rapunzel! Let down your hair!" In a moment, the same long blond braid came out of the window. "It worked!" thought the prince. He climbed up the wall of the tower.' +
    '<br>You can be sure that Rapunzel was very surprised to see the prince climb into her window. She had never seen a person up close before other than the witch, and never a man! "Who are you?" she said in fear.' +
    '<br>-"Do not worry!" said the prince. "I am a friend."' +
    '<br>-"But I do not know you," said Rapunzel.' +
    '<br>-"I feel as if I know you", said the prince. "Since I have heard you sing songs from up here day after day. You have a beautiful voice! And I love it when the birds sing with you, too."' +
    '<br>-"Yes, I like that, too," said Rapunzel. "It may be the only thing I like, since I must stay here in this same old tower, day after day, my whole life long." Rapunzel told the prince about the witch.  She told him that since the world was such a very bad place, she must always stay in the tower room.' +
    '<br>-"But the world is not as bad as she says!" said the prince. He told Rapunzel about flowers and festivals, games and gardens. He told her about puppies and puddles, strawberries and secrets.' +
    '<br>-Many hours went by. At last, Rapunzel said he must go - the witch may come back at any time! "Very well", said the prince. "But I will be back tomorrow." Rapunzel threw her braid out the window, and the prince climbed down.' +
    '<br>The next day, the prince climbed back up to Rapunzel’s room. He said, "I have a surprise for you." He had brought strawberries for her.' +
    '<br>As she tasted a strawberry Rapunzel thought, "Now I know that what I was told is not true. The world can be a very fine place! I must get out of this tower as soon as I can." But how?' +
    '<br>One day, the prince said, "If only you could get out of this tower. I can come and go by  climbing up the walls by holding onto your braid. But once I am down, how can you get down, too?"' +
    '<br>-"I know!" said Rapunzel. "Bring me a ball of silk each time you come. I can weave the silk into a ladder. Silk folds up so small the witch won\'t see it. When the ladder gets long enough to reach the ground, we will both be able to climb out of here."' +
    '<br>-"That\'s it!" said the prince. Then he moved closer to Rapunzel. "We will both be free. When we are out in the world, will you marry me?"' +
    '<br>-"Yes," said Rapunzel, "I will." Every day after that, the prince brought a ball of silk to Rapunzel. Over time, she weaved the silk into a long ladder.' +
    '<br>On Rapunzel\’s 18th birthday the witch spoke to her in a sharp voice. "Before you open your mouth this time," said the witch, "know this. I am sick and tired of hearing you talk about how alone you are in the tower all the time. It isn\'t go to change, Rapunzel! Forever!"' +
    '<br>-"Who says I\’m alone in the room all the time?" said Rapunzel.' +
    '<br>-"What?!" said the witch. "Who has been up here with you?"' +
    '<br>-"No one!" said Rapunzel at once, in fear. "I mean, no one but you!"' +
    '<br>The witch did not believe her. She started to look everywhere in the room for something to prove that someone else had been there.  Soon she found the ladder. She held it high in the air. She yelled, "What is the meaning of this?"' +
    '<br>-"My friend the prince brought me the silk," said Rapunzel.' +
    '<br>-"You will never see this prince again!" yelled the witch. She took out a knife. Snip, snap, and Rapunzel\'s lovely braid was cut off!' +
    '<br>Holding the braid in one hand, the witch laughed an evil laugh. With a stroke of her magic, Rapunzel was cast away to a far-away desert. Then the witch stayed in the tower room.  She knew that soon the prince would come back.' +
    '<br>The witch did not have to wait long. Soon the prince was calling at the bottom of the tower, in a voice that was supposed to sound like her own, "Rapunzel, Rapunzel, let down your hair!"' +
    '<br>-"So that is how he did it!" thought the witch. Holding tightly to one end of Rapunzel\'s braid, she threw the braid out the window. The prince took hold and climbed up. When he got to the window, he was much surprised to see the witch!' +
    '<br>-"Where is Rapunzel?" he called out. "What have you done with her?"<br>-2You will never see your Rapunzel again!" yelled the witch.' +
    '<br>The witch pushed the prince so hard that he lost hold of the window. Down, down, he fell! The prince landed on some bushes below. That helped with the fall, but the bushes had sharp thorns.Some of the thorns went into his eyes. The prince was blind!' +
    '<br>For two years the poor blind prince wandered the world, looking for Rapunzel. From morning to night he called for her, but it was no use. At last, he reached a desert. One day, he heard a beautiful voice singing. "Oh!" he thought. "I know that voice!" It was his dear Rapunzel! He went closer and closer to the voice he knew so well.' +
    '<br>-"My prince!" called Rapunzel when she saw him.  The two of them hugged tight. Two tears of joy fell into the eyes of the prince. All at once, he could see again!' +
    '<br>And what happened next, well, I\'m sure you can guess! The prince and Rapunzel went back to the kingdom where the prince lived. They were married as soon as they could. The prince became king of the land and Rapunzel became queen. The two of them lived happily ever after.',

    'On a farm long ago, a Mama Duck sat on her nest. "How long must I wait for my babies to hatch?" she said. "I have to sit here all alone! And no one comes to visit me." But what could she do? A Mama duck must keep her eggs warm till they hatch.' +
    '<br>At last, the eggs began to crack. One by one, yellow ducklings stepped out of their shells. They shook their wings and said, "Quack, quack!"<br>-"Look at all of you!" said Mama Duck with joy. "You are all so cute!"<br>-"Quack, quack!" they said.' +
    '<br>Mama Duck said, "Come and line up. We will go down to the lake for your very first swim." She counted – one, two, three, four, five. <br>-"Oh dear!" she said. "I should have six ducklings!"' +
    '<br>But one large egg was still in the nest. "Well," said Mama Duck, "it looks like that big egg will take more time." So she had to go sit on her nest again and wait some more.' +
    '<br>The next day, the big egg started to hatch. Out came a baby boy bird. But if one may say so, it was an odd-looking thing. This bird was much bigger than others. He was not yellow at all - he was dark-gray from his head to his feet. And he walked with a funny wobble.' +
    '<br>One of the yellow ducklings pointed. "What is that? He cannot be one of us!"<br>-"I have never seen such an ugly duckling!" said another.' +
    '<br>-"How can you say such a thing?" said Mama Duck in a stern voice. "You are only one day old! Your brother hatched from the very same nest as you did. Now line up. We will go to the lake for your very first swim."' +
    '<br>Yet the other ducklings quacked, "Ugly!  Ugly! Ugly!" The Ugly Duckling did not know why the other ducklings were yelling at him. He took the last spot in the line.' +
    '<br>Each yellow duck jumped in the river and swam behind Mama Duck. When it was his turn, the Ugly Duckling jumped in and started to paddle, too. "At least he can swim," Mama Duck said to herself.' +
    '<br>When they left the water and started to play, the Ugly Duckling tried to play with his brothers and sisters, too. They yelled, "Go away! We will not play with you! You are ugly. And you walk weird, too!"<br>When Mama Duck was close by, she would not let them talk in this way. "Be nice!" she would scold. But she was not always close by.' +
    '<br>One day, one of the yellow ducklings said to the Ugly Duckling, "You know what? You would do us a big favor if you just went away from here!" All of them started to quack, "Get out! Get out! Get out!"<br>-"Why won\’t they let me stay here?" said the Ugly Duckling to   himself. He hung his head down low. "Ah, they are right. I should go."' +
    '<br>That night, the Ugly Duckling flew over the farmyard fence. He flew till he landed on the other side of the lake. There he met two grown-up ducks.' +
    '<br>-"Can I please stay here for awhile?" said the Ugly Duckling."I have nowhere else to be."<br>-"What do we care?" said one of the ducks. "Just don’t get in our way."' +
    '<br>-"Woof! Woof!"  Suddenly a big hungry dog came tearing by, chasing the two ducks. They quickly flew up in the air, and their feathers fell down on the ground. The poor Ugly Duckling froze in fear. The dog sniffed and sniffed at the Ugly Duckling, then turned away. "I am too ugly even for the big hungry dog to want," said the Ugly Duckling with his head hung low.' +
    '<br>The sky turned dark. Crack! A bolt of lightning.  Then came a big storm, with heavy rains pouring down from the sky. In just moments, the Ugly Duckling was soaked through and through. Then a cold wind started to blow.' +
    '<br>-"Brrr!" he said with both wings held close to his chest. "If only there was a place I could get dry."' +
    '<br>All at once, a tiny light blinked far off in the woods. "Could it be someone’s hut?"' +
    '<br>He flew to the door. "Quack?" said the Ugly Duckling. The door of the hut creaked open.<br>-"What is all this noise?" said an old woman, looking right and left. Her eyes were not that good. Then she looked down. "Ah, look at that, it\’s a duck!" She picked up the Ugly Duckling and dropped him inside her hut. "You can stay here, but only if you lay eggs", she said.' +
    '<br>A tomcat and hen crept up to the Ugly Duckling. "Who do you think you are, coming in here and taking up room by the fire!" said the tomcat.<br<-"Squawk!" said the hen. "I do not need anyone else in this hut laying eggs."' +
    '<br>-"Do not worry about that", said the Ugly Duckling. "I am a boy duck."<br>-"Then why are you still here?" said the tomcat. "Did you not hear what the old woman said?"' +
    '<br>-"Get out of here, pretender!" clucked the hen.<br>-"Get out! Get out!" hissed the tomcat.<br>The door was still a bit open, so our poor Ugly Duckling slipped out the door, and back into the storm.<br>-"No one ever wants me," said the Ugly Duckling with a tear in his eye.' +
    '<br>The storm ended. Soon he found a new lake. Looking into the water, the Ugly Duckling saw the reflection of a flock of large white birds flying. He looked overhead and could not believe what he saw. There, above him, were the most beautiful birds he had ever seen!  Their long white bodies and slender necks seemed to just glide through the sky. He watched until the very last bird had winged its way out of view.' +
    '<br>He stayed at that lake all by himself, and time passed. The leaves of the trees turned deep red and gold, and then the leaves fell to the ground. Winter came, setting a blanket of white snow all over. The cold wind and the dark clouds made the Ugly Duckling feel even more sad.' +
    '<br>He had to go into the cold, cold lake to fish, but it was getting harder to swim.  The lake was turning to ice. One day, it was all he could do was to paddle the water to keep it from freezing around him, and trapping him in the lake.' +
    '<br>"I am so tired!" he said, paddling with all his might. The ice got thicker and drew closer to him.' +
    '<br>In a moment, two giant hands swept him up.  “You poor thing!” said a farmer. He held the Ugly Duckling close to his thick wool jacket and took the bird to his home. Never was a warm fireplace more welcome! For the rest of the winter, the farmer cared for the Ugly Duckling.  Then spring came. Tips of green covered the trees. Short, bright flowers popped up from the ground.' +
    '<br>-"It is time for you to go to the lake to swim again, as you were born to do," said the farmer. He took the duckling back to the lake where he had found him, and set him with care on the water.' +
    '<br>-"Gosh, I feel strong," said the young bird, flapping his wings."Why, I never felt as strong as I do right now!"<br>He heard quiet splashing sounds behind him, and turned around.  A flock of those same beautiful birds he had seen in the sky before landed behind him on the water.' +
    '<br>-"Do not worry!" he said to them, holding out one wing. "I will go now. I will not make trouble for you." A big fat tear rolled down his cheek. He turned to go away. When he opened his eyes, he saw a reflection in the water of one of those beautiful white birds. Why was it so close to him? He jumped back. And the reflection jumped back, too.' +
    '<br>-"What is this?" he said. He stretched his neck, and the reflection of the beautiful bird stretched its neck, too.<br>-"Why are you going so soon?" said one of the beautiful birds.' +
    '<br>-"Stay here, with us!" said another. "We’ll be great friends."<br>Then, the bird who used to be the Ugly Duckling knew what had happened! He was no longer an ugly gray bird that wobbled when it walked.' +
    '<br>At one moment, all the swans flapped their wings and took off into the sky. "Come with us", one called back. "Take the lead!" So he flapped his wings fast and took his place in front of the whole flock. All his new friends flapped their wings behind him.' +
    '<br>-"Say!" he said, gliding and dipping through the sky as he sped on. "Who\’s an ugly duckling now? Surely, Not I!"',

    '<br>Long ago in Italy there lived on old clock-maker named Geppetto. Tick-tick-TOCK! Tick-tick-TOCK! went all the clocks in his shop. When he worked, Geppetto felt happy.<br>But when he rested, a sad feeling came over him. "Ah!" he would think. "All my life and no child to call my own!" So, one day Geppetto carved a puppet from wood in the shape of a boy.'+
    '<br>He made the arms and legs of the puppet so they could move. He cut and sewed a nice outfit for it, as if it were a real boy.<br>- "I will call you Pinocchio," said Geppetto. That night, Geppetto lay the wooden puppet down onto the bed.<br>From out of the window, a big star twinkled bright. Geppetto looked out the window to the twinkling star.<br>-"Bright star", said Geppetto. "If I could make one wish, it would be for a real boy of my own." But of course, he knew that was not possible.' +
    '<br>That night, the same big star swooshed right into Geppetto\’s room. It changed into a Blue Fairy! The Blue Fairy flew over to the bed.<br>-"Little wooden puppet", said the Blue Fairy. "In the morning, you will be able to walk and talk like a real boy." She tapped the puppet one time with her wand. "And if someday you can prove that you are brave and true, you may become a real boy."' +
    '<br>Pinocchio\’s eyes opened.<br>-"One more thing", said the Blue Fairy. Suddenly, a cricket appeared. He was dressed mighty fine -and could talk!<br<- "Meet the Cricket", said the Blue Fairy. He will stay with you to help you make wise choices.' +
    '<br>And with that, the Blue Fairy went swoosh and was gone! Out of the window and up into the night sky.When Geppetto woke up the next morning, he said, "I will go take my puppet out of bed." But the bed was empty!<br>-"Here I am, Father!" said Pinocchio from the other side of the room.<br>-Geppetto swung around. "What? You can talk?"<br>"Yep! I am Pinocchio, your boy!"' +
    '<br>-"How can this be?" said Geppetto in shock. Then he said, "But who cares?" He rushed over and swept the wooden puppet into his arms.<br>- "Pinocchio, my son!" he said in great happiness.' +
    '<br>One day Pinocchio said, "I want to go to school, like other boys."<br>-"Of course",said Geppetto. But he did not have the money to buy schoolbooks.<br>Later that day, Geppetto came back home with schoolbooks. "Now you can go to school,"he said.<br<-"But Father, where is your warm coat?"' +
    '<br>With a wave of his hand Geppetto said, "No need to worry about that. What matters is that you will go to school tomorrow!" He did not want Pinocchio to know he had traded his warm coat to buy the schoolbooks.<br>The next morning, Pinocchio said good-bye to Geppetto.<br>He skipped along the path to school, humming as he went. The Cricket rode on his shoulder, happy, too.<br>Coming up to them on the path was a Fox and a Cat.<br>-"And where are you going on this fine day?" said the Fox.<br>-"I am going to school!" said Pinocchio.' +
    '<br>-"On such a fine day as this?" said the Fox. "It is too nice to be stuck inside school! You should come with us, to the fair."<br>-"Listen to me," said the Fox. He put his arm around Pinocchio\’s shoulder. "Anything you need to know, you can learn at the fair."<br>-"Really?" said Pinocchio.<br>-"Take it from me," said the Fox.<br>-"Pinocchio!" said the Cricket. "He does not know what he is talking about!"<br>The Fox covered the Cricket with his hat. No one could hear the little fellow as the Cricket tried to call out,"Pinocchio, do not listen to him!"<br>-"Okay!" said Pinocchio. "Let\'s go to the fair!" And off they went.' +
    '<br>What a fair it was! By the gate was a man dressed in white. He called out, "Come in, come in! Right this way! Get your tickets here!"<br>With a sad look Pinocchio said to the Fox and Cat, "I do not have any tickets".<br>A man was selling old things at a table near the gate. He called, "Hey, you! Sell me those new schoolbooks of yours! That is how you can get money for tickets".<br>The fair was so bright and colorful and exciting, that the next thing Pinocchio knew he had sold his schoolbooks for tickets.<br>-"No, Pinocchio, stop!" called the Cricket, who finally got out from under the Fox\’s hat. But Pinocchio, the Fox and the Cat did not hear him. They were already inside the fair.<br>On stage was a puppet show! "I am a puppet, too!" said Pinocchio. "I can dance like that!" He jumped right onto the stage and started to dance with the other puppets.<br>-"Look at that new puppet!" someone called. "It has no strings!"<br>-"No strings?" said another. "Amazing!"<br>Everyone laughed and laughed. They threw coins on the stage.<br>The man who ran the fair saw coins fly onto the stage.<br>-"Well, now!" he said, rubbing his chin. "This puppet with no strings will make me rich!"<br>The next thing Pinocchio knew, he was picked up and thrown in a birdcage. In the next moment, the door was locked shut.<br>-"Hey, get me out!" called Pinocchio. But the person who had thrown him in just left the room. Only the Cricket heard Pinocchio\'s calls. The Cricket ran back and forth, in and out of the birdcage, trying to find a way to free the lock.  But he could not unlock it.<br<-"I am stuck!" cried Pinocchio. "How did this happen to me?"<br>-All of a sudden, poof! There was the Blue Fairy.<br>-"Please!" said Pinocchio. "Can you help me?"<br>-"Tell me something first", said the Blue Fairy."How did you get inside that cage?"<br>-"Tell her what happened", said the Cricket.<br>Could he really tell the Blue Fairy what had happened? What would she think of him?<br>-"Um, I was robbed," said Pinocchio.<br>-"Is that right?" said the Blue Fairy with a frown. Pinocchio\’s nose began to grow.<br>-"Yes, robbed!" said Pinocchio. "By two mean men – no, four!"<br>The nose grew more.<br>-"They took my books. They made me come here. And they threw me into this cage!"<br>His nose grew longer and longer. Until Pinocchio could see nothing in front of his face but one big giant nose.<br>-"Why is my nose so big?" Pinocchio cried out.' +
    '<br>-"Pinocchio!" said the Blue Fairy in a stern voice. "You must know what the truth really is."<br>-"I guess so", said Pinocchio. "I wanted to come to the fair. I came here with a Fox and the Cat."<br>The nose grew shorter.<br>-"I had to sell my books to get some tickets."<br>-"Had to?" said the Blue Fairy.<br<-"I mean, I decided to sell my books to get tickets", he said.<br>The nose got shorter still.<br>-"Then someone put me in this cage", he said.<br>The nose was back to normal. "Good job, Pinocchio!" said the Cricket.<br>-"Well done,” said the Blue Fairy. "Now I will get you out of here."<br>With a wave of her wand, Pinocchio was out of the cage.<br>-"Here are your books." And Pinocchio was holding the same new schoolbooks in his hands again.<br>-"Know this," said the Blue Fairy, "you are on your own from now on. Make sure you do the right thing next time." And she was gone.<br>Pinocchio was back on the road to school. A Coachman drove up. "Hey kid, how about a ride?"<br>-"No, thank you", said Pinocchio. "I am going to school."<br>-"You will ride faster with me", said the Coachman to Pinocchio. He said to himself, "He will ride faster all right, but not to where he thinks he is going!"<br>-"Alright," said Pinocchio. "I want to get to school right away!" <br>When Pinocchio was inside the coach, the Coachman said, "Say kid, why do you think boys like you go to school?"<br>-"To learn things," said Pinocchio. "And to grow up, I guess. So we can do what we want."<br>-"Well", said the Coachman, "what if I told you that could do what you wanted, right now?"<br>-"Right now?"<br>-"Yep! Think of it. Skip the books. Skip the school. Right now, how would you like to have all the candy you can eat!"<br>-"All the candy?"<br>-"Yep. Ice cream, too. Of every flavor. Ever want to smoke a cigar or play pool? All this and more, at Pleasure Island."<br>-"Pleasure Island?"<br>-"Best place in the world for boys like you!"<br>-"Don\’t listen to him, Pinocchio!" shouted the Cricket.<br>-"Why wait?" said the Coachman. "I know just where Pleasure Island is. This is your lucky day, kid. So what do you say?"<br>-"Let\’s go there!" said Pinocchio. "I\’m going to Pleasure Island!"<br>-"Augh!" said the Cricket, waving his arms in the air.<br>After a while, the coach stopped. "You got a boy with you in that coach?" said a dark stranger to the Coachman.' +
    '<br>-"Yep." The Coachman grabbed Pinocchio and threw him down onto the ground. "He’s all yours. Now pay up."<br>The Coachman reached out for something (was it money?) from the dark stranger. Then the Coachman drove off.<br>What could it all mean? But as Pinocchio looked around, he no longer cared.<br>For everything the Coachman had told him was true! Heaps of candy all about. Tubs of ice cream in every flavor. Boys like him could eat and eat, and play all day. None of them had to work or clean up. There were even cigars if you wanted one, and pool tables to play.<br>But after a few days, something was odd. "Where did all the boys go?" he asked the Cricket.<br>-"All I see now are donkeys", said Pinocchio.<br>-"I must say, there used to be more boys around here," said the Cricket.<br>Just then, one of his ears popped into a donkey ear. Then his other ear popped into a donkey ear, too.<br>-"Oh!" cried the Cricket. "What is happening to you?"' +
    '<br>-"I don\’t know - Honk!" said Pinocchio.<br>Pinocchio and the Cricket saw a line of donkeys led by a dark stranger onto a truck. "Oh, no!" said the Cricket. "Now I get it! Boys get turned into donkeys here. Then the donkeys are sold! Pinocchio, we have to get you out of here, fast - while we still can!"<br>-"Let\’s go – Honk!" said Pinocchio. His two feet had popped into four.<br>-"Run, quick!" said the Cricket. One good thing about Pinocchio\’s new four legs is he could run very fast! Quick, quick, they ran out of Pleasure Island. Soon they were at a dock by the ocean.<br>-"Please sir!" Pinocchio called out to a man by the dock. "I am looking for an old man named Geppetto. Do you know him? – Honk!"<br>-"Sounds like you are getting a bad cold", said the man. "Hmm, Geppetto. That\’s the old man whose son left one morning and did not come back. He went out on a boat to look for him. No one has seen the poor fellow since."<br>-"Oh no! This is all my fault – Honk!" said Pinocchio. "I must look for my father!" Pinocchio jumped off of the dock into the ocean. The Cricket jumped in too, close behind.<br>Most of Pinocchio was still made of wood, so he could float on the ocean. "Father!" he called out, paddling the water with his arms. "Father!" but there was no answer.<br>All Pinocchio could see around him was blue water, everywhere. Until – what was that, far away? Something was rushing up. Something big, and very fast!<br>In a moment, a giant whale was upon them. It opened its giant jaws and with one gulp, swallowed Pinocchio! Rushing inside with all the sea water tumbled Pinocchio and the Cricket. When they came to a stop, they saw that they were in the dark belly of the whale.<br>-"I am fine", said a voice of an old man.<br>-"Wait a minute", said Pinocchio.<br>-"Father, is that you?"<br>There was Geppetto!<br>-2Father, Father, it\’s me!" said Pinocchio.<br>-"My son!" said Geppetto. "I thought I was dreaming!"<br>They hugged in joy.<br>-"Look!" said Geppetto as three fish swam by. "There goes our dinner!"<br>-"Father, I have an idea! Let\’s make a fire."<br>-"Grilled fish tonight!" said Geppetto.' +
    '<br>-"No, I mean for us to get out!" said Pinocchio. He gathered driftwood and got a flame going. "This is how we can make the whale sneeze!" he said. Pinocchio waved his arms over the flame to make a lot of smoke. Soon, clouds of black smoke were rising up.<br>The whale gave a cough. "Hang on!" said Pinocchio. And then… Wham!! In one big sneeze, Pinocchio, Geppetto and the Cricket flew out of the whale\’s mouth. Rolling over and over in the sea water, at last they rolled up onto the shore.<br>-"Pinocchio?" Geppetto rose to his feet. The Cricket was there beside him. But where was Pinocchio?<br>And then they found him! Pinocchio was face down, his head in a puddle.<br>-"Pinocchio!"<br>They were too late. Geppetto and the Cricket wept over Pinocchio, the boy puppet, who lay still in the water.<br>Then in a flash, who was there but the Blue Fairy!<br>-"Pinocchio2, she said. "You saved your father. You proved that you are both brave and true." She tapped his head with her wand. "And now you will be a real boy."<br>Pinocchio woke up. He looked at his soft arms and soft legs.<br>"Father!" he cried out. "Look! I am a real boy!"<br>-"That you are!" cried Geppetto.<br>The Blue Fairy turned to the Cricket. "Come",she said. In a flash, the two of them were gone.<br>And they lived many long and happy years together.'

];

//Audio buttons values
const audioFirst = document.getElementById('audioFirst');
const audioSecond = document.getElementById('audioSecond');
const audioThird = document.getElementById('audioThird');
const audioFourth = document.getElementById('audioFourth');
const audioFifth = document.getElementById('audioFifth');

const playPauseFirst = document.getElementById('playPauseFirst');
const playPauseSecond = document.getElementById('playPauseSecond');
const playPauseThird = document.getElementById('playPauseThird');
const playPauseFourth = document.getElementById('playPauseFourth');
const playPauseFifth = document.getElementById('playPauseFifth');

const stopFirst = document.getElementById('stopFirst');
const stopSecond = document.getElementById('stopSecond');
const stopThird = document.getElementById('stopThird');
const stopFourth = document.getElementById('stopFourth');
const stopFifth = document.getElementById('stopFifth');

let counter = 0;

//Play pause functions
function PlayPauseFirst() {
  if (counter == 0) {
    counter = 1;
    audioFirst.play();

    playPauseFirst.innerHTML = '&#10074;&#10074;';
  } else {
    counter = 0;
    audioFirst.pause();

    playPauseFirst.innerHTML = '&#9658;';
  }
}

function PlayPauseSecond() {
  if (counter == 0) {
    counter = 1;
    audioSecond.play();

    playPauseSecond.innerHTML = '&#10074;&#10074;';
  } else {
    counter = 0;
    audioSecond.pause();

    playPauseSecond.innerHTML = '&#9658;';
  }
}

function PlayPauseThird() {
  if (counter == 0) {
    counter = 1;
    audioThird.play();

    playPauseThird.innerHTML = '&#10074;&#10074;';
  } else {
    counter = 0;
    audioThird.pause();

    playPauseThird.innerHTML = '&#9658;';
  }
}

function PlayPauseFourth() {
  if (counter == 0) {
    counter = 1;
    audioFourth.play();

    playPauseFourth.innerHTML = '&#10074;&#10074;';
  } else {
    counter = 0;
    audioFourth.pause();

    playPauseFourth.innerHTML = '&#9658;';
  }
}

function PlayPauseFifth() {
  if (counter == 0) {
    counter = 1;
    audioFifth.play();

    playPauseFifth.innerHTML = '&#10074;&#10074;';
  } else {
    counter = 0;
    audioFifth.pause();

    playPauseFifth.innerHTML = '&#9658;';
  }
}

//Stop audio functions
function StopFirst() {

  if (PlayPauseFirst()) {
    PlayPauseFirst();
    audioFirst.pause();
    audioFirst.currentTime = 0;

    playPauseFirst.innerHTML = '&#9658;';
  }
}

function StopSecond() {
  PlayPauseSecond();
  audioSecond.pause();
  audioSecond.currentTime = 0;

  playPauseSecond.innerHTML = '&#9658;';
}

function StopThird() {
  PlayPauseThird();
  audioThird.pause();
  audioThird.currentTime = 0;

  playPauseThird.innerHTML = '&#9658;';
}

function StopFourth() {
  PlayPauseFourth();
  audioFourth.pause();
  audioFourth.currentTime = 0;

  playPauseFourth.innerHTML = '&#9658;';
}

function StopFifth() {
  PlayPauseFifth();
  audioFifth.pause();
  audioFifth.currentTime = 0;

  playPauseFifth.innerHTML = '&#9658;';
}

//Read button values
const firstStory = document.getElementById('readFirst');
const secondStory = document.getElementById('readSecond');
const thirdStory = document.getElementById('readThird');
const fourthStory = document.getElementById('readFourth');
const fifthStory = document.getElementById('readFifth');

const close = document.getElementById('close');
const title = document.getElementById('title');
const tile = document.getElementById('tile');

//Charge tales title and the tales
firstStory.addEventListener('click', function () {
  document.querySelector('.popup').style.display = 'flex';
  title.innerHTML = titles[0];
  tile.innerHTML = tales[0];
})

secondStory.addEventListener('click', function () {
  document.querySelector('.popup').style.display = 'flex';
  title.innerHTML = titles[1];
  tile.innerHTML = tales[1];
})

thirdStory.addEventListener('click', function () {
  document.querySelector('.popup').style.display = 'flex';
  title.innerHTML = titles[2];
  tile.innerHTML = tales[2];
})

fourthStory.addEventListener('click', function () {
  document.querySelector('.popup').style.display = 'flex';
  title.innerHTML = titles[3];
  tile.innerHTML = tales[3];
})

fifthStory.addEventListener('click', function () {
  document.querySelector('.popup').style.display = 'flex';
  title.innerHTML = titles[4];
  tile.innerHTML = tales[4];
})


close.addEventListener('click', function () {
  document.querySelector('.popup').style.display = 'none';
})



