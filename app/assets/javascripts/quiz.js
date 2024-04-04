document.addEventListener("DOMContentLoaded", function() {
  let currentLevel = 1; // Initialize current level

  const questionContainers = [
    document.querySelector('.left-square.square1'),
    document.querySelector('.left-square.square2'),
    document.querySelector('.left-square.square3'),
    document.querySelector('.left-square.square4'),
    document.querySelector('.left-square.square5'),
    document.querySelector('.left-square.square6'),
    document.querySelector('.left-square.square7'),
    document.querySelector('.left-square.square8'),
    document.querySelector('.left-square.square9'),
    document.querySelector('.left-square.square10'),
    document.querySelector('.left-square.square11'),
    document.querySelector('.left-square.square12'),
    document.querySelector('.left-square.square13'),
    document.querySelector('.left-square.square14'),
    document.querySelector('.right-square.square15'),
    document.querySelector('.right-square.square16'),
    document.querySelector('.right-square.square17'),
    document.querySelector('.right-square.square18'),
    document.querySelector('.right-square.square19'),
    document.querySelector('.right-square.square20'),
    document.querySelector('.right-square.square21'),
    document.querySelector('.right-square.square22'),
    document.querySelector('.right-square.square23'),
    document.querySelector('.right-square.square24'),
    document.querySelector('.right-square.square25'),
    document.querySelector('.right-square.square26'),
    document.querySelector('.right-square.square27'),
    document.querySelector('.right-square.square28'),
    // Add more containers if needed for additional levels
  ];

  // Function to initialize questions for a given level
  function initializeQuizLevel(level, questions) {
    shuffledQuestions = shuffleArray(questions.map((question, index) => ({ ...question, originalIndex: index })));
    userAnswers = [];
    showQuestion(0);
    restartButton.style.display = 'none';
    nextLevelButton.style.display = 'none';
    resultContainer.innerHTML = ''; // Clear result container
    console.log("Quiz level " + level + " initialized");
  }

  let shuffledQuestions;
  let userAnswers = [];

  const questionContainer = document.getElementById('question-container');
  const optionsContainer = document.getElementById('options');
  const nextButton = document.getElementById('next-btn');
  const resultContainer = document.getElementById('result');
  const restartButton = document.getElementById('restart-btn');
  const nextLevelButton = document.getElementById('next-level-btn');

  // Define questions for each level
  const questionsLevel1 = [
    {
      question: "Who is the protagonist's rival in Pallet Town?",
      options: ["Blue", "Red", "Green", "Yellow"],
      answer: "Blue"
    },
    // {
    //   question: "Which Professor resides in Pallet Town?",
    //   options: ["Professor Oak", "Professor Elm", "Professor Birch", "Professor Willow"],
    //   answer: "Professor Oak"
    // },
    // {
    //   question: "In which region is Pallet Town located?",
    //   options: ["Kanto", "Johto", "Hoenn", "Sinnoh"],
    //   answer: "Kanto"
    // },
    // {
    //   question: "Which of the following Pokemon CAN'T be chosen as a starter?",
    //   options: ["Bulbasaur", "Charmander", "Rattata", "Squirtle"],
    //   answer: "Rattata"
    // },
    // {
    //   question: "Which Pokémon will your rival choose if you take Charmander?",
    //   options: ["Squirtle", "Bulbasaur", "Eevee", "Pikachu"],
    //   answer: "Squirtle"
    // }
    // MORE QUESTIONS HERE LVL 1
  ];

  const questionsLevel2 = [
    {
      question: "The old man will show you how to catch a Pokemon, which one does he catch?",
      options: ["Weedle", "Kakuna", "Ponyta", "Bellsprout"],
      answer: "Weedle"
    },
    // {
    //   question: "What item will you get at the PokeMart when entering for the first time in Viridian City?",
    //   options: ["Oak's Parcel", "5 Pokeballs", "Antidote", "Carbos"],
    //   answer: "Oak's Parcel"
    // },
    // {
    //   question: "Viridian is a shade of which color?",
    //   options: ["Green", "Red", "Purple", "Blue"],
    //   answer: "Green"
    // },
    // {
    //   question: "What badge will you receive when you beat Viridian Gym later in the game?",
    //   options: ["Earth Badge", "Soul Badge", "Boulder Badge", "Volcano Badge"],
    //   answer: "Earth Badge"
    // },
    // {
    //   question: "What is the only way you can't get out of Viridian City?",
    //   options: ["North", "East", "South", "West"],
    //   answer: "East"
    // }
    // MORE QUESTIONS HERE LVL 2
  ];

  const questionsLevel3 = [
    {
      question: "Which type of Pokemon will you never encounter in Viridian Forest?",
      options: ["Poison", "Bug", "Grass", "Electric"],
      answer: "Grass"
    },
    // {
    //   question: "What is the final form of Weedle?",
    //   options: ["Beedrill", "Butterfree", "Weepinbell", "Kakuna"],
    //   answer: "Beedrill"
    // },
    // {
    //   question: "Which of the following Pokemon are you least likely to encounter in Viridian Forest?",
    //   options: ["Weedle", "Caterpie", "Metapod", "Pikachu"],
    //   answer: "Pikachu"
    // },
    // {
    //   question: "The final trainer in Viridian Forest has one Pokemon, which one?",
    //   options: ["Pikachu", "Weedle", "Butterfree", "Raticate"],
    //   answer: "Weedle"
    // },
    // {
    //   question: "In case Weedle poisons you, which item would you use to heal your status?",
    //   options: ["Antidote", "Potion", "X Attack", "Super Potion"],
    //   answer: "Antidote"
    // }
    // Add more questions for the next level...
  ];

  const questionsLevel4 = [
    {
      question: "What is the entry price in Pokémon Dollars for the science museum in Pewter City?",
      options: ["50", "100", "It's free", "250"],
      answer: "50"
    },
    // {
    //   question: "Which HM is required to access the back part of the museum and get the Old Amber?",
    //   options: ["Cut", "Fly", "Strenght", "Surf"],
    //   answer: "Cut"
    // },
    // {
    //   question: "Later in the game you will be able to restore the Old Amber into which Pokemon?",
    //   options: ["Aerodactyl", "Mewtwo", "Moltres", "Snorlax"],
    //   answer: "Aerodactyl"
    // },
    // {
    //   question: "Pewter is a mixture of ...?",
    //   options: ["Rocks", "Metals", "Plastics", "Spices"],
    //   answer: "Metals"
    // },
    // {
    //   question: "In Pokemon FireRed and LeafGreen, which item will you receive after beating Brock and heading east?",
    //   options: ["Moon Stone", "Running Shoes", "Roller Skates", "Bicycle"],
    //   answer: "Running Shoes"
    // }
    // Add more questions for the next level...
  ];

  const questionsLevel5 = [
    {
      question: "What's the name of the mandatory trainer you have to fight in Pewter Gym?",
      options: ["Liam", "Lenny", "Leo", "Lilly"],
      answer: "Liam"
    },
    // {
    //   question: "WHich of the following moves would be super effective against Sandshrew?",
    //   options: ["Bubble", "Hyper Beam", "Dragon Rage", "Thunderbolt"],
    //   answer: "Bubble"
    // },
    // {
    //   question: "What's the first Pokemon in Brock's line-up?",
    //   options: ["Onix", "Dugtrio", "Geodude", "Sandslash"],
    //   answer: "Geodude"
    // },
    // {
    //   question: "If Onix' Rock Tomb hits, what status effect could take place?",
    //   options: ["Lower your speed", "Raise your attack", "Lower your defense", "Paralyze you"],
    //   answer: "Lower your speed"
    // },
    // {
    //   question: "In Pokemon Red and Blue, what's the TM that Brock will give you?",
    //   options: ["Rock Tomb", "Bide", "Earthquake", "Iron Tail"],
    //   answer: "Bide"
    // }
    // Add more questions for the next level...
  ];

  const questionsLevel6 = [
    {
      question: "Which Pokemon can be bought at the Pokemon center before entering Mt. Moon?",
      options: ["Goldeen", "Magikarp", "Pidgey", "Abra"],
      answer: "Magikarp"
    },
    // {
    //   question: "Which two fossils will you be able to choose from after defeating the scientist?",
    //   options: ["Dome & Helix Fossil", "Old Amber & New Amber", "Moon & Sun Fossil", "Root & Claw Fossil"],
    //   answer: "Dome & Helix Fossil"
    // },
    // {
    //   question: "The shards of stars that fall at Mt. Moon are knows as what?",
    //   options: ["Moon Stones", "Star Shards", "Water Stones", "Nuggets"],
    //   answer: "Moon Stones"
    // },
    // {
    //   question: "In the final part of the cave, you have a 100% to encounter which Pokemon?",
    //   options: ["Paras", "Koffing", "Zubat", "Geodude"],
    //   answer: "Paras"
    // },
    // {
    //   question: "Which Pokemon can you catch right before and after Mt. Moon, and can be traded against Farfetch'd?",
    //   options: ["Pidgey", "Sandshrew", "Spearow", "Pidgeotto"],
    //   answer: "Spearow"
    // }
    // Add more questions for the next level...
  ];

  const questionsLevel7 = [
    {
      question: "After beating all the trainers on Nugget Bridge, what item will you receive?",
      options: ["Nugget", "Max Revive", "5 Great Balls", "Team Rocket Membership"],
      answer: "Nugget"
    },
    // {
    //   question: "Which legendary Pokémon is said to roam Cerulean Cave?",
    //   options: ["Articuno", "Lugia", "Mewtwo", "Kabutops"],
    //   answer: "Mewtwo"
    // },
    // {
    //   question: "Your rival will use one Pokemon that doesn't have offensive moves, which one?",
    //   options: ["Abra", "Pidgeotto", "Rattata", "Eevee"],
    //   answer: "Abra"
    // },
    // {
    //   question: "How many trainers do you have to beat before facing the person who gives you the prize?",
    //   options: ["4", "5", "6", "7"],
    //   answer: "5"
    // },
    // {
    //   question: "What notorious group does the last trainer on the bridge represent?",
    //   options: ["Team Magma", "Team Aqua", "Team Rocket", "Team Galactic"],
    //   answer: "Team Rocket"
    // }
    // Add more questions for the next level...
  ];



  const questionsLevel8 = [
    {
      question: "Under what name is the north-eastern part of Cerulean City known?",
      options: ["Cerulean Old Town", "Cerulean Harbor", "Cerulean Cape", "Cerulean Cave"],
      answer: "Cerulean Cape"
    },
    // {
    //   question: "Before being able to take on the gym, you have to help a Pokemon researcher, what's his name?",
    //   options: ["Bill", "Bob", "Blaine", "Brad"],
    //   answer: "Bill"
    // },
    // {
    //   question: "Which important item will you receive after assisting the Pokemon researcher at his house?",
    //   options: ["S.S. Ticket", "A gym badge", "HM01 - Cut", "Bicycle"],
    //   answer: "S.S. Ticket"
    // },
    // {
    //   question: "In FireRed/LeafGreen, which Pokemon did the researcher accidentally turn himself into?",
    //   options: ["Kadabra", "Oddish", "Jigglypuff", "Clefairy"],
    //   answer: "Clefairy"
    // },
    // {
    //   question: "What's the address written on the mailbox in front of the little house in north-eastern Cerulean?",
    //   options: ["Sea Cottage", "Beach Condo", "Lakeside House", "Cerulean Gym"],
    //   answer: "Sea Cottage"
    // }
    // Add more questions for the next level...
  ];

  const questionsLevel9 = [
    {
      question: "What absurd price is the bike shop owner asking for a bicycle?",
      options: ["1,000,000", "100,000", "10,000", "1,000"],
      answer: "1,000,000"
    },
    // {
    //   question: "What hidden item can you find behind the house in the north-west corner of the city?",
    //   options: ["Rare Candy", "Nugget", "Ultra Ball", "Full Heal"],
    //   answer: "Rare Candy"
    // },
    // {
    //   question: "Which TM will you get from the Rocket Grunt after showing who is boss?",
    //   options: ["TM22 - Solar Beam", "TM28 - Dig", "TM05 - Roar", "TM32 - Double Team"],
    //   answer: "TM28 - Dig"
    // },
    // {
    //   question: "In the south of Cerulean city there is a lady, by which Pokemon is she accompanied?",
    //   options: ["Gloom", "Pikachu", "Slowpoke", "Goldeen"],
    //   answer: "Slowpoke"
    // },
    // {
    //   question: "Who prevents you from entering the burglarized house, before assisting Bill at Cerulean Cape?",
    //   options: ["Officer Jenny", "Nurse Joy", "Misty", "A Team Rocket Grunt"],
    //   answer: "Officer Jenny"
    // }
    // Add more questions for the next level...
  ];

  const questionsLevel10 = [
    {
      question: "Which move will be super effective against Misty's Starmie, but not against Staryu?",
      options: ["Bite", "Thundershock", "Vine Whip", "Earthquake"],
      answer: "Bite"
    },
    // {
    //   question: "What's the signature move of Misty's Pokemon?",
    //   options: ["Waterfall", "Water Pulse", "Surf", "Hydro Pump"],
    //   answer: "Water Pulse"
    // },
    // {
    //   question: "Which berry would you give your Pokemon to counter the possible side effect of Misty's signature move?",
    //   options: ["Pecha Berry", "Chesto Berry", "Rawst Berry", "Persim Berry"],
    //   answer: "Persim Berry"
    // },
    // {
    //   question: "Which starter is probably the worst pick against Misty's Pokemon?",
    //   options: ["Charmander", "Bulbasaur", "Squirtle", "They're equally good"],
    //   answer: "Charmander"
    // },
    // {
    //   question: "What move will Misty's Starmie to restore it's health?",
    //   options: ["Rest", "Recover", "Wish", "Roost"],
    //   answer: "Recover"
    // }
    // Add more questions for the next level...
  ];

  const questionsLevel11 = [
    {
      question: "What can you do at the little house on Route 5, south of Cerulean City?",
      options: ["Have your Pokemon raised", "Teach your Pokemon TM moves", "Change the names of your Pokemon", "Teleport to Pallet Town"],
      answer: "Have your Pokemon raised"
    },
    // {
    //   question: "The little girl in the house will offer you to trade Pokemon, which one?",
    //   options: ["Nidoran", "Spearow", "Onix", "Raichu"],
    //   answer: "Nidoran"
    // },
    // {
    //   question: "Which Pokemon found on this route can help you gain additional cash from trainer battles?",
    //   options: ["Bellsprout", "Pidgey", "Oddish", "Meowth"],
    //   answer: "Meowth"
    // },
    // {
    //   question: "When playing FireRed, which Pokemon can't be caught on Route 6?",
    //   options: ["Bellsprout", "Oddish", "Gyarados", "Magikarp"],
    //   answer: "Bellsprout"
    // },
    // {
    //   question: "When fishing with a Good Rod on Route 6, which Pokemon will you most likely encounter?",
    //   options: ["Gyarados", "Poliwag", "Poliwhirl", "Slowpoke"],
    //   answer: "Poliwag"
    // }
    // Add more questions for the next level...
  ];

  const questionsLevel12 = [
    {
      question: "What useful item can you get on Route 11 after catching 30 Pokemon?",
      options: ["Itemfinder", "Fame Checker", "Teachy TV", "Good Rod"],
      answer: "Itemfinder"
    },
    // {
    //   question: "What's the name of the cave between Vermilion City and Route 11?",
    //   options: ["Dugtrio's Cave", "Diglett's Cave", "Rock Tunnel", "Vermilion Cave"],
    //   answer: "Diglett's Cave"
    // },
    // {
    //   question: "What seems to be the Pokemon of choice for the two Engineer trainers on Route 11?",
    //   options: ["Magnemite", "Growlithe", "Ekans", "Arbok"],
    //   answer: "Magnemite"
    // },
    // {
    //   question: "On Route 11, you will have the chance to catch a Psychic-type Pokemon, which one?",
    //   options: ["Drowzee", "Alakazam", "Mewtwo", "Espeon"],
    //   answer: "Drowzee"
    // },
    // {
    //   question: "Which Pokemon are exclusive to either FireRed or LeafGreen?",
    //   options: ["Sandshrew & Ekans", "Drowzee & Hypno", "Spearow & Pidgey", "Krabby & Horsea"],
    //   answer: "Sandshrew & Ekans"
    // }
    // Add more questions for the next level...
  ];

  const questionsLevel13 = [
    {
      question: "In one of the cabins on the S.S. Anne, what service does a lady provide for trainers?",
      options: ["Teach a unique move", "Heal your Pokemon", "Sell rare items", "Trade rare Pokemon"],
      answer: "Heal your Pokemon"
    },
    // {
    //   question: "After helping the captain, what will he reward you with?",
    //   options: ["HM01 - Cut", "HM07 - Waterfall", "HM05 - Flash", "HM02 - Fly"],
    //   answer: "HM01 - Cut"
    // },
    // {
    //   question: "What is the issue the captain seems to be having?",
    //   options: ["He is feeling sick", "He is being robbed", "The ship is broken", "He lost one of his Pokemon"],
    //   answer: "He is feeling sick"
    // },
    // {
    //   question: "Which Pokemon will your rival start off with on the S.S. Anne?",
    //   options: ["Pidgeotto", "His Starter", "Machop", "Kadabra"],
    //   answer: "Pidgeotto"
    // },
    // {
    //   question: "Of all types of trainers on the ship, which one will reward you with the most cash?",
    //   options: ["Youngster", "Lass", "Sailor", "Gentleman"],
    //   answer: "Gentleman"
    // }
    // Add more questions for the next level...
  ];

  const questionsLevel14 = [
    {
      question: "Which Pokemon is helping the old man flattening the construction site?",
      options: ["Onix", "Snorlax", "Graveler", "Machop"],
      answer: "Machop"
    },
    // {
    //   question: "What item will the Pokemon Fan Club Chairman give you after listening to his story?",
    //   options: ["Bike Voucher", "Club Membership", "HM05 - Flash", "A Master Ball"],
    //   answer: "Bike Voucher"
    // },
    // {
    //   question: "In Pokemon Red and Blue, what's the name of the Farfetch'd you can get by trade?",
    //   options: ["Dux", "Flux", "Trux", "Ch'ding"],
    //   answer: "Dux"
    // },
    // {
    //   question: "What color could you classify Vermilion as?",
    //   options: ["Red Orange", "Blue Banana", "Green Grape", "Yellow Apple"],
    //   answer: "Red Orange"
    // },
    // {
    //   question: "Which move does at least one of your Pokemon need to have before challenging Vermilion's Gym Leader?",
    //   options: ["Cut", "Slash", "Scratch", "Flash"],
    //   answer: "Cut"
    // }
    // Add more questions for the next level...
  ];

  const questionsLevel15 = [
    {
      question: "What military title does the Gym Leader Surge have?",
      options: ["Lieutenant", "Major", "Colonel", "Sergeant"],
      answer: "Lieutenant"
    },
    // {
    //   question: "When getting the first switch correct, the second one will be directly next to it, but on which side?",
    //   options: ["Left", "Above", "Right", "Random"],
    //   answer: "Random"
    // },
    // {
    //   question: "Before fighting search, what do you have to search through to find the switches?",
    //   options: ["Trash cans", "Bookshelves", "Water puddles", "Stone pillars"],
    //   answer: "Trash cans"
    // },
    // {
    //   question: "If you beat every single trainer in Vermilion Gym, which of the following will you have encountered?",
    //   options: ["4x Pikachu", "2x Raichu", "6x Voltorb", "8x Magnemite"],
    //   answer: "4x Pikachu"
    // },
    // {
    //   question: "With what move could you probably sweep the entire Vermilion Gym?",
    //   options: ["Dig", "Thundershock", "Wing Attack", "Water Gun"],
    //   answer: "Dig"
    // }
    // Add more questions for the next level...
  ];

  const questionsLevel16 = [
    {
      question: "What move can you use to lighten up the Rock Tunnel?",
      options: ["Solar Beam", "Flash", "Light Screen", "Flamethrower"],
      answer: "Flash"
    },
    // {
    //   question: "If you get completely lost in Rock Tunnel, what item can you use to get out?",
    //   options: ["Escape Rope", "Super Repel", "Max Revive", "Calcium"],
    //   answer: "Escape Rope"
    // },
    // {
    //   question: "Which are the two Fighting-type Pokemon you can encounter in the wild in Rock Tunnel?",
    //   options: ["Machop & Machoke", "Mankey & Machop", "Mankey & Geodude", "Mankey & Primeape"],
    //   answer: "Mankey & Machop"
    // },
    // {
    //   question: "Hiker Lenny has 4 Pokemon, 3 Geodude and a ...?",
    //   options: ["Machop", "Graveler", "Golem", "Machamp"],
    //   answer: "Machop"
    // },
    // {
    //   question: "What item does Onix need to evolve into Steelix?",
    //   options: ["Metal Coat", "Steel Armor", "Iron Shell", "Steel Stone"],
    //   answer: "Metal Coat"
    // }
    // Add more questions for the next level...
  ];

  const questionsLevel17 = [
    {
      question: "Which Pokémon can be commonly found roaming around inside the Power Plant?",
      options: ["Voltorb & Magnemite", "Electabuzz & Pikachu", "Electrode & Raichu", "Rattata & Raticate"],
      answer: "Voltorb & Magnemite"
    },
    /*{
      question: "What is the primary source of energy generated at the Power Plant?",
      options: ["Electricity", "Geothermal Energy", "Nuclear Energy", "Kinetic Energy"],
      answer: "Electricity"
    },
    {
      question: "Which of the legendary birds in found inside the Power Plant?",
      options: ["Zapdos", "Articuno", "Moltres", "None of them"],
      answer: "Zapdos"
    },
    {
      question: "One of the TM's you find here is TM17 (Protect), what's the other one?",
      options: ["TM25 (Thunder)", "TM14 (Blizzard)", "TM36 (Sludge Bomb)", "TM19 (Giga Grain)"],
      answer: "TM25 (Thunder)"
    },*/
    {
      question: "On what type of Pokemon will electric moves have no effect on?",
      options: ["Ground", "Rock", "Ghost", "Flying"],
      answer: "Ground"
    }
    // Add more questions for the next level...
  ];

  const questionsLevel18 = [
    {
      question: "What are the names of the twins you can battle on Route 8?",
      options: ["Eli & Anne", "Anne & Marie", "Lisa & Marie", "Megan & Marie "],
      answer: "Eli & Anne"
    },
    /*{
      question: "In Pokemon FireRed you will be able to catch Growlithe, on LeafGreen you can instead catch ...?",
      options: ["Vulpix", "Nidorino", "Doduo", "Flareon"],
      answer: "Vulpix"
    },
    {
      question: "Why won't the guard let you through when you try to proceed east on Route 8?",
      options: ["The guard is thirsty and needs a drink", "The guard is on break and refuses to move", "You don't have enough gym badges", "There is constrution work going on"],
      answer: "The guard is thirsty and needs a drink"
    },
    {
      question: "The twin trainer will choose Jigglypuff and Clefairy as their Pokemon, what do they have in common?",
      options: ["Both learn Metronome", "They can only be female", "They evolve with Moon Stones", "Both are Dragon-type"],
      answer: "They evolve with Moon Stones"
    },
    {
      question: "Which type of Pokemon would you pick to easily destroy the two bikers riding around on Route 8?",
      options: ["Psychic", "Bug", "Poison", "Grass"],
      answer: "Psychic"
    }*/
    // Add more questions for the next level...
  ];

  const questionsLevel19 = [
    {
      question: "What's the most expensive TM you can buy at the Celadon Department Store?",
      options: ["Hyper Beam", "Roar", "Attract", "Secret Power"],
      answer: "Hyper Beam"
    },
    // {
    //   question: "What Pokemon can you get from the top floor in the Celadon Mansion?",
    //   options: ["Porygon", "Eevee", "Pikachu", "Charmander"],
    //   answer: "Eevee"
    // },
    // {
    //   question: "What do you need to get in order to play slots in the Game Corner?",
    //   options: ["A Coin Case", "A Slot Card", "Erika's Badge", "At least 10 Pokemon"],
    //   answer: "A Coin Case"
    // },
    // {
    //   question: "What Pokemon is blocking the road to the west of Celadon?",
    //   options: ["Snorlax", "Onix", "Mewtwo", "Sudowoodo"],
    //   answer: "Snorlax"
    // },
    // {
    //   question: "In Pokemon LeafGreen you can buy Porygon at the Game Corner for 6500 coins, in FireRed it costs how much?",
    //   options: ["9999 coins", "The same amount", "4500 coins", "6250 coins"],
    //   answer: "9999 coins"
    // }
    // Add more questions for the next level...
  ];

  const questionsLevel20 = [
    {
      question: "What's the only status effect you don't have to fear in Erika's gym?",
      options: ["Burn", "Sleep", "Poison", "Paralysis"],
      answer: "Burn"
    },
    // {
    //   question: "What's the name of the Pokemon used by Erika that has no prior evolutions?",
    //   options: ["Tangela", "Victreebel", "Vileplume", "Bulbasaur"],
    //   answer: "Tangela"
    // },
    // {
    //   question: "Which of the following Pokemon will you only encounter once in Erika's gym?",
    //   options: ["Ivysaur & Bellsprout", "Exeggcute & Bulbasaur", "Oddish & Weepinbell", "Gloom & Vileplume"],
    //   answer: "Exeggcute & Bulbasaur"
    // },
    // {
    //   question: "Which starter would make sure you have no trouble beating Erika's gym?",
    //   options: ["Pikachu", "Charmander", "Squirtle", "Bulbasaur"],
    //   answer: "Charmander"
    // },
    // {
    //   question: "When using Sunny Day against Erika, what effects will occur?",
    //   options: ["Solar Beam will be instant", "It weakens water moves", "It powers up fire moves", "All of them"],
    //   answer: "All of them"
    // }
    // Add more questions for the next level...
  ];

  const questionsLevel21 = [
    {
      question: "What military title does the Gym Leader Surge have?",
      options: ["Lieutenant", "Major", "Colonel", "Sergeant"],
      answer: "Lieutenant"
    },
    // {
    //   question: "When getting the first switch correct, the second one will be directly next to it, but on which side?",
    //   options: ["Left", "Above", "Right", "Random"],
    //   answer: "Random"
    // },
    // {
    //   question: "Before fighting search, what do you have to search through to find the switches?",
    //   options: ["Trash cans", "Bookshelves", "Water puddles", "Stone pillars"],
    //   answer: "Trash cans"
    // },
    // {
    //   question: "If you beat every single trainer in Vermilion Gym, which of the following will you have encountered?",
    //   options: ["4x Pikachu", "2x Raichu", "6x Voltorb", "8x Magnemite"],
    //   answer: "4x Pikachu"
    // },
    // {
    //   question: "With what move could you probably sweep the entire Vermilion Gym?",
    //   options: ["Dig", "Thundershock", "Wing Attack", "Water Gun"],
    //   answer: "Dig"
    // }
    // Add more questions for the next level...
  ];

  const questionsLevel22 = [
    {
      question: "What military title does the Gym Leader Surge have?",
      options: ["Lieutenant", "Major", "Colonel", "Sergeant"],
      answer: "Lieutenant"
    },
    // {
    //   question: "When getting the first switch correct, the second one will be directly next to it, but on which side?",
    //   options: ["Left", "Above", "Right", "Random"],
    //   answer: "Random"
    // },
    // {
    //   question: "Before fighting search, what do you have to search through to find the switches?",
    //   options: ["Trash cans", "Bookshelves", "Water puddles", "Stone pillars"],
    //   answer: "Trash cans"
    // },
    // {
    //   question: "If you beat every single trainer in Vermilion Gym, which of the following will you have encountered?",
    //   options: ["4x Pikachu", "2x Raichu", "6x Voltorb", "8x Magnemite"],
    //   answer: "4x Pikachu"
    // },
    // {
    //   question: "With what move could you probably sweep the entire Vermilion Gym?",
    //   options: ["Dig", "Thundershock", "Wing Attack", "Water Gun"],
    //   answer: "Dig"
    // }
    // Add more questions for the next level...
  ];

  const questionsLevel23 = [
    {
      question: "What military title does the Gym Leader Surge have?",
      options: ["Lieutenant", "Major", "Colonel", "Sergeant"],
      answer: "Lieutenant"
    },

    // {
    //   question: "With what move could you probably sweep the entire Vermilion Gym?",
    //   options: ["Dig", "Thundershock", "Wing Attack", "Water Gun"],
    //   answer: "Dig"
    // }
    // Add more questions for the next level...
  ];

  const questionsLevel24 = [
    {
      question: "What military title does the Gym Leader Surge have?",
      options: ["Lieutenant", "Major", "Colonel", "Sergeant"],
      answer: "Lieutenant"
    }

    // Add more questions for the next level...
  ];

  const questionsLevel25 = [
    {
      question: "What military title does the Gym Leader Surge have?",
      options: ["Lieutenant", "Major", "Colonel", "Sergeant"],
      answer: "Lieutenant"
    }

    // Add more questions for the next level...
  ];

  const questionsLevel26 = [
    {
      question: "What military title does the Gym Leader Surge have?",
      options: ["Lieutenant", "Major", "Colonel", "Sergeant"],
      answer: "Lieutenant"
    }

    // Add more questions for the next level...
  ];

  const questionsLevel27 = [
    {
      question: "What military title does the Gym Leader Surge have?",
      options: ["Lieutenant", "Major", "Colonel", "Sergeant"],
      answer: "Lieutenant"
    }

    // Add more questions for the next level...
  ];

  const questionsLevel28 = [
    {
      question: "What military title does the Gym Leader Surge have?",
      options: ["Lieutenant", "Major", "Colonel", "Sergeant"],
      answer: "Lieutenant"
    }

    // Add more questions for the next level...
  ];

  const questionsLevel29 = [
    {
      question: "What military title does the Gym Leader Surge have?",
      options: ["Lieutenant", "Major", "Colonel", "Sergeant"],
      answer: "Lieutenant"
    }

    // Add more questions for the next level...
  ];

  const questionsLevel30 = [
    {
      question: "What military title does the Gym Leader Surge have?",
      options: ["Lieutenant", "Major", "Colonel", "Sergeant"],
      answer: "Lieutenant"
    }

    // Add more questions for the next level...
  ];

  const questionsLevel31 = [
    {
      question: "What military title does the Gym Leader Surge have?",
      options: ["Lieutenant", "Major", "Colonel", "Sergeant"],
      answer: "Lieutenant"
    }

    // Add more questions for the next level...
  ];

  const questionsLevel32 = [
    {
      question: "What military title does the Gym Leader Surge have?",
      options: ["Lieutenant", "Major", "Colonel", "Sergeant"],
      answer: "Lieutenant"
    }

    // Add more questions for the next level...
  ];

  const questionsLevel33 = [
    {
      question: "What military title does the Gym Leader Surge have?",
      options: ["Lieutenant", "Major", "Colonel", "Sergeant"],
      answer: "Lieutenant"
    }

    // Add more questions for the next level...
  ];

  const questionsLevel34 = [
    {
      question: "What military title does the Gym Leader Surge have?",
      options: ["Lieutenant", "Major", "Colonel", "Sergeant"],
      answer: "Lieutenant"
    }

    // Add more questions for the next level...
  ];

  const questionsLevel35 = [
    {
      question: "What military title does the Gym Leader Surge have?",
      options: ["Lieutenant", "Major", "Colonel", "Sergeant"],
      answer: "Lieutenant"
    }

    // Add more questions for the next level...
  ];

  const questionsLevel36 = [
    {
      question: "What military title does the Gym Leader Surge have?",
      options: ["Lieutenant", "Major", "Colonel", "Sergeant"],
      answer: "Lieutenant"
    }

    // Add more questions for the next level...
  ];

  const questionsLevel37 = [
    {
      question: "What military title does the Gym Leader Surge have?",
      options: ["Lieutenant", "Major", "Colonel", "Sergeant"],
      answer: "Lieutenant"
    }

    // Add more questions for the next level...
  ];

  const questionsLevel38 = [
    {
      question: "What military title does the Gym Leader Surge have?",
      options: ["Lieutenant", "Major", "Colonel", "Sergeant"],
      answer: "Lieutenant"
    }

    // Add more questions for the next level...
  ];

  const questionsLevel39 = [
    {
      question: "What military title does the Gym Leader Surge have?",
      options: ["Lieutenant", "Major", "Colonel", "Sergeant"],
      answer: "Lieutenant"
    }

    // Add more questions for the next level...
  ];

  const questionsLevel40 = [
    {
      question: "What military title does the Gym Leader Surge have?",
      options: ["Lieutenant", "Major", "Colonel", "Sergeant"],
      answer: "Lieutenant"
    }

    // Add more questions for the next level...
  ];

  // Function to shuffle an array
  function shuffleArray(array) {
    const shuffledArray = array.map(item => ({ ...item })); // Create a shallow copy of the array

    // Shuffle the questions
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    // Shuffle options within each question to maintain association
    shuffledArray.forEach(question => {
      for (let i = question.options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [question.options[i], question.options[j]] = [question.options[j], question.options[i]];
      }
    });

    return shuffledArray;
  }

  // Function to display a question
  function showQuestion(index) {
    if (index >= shuffledQuestions.length) {
      showResult();
      return;
    }

    const currentQuestion = shuffledQuestions[index];
    questionContainer.innerHTML = `<h2 id="question">${currentQuestion.question}</h2>`;
    optionsContainer.innerHTML = '';

    currentQuestion.options.forEach(option => {
      const button = document.createElement('button');
      button.innerText = option;
      button.classList.add('option-btn');
      button.addEventListener('click', () => selectAnswer(option, index));
      optionsContainer.appendChild(button);
    });
  }

  // Function to handle user's answer selection
  function selectAnswer(answer, index) {
    const clickedButton = event.target;
    const buttons = optionsContainer.querySelectorAll('.option-btn');
    userAnswers[index] = answer;

    buttons.forEach(button => {
      button.disabled = true;
    });

    if (answer === shuffledQuestions[index].answer) {
      clickedButton.classList.add('blink-green');
    } else {
      clickedButton.classList.add('blink-red');
    }

    setTimeout(() => {
      showQuestion(index + 1);
    }, 1500);
  }

  // Function to display quiz result
  function showResult() {
    questionContainer.style.display = 'none';
    optionsContainer.style.display = 'none';
    nextButton.style.display = 'none';
    resultContainer.style.display = "block";
    const correctCount = userAnswers.filter((answer, index) => answer === shuffledQuestions[index].answer).length;

    if (currentLevel === 4 || currentLevel === 9 || currentLevel === 14 || currentLevel === 19 || currentLevel === 24 || currentLevel === 29 || currentLevel === 34 || currentLevel === 39) {
        if (correctCount === shuffledQuestions.length) {
            // All questions are correct
            let gymLeaderImage;
            let gymLeaderText;
            let gymLeaderName;
            if (currentLevel === 4) {
                gymLeaderImage = 'brock.png';
                gymLeaderText = "You're about to face Brock, the Rock-Solid Pokémon Trainer!";
                gymLeaderName = "Brock";
            } else if (currentLevel === 9) {
                gymLeaderImage = 'misty.png';
                gymLeaderText = "Prepare yourself for Misty, the Water-Type Pokémon Master!";
                gymLeaderName = "Misty";
            } else if (currentLevel === 14) {
                gymLeaderImage = 'surge.png';
                gymLeaderText = "Get charged up to battle Surge, the Electric-Type Gym Leader!";
                gymLeaderName = "Surge";
            } else if (currentLevel === 19) {
                gymLeaderImage = 'erika.png';
                gymLeaderText = "Erika, the Graceful Grass-Type Trainer, awaits your challenge!";
                gymLeaderName = "Erika";
            } else if (currentLevel === 24) {
                gymLeaderImage = 'sabrina.png';
                gymLeaderText = "Prepare to face Sabrina, the Psychic-Type Gym Leader with unmatched psychic powers!";
                gymLeaderName = "Sabrina";
            } else if (currentLevel === 29) {
                gymLeaderImage = 'koga.png';
                gymLeaderText = "Koga, the Toxic Ninja Master, is ready to put your skills to the test!";
                gymLeaderName = "Koga";
            } else if (currentLevel === 34) {
                gymLeaderImage = 'blaine.png';
                gymLeaderText = "Feel the heat as you face Blaine, the Hot-Headed Fire-Type Gym Leader!";
                gymLeaderName = "Blaine";
            } else if (currentLevel === 39) {
                gymLeaderImage = 'giovanni.png';
                gymLeaderText = "Giovanni, the Shady Leader of Team Rocket, stands between you and victory!";
                gymLeaderName = "Giovanni";
            }
            resultContainer.innerHTML = `<h2>Awesome, you got all questions correct!</h2>
              <img src="./assets/${gymLeaderImage}" alt="Gym Leader" style="width: 150px; height: auto;" />
              <p>${gymLeaderText}</p>`;
            nextLevelButton.style.display = 'block';
            nextLevelButton.innerText = `Challenge ${gymLeaderName}!`;
        } else {
            // Some questions are incorrect
            resultContainer.innerHTML = `<h2>Oh, you only got ${correctCount} out of ${shuffledQuestions.length} correct.</h2><p>Press restart to try again!</p>`;
            restartButton.style.display = 'block';
            nextLevelButton.innerText = "Next Level";
        }
    } else if (currentLevel === 5 || currentLevel === 10 || currentLevel === 15 || currentLevel === 20 || currentLevel === 25 || currentLevel === 30 || currentLevel === 35 || currentLevel === 40) {
        if (correctCount === shuffledQuestions.length) {
            // All questions are correct
            let gymLeaderBeatenImage;
            let gymLeaderText2;
            if (currentLevel === 5) {
                gymLeaderBeatenImage = 'boulder.png';
                gymLeaderText2 = "You've beaten Brock! <br>Congratulations!";
            } else if (currentLevel === 10) {
                gymLeaderBeatenImage = 'cascade.png';
                gymLeaderText2 = "You've beaten Misty! <br>Well done!";
            } else if (currentLevel === 15) {
                gymLeaderBeatenImage = 'thunder.png';
                gymLeaderText2 = "You've beaten Surge! <br>Great job!";
            } else if (currentLevel === 20) {
                gymLeaderBeatenImage = 'rainbow.png';
                gymLeaderText2 = "You've beaten Erika! <br>Amazing!";
            } else if (currentLevel === 25) {
                gymLeaderBeatenImage = 'marsh.png';
                gymLeaderText2 = "You've beaten Sabrina! <br>Impressive!";
            } else if (currentLevel === 30) {
                gymLeaderBeatenImage = 'soul.png';
                gymLeaderText2 = "You've beaten Koga! <br>Outstanding!";
            } else if (currentLevel === 35) {
                gymLeaderBeatenImage = 'fire.png';
                gymLeaderText2 = "You've beaten Blaine! <br>Excellent!";
            } else if (currentLevel === 40) {
              gymLeaderBeatenImage = 'earth.png';
              gymLeaderText2 = "You've beaten Giovanni! <br>You have beaten all gym leaders!";
              resultContainer.innerHTML = `<h2>Congratulations!</h2><p>You answered all questions correctly!</p>`;
              setTimeout(() => {
                  // Fade out the previous message
                  resultContainer.style.transition = 'opacity 1s';
                  resultContainer.style.opacity = '0';

                  // After 1 second (1000 milliseconds), display the Elite 4 button and text
                  setTimeout(() => {
                      resultContainer.innerHTML = `<p>Proceed to the Elite 4 now!</p>`;
                      proceedToEliteButton.style.display = 'block';
                      // Fade in the Elite 4 button and text
                      resultContainer.style.opacity = '1';
                  }, 1000);
              }, 2000); // Wait for 2 seconds (2000 milliseconds) before fading out the message
          }
            resultContainer.innerHTML = `<h2>Congratulations!</h2>
              <img src="./assets/${gymLeaderBeatenImage}" alt="Gym Leader Beaten" style="width: 150px; height: auto;" />
              <p>${gymLeaderText2}</p>`;
            nextLevelButton.style.display = 'block';
            nextLevelButton.innerText = 'Next Level';
        } else {
            // Some questions are incorrect
            resultContainer.innerHTML = `<h2>Oh, you only got ${correctCount} out of ${shuffledQuestions.length} correct.</h2><p>Press restart to try again!</p>`;
            restartButton.style.display = 'block';
            nextLevelButton.innerText = "Next Level";
        }
    } else {
        if (correctCount === shuffledQuestions.length) {
            // All questions are correct
            resultContainer.innerHTML = `<h2>Awesome, you got all questions correct!</h2><p>You may now proceed to the next level!</p>`;
            nextLevelButton.style.display = 'block';
            nextLevelButton.innerText = 'Next Level';
        } else {
            // Some questions are incorrect
            resultContainer.innerHTML = `<h2>Oh, you only got ${correctCount} out of ${shuffledQuestions.length} correct.</h2><p>Press restart to try again!</p>`;
            restartButton.style.display = 'block';
            nextLevelButton.innerText = "Next Level";
        }
    }
      // Check if the current level is 6
      if (currentLevel === 5 && correctCount === shuffledQuestions.length) {
        // Merge divs square1, square2, and square3 into one div
        const mergedDiv = document.createElement('div');
        mergedDiv.classList.add('left-square', 'merged', 'background-transition'); // Added 'background-transition' class
        // Set height of merged div to accommodate the height of three divs
        const squareHeight = document.querySelector('.left-square.square1').clientHeight;
        mergedDiv.style.height = '150px';
        const square1Content = document.querySelector('.left-square.square1').innerHTML;
        const square2Content = document.querySelector('.left-square.square2').innerHTML;
        const square3Content = document.querySelector('.left-square.square3').innerHTML;


        // Replace square1 with the merged div
        const square1 = document.querySelector('.left-square.square1');
        square1.parentNode.insertBefore(mergedDiv, square1);
        square1.parentNode.removeChild(square1);

        // Remove square2 and square3
        const square2 = document.querySelector('.left-square.square2');
        square2.parentNode.removeChild(square2);
        const square3 = document.querySelector('.left-square.square3');
        square3.parentNode.removeChild(square3);

        // Empty square4 and square5
        const square4 = document.querySelector('.left-square.square4');
        square4.classList.remove('pewter');
        square4.innerHTML = '';
        square4.style.backgroundColor = '';
        const square5 = document.querySelector('.left-square.square5');
        square5.innerHTML = '';
        square5.style.backgroundColor = '';

        // Gradually reveal the background image
        setTimeout(() => {
            mergedDiv.classList.add('reveal-background');
        }, 200); // Adjust the delay as needed
    }

  if (currentLevel === 10 && correctCount === shuffledQuestions.length) {
    // Merge divs square1, square2, and square3 into one div
    const mergedDiv = document.createElement('div');
    mergedDiv.classList.add('left-square', 'merged2', 'background-transition');
    // Set height of merged div to accommodate the height of three divs
    const squareHeight = document.querySelector('.left-square.square4').clientHeight;
    mergedDiv.style.height = '150px';
    const square4Content = document.querySelector('.left-square.square4').innerHTML;
    const square5Content = document.querySelector('.left-square.square5').innerHTML;
    const square6Content = document.querySelector('.left-square.square6').innerHTML;


    // Replace square4 with the merged div
    const square4 = document.querySelector('.left-square.square4');
    square4.parentNode.insertBefore(mergedDiv, square4);
    square4.parentNode.removeChild(square4);

    // Remove square5 and square6
    const square5 = document.querySelector('.left-square.square5');
    square5.parentNode.removeChild(square5);
    const square6 = document.querySelector('.left-square.square6');
    square6.parentNode.removeChild(square6);

    // Empty square4 and square5
    const square7 = document.querySelector('.left-square.square7');
    square7.classList.remove('cerulean');
    square7.innerHTML = '';
    square7.style.backgroundColor = '';
    const square8 = document.querySelector('.left-square.square8');
    square8.innerHTML = '';
    square8.style.backgroundColor = '';

    setTimeout(() => {
      mergedDiv.classList.add('reveal-background2');
  }, 200); // Adjust the delay as needed
}

  if (currentLevel === 15 && correctCount === shuffledQuestions.length) {
    // Merge divs square1, square2, and square3 into one div
    const mergedDiv = document.createElement('div');
    mergedDiv.classList.add('left-square', 'merged3', 'background-transition');
    // Set height of merged div to accommodate the height of three divs
    const squareHeight = document.querySelector('.left-square.square7').clientHeight;
    mergedDiv.style.height = '150px';
    const square7Content = document.querySelector('.left-square.square7').innerHTML;
    const square8Content = document.querySelector('.left-square.square8').innerHTML;
    const square9Content = document.querySelector('.left-square.square9').innerHTML;

    // Replace square4 with the merged div
    const square7 = document.querySelector('.left-square.square7');
    square7.parentNode.insertBefore(mergedDiv, square7);
    square7.parentNode.removeChild(square7);

    // Remove square5 and square6
    const square8 = document.querySelector('.left-square.square8');
    square8.parentNode.removeChild(square8);
    const square9 = document.querySelector('.left-square.square9');
    square9.parentNode.removeChild(square9);

    // Empty square4 and square5
    const square10 = document.querySelector('.left-square.square10');
    square10.classList.remove('vermilion');
    square10.innerHTML = '';
    square10.style.backgroundColor = '';
    const square11 = document.querySelector('.left-square.square11');
    square11.innerHTML = '';
    square11.style.backgroundColor = '';

    setTimeout(() => {
      mergedDiv.classList.add('reveal-background3');
  }, 200); // Adjust the delay as needed

  }

  if (currentLevel === 20 && correctCount === shuffledQuestions.length) {
    // Merge divs square1, square2, and square3 into one div
    const mergedDiv = document.createElement('div');
    mergedDiv.classList.add('left-square', 'merged4', 'background-transition');

    const squareHeight = document.querySelector('.left-square.square10').clientHeight;
    mergedDiv.style.height = '150px';
    const square7Content = document.querySelector('.left-square.square10').innerHTML;
    const square8Content = document.querySelector('.left-square.square11').innerHTML;
    const square9Content = document.querySelector('.left-square.square12').innerHTML;

    const square10 = document.querySelector('.left-square.square10');
    square10.parentNode.insertBefore(mergedDiv, square10);
    square10.parentNode.removeChild(square10);

    // Remove square11 and square12 and 13
    const square11 = document.querySelector('.left-square.square11');
    square11.parentNode.removeChild(square11);
    const square12 = document.querySelector('.left-square.square12');
    square12.parentNode.removeChild(square12);
    const square13 = document.querySelector('.left-square.square13');
    square13.parentNode.removeChild(square13);
    const square14 = document.querySelector('.left-square.square14');
    square14.parentNode.removeChild(square14);

    setTimeout(() => {
      mergedDiv.classList.add('reveal-background4');
  }, 200); // Adjust the delay as needed
  }

  if (currentLevel === 25 && correctCount === shuffledQuestions.length) {
    // Merge divs square1, square2, and square3 into one div
    const mergedDiv = document.createElement('div');
    mergedDiv.classList.add('right-square', 'merged5', 'background-transition');

    const squareHeight = document.querySelector('.right-square.square15').clientHeight;
    mergedDiv.style.height = '150px';
    const square15Content = document.querySelector('.right-square.square15').innerHTML;
    const square16Content = document.querySelector('.right-square.square16').innerHTML;
    const square17Content = document.querySelector('.right-square.square17').innerHTML;

    const square15 = document.querySelector('.right-square.square15');
    square15.parentNode.insertBefore(mergedDiv, square15);
    square15.parentNode.removeChild(square15);

    // Remove square5 and square6
    const square16 = document.querySelector('.right-square.square16');
    square16.parentNode.removeChild(square16);
    const square17 = document.querySelector('.right-square.square17');
    square17.parentNode.removeChild(square17);

    // Empty square4 and square5
    const square18 = document.querySelector('.right-square.square18');
    square18.classList.remove('saffron');
    square18.innerHTML = '';
    square18.style.backgroundColor = '';
    const square19 = document.querySelector('.right-square.square19');
    square19.innerHTML = '';
    square19.style.backgroundColor = '';

    setTimeout(() => {
      mergedDiv.classList.add('reveal-background5');
  }, 200); // Adjust the delay as needed
  }

  if (currentLevel === 30 && correctCount === shuffledQuestions.length) {
    // Merge divs square1, square2, and square3 into one div
    const mergedDiv = document.createElement('div');
    mergedDiv.classList.add('right-square', 'merged6', 'background-transition');

    const squareHeight = document.querySelector('.right-square.square18').clientHeight;
    mergedDiv.style.height = '150px';
    const square18Content = document.querySelector('.right-square.square18').innerHTML;
    const square19Content = document.querySelector('.right-square.square19').innerHTML;
    const square20Content = document.querySelector('.right-square.square20').innerHTML;

    const square18 = document.querySelector('.right-square.square18');
    square18.parentNode.insertBefore(mergedDiv, square18);
    square18.parentNode.removeChild(square18);

    // Remove square5 and square6
    const square19 = document.querySelector('.right-square.square19');
    square19.parentNode.removeChild(square19);
    const square20 = document.querySelector('.right-square.square20');
    square20.parentNode.removeChild(square20);

    // Empty square4 and square5
    const square21 = document.querySelector('.right-square.square21');
    square21.classList.remove('fuchsia');
    square21.innerHTML = '';
    square21.style.backgroundColor = '';
    const square22 = document.querySelector('.right-square.square22');
    square22.innerHTML = '';
    square22.style.backgroundColor = '';

    setTimeout(() => {
      mergedDiv.classList.add('reveal-background6');
  }, 200); // Adjust the delay as needed
  }

  if (currentLevel === 35 && correctCount === shuffledQuestions.length) {
    // Merge divs square1, square2, and square3 into one div
    const mergedDiv = document.createElement('div');
    mergedDiv.classList.add('right-square', 'merged7', 'background-transition');

    const squareHeight = document.querySelector('.right-square.square21').clientHeight;
    mergedDiv.style.height = '150px';
    const square21Content = document.querySelector('.right-square.square21').innerHTML;
    const square22Content = document.querySelector('.right-square.square22').innerHTML;
    const square23Content = document.querySelector('.right-square.square23').innerHTML;

    const square21 = document.querySelector('.right-square.square21');
    square21.parentNode.insertBefore(mergedDiv, square21);
    square21.parentNode.removeChild(square21);

    // Remove square5 and square6
    const square22 = document.querySelector('.right-square.square22');
    square22.parentNode.removeChild(square22);
    const square23 = document.querySelector('.right-square.square23');
    square23.parentNode.removeChild(square23);

    // Empty square4 and square5
    const square24 = document.querySelector('.right-square.square24');
    square24.classList.remove('cinnabar');
    square24.innerHTML = '';
    square24.style.backgroundColor = '';
    const square25 = document.querySelector('.right-square.square25');
    square25.innerHTML = '';
    square25.style.backgroundColor = '';

    setTimeout(() => {
      mergedDiv.classList.add('reveal-background7');
  }, 200); // Adjust the delay as needed
  }

  if (currentLevel === 40 && correctCount === shuffledQuestions.length) {

        nextLevelButton.style.display = 'none';

    // Merge divs square1, square2, and square3 into one div
    const mergedDiv = document.createElement('div');
    mergedDiv.classList.add('right-square', 'merged8', 'background-transition');

    const squareHeight = document.querySelector('.right-square.square24').clientHeight;
    mergedDiv.style.height = '150px';
    const square24Content = document.querySelector('.right-square.square24').innerHTML;
    const square25Content = document.querySelector('.right-square.square25').innerHTML;
    const square26Content = document.querySelector('.right-square.square26').innerHTML;

    const square24 = document.querySelector('.right-square.square24');
    square24.parentNode.insertBefore(mergedDiv, square24);
    square24.parentNode.removeChild(square24);

    setTimeout(() => {
      mergedDiv.classList.add('reveal-background8');
  }, 200); // Adjust the delay as needed

    // Remove square11 and square12 and 13
    const square25 = document.querySelector('.right-square.square25');
    square25.parentNode.removeChild(square25);
    const square26 = document.querySelector('.right-square.square26');
    square26.parentNode.removeChild(square26);
    const square27 = document.querySelector('.right-square.square27');
    square27.parentNode.removeChild(square27);
    const square28 = document.querySelector('.right-square.square28');
    square28.parentNode.removeChild(square28);
    const bottomDiv = document.querySelector('.bottom');
    const finalHeight = 400; // Final height you want to achieve

    function expandBottomDiv() {
        let height = bottomDiv.clientHeight;
        const interval = setInterval(function() {
            height += 10; // Increment height gradually
            bottomDiv.style.height = height + 'px';
            if (height >= finalHeight) {
                clearInterval(interval); // Stop the interval when final height is reached
            }
        }, 100); // Adjust the interval timing as needed
    }

    expandBottomDiv(); // Call the function to expand the bottom div
}


  }
  // Initialize Level 1 quiz when the page loads
  initializeQuizLevel(1, questionsLevel1);

  // Event listener for the restart button
  restartButton.addEventListener('click', function() {
    location.reload(); // Reload the page to restart the quiz
  });

  // Event listener for the next level button
  nextLevelButton.addEventListener('click', function() {
    // Increment the current level
    currentLevel++;

    // Initialize the appropriate quiz level based on the current level
    if (currentLevel === 2) {
      initializeQuizLevel(currentLevel, questionsLevel2);
    } else if (currentLevel === 3) {
      initializeQuizLevel(currentLevel, questionsLevel3);
    } else if (currentLevel === 4) {
      initializeQuizLevel(currentLevel, questionsLevel4);
    } else if (currentLevel === 5) {
      initializeQuizLevel(currentLevel, questionsLevel5);
    } else if (currentLevel === 6) {
      initializeQuizLevel(currentLevel, questionsLevel6);
    } else if (currentLevel === 7) {
      initializeQuizLevel(currentLevel, questionsLevel7);
    } else if (currentLevel === 8) {
      initializeQuizLevel(currentLevel, questionsLevel8);
    } else if (currentLevel === 9) {
      initializeQuizLevel(currentLevel, questionsLevel9);
    } else if (currentLevel === 10) {
      initializeQuizLevel(currentLevel, questionsLevel10);
    } else if (currentLevel === 11) {
      initializeQuizLevel(currentLevel, questionsLevel11);
    } else if (currentLevel === 12) {
      initializeQuizLevel(currentLevel, questionsLevel12);
    } else if (currentLevel === 13) {
      initializeQuizLevel(currentLevel, questionsLevel13);
    } else if (currentLevel === 14) {
      initializeQuizLevel(currentLevel, questionsLevel14);
    } else if (currentLevel === 15) {
      initializeQuizLevel(currentLevel, questionsLevel15);
    } else if (currentLevel === 16) {
      initializeQuizLevel(currentLevel, questionsLevel16);
    } else if (currentLevel === 17) {
      initializeQuizLevel(currentLevel, questionsLevel17);
    } else if (currentLevel === 18) {
      initializeQuizLevel(currentLevel, questionsLevel18);
    } else if (currentLevel === 19) {
      initializeQuizLevel(currentLevel, questionsLevel19);
    } else if (currentLevel === 20) {
      initializeQuizLevel(currentLevel, questionsLevel20);
    } else if (currentLevel === 21) {
      initializeQuizLevel(currentLevel, questionsLevel21);
    } else if (currentLevel === 22) {
      initializeQuizLevel(currentLevel, questionsLevel22);
    } else if (currentLevel === 23) {
      initializeQuizLevel(currentLevel, questionsLevel23);
    } else if (currentLevel === 24) {
      initializeQuizLevel(currentLevel, questionsLevel24);
    } else if (currentLevel === 25) {
      initializeQuizLevel(currentLevel, questionsLevel25);
    } else if (currentLevel === 26) {
      initializeQuizLevel(currentLevel, questionsLevel26);
    } else if (currentLevel === 27) {
      initializeQuizLevel(currentLevel, questionsLevel27);
    } else if (currentLevel === 28) {
      initializeQuizLevel(currentLevel, questionsLevel28);
    } else if (currentLevel === 29) {
      initializeQuizLevel(currentLevel, questionsLevel29);
    } else if (currentLevel === 30) {
      initializeQuizLevel(currentLevel, questionsLevel30);
    } else if (currentLevel === 31) {
      initializeQuizLevel(currentLevel, questionsLevel31);
    } else if (currentLevel === 32) {
      initializeQuizLevel(currentLevel, questionsLevel32);
    } else if (currentLevel === 33) {
      initializeQuizLevel(currentLevel, questionsLevel33);
    } else if (currentLevel === 34) {
      initializeQuizLevel(currentLevel, questionsLevel34);
    } else if (currentLevel === 35) {
      initializeQuizLevel(currentLevel, questionsLevel35);
    } else if (currentLevel === 36) {
      initializeQuizLevel(currentLevel, questionsLevel36);
    } else if (currentLevel === 37) {
      initializeQuizLevel(currentLevel, questionsLevel37);
    } else if (currentLevel === 38) {
      initializeQuizLevel(currentLevel, questionsLevel38);
    } else if (currentLevel === 39) {
      initializeQuizLevel(currentLevel, questionsLevel39);
    } else if (currentLevel === 40) {
      initializeQuizLevel(currentLevel, questionsLevel40);
    }


    // Add more conditions for additional levels if needed

    // Reset display styles for question and options containers
    questionContainer.style.display = '';
    optionsContainer.style.display = '';
    resultContainer.style.display = "none";


    // Set background color based on the completed level and add additional messages
    if (currentLevel === 2) {
      questionContainers[currentLevel - 2].classList.add("pallet-town"); // Level 1 complete, green background
      questionContainers[currentLevel - 2].textContent = "Pallet Town ✔"; // Additional message for final level
      questionContainers[currentLevel - 1].textContent = "Viridian City 🔒"
    } else if (currentLevel === 3) {
      questionContainers[currentLevel - 2].classList.add("viridian-city"); // Level 1 complete, green background; // Level 2 complete, red background
      questionContainers[currentLevel - 2].textContent = "Viridian City ✔"; // Additional message for final level
      questionContainers[currentLevel - 1].textContent = "Viridian Forest 🔒"
    } else if (currentLevel === 4) {
      questionContainers[currentLevel - 2].classList.add("viridian-forest"); // Level 1 complete, green background; // Level 3 complete, blue background
      questionContainers[currentLevel - 2].textContent = "Viridian Forest ✔"; // Additional message for final level
      questionContainers[currentLevel - 1].textContent = "Pewter City 🔒"
    } else if (currentLevel === 5) {
      questionContainers[currentLevel - 2].classList.add("pewter"); // Level 4 complete, orange background
      questionContainers[currentLevel - 2].textContent = "Pewter City ✔"; // Additional message for final level
      questionContainers[currentLevel - 1].textContent = "Brock 🔒"
    } else if (currentLevel === 6) {
      questionContainers[currentLevel - 3].style.backgroundColor = ""; // Level 5 complete, purple background
      questionContainers[currentLevel - 3].textContent = "Mt. Moon 🔒";
    } else if (currentLevel === 7) {
      questionContainers[currentLevel - 4].classList.add("mt-moon");
      questionContainers[currentLevel - 4].textContent = "Mt. Moon ✔"; // Additional message for final level
      questionContainers[currentLevel - 3].textContent = "Nugget Bridge 🔒";
    } else if (currentLevel === 8) {
      questionContainers[currentLevel - 4].classList.add("nugget-bridge");
      questionContainers[currentLevel - 4].textContent = "Nugget Bridge ✔"; // Additional message for final level
      questionContainers[currentLevel - 3].textContent = "Bill's House 🔒";
    } else if (currentLevel === 9) {
      questionContainers[currentLevel - 4].classList.add("bill-house");
      questionContainers[currentLevel - 4].textContent = "Bill's House ✔"; // Additional message for final level
      questionContainers[currentLevel - 3].textContent = "Cerulean City 🔒";
    } else if (currentLevel === 10) {
      questionContainers[currentLevel - 4].classList.add("cerulean");
      questionContainers[currentLevel - 4].textContent = "Cerulean City ✔"; // Additional message for final level
      questionContainers[currentLevel - 3].textContent = "Misty 🔒";
    } else if (currentLevel === 11) {
      questionContainers[currentLevel - 5].style.backgroundColor = ""; // Level 5 complete, purple background
      questionContainers[currentLevel - 5].textContent = "Route 5 & 6 🔒";
    } else if (currentLevel === 12) {
      questionContainers[currentLevel - 6].classList.add("route56");
      questionContainers[currentLevel - 6].textContent = "Route 5 & 6 ✔"; // Additional message for final level
      questionContainers[currentLevel - 5].textContent = "Route 11 🔒";
    } else if (currentLevel === 13) {
      questionContainers[currentLevel - 6].classList.add("route11");
      questionContainers[currentLevel - 6].textContent = "Route 11 ✔"; // Additional message for final level
      questionContainers[currentLevel - 5].textContent = "S.S. Anne 🔒";
    } else if (currentLevel === 14) {
      questionContainers[currentLevel - 6].classList.add("ss-anne");
      questionContainers[currentLevel - 6].textContent = "S.S. Anne ✔"; // Additional message for final level
      questionContainers[currentLevel - 5].textContent = "Vermilion City 🔒";
    } else if (currentLevel === 15) {
      questionContainers[currentLevel - 6].classList.add("vermilion");
      questionContainers[currentLevel - 6].textContent = "Vermilion City ✔"; // Additional message for final level
      questionContainers[currentLevel - 5].textContent = "Lt. Surge 🔒";
    } else if (currentLevel === 16) {
      questionContainers[currentLevel - 7].style.backgroundColor = ""; // Level 6 complete, purple background
      questionContainers[currentLevel - 7].textContent = "Rock Tunnel 🔒"; // Additional message for final level
    } else if (currentLevel === 17) {
      questionContainers[currentLevel - 8].classList.add("rock-tunnel");
      questionContainers[currentLevel - 8].textContent = "Rock Tunnel ✔"; // Additional message for final level
      questionContainers[currentLevel - 7].textContent = "Power Plant 🔒"; // Additional message for final level
    } else if (currentLevel === 18) {
      questionContainers[currentLevel - 8].classList.add("power-plant");
      questionContainers[currentLevel - 8].textContent = "Power Plant ✔"; // Additional message for final level
      questionContainers[currentLevel - 7].textContent = "Route 8 🔒"; // Additional message for final level
    } else if (currentLevel === 19) {
      questionContainers[currentLevel - 8].classList.add("route8");
      questionContainers[currentLevel - 8].textContent = "Route 8 ✔"; // Additional message for final level
      questionContainers[currentLevel - 7].textContent = "Celadon City 🔒"; // Additional message for final level
    } else if (currentLevel === 20) {
      questionContainers[currentLevel - 8].classList.add("celadon");
      questionContainers[currentLevel - 8].textContent = "Celadon City ✔"; // Additional message for final level
      questionContainers[currentLevel - 7].textContent = "Erika 🔒";
    } else if (currentLevel === 21) {
      questionContainers[currentLevel - 7].style.backgroundColor = ""; // Level 6 complete, purple background
      questionContainers[currentLevel - 7].textContent = "Rocket Hideout 🔒";
    } else if (currentLevel === 22) {
      questionContainers[currentLevel - 8].classList.add("rocket");
      questionContainers[currentLevel - 8].textContent = "Rocket Hideout ✔"; // Additional message for final level
      questionContainers[currentLevel - 7].textContent = "Lavender Town 🔒";
    } else if (currentLevel === 23) {
      questionContainers[currentLevel - 8].classList.add("lavender");
      questionContainers[currentLevel - 8].textContent = "Lavender Town ✔"; // Additional message for final level
      questionContainers[currentLevel - 7].textContent = "Fighting Dojo 🔒";
    } else if (currentLevel === 24) {
      questionContainers[currentLevel - 8].classList.add("dojo");
      questionContainers[currentLevel - 8].textContent = "The Fighting Dojo"; // Additional message for final level
      questionContainers[currentLevel - 7].textContent = "Saffron City 🔒";
    } else if (currentLevel === 25) {
      questionContainers[currentLevel - 8].classList.add("saffron");
      questionContainers[currentLevel - 8].textContent = "Saffron City ✔"; // Additional message for final level
      questionContainers[currentLevel - 7].textContent = "Sabrina 🔒";
    } else if (currentLevel === 26) {
      questionContainers[currentLevel - 9].style.backgroundColor = ""; // Level 6 complete, purple background
      questionContainers[currentLevel - 9].textContent = "Bike Path 🔒"; // Additional message for final level

    } else if (currentLevel === 27) {
      questionContainers[currentLevel - 10].classList.add("bike-path");
      questionContainers[currentLevel - 10].textContent = "Bike Path ✔"; // Additional message for final level
      questionContainers[currentLevel - 9].textContent = "Route 12 & 13 🔒";
    } else if (currentLevel === 28) {
      questionContainers[currentLevel - 10].classList.add("route1213");
      questionContainers[currentLevel - 10].textContent = "Route 12 & 13 ✔"; // Additional message for final level
      questionContainers[currentLevel - 9].textContent = "Safari Zone 🔒";
    } else if (currentLevel === 29) {
      questionContainers[currentLevel - 10].classList.add("safari");
      questionContainers[currentLevel - 10].textContent = "Safari Zone ✔"; // Additional message for final level
      questionContainers[currentLevel - 9].textContent = "Fuchsia City 🔒";
    } else if (currentLevel === 30) {
      questionContainers[currentLevel - 10].classList.add("fuchsia");
      questionContainers[currentLevel - 10].textContent = "Fuchsia City ✔"; // Additional message for final level
      questionContainers[currentLevel - 9].textContent = "Koga 🔒";
    } else if (currentLevel === 31) {
      questionContainers[currentLevel - 11].style.backgroundColor = ""; // Level 6 complete, purple background
      questionContainers[currentLevel - 11].textContent = "Route 19 & 20 🔒"; // Additional message for final level
    } else if (currentLevel === 32) {
      questionContainers[currentLevel - 12].classList.add("route1920");
      questionContainers[currentLevel - 12].textContent = "Route 19 & 20 ✔"; // Additional message for final level
      questionContainers[currentLevel - 11].textContent = "Seafoam Islands 🔒";
    } else if (currentLevel === 33) {
      questionContainers[currentLevel - 12].classList.add("seafoam");
      questionContainers[currentLevel - 12].textContent = "Seafoam Islands ✔"; // Additional message for final level
      questionContainers[currentLevel - 11].textContent = "Pokemon Mansion 🔒";
    } else if (currentLevel === 34) {
      questionContainers[currentLevel - 12].classList.add("mansion");
      questionContainers[currentLevel - 12].textContent = "Pokemon Mansion ✔"; // Additional message for final level
      questionContainers[currentLevel - 11].textContent = "Cinnabar Island 🔒";
    } else if (currentLevel === 35) {
      questionContainers[currentLevel - 12].classList.add("cinnabar");
      questionContainers[currentLevel - 12].textContent = "Cinnabar Island ✔"; // Additional message for final level
      questionContainers[currentLevel - 11].textContent = "Blaine 🔒";
    } else if (currentLevel === 36) {
      questionContainers[currentLevel - 13].style.backgroundColor = ""; // Level 6 complete, purple background
      questionContainers[currentLevel - 13].textContent = "Sevii 1, 2 & 3 🔒"; // Additional message for final level
    } else if (currentLevel === 37) {
      questionContainers[currentLevel - 14].classList.add("sevii");
      questionContainers[currentLevel - 14].textContent = "Sevii 1, 2 & 3 ✔"; // Additional message for final level
      questionContainers[currentLevel - 13].textContent = "Berry Forest 🔒";
    } else if (currentLevel === 38) {
      questionContainers[currentLevel - 14].classList.add("berry");
      questionContainers[currentLevel - 14].textContent = "Berry Forest ✔"; // Additional message for final level
      questionContainers[currentLevel - 13].textContent = "Kindle Road/Mt. Ember 🔒";
    } else if (currentLevel === 39) {
      questionContainers[currentLevel - 14].classList.add("kindle-road");
      questionContainers[currentLevel - 14].textContent = "Kindle Road ✔"; // Additional message for final level
      questionContainers[currentLevel - 13].textContent = "Viridian City II 🔒";
    } else if (currentLevel === 40) {
      questionContainers[currentLevel - 14].classList.add("viridian2");
      questionContainers[currentLevel - 14].textContent = "Viridian City II ✔"; // Additional message for final level
      questionContainers[currentLevel - 13].textContent = "Giovanni 🔒";
    }



  });
});
