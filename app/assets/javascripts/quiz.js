let username;

function submitName() {
  const usernameInput = document.getElementById("usernameInput");
  const wrapper = document.querySelector(".wrapper");
  const bottom = document.querySelector(".bottom");


  // Get the value from the input field
  username = usernameInput.value;

  // Check if the username is not empty
  if (username.trim() !== "") {
    // Hide the input field
    usernameInput.style.display = "none";
    userButton.style.display = "none";
    userLabel.style.display = "none";



    // Optionally, you can display a confirmation message
    console.log(`Welcome, ${username}!`);

    // Make the wrapper visible
    wrapper.style.display = "";
    bottom.style.display = "";
  } else {
    // Optionally, you can prompt the user to enter a name
    console.log("Please enter your name.");
  }
}



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
  const proceedToEliteButton = document.getElementById('proceedToEliteButton');

  // Define questions for each level
  const questionsLevel1 = [
    {
      question: "Who is the protagonist's rival in Pallet Town?",
      options: ["Blue", "Red", "Green", "Yellow"],
      answer: "Blue"
    }
   // {
   //   question: "What are the only 2 Pokemon that can be caught on Route 1?",
  //    options: ["Rattata & Pidgey", "Spearow & Sandshrew", "Moltres & Zapdos", "Weedle & Caterpie"],
 //     answer: "Rattata & Pidgey"
  //  },
 //   {
  //    question: "What's the first Pokemon in the PokeDex?",
  //    options: ["Pikachu", "Caterpie", "Bulbasaur", "Charmander"],
  //    answer: "Bulbasaur"
 //   },
   // {
  //    question: "Which Professor resides in Pallet Town?",
  //    options: ["Professor Elm", "Professor Birch", "Professor Willow", "Professor Oak"],
  //    answer: "Professor Oak"
  //  },
  //  {
   //   question: "Which Pokemon will your rival choose if you take Charmander?",
  //    options: ["Eevee", "Bulbasaur", "Pikachu", "Squirtle"],
 //     answer: "Squirtle"
 //   }

  ];

  const questionsLevel2 = [
    {
      question: "The old man will show you how to catch a Pokemon, which one does he catch?",
      options: ["Weedle", "Kakuna", "Ponyta", "Bellsprout"],
      answer: "Weedle"
    },
     {
       question: "What item will you get at the PokeMart when entering for the first time in Viridian City?",
       options: ["Oak's Parcel", "5 Pokeballs", "Antidote", "Carbos"],
       answer: "Oak's Parcel"
     },
     {
       question: "Viridian is a shade of which color?",
       options: ["Green", "Red", "Purple", "Blue"],
       answer: "Green"
     },
     {
       question: "What badge will you receive when you beat Viridian Gym later in the game?",
       options: ["Earth Badge", "Soul Badge", "Boulder Badge", "Volcano Badge"],
       answer: "Earth Badge"
     },
     {
      question: "What is the only way you can't get out of Viridian City?",
      options: ["North", "East", "South", "West"],
      answer: "East"
    }
    //MORE QUESTIONS HERE LVL 2
  ];

  const questionsLevel3 = [
    {
      question: "Which type of Pokemon will you never encounter in Viridian Forest?",
      options: ["Poison", "Bug", "Grass", "Electric"],
      answer: "Grass"
    },
     {
       question: "What is the final form of Weedle?",
       options: ["Beedrill", "Butterfree", "Weepinbell", "Kakuna"],
       answer: "Beedrill"
     },
     {
       question: "Which of the following Pokemon are you least likely to encounter in Viridian Forest?",
       options: ["Weedle", "Caterpie", "Metapod", "Pikachu"],
       answer: "Pikachu"
     },
     {
       question: "The final trainer in Viridian Forest has one Pokemon, which one?",
       options: ["Pikachu", "Weedle", "Butterfree", "Raticate"],
       answer: "Weedle"
     },
     {
       question: "In case Weedle poisons you, which item would you use to heal your status?",
       options: ["Antidote", "Potion", "X Attack", "Super Potion"],
       answer: "Antidote"
     }
    // Add more questions for the next level...
  ];

  const questionsLevel4 = [
    {
      question: "What is the entry price in Pokémon Dollars for the science museum in Pewter City?",
      options: ["50", "100", "It's free", "250"],
      answer: "50"
    },
     {
       question: "Which HM is required to access the back part of the museum and get the Old Amber?",
       options: ["Cut", "Fly", "Strenght", "Surf"],
       answer: "Cut"
     },
     {
       question: "Later in the game you will be able to restore the Old Amber into which Pokemon?",
       options: ["Aerodactyl", "Mewtwo", "Moltres", "Snorlax"],
       answer: "Aerodactyl"
     },
     {
       question: "Pewter is a mixture of ...?",
       options: ["Rocks", "Metals", "Plastics", "Spices"],
       answer: "Metals"
     },
     {
       question: "In Pokemon FireRed and LeafGreen, which item will you receive after beating Brock and heading east?",
       options: ["Moon Stone", "Running Shoes", "Roller Skates", "Bicycle"],
       answer: "Running Shoes"
     }
    // Add more questions for the next level...
  ];

  const questionsLevel5 = [
    {
      question: "What's the name of the mandatory trainer you have to fight in Pewter Gym?",
      options: ["Liam", "Lenny", "Leo", "Lilly"],
      answer: "Liam"
    },
     {
       question: "Which of the following moves would be super effective against Sandshrew?",
       options: ["Bubble", "Hyper Beam", "Dragon Rage", "Thunderbolt"],
       answer: "Bubble"
     },
     {
       question: "What's the first Pokemon in Brock's line-up?",
       options: ["Onix", "Dugtrio", "Geodude", "Sandslash"],
       answer: "Geodude"
     },
     {
       question: "If Onix' Rock Tomb hits, what status effect could take place?",
       options: ["Lower your speed", "Raise your attack", "Lower your defense", "Paralyze you"],
       answer: "Lower your speed"
     },
     {
       question: "In Pokemon Red and Blue, what's the TM that Brock will give you?",
       options: ["Rock Tomb", "Bide", "Earthquake", "Iron Tail"],
       answer: "Bide"
     }
    // Add more questions for the next level...
  ];

  const questionsLevel6 = [
    {
      question: "Which Pokemon can be bought at the Pokemon center before entering Mt. Moon?",
      options: ["Goldeen", "Magikarp", "Pidgey", "Abra"],
      answer: "Magikarp"
    },
     {
       question: "Which two fossils will you be able to choose from after defeating the scientist?",
       options: ["Dome & Helix Fossil", "Old Amber & New Amber", "Moon & Sun Fossil", "Root & Claw Fossil"],
       answer: "Dome & Helix Fossil"
     },
     {
       question: "The shards of stars that fall at Mt. Moon are knows as what?",
       options: ["Moon Stones", "Star Shards", "Water Stones", "Nuggets"],
       answer: "Moon Stones"
     },
     {
       question: "In the final part of the cave, you have a 100% to encounter which Pokemon?",
       options: ["Paras", "Koffing", "Zubat", "Geodude"],
       answer: "Paras"
     },
     {
       question: "Which Pokemon can you catch right before and after Mt. Moon, and can be traded against Farfetch'd?",
       options: ["Pidgey", "Sandshrew", "Spearow", "Pidgeotto"],
       answer: "Spearow"
     }
    // Add more questions for the next level...
  ];

  const questionsLevel7 = [
    {
      question: "After beating all the trainers on Nugget Bridge, what item will you receive?",
      options: ["Nugget", "Max Revive", "5 Great Balls", "Team Rocket Membership"],
      answer: "Nugget"
    },
     {
       question: "Which legendary Pokémon is said to roam Cerulean Cave?",
       options: ["Articuno", "Lugia", "Mewtwo", "Kabutops"],
       answer: "Mewtwo"
     },
     {
       question: "Your rival will use one Pokemon that doesn't have offensive moves, which one?",
       options: ["Abra", "Pidgeotto", "Rattata", "Eevee"],
       answer: "Abra"
     },
     {
       question: "How many trainers do you have to beat before facing the person who gives you the prize?",
       options: ["4", "5", "6", "7"],
       answer: "5"
     },
     {
       question: "What notorious group does the last trainer on the bridge represent?",
       options: ["Team Magma", "Team Aqua", "Team Rocket", "Team Galactic"],
       answer: "Team Rocket"
     }
    // Add more questions for the next level...
  ];



  const questionsLevel8 = [
    {
      question: "Under what name is the north-eastern part of Cerulean City known?",
      options: ["Cerulean Old Town", "Cerulean Harbor", "Cerulean Cape", "Cerulean Cave"],
      answer: "Cerulean Cape"
    },
     {
       question: "Before being able to take on the gym, you have to help a Pokemon researcher, what's his name?",
       options: ["Bill", "Bob", "Blaine", "Brad"],
       answer: "Bill"
     },
     {
       question: "Which important item will you receive after assisting the Pokemon researcher at his house?",
       options: ["S.S. Ticket", "A gym badge", "HM01 - Cut", "Bicycle"],
       answer: "S.S. Ticket"
     },
     {
       question: "In FireRed/LeafGreen, which Pokemon did the researcher accidentally turn himself into?",
       options: ["Kadabra", "Oddish", "Jigglypuff", "Clefairy"],
       answer: "Clefairy"
     },
     {
       question: "What's the address written on the mailbox in front of the little house in north-eastern Cerulean?",
       options: ["Sea Cottage", "Beach Condo", "Lakeside House", "Cerulean Gym"],
       answer: "Sea Cottage"
     }
    // Add more questions for the next level...
  ];

  const questionsLevel9 = [
    {
      question: "What absurd price is the bike shop owner asking for a bicycle?",
      options: ["1,000,000", "100,000", "10,000", "1,000"],
      answer: "1,000,000"
    },
     {
       question: "What hidden item can you find behind the house in the north-west corner of the city?",
       options: ["Rare Candy", "Nugget", "Ultra Ball", "Full Heal"],
       answer: "Rare Candy"
     },
     {
       question: "Which TM will you get from the Rocket Grunt after showing who is boss?",
       options: ["TM22 - Solar Beam", "TM28 - Dig", "TM05 - Roar", "TM32 - Double Team"],
       answer: "TM28 - Dig"
     },
     {
       question: "In the south of Cerulean city there is a lady, by which Pokemon is she accompanied?",
       options: ["Gloom", "Pikachu", "Slowpoke", "Goldeen"],
       answer: "Slowpoke"
     },
     {
       question: "Who prevents you from entering the burglarized house, before assisting Bill at Cerulean Cape?",
       options: ["Officer Jenny", "Nurse Joy", "Misty", "A Team Rocket Grunt"],
       answer: "Officer Jenny"
     }
    // Add more questions for the next level...
  ];

  const questionsLevel10 = [
    {
      question: "Which move will be super effective against Misty's Starmie, but not against Staryu?",
      options: ["Bite", "Thundershock", "Vine Whip", "Earthquake"],
      answer: "Bite"
    },
     {
       question: "What's the signature move of Misty's Pokemon?",
       options: ["Waterfall", "Water Pulse", "Surf", "Hydro Pump"],
       answer: "Water Pulse"
     },
     {
       question: "Which berry would you give your Pokemon to counter the possible side effect of Misty's signature move?",
       options: ["Pecha Berry", "Chesto Berry", "Rawst Berry", "Persim Berry"],
       answer: "Persim Berry"
     },
     {
       question: "Which starter is probably the worst pick against Misty's Pokemon?",
       options: ["Charmander", "Bulbasaur", "Squirtle", "They're equally good"],
       answer: "Charmander"
     },
     {
       question: "What move will Misty's Starmie to restore it's health?",
       options: ["Rest", "Recover", "Wish", "Roost"],
       answer: "Recover"
     }
    // Add more questions for the next level...
  ];

  const questionsLevel11 = [
    {
      question: "What can you do at the little house on Route 5, south of Cerulean City?",
      options: ["Have your Pokemon raised", "Teach your Pokemon TM moves", "Change the names of your Pokemon", "Teleport to Pallet Town"],
      answer: "Have your Pokemon raised"
    },
     {
       question: "The little girl in the house will offer you to trade Pokemon, which one?",
       options: ["Nidoran", "Spearow", "Onix", "Raichu"],
       answer: "Nidoran"
     },
     {
       question: "Which Pokemon found on this route can help you gain additional cash from trainer battles?",
       options: ["Bellsprout", "Pidgey", "Oddish", "Meowth"],
       answer: "Meowth"
     },
     {
       question: "When playing FireRed, which Pokemon can't be caught on Route 6?",
       options: ["Bellsprout", "Oddish", "Gyarados", "Magikarp"],
       answer: "Bellsprout"
     },
     {
       question: "When fishing with a Good Rod on Route 6, which Pokemon will you most likely encounter?",
       options: ["Gyarados", "Poliwag", "Poliwhirl", "Slowpoke"],
       answer: "Poliwag"
     }
    // Add more questions for the next level...
  ];

  const questionsLevel12 = [
    {
      question: "What useful item can you get on Route 11 after catching 30 Pokemon?",
      options: ["Itemfinder", "Fame Checker", "Teachy TV", "Good Rod"],
      answer: "Itemfinder"
    },
     {
       question: "What's the name of the cave between Vermilion City and Route 11?",
       options: ["Dugtrio's Cave", "Diglett's Cave", "Rock Tunnel", "Vermilion Cave"],
       answer: "Diglett's Cave"
     },
     {
       question: "What seems to be the Pokemon of choice for the two Engineer trainers on Route 11?",
       options: ["Magnemite", "Growlithe", "Ekans", "Arbok"],
       answer: "Magnemite"
     },
     {
       question: "On Route 11, you will have the chance to catch a Psychic-type Pokemon, which one?",
       options: ["Drowzee", "Alakazam", "Mewtwo", "Espeon"],
       answer: "Drowzee"
     },
     {
       question: "Which Pokemon are exclusive to either FireRed or LeafGreen?",
       options: ["Sandshrew & Ekans", "Drowzee & Hypno", "Spearow & Pidgey", "Krabby & Horsea"],
       answer: "Sandshrew & Ekans"
     }
    // Add more questions for the next level...
  ];

  const questionsLevel13 = [
    {
      question: "In one of the cabins on the S.S. Anne, what service does a lady provide for trainers?",
      options: ["Teach a unique move", "Heal your Pokemon", "Sell rare items", "Trade rare Pokemon"],
      answer: "Heal your Pokemon"
    },
     {
       question: "After helping the captain, what will he reward you with?",
       options: ["HM01 - Cut", "HM07 - Waterfall", "HM05 - Flash", "HM02 - Fly"],
       answer: "HM01 - Cut"
     },
     {
       question: "What is the issue the captain seems to be having?",
       options: ["He is feeling sick", "He is being robbed", "The ship is broken", "He lost one of his Pokemon"],
       answer: "He is feeling sick"
     },
     {
       question: "Which Pokemon will your rival start off with on the S.S. Anne?",
       options: ["Pidgeotto", "His Starter", "Machop", "Kadabra"],
       answer: "Pidgeotto"
     },
     {
       question: "Of all types of trainers on the ship, which one will reward you with the most cash?",
       options: ["Youngster", "Lass", "Sailor", "Gentleman"],
       answer: "Gentleman"
     }
    // Add more questions for the next level...
  ];

  const questionsLevel14 = [
    {
      question: "Which Pokemon is helping the old man flattening the construction site?",
      options: ["Onix", "Snorlax", "Graveler", "Machop"],
      answer: "Machop"
    },
     {
       question: "What item will the Pokemon Fan Club Chairman give you after listening to his story?",
       options: ["Bike Voucher", "Club Membership", "HM05 - Flash", "A Master Ball"],
       answer: "Bike Voucher"
     },
     {
       question: "In Pokemon Red and Blue, what's the name of the Farfetch'd you can get by trade?",
       options: ["Dux", "Flux", "Trux", "Ch'ding"],
       answer: "Dux"
     },
     {
       question: "What color could you classify Vermilion as?",
       options: ["Red Orange", "Blue Banana", "Green Grape", "Yellow Apple"],
       answer: "Red Orange"
     },
     {
       question: "Which move does at least one of your Pokemon need to have before challenging Vermilion's Gym Leader?",
       options: ["Cut", "Slash", "Scratch", "Flash"],
       answer: "Cut"
     }
    // Add more questions for the next level...
  ];

  const questionsLevel15 = [
    {
      question: "What military title does the Gym Leader Surge have?",
      options: ["Lieutenant", "Major", "Colonel", "Sergeant"],
      answer: "Lieutenant"
    },
     {
       question: "When getting the first switch correct, the second one will be directly next to it, but on which side?",
       options: ["Left", "Above", "Right", "Random"],
       answer: "Random"
     },
     {
       question: "Before fighting Surge, what do you have to search through to find the switches?",
       options: ["Trash cans", "Bookshelves", "Water puddles", "Stone pillars"],
       answer: "Trash cans"
     },
     {
       question: "If you beat every single trainer in Vermilion Gym, which of the following will you have encountered?",
       options: ["4x Pikachu", "2x Raichu", "6x Voltorb", "8x Magnemite"],
       answer: "4x Pikachu"
     },
     {
       question: "What move is super effective against the majority of Pokemon in Vermilion Gym?",
       options: ["Dig", "Thundershock", "Wing Attack", "Water Gun"],
       answer: "Dig"
     }
    // Add more questions for the next level...
  ];

  const questionsLevel16 = [
    {
      question: "What move can you use to lighten up the Rock Tunnel?",
      options: ["Solar Beam", "Flash", "Light Screen", "Flamethrower"],
      answer: "Flash"
    },
     {
       question: "If you get completely lost in Rock Tunnel, what item can you use to get out?",
       options: ["Escape Rope", "Super Repel", "Max Revive", "Calcium"],
       answer: "Escape Rope"
     },
     {
       question: "Which are the two Fighting-type Pokemon you can encounter in the wild in Rock Tunnel?",
       options: ["Machop & Machoke", "Mankey & Machop", "Mankey & Geodude", "Mankey & Primeape"],
       answer: "Mankey & Machop"
     },
     {
       question: "Hiker Lenny has 4 Pokemon, 3 Geodude and a ...?",
       options: ["Machop", "Graveler", "Golem", "Machamp"],
       answer: "Machop"
     },
     {
       question: "What item does Onix need to evolve into Steelix?",
       options: ["Metal Coat", "Steel Armor", "Iron Shell", "Steel Stone"],
       answer: "Metal Coat"
     }
    // Add more questions for the next level...
  ];

  const questionsLevel17 = [
    {
      question: "Which Pokémon can be commonly found roaming around inside the Power Plant?",
      options: ["Voltorb & Magnemite", "Electabuzz & Pikachu", "Electrode & Raichu", "Rattata & Raticate"],
      answer: "Voltorb & Magnemite"
    },
    {
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
    },
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
    {
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
    }
    // Add more questions for the next level...
  ];

  const questionsLevel19 = [
    {
      question: "What's the most expensive TM you can buy at the Celadon Department Store?",
      options: ["Hyper Beam", "Roar", "Attract", "Secret Power"],
      answer: "Hyper Beam"
    },
     {
       question: "What Pokemon can you get from the top floor in the Celadon Mansion?",
       options: ["Porygon", "Eevee", "Pikachu", "Charmander"],
       answer: "Eevee"
     },
     {
       question: "What do you need to get in order to play slots in the Game Corner?",
       options: ["A Coin Case", "A Slot Card", "Erika's Badge", "At least 10 Pokemon"],
       answer: "A Coin Case"
     },
     {
       question: "What Pokemon is blocking the road to the west of Celadon?",
       options: ["Snorlax", "Onix", "Mewtwo", "Sudowoodo"],
       answer: "Snorlax"
     },
     {
       question: "In Pokemon LeafGreen you can buy Porygon at the Game Corner for 6500 coins, in FireRed it costs how much?",
       options: ["9999 coins", "The same amount", "4500 coins", "6250 coins"],
       answer: "9999 coins"
     }
    // Add more questions for the next level...
  ];

  const questionsLevel20 = [
    {
      question: "What's the only status effect you don't have to fear in Erika's gym?",
      options: ["Burn", "Sleep", "Poison", "Paralysis"],
      answer: "Burn"
    },
     {
       question: "What's the name of the Pokemon used by Erika that has no prior evolutions?",
       options: ["Tangela", "Victreebel", "Vileplume", "Bulbasaur"],
       answer: "Tangela"
     },
     {
       question: "Which of the following Pokemon will you only encounter once in Erika's gym?",
       options: ["Ivysaur & Bellsprout", "Exeggcute & Bulbasaur", "Oddish & Weepinbell", "Gloom & Vileplume"],
       answer: "Exeggcute & Bulbasaur"
     },
     {
       question: "Which starter would make sure you have no trouble beating Erika's gym?",
       options: ["Pikachu", "Charmander", "Squirtle", "Bulbasaur"],
       answer: "Charmander"
     },
     {
       question: "When using Sunny Day against Erika, what effects will occur?",
       options: ["Solar Beam will be instant", "It weakens water moves", "It powers up fire moves", "All of them"],
       answer: "All of them"
     }
    // Add more questions for the next level...
  ];

  const questionsLevel21 = [
    {
      question: "After beating your rival here, you will be rewarded which Pokemon?",
      options: ["Lapras", "Alakazam", "Snorlax", "Lickitung"],
      answer: "Lapras"
    },
     {
       question: "Which item do you need to get to Giovanni in Silph Co.?",
       options: ["Card Key", "Elevator Card", "Master Key", "Silph Scope"],
       answer: "Card Key"
     },
     {
       question: "Which Pokemon will your rival have here, if you picked Squirtle as a starter?",
       options: ["Ivysaur", "Venusaur", "Charizard", "Blastoise"],
       answer: "Venusaur"
     },
     {
       question: "Giovanni will use one normal type Pokemon when fighting him, which one?",
       options: ["Kangaskhan", "Nidoqueen", "Lickitung", "Nidorino"],
       answer: "Kangaskhan"
     },
     {
       question: "What's the name of the Pokeball you will receive after beating Giovanni in Silph Co.?",
       options: ["Master Ball", "10 x Ultra Ball", "Love Ball", "Rocket Ball"],
       answer: "Master Ball"
     }
    // Add more questions for the next level...
  ];

  const questionsLevel22 = [
    {
      question: "In the Japanese version of the game, what could the town be classified as?",
      options: ["Noble", "Scary", "Ghostly", "Empty"],
      answer: "Noble"
    },
     {
      question: "Which item that you got in the Rocket Hideout will help you uncover the identity of the Ghosts in Pokemon Tower?",
      options: ["Silph Scope", "PokeFlute", "Itemfinder", "Ghost Amulet"],
       answer: "Silph Scope"
     },
     {
       question: "The Name Rater in Lavender can change Pokemon names for you, unless...?",
       options: ["You obtained it through trade", "The Pokemon has 0 HP", "You already named it", "It's at level 100"],
       answer: "You obtained it through trade"
     },
     {
       question: "What's the name of the man Team Rocket is holding hostage at the top floor?",
       options: ["Mr. Fuji", "Mr. Everest", "Mr. Kilimanjaro", "Mr. Moon"],
       answer: "Mr. Fuji"
     },
     {
       question: "What is the primary purpose of Pokémon Tower in Lavender Town?",
       options: ["It's the Lavender Town Gym", "Provide a scenic outlook over Lavender", "To serve as a resting place for travellers", "To honor deceased Pokemon"],
       answer: "To honor deceased Pokemon"
     }
    // Add more questions for the next level...
  ];

  const questionsLevel23 = [
    {
      question: "Who is the leader at the Fighting Dojo?",
      options: ["Bruno", "Chuck", "Brawly", "Kiyo"],
      answer: "Kiyo"
    },
     {
      question: "From which Pokemon will you be able to choose if you beat the Dojo?",
      options: ["Hitmonlee & Hitmonchan", "Hitmontop & Hitmonchan", "Hitmonlee & Hitmontop", "Machamp & Primeape"],
      answer: "Hitmonlee & Hitmonchan"
     },
     {
      question: "What will hatch from an egg if you breed Hitmonchan/Hitmonlee with Ditto?",
      options: ["Tyrogue", "Tyrone", "Tyronitar", "Tyros"],
      answer: "Tyrogue"
    },
    {
      question: "At level 20, your Pokemon can evolve into Hitmontop with a certain stat condition, which one?",
      options: ["Attack = Defense", "Attack > Defense", "Defense > Attack", "Speed > Attack & Defense"],
      answer: "Attack = Defense"
    },
    {
      question: "What's a main difference between Red/Blue and FireRed/LeafGreen?",
      options: ["Gift Pokemon are 5 levels higher in Red/Blue", "Trainers no longer have fighting Pokemon", "You can choose from 3 gift Pokemon", "The Dojo is closed for renovation"],
      answer: "Gift Pokemon are 5 levels higher in Red/Blue"
    }
    // Add more questions for the next level...
  ];

  const questionsLevel24 = [
    {
      question: "What's the girl known as who repeats everything you say?",
      options: ["Mimic Girl", "Parrot Girl", "Mirror Move Girl", "Lisa"],
      answer: "Mimic Girl"
    },
    {
      question: "According to mythology, Saffron is the color of ...?",
      options: ["Sunset and Fire", "Sunrise and Sky", "Azure Waters and Tranquility", "Moonlight and Dreams"],
      answer: "Sunset and Fire"
    },
    {
      question: "What's the name of Saffron City's gym leader?",
      options: ["Sara", "Sabrina", "Erika", "May"],
      answer: "Sabrina"
    },
    {
      question: "How is the Team Rocket hideout in Saffron City called?",
      options: ["Silph Co.", "Game Corner", "Saffron Cave", "Rocket HQ"],
      answer: "Silph Co."
    },
    {
      question: "Mr. Psychic will give you a useful TM, which statement is not true?",
      options: ["It contains the move Psychic", "It's TM29", "It has 100% accuracy", "The move has 25PP"],
      answer: "The move has 25PP"
    }

    // Add more questions for the next level...
  ];

  const questionsLevel25 = [
    {
      question: "What is the highest stat of Alakazam, Sabrina's strongest Pokémon?",
      options: ["Attack", "Special Attack", "Defense", "Special Defense"],
      answer: "Special Attack"
    },
    {
      question: "Which of these Pokémon evolves into Alakazam when traded?",
      options: ["Abra", "Kadabra", "Mr. Mime", "Drowzee"],
      answer: "Kadabra"
    },
    {
      question: "Which of these status conditions can be caused by Psychic-type moves?",
      options: ["Burn", "Poison", "Paralysis", "Confusion"],
      answer: "Confusion"
    },
    {
      question: "Which move is super effective against Psychic-type Pokémon?",
      options: ["Leech Life", "Fire Blast", "Rock Throw", "Mach Punch"],
      answer: "Leech Life"
    },
    {
      question: " Alakazam's ability is Synchronize, what effect does it have?",
      options: ["Reflects status conditions back to the opponent", "Increases the power of Psychic-type moves", "Boosts Alakazam's Speed stat", "Steals the held item from the opponent"],
      answer: "Reflects status conditions back to the opponent"
    }

    // Add more questions for the next level...
  ];

  const questionsLevel26 = [
    {
      question: "What type of Pokemon do the majority of trainers on the Cycling Road use?",
      options: ["Fighting & Poison", "Electric & Ground", "Bug & Grass", "Fire & Ice"],
      answer: "Fighting & Poison"
    },
    {
      question: "Which bird Pokemon can't be found on the Cylcling Road?",
      options: ["Pidgey", "Fearow", "Spearow", "Doduo"],
      answer: "Pidgey"
    },
    {
      question: "Compared to Pokemon Red/Blue, what can you no longer do at the Cycling Road?",
      options: ["Fishing", "Cycling", "Find Hidden Items", "Fight Other Trainers"],
      answer: "Fishing"
    },
    {
      question: "One of the bikers has a different type of Pokemon than the rest, namely two ...?",
      options: ["Grimer", "Primeape", "Koffing", "Voltorb"],
      answer: "Voltorb"
    },
    {
      question: "In 'Pokemon: Let's Go', the Cylcing Road is called 'Pokemon Road' instead, why?",
      options: ["Only Pokemon are allowed", "You can't get a bike in this game", "You can catch almost all Pokemon here", "To avoid trademark issues"],
      answer: "You can't get a bike in this game"
    }

    // Add more questions for the next level...
  ];

  const questionsLevel27 = [
    {
      question: "What's the only Pokemon you will encounter here while surfing?",
      options: ["Magikarp", "Gyarados", "Tentacool", "Goldeen"],
      answer: "Tentacool"
    },
    {
      question: "What fishing rod will you get from the Fishing Guru on this route?",
      options: ["Old Rod", "Good Rod", "Super Rod", "Golden Rod"],
      answer: "Super Rod"
    },
    {
      question: "What Pokemon can you show the Fishing Guru to get Net Balls as a reward?",
      options: ["Magikarp", "Goldeen", "Horsea", "Lapras"],
      answer: "Magikarp"
    },
    {
      question: "In both FireRed and LeafGreen, on Route 13 you have a 5% chance to encounter ...?",
      options: ["Weepinbell", "Gloom", "Ditto", "Tauros"],
      answer: "Ditto"
    },
    {
      question: "On Route 12 you will find a Pokemon that you can only catch twice in the game, which one?",
      options: ["Mr. Mime", "Snorlax", "Gyarados", "Scyther"],
      answer: "Snorlax"
    }

    // Add more questions for the next level...
  ];

  const questionsLevel28 = [
    {
      question: "What's the item the Warden wants you to retrieve from the Safari Zone?",
      options: ["Gold Teeth", "Silver Eyes", "Bronze Leg", "Platinum Hand"],
      answer: "Gold Teeth"
    },
    {
      question: "What statement about using bait is true?",
      options: ["The chance to flee decreases", "The catch rate increases", "The Pokemon can't flee after baiting", "The Pokemon will be eating for maximum 3 turns"],
      answer: "The chance to flee decreases"
    },
    {
      question: "At what point will you be kicked out of the Safari Zone?",
      options: ["After 600 steps", "After catching 6 Pokemon", "After 15 minutes", "After finding all required items"],
      answer: "After 600 steps"
    },
    {
      question: "Which of the following Pokemon can be found in the Safari Zone?",
      options: ["Dragonair", "Jynx", "Nidoking", "Exeggutor"],
      answer: "Dragonair"
    },
    {
      question: "When playing LeafGreen, which Pokemon will you not encounter in the Safari Zone?",
      options: ["Kangaskhan", "Chansey", "Pinsir", "Scyther"],
      answer: "Scyther"
    }

    // Add more questions for the next level...
  ];

  const questionsLevel29 = [
    {
      question: "What's the slogan of Fuchsia City in Generations I - III?",
      options: ["Behold! It's Passion Pink!", "Discover the Magic of Fuchsia!", "Observe! It's Pokemon Passion!", "Fuchsia City: Where Legends Await!"],
      answer: "Behold! It's Passion Pink!"
    },
    {
      question: "Which item will you receive after helping the Safari Zone Warden out?",
      options: ["HM04 - Strength", "TM28 - Tombstony", "A Rare Candy", "30 Safari Balls"],
      answer: "HM04 - Strength"
    },
    {
      question: "What Pokemon will appear in the Fuchsia City Zoo if you picked the Helix Fossil in Mt. Moon?",
      options: ["Kabuto", "Omanyte", "Cradily", "Aerodactyl"],
      answer: "Kabuto"
    },
    {
      question: "In Fuchsia City there is a Move Deleter, which of the following is true?",
      options: ["It's the only way do delete HM moves", "You can't delete the last move of a Pokemon", "Deleting moves is free", "All statements are true"],
      answer: "All statements are true"
    },
    {
      question: "Which of the following Pokemon can't be found in the Fuchsia Zoo?",
      options: ["Lapras", "Kangaskhan", "Dragonite", "Chansey"],
      answer: "Dragonite"
    }

    // Add more questions for the next level...
  ];

  const questionsLevel30 = [
    {
      question: "In Fuchsia Gym you have to find a way through a maze of ...?",
      options: ["Poisonous Gas", "Invisible Walls", "Camouflaged Pokemon", "Fire"],
      answer: "Invisible Walls"
    },
    {
      question: "Why shouldn't you use Ground moves against Koga's Koffing and Weezing?",
      options: ["It will instantly self-destruct", "It has no effect on them", "It boosts their Poison attacks", "They become immune to all other moves"],
      answer: "It has no effect on them"
    },
    {
      question: "What move does TM06 contain, which you will get after defeating Koga?",
      options: ["Toxic", "Poison Gas", "Sludge Bomb", "Explosion"],
      answer: "Toxic"
    },
    {
      question: "What Pokémon of Koga's is the only one that can Selfdestruct in battle?",
      options: ["Koffing", "Weezing", "Muk", "Venomoth"],
      answer: "Koffing"
    },
    {
      question: "Which of Koga's Muk's moves is the only one that's not Poison-type?",
      options: ["Acid Armor", "Toxic", "Sludge Bomb", "Minimize"],
      answer: "Minimize"
    }

    // Add more questions for the next level...
  ];

  const questionsLevel31 = [
    {
      question: "In FireRed you have a 4% chance to encounter Seadra on Route 20 with the Super Rod, in LeafGreen it's the same for ...?",
      options: ["Kingler", "Gyarados", "Horsea", "Kingdra"],
      answer: "Kingler"
    },
    {
      question: "Which type of Pokemon do none of the trainers have along Route 19 & 20?",
      options: ["Water", "Ice", "Flying", "Fire"],
      answer: "Fire"
    },
    {
      question: "Which of the Pokemon found on these routes evolve by level up, and not by evolution stone?",
      options: ["Staryu", "Poliwhirl", "Shellder", "Goldeen"],
      answer: "Goldeen"
    },
    {
      question: "Which of the following moves is super effective against Tentacool, but not against Seadra?",
      options: ["Thundershock", "Razor Leaf", "Ice Punch", "Confusion"],
      answer: "Confusion"
    },
    {
      question: "When surfing west on Route 20, which islands will you run into first?",
      options: ["Seafoam Islands", "Cinnabar Island", "Sevii Islands", "Birth Island"],
      answer: "Seafoam Islands"
    }

    // Add more questions for the next level...
  ];

  const questionsLevel32 = [
    {
      question: "What are the Seafoam islands called in the Japanese version of the game?",
      options: ["Twin Islands", "Triplet Islands", "Single Island", "Quadruplet Islands"],
      answer: "Twin Islands"
    },
    {
      question: "Why is it impossible to Surf before solving the puzzle inside the Seafoam Islands?",
      options: ["Fast currents", "Dangerous Pokemon", "Strong Waves", "Invisible Barriers"],
      answer: "Fast currents"
    },
    {
      question: "What HM do you need to solve the puzzle in Seafoam Islands?",
      options: ["Waterfall", "Cut", "Fly", "Strength"],
      answer: "Strength"
    },
    {
      question: "What type of Pokémon is Articuno, the legendary bird residing in the Seafoam Islands?",
      options: ["Ice/Flying", "Water/Flying", "Dragon/Flying", "Normal/Flying"],
      answer: "Ice/Flying"
    },
    {
      question: "Which of the following gym leaders comes to Seafoam Islands to train?",
      options: ["Koga", "Misty", "Brock", "Your Rival"],
      answer: "Misty"
    }

    // Add more questions for the next level...
  ];

  const questionsLevel33 = [
    {
      question: "What item do you need to find in the mansion in order to enter Cinnabar Gym?",
      options: ["Secret Key", "Blaine's Glasses", "Max Lure", "Courage Candy"],
      answer: "Secret Key"
    },
    {
      question: "Which Pokemon can be caught here in Pokemon Blue, but not in FireRed/LeafGreen?",
      options: ["Growlithe", "Ditto", "Vulpix", "Magmar"],
      answer: "Magmar"
    },
    {
      question: "How can you unlock doors inside the Pokémon Mansion?",
      options: ["Using a special key", "Solving puzzles", "Defeating trainers", "Pressing hidden switches"],
      answer: "Pressing hidden switches"
    },
    {
      question: "Which type of trainer will you NOT encounter in the Mansion?",
      options: ["Burglar", "Scientist", "Youngster", "Channeler"],
      answer: "Channeler"
    },
    {
      question: "Which legendary Pokemon is rumoured to have been created at the Pokemon Mansion?",
      options: ["Mewtwo", "Zapdos", "Moltres", "Groudon"],
      answer: "Mewtwo"
    }

    // Add more questions for the next level...
  ];

  const questionsLevel34 = [
    {
      question: "In the lab on Cinnabar Island, you can trade Raichu for ...?",
      options: ["Electabuzz", "Electrode", "Jynx", "Tangela"],
      answer: "Electrode"
    },
    {
      question: "What happened to Cinnabar Island after the events of Gen I and Gen III?",
      options: ["A volcano destroys the island", "The islands sinks into the sea", "Team Rocket take over the island", "The Cinnabar Gym Leader is now Brock"],
      answer: "A volcano destroys the island"
    },
    {
      question: "According to a report found in Silph Co., which Pokemon was created in the lab?",
      options: ["Eevee", "Porygon", "Kangaskhan", "Mr. Mime"],
      answer: "Porygon"
    },
    {
      question: "What's the name of the Tangela you can obtain here by trade?",
      options: ["Tangaroo", "Tangeny", "Tanglax", "Tangrowth"],
      answer: "Tangeny"
    },
    {
      question: "You can revive fossils in the lab, which of the following is true?",
      options: ["Helix Fossil > Aerodactyl", "Dome Fossil > Kabuto", "Old Amber > Omanyte", "Root Fossil > Onix"],
      answer: "Dome Fossil > Kabuto"
    }

    // Add more questions for the next level...
  ];

  const questionsLevel35 = [
    {
      question: "Which of these is the Spitfire Pokémon?",
      options: ["Magmar", "Arcanine", "Moltres", "Charizard"],
      answer: "Magmar"
    },
    {
      question: "Tell me... who is the leader of Cinnabar Gym?!",
      options: ["A Steel-type Pokémon pro", "A hotheaded quiz master", "A moustached young man", "An old woman in sunglasses"],
      answer: "A hotheaded quiz master"
    },
    {
      question: "All of Blaine's Pokemon have one move in common, which one?",
      options: ["Stomp", "Take Down", "Fire Blast", "Bite"],
      answer: "Fire Blast"
    },
    {
      question: "A Steel-type move used on a Fire-type Pokémon will ...?",
      options: ["Be super effective", "Be not very effective", "Have no effect", "Do normal damage"],
      answer: "Be not very effective"
    },
    {
      question: "How can you proceed through the rooms besides battling the trainers?",
      options: ["Answer questions correctly", "Use teleporting tiles", "Swim through lava", "Rock Smash the doors"],
      answer: "Answer questions correctly"
    }

    // Add more questions for the next level...
  ];

  const questionsLevel36 = [
    {
      question: "Who runs the Pokemon Network Center on One Island?",
      options: ["Celio", "Mr. Fuji", "Daisy", "Professor Elm"],
      answer: "Celio"
    },
    {
      question: "The man inside the Game Corner on Two Island will ask you to find his missing ...?",
      options: ["Pokemon", "Daughter", "Gym Badges", "Lava Cookie"],
      answer: "Daughter"
    },
    {
      question: "Which games can be played in the Game Corner on Two Island?",
      options: ["Pokemon Jump", "Doduo Berry Picking", "Pidgeot Poker", "Rapidash Roulette"],
      answer: "Pokemon Jump"
    },
    {
      question: "Who seems to have invaded Three Island?",
      options: ["A gang of bikers", "A group of tourists", "A flock of Pidgey", "A group of hikers"],
      answer: "A gang of bikers"
    },
    {
      question: "After retrieving the Ruby and Sapphire, you will be able to buy 3 new items at the stall, what is not one of them?",
      options: ["Lava Cookie", "Moomoo Milk", "Timer Ball", "Repeat Ball"],
      answer: "Moomoo Milk"
    },

    // Add more questions for the next level...
  ];

  const questionsLevel37 = [
    {
      question: "Your quest in Berry Forest is to find the missing daughter, what's here name?",
      options: ["Aveline", "Lysandra", "Lostelle", "Galatea"],
      answer: "Lostelle"
    },
    {
      question: "What Pokemon do you need to defeat in order for the little girl to return home?",
      options: ["Hypno", "Venomoth", "Golbat", "Victreebel"],
      answer: "Hypno"
    },

    {
      question: "Berry Forest is the only place in Pokemon FireRed/LeafGreen where ...?",
      options: ["Berries regenerate", "You can catch Venonat", "You will find a Full Heal", "You can't use Fishing Rods"],
      answer: "Berries regenerate"
    },

    {
      question: "Which Pokemon can be caught here, that can be caught in Safari Zone as well?",
      options: ["Exeggcute", "Weepinbell", "Rhyhorn", "Dratini"],
      answer: "Exeggcute"
    },
    {
      question: "Depending on your version of the game, while surfing you have 5% to encounter ...?",
      options: ["Golduck or Slowbro", "Seaking or Seadra", "Psyduck or Slowpoke", "Horsea or Goldeen"],
      answer: "Golduck or Slowbro"
    }

    // Add more questions for the next level...
  ];

  const questionsLevel38 = [
    {
      question: "What's the name of the spa on Kindle Road where you can heal your Pokemon?",
      options: ["Ember Spa", "Flamethrower Springs", "Inferno Oasis", "Pyro Retreat"],
      answer: "Ember Spa"
    },
    {
      question: "An old man at the spa will give you a useful item, which one?",
      options: ["HM06 - Rock Smash", "TM28 - Tombstony", "HM07 - Waterfall", "TM25 - Thunder"],
      answer: "HM06 - Rock Smash"
    },
    {
      question: "Trainers on this route mainly use Fighting Pokemon, which Pokemon can't be hit by this type of move?",
      options: ["Haunter", "Rapidash", "Zapdos", "Blastoise"],
      answer: "Haunter"
    },
    {
      question: "Which Pokemon resides at the top of Mt. Ember?",
      options: ["Moltres", "Magmortar", "Charizard", "Torkoal"],
      answer: "Moltres"
    },
    {
      question: "Which item that's needed to complete Celio's quest is found in Mt. Ember?",
      options: ["Ruby", "Sapphire", "Gold Bar", "Silver Bar"],
      answer: "Ruby"
    }

    // Add more questions for the next level...
  ];

  const questionsLevel39 = [
    {
      question: "What infamous glitch Pokemon can be caught after talking to the Old Man in Viridian?",
      options: ["Missingno.", "Mew", "Porygon 3", "Glitchazard"],
      answer: "Missingno."
    },
    {
      question: "Who takes over Viridian gym after the events of FireRed/LeafGreen?",
      options: ["Prof. Oak", "Your Rival", "Team Rocket", "Lance"],
      answer: "Your Rival"
    },
    {
      question: "Which move can you get from the Move Tutor in Viridian City?",
      options: ["Dream Eater", "Nightmare", "Mega Punch", "Fire Blast"],
      answer: "Dream Eater"
    },
    {
      question: "What has to be done in order to gain access to the Viridian City gym?",
      options: ["Rock Smash the door", "Defeat the Elite Four", "Get 7 gym badges", "Collect at least 75 Pokemon"],
      answer: "Get 7 gym badges"
    },
    {
      question: "The Old man blocks your way until he had his coffee, whereas in the Japanese version he is ...?",
      options: ["Drunk and passed out", "Lost in thought", "Counting Pokemon", "Hungry and waiting for food"],
      answer: "Drunk and passed out"
    }

    // Add more questions for the next level...
  ];

  const questionsLevel40 = [
    {
      question: "Which type of Pokemon do none of trainers in this gym use?",
      options: ["Ground", "Poison", "Normal", "Water"],
      answer: "Water"
    },
    {
      question: "All of Giovanni's Pokemon have one move in common, which one?",
      options: ["Horn Drill", "Earthquake", "Screech", "Poison Jab"],
      answer: "Earthquake"
    },
    {
      question: "Up to which level will your Pokemon obey you after beating Giovanni?",
      options: ["Level 70", "Level 80", "Level 90", "Level 100"],
      answer: "Level 100"
    },
    {
      question: "After Giovanni disappears, you can use the itemfinder on that spot and find a ...?",
      options: ["Macho Brace", "King's Rock", "Lucky Egg", "Focus Band"],
      answer: "Macho Brace"
    },
    {
      question: "What Pokemon is no longer on Giovanni's team, compared to Pokemon Red/Blue?",
      options: ["Rhyhorn", "Nidoking", "Nidoking", "Kangaskhan"],
      answer: "Kangaskhan"
    }

    // Add more questions for the next level...
  ];

  const questionsLevel41 = [
    {
      question: "Which off the following moves will have no effect if Lorelei's Dewgong uses Safeguard?",
      options: ["Hypnosis", "Horn Drill", "Razor Leaf", "Flamethrower"],
      answer: "Hypnosis"
    },
    {
      question: "Lorelei's second Pokemon is Cloyster, which has a particularly high ...?",
      options: ["Defense", "Special Attack", "Special Defense", "Speed"],
      answer: "Defense"
    },
    {
      question: "Which move does Slowbro use to put your Pokemon to sleep?",
      options: ["Yawn", "Sing", "Sleep Powder", "Hypnosis"],
      answer: "Yawn"
    },
    {
      question: "Jynx is the only Pokemon on Lorelei's team that doesn't have which type?",
      options: ["Water", "Ice", "Psychic", "Ghost"],
      answer: "Water"
    },
    {
      question: "Lapras' attacks can result in various status effects, which is not one of them?",
      options: ["Confusion", "Paralysis", "Freezing", "Poison"],
      answer: "Poison"
    }
    // Add more questions for the next level...
  ];

  const questionsLevel42 = [
    {
      question: "Which Pokemon appears twice on Bruno's team?",
      options: ["Onix", "Machoke", "Machamp", "Hitmonlee"],
      answer: "Onix"
    },
    {
      question: "What ability prevents Onix from taking recoil damage from Double-Edge?",
      options: ["Rock Head", "Sturdy", "Battle Armor", "Sand Veil"],
      answer: "Rock Head"
    },
    {
      question: "Why should you be careful with burning, poisoning or paralyzing Hitmonlee?",
      options: ["Facade will do double damage", "It will use a berry to heal its status", "It doesn't affect Hitmonlee", "Your Pokemon will get the same status effect"],
      answer: "Facade will do double damage"
    },
    {
      question: "Which move does Hitmonchan use to send Physical Attacks back at the opponent with twice the power?",
      options: ["Counter", "Mach Punch", "Mirror Move", "Sky Uppercut"],
      answer: "Counter"
    },
    {
      question: "Which of Machamp's moves does not have the chance to affect Machamp's or your own stats?",
      options: ["Cross Chop", "Rock Tomb", "Bulk Up", "Scary Face"],
      answer: "Cross Chop"
    }
    // Add more questions for the next level...
  ];

  const questionsLevel43 = [
    {
      question: "What move(s) will Agatha's first Gengar use to frustrate you without immediately doing damage?",
      options: ["Toxic", "Double Team", "Confuse Ray", "All of them"],
      answer: "All of them"
    },
    {
      question: "Which of Haunter's moves is useless without using Hypnosis first?",
      options: ["Dream Eater", "Curse", "Shadow Punch", "Lick"],
      answer: "Dream Eater"
    },
    {
      question: "Why would it be a good idea to have a Pecha berry equipped against Golbat?",
      options: ["To heal after getting poisoned from Poison Fang", "To heal confusion after it uses Confuse Ray", "It prevents flinching after it uses Bite", "It restores HP if you're close to fainting"],
      answer: "To heal after getting poisoned from Poison Fang"
    },
    {
      question: "Arbok also uses a move that could poison you, which one?",
      options: ["Poison Fang", "Poison Jab", "Poison Sting", "Sludge Bomb"],
      answer: "Sludge Bomb"
    },
    {
      question: "What item is the second Gengar holding to restore its HP?",
      options: ["Sitrus Berry", "Hyper Potion", "Lum Berry", "Max Potion"],
      answer: "Sitrus Berry"
    }
    // Add more questions for the next level...
  ];

  const questionsLevel44 = [
    {
      question: "What's Lance's 'only' Pokemon that doesn't have the Flying type?",
      options: ["Dragonair", "Gyarados", "Aerodactyl", "Dragonite"],
      answer: "Dragonair"
    },
    {
      question: "Blizzard will be super effective against each of Lance's Pokemon, except?",
      options: ["Dragonair", "Aerodactyl", "Dragonite", "Gyarados"],
      answer: "Gyarados"
    },
    {
      question: "Aerodactyl's Ancient Power has a chance to increase it's stats except for one, which is ...?",
      options: ["HP", "Speed", "Attack", "Special Defense"],
      answer: "HP"
    },
    {
      question: "Dragonair's move Safeguard is pretty useless because of its ...?",
      options: ["Ability; Shed Skin", "High HP", "Held item; Lum Berry", "Low Special Defense"],
      answer: "Ability; Shed Skin"
    },
    {
      question: "Which of the following moves is double super effective on Lance's Dragonite?",
      options: ["Thunder", "Ice Punch", "Solarbeam", "High Jump Kick"],
      answer: "Ice Punch"
    }
    // Add more questions for the next level...
  ];

  const questionsLevel45 = [
    {
      question: "Which of the following statements about the Champion is true, when compared to the Elite 4?",
      options: ["Only trainer with 6 Pokemon", "Only trainer with a Flying type", "Only trainer with a Psychic type", "All of his Pokemon are over level 60"],
      answer: "Only trainer with 6 Pokemon"
    },
    {
      question: "What move does Alakazam use to make up for its horrible defense?",
      options: ["Light Screen", "Future Sight", "Reflect", "Withdraw"],
      answer: "Reflect"
    },
    {
      question: "Rhydon has the ability Rock Head, which prevents recoil damage from its move ...?",
      options: ["Wild Charge", "Take Down", "Double Edge", "Submission"],
      answer: "Take Down"
    },
    {
      question: "Which Pokemon will always be on the Champion's team, no matter which starter you picked?",
      options: ["Alakazam & Rhydon", "Pidgeot & Exeggutor", "Arcanine & Alakazam", "Gyarados & Pidgeot"],
      answer: "Alakazam & Rhydon"
    },
    {
      question: "Which of Pidgeot's move is the worst to get after increasing stats using X items?",
      options: ["Whirlwind", "Aerial Ace", "Sand Attack", "Wing Attack"],
      answer: "Whirlwind"
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
          const messages = [
            "Congratulations, you've aced every question!",
            "Incredible! You've answered all questions correctly!",
            "Outstanding! Every question has been conquered!",
            "Fantastic job! You've mastered every question!",
            "Amazing! You got every question right!",
            "Impressive work! You've aced this part of the quiz!",
            "Brilliant! All questions have been answered flawlessly!",
            "Superb performance! You've nailed every question!",
            "Remarkable! You've flawlessly completed every question!",
            "Terrific job! You've aced every single question!",
            "Exceptional work! Every question has been conquered!",
            "Well done! You've answered every question perfectly!",
            "Phenomenal effort! You've aced all the questions!",
            "Stellar performance! You've conquered every question!",
            "Incredible achievement! Every question is correct!",
            "Bravo! You've mastered all the questions!",
            "Excellent work! You've answered every question right!",
            "Splendid job! You've aced all the questions!",
            "Magnificent! Every question has been answered flawlessly!",
            "Congratulations! You've flawlessly completed every question!"
            // Add the rest of the messages here
        ];

        // Get a random index from the array
            const randomIndex = Math.floor(Math.random() * messages.length);

        // Use the random index to get a random congratulatory message
            const randomMessage = messages[randomIndex];

            resultContainer.innerHTML = `<h2>${randomMessage}</h2>
              <img src="./assets/${gymLeaderImage}" alt="Gym Leader" style="width: 150px; height: auto;" />
              <p>${gymLeaderText}</p>`;
            nextLevelButton.style.display = 'block';
            nextLevelButton.innerText = `Challenge ${gymLeaderName}!`;

        } else {
            // Some questions are incorrect
            resultContainer.innerHTML = `<h2>Oh, you only got ${correctCount} out of ${shuffledQuestions.length} correct.</h2><p>Press restart to try again!</p>`;
            restartButton.style.display = 'block';
        }
    } else if (currentLevel === 5 || currentLevel === 10 || currentLevel === 15 || currentLevel === 20 || currentLevel === 25 || currentLevel === 30 || currentLevel === 35 || currentLevel === 40 || currentLevel === 41 || currentLevel === 42 || currentLevel === 43 || currentLevel === 44 || currentLevel === 45) {
        if (correctCount === shuffledQuestions.length) {
            // All questions are correct
            let gymLeaderBeatenImage;
            let gymLeaderText2;
            nextLevelButton.style.display = 'block';
            nextLevelButton.innerText = "Next Level";
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


            } else if (currentLevel === 41) {
              gymLeaderBeatenImage = 'brunosprite.png';
              gymLeaderText2 = "You've beaten Loreilei<br>Bruno is up next!";
              nextLevelButton.style.display = 'block';
              nextLevelButton.innerText = 'Next Level';
              resultContainer.innerHTML = `<h2>Congratulations!</h2><p>You answered all questions correctly!</p>`;


              // Handle level 41 logic here
            } else if (currentLevel === 42) {
              gymLeaderBeatenImage = 'agathasprite.png';
              gymLeaderText2 = "You've beaten Bruno<br>Agatha is up next! The Ghost-type trainer is next!";
              nextLevelButton.style.display = 'block';
              nextLevelButton.innerText = 'Next Level';
              resultContainer.innerHTML = `<h2>Congratulations!</h2><p>You answered all questions correctly!</p>`;
              // Handle level 41 logic here
            } else if (currentLevel === 43) {
              gymLeaderBeatenImage = 'lancesprite.png';
              gymLeaderText2 = "You've beaten Agatha<br>Lance is up next!";
              nextLevelButton.style.display = 'block';
              nextLevelButton.innerText = 'Next Level';
              resultContainer.innerHTML = `<h2>Congratulations!</h2><p>You answered all questions correctly!</p>`;
              // Handle level 41 logic here
            } else if (currentLevel === 44) {
              gymLeaderBeatenImage = 'championsprite.png';
              gymLeaderText2 = "You've beaten Lance<br>Up next is your final battle against the champion!";
              resultContainer.innerHTML = `<h2>Congratulations!</h2><p>You answered all questions correctly!</p>`;
              nextLevelButton.style.display = 'block';
              nextLevelButton.innerText = 'Next Level';
              // Handle level 41 logic here
            } else if (currentLevel === 45) {
              gymLeaderBeatenImage = 'oak.png';
              gymLeaderText2 = "You have reached the end of the quiz";
              nextLevelButton.style.display = 'none';
              nextLevelButton.innerText = 'Next Level';
              resultContainer.innerHTML = `<h2>You have reached the end of the quiz!</h2>
                                          <p>You answered all questions correctly!</p>`;

              // Select the .wrapper and .bottom .champion divs
              const wrapperDiv = document.querySelector('.wrapper');
              const bottomDiv = document.querySelector('.bottom');

              // Fade out the .wrapper and .bottom .champion divs
              wrapperDiv.style.transition = 'opacity 8s';
              wrapperDiv.style.opacity = '0';

              bottomDiv.style.transition = 'opacity 6s';
              bottomDiv.style.opacity = '0';

              // After 4 seconds (4000 milliseconds), fade out the elements and display the certificate
              setTimeout(() => {
                  // Hide the current elements
                  wrapperDiv.style.display = 'none';
                  bottomDiv.style.display = 'none';

                  // Create a new wrapper for the certificate
                  const certificateWrapper = document.createElement('div');
                  certificateWrapper.classList.add('certwrapper'); // Add class certwrapper
                  certificateWrapper.style.opacity = '0'; // Start with opacity 0
                  certificateWrapper.style.transition = 'opacity 4s'; // Transition for fading in
                  const congratsDiv = document.querySelector('.congrats');
                  congratsDiv.style.display = "block";

                  // Add the certificate message
                  const adverbs = [
                    "Great",
                    "Amazing",
                    "Excellent",
                    "Fantastic",
                    "Outstanding",
                    "Remarkable",
                    "Impressive",
                    "Incredible",
                    "Superb",
                    "Exceptional",
                    "Terrific",
                    "Wonderful",
                    "Magnificent",
                    "Fabulous",
                    "Stellar",
                    "Phenomenal",
                    "Extraordinary",
                    "Brilliant",
                    "Splendid",
                    "Marvelous",
                    "Spectacular",
                    "Awe-inspiring",
                    "Astonishing",
                    "Sensational",
                    "Mind-blowing",
                    "Unforgettable",
                    "Jaw-dropping",
                    "Sublime",
                    "Epic",
                    "Glorious",
                    "Dazzling",
                    "Inspirational",
                    "Unbelievable",
                    "Unreal",
                    "Wondrous",
                    "Unfathomable",
                    "Incomparable",
                    "Unparalleled",
                    "Majestic",
                    "Miraculous",
                    "Surreal",
                    "Enigmatic",
                    "Exhilarating",
                    "Thrilling",
                    "Enthralling",
                    "Electrifying",
                    "Mesmerizing",
                    "Captivating",
                    "Enchanting",
                ];

                // Get a random adverb from the array
                const randomAdverb = adverbs[Math.floor(Math.random() * adverbs.length)];

                const certificateEndings = [
                    "Mastery",
                    "Achievement",
                    "Excellence",
                    "Proficiency",
                    "Distinction",
                    "Aptitude",
                    "Brilliance",
                    "Skill",
                    "Expertise",
                    "Wisdom",
                    "Accomplishment",
                    "Prowess",
                    "Success",
                    "Brilliance",
                    "Ingenuity",
                    "Brilliance",
                    "Valor",
                    "Dedication",
                    "Innovation",
                    "Superiority",
                    "Craftsmanship",
                    "Competence",
                    "Talent",
                    "Artistry",
                    "Virtuosity",
                    "Flair",
                    "Skillfulness",
                    "Precision",
                    "Perfection",
                    "Quality",
                    "Proficiency",
                    "Capability",
                    "Finesse",
                    "Versatility",
                    "Elegance",
                    "Sophistication",
                    "Adequacy",
                    "Genius",
                    "Prodigy",
                    "Fulfillment",
                    "Grandeur",

                ];

                // Get a random index from the array
                const randomIndex = Math.floor(Math.random() * certificateEndings.length);

                // Use the random index to get a random certificate ending
                const randomCertificateEnding = certificateEndings[randomIndex];

                function getRandomInt(min, max) {
                  return Math.floor(Math.random() * (max - min + 1)) + min;
              }


              const randomRoll = Math.random() * 100;
              console.log("Random Roll:", randomRoll);

              // Determine the image folder and range based on the random roll
              let imageFolder;
              let imageNames;
              if (randomRoll <= 50) {
              imageFolder = "./assets/cert/49percent/";
              imageNames = ["10caterpie.png", "11metapod.png", "13weedle.png", "14kakuna.png", "16pidgey.png", "17pidgeotto.png", "19rattata.png", "20raticate.png",
               "21spearow.png", "22fearow.png", "23ekans.png", "27sandshrew.png", "29nidoranf.png", "32nidoranm.png", "35clefairy.png", "37vulpix.png", "39jigglypuff.png",
               "41zubat.png", "43oddish.png", "46paras.png", "48venonat.png", "50diglett.png", "52meowth.png", "54psyduck.png", "56mankey.png", "58growlithe.png",
               "60poliwag.png", "63abra.png", "66machop.png", "69bellsprout.png", "72tentacool.png", "74geodude.png", "77ponyta.png", "79slowpoke.png", "81magnemite.png", "84doduo.png", "86seel.png", "88grimer.png",
               "90shellder.png", "92ghastly.png", "96drowzee.png", "98krabby.png", "100voltorb.png", "102exeggcute.png", "104cubone.png", "109koffing.png", "116horsea.png", "118goldeen.png", "120staryu.png", "129magikarp.png"];
              } else if (randomRoll <= 80) {
              imageFolder = "./assets/cert/30percent/";
              imageNames = ["1bulbasaur.png", "4charmander.png", "7squirtle.png", "12butterfree.png", "15beedrill.png", "18pidgeot.png", "24arbok.png", "25pikachu.png", "26raichu.png", "28sandslash.png",
               "30nidorina.png", "33nidorino.png", "36clefable.png", "40wigglytuff.png", "42golbat.png", "44gloom.png", "47parasect.png", "49venomoth.png", "51dugtrio.png", "53persian.png", "55golduck.png",
               "57primeape.png", "61poliwhirl.png", "64kadabra.png", "70weepinbell.png", "75graveler.png", "82magneton.png", "83farfetchd.png", "85dodrio.png", "87dewgong.png", "89muk.png", "93haunter.png",
               "95onix.png", "97hypno.png", "99kingler.png", "101electrode.png", "103exeggutor.png", "105marowak.png", "110weezing.png", "111rhyhorn.png", "115tangela.png", "117seadra.png", "119seaking.png",
               "121starmie.png", "138omanyte.png", "140kabuto.png", "147dratini.png"];
              } else if (randomRoll <= 95) {
              imageFolder = "./assets/cert/15percent/";
              imageNames = ["2ivysaur.png", "5charmeleon.png", "8wartortle.png", "31nidoqueen.png", "34nidoking.png", "38ninetales.png", "45vileplume.png", "59arcanine.png", "62poliwrath.png", "67machoke.png",
               "71victreebell.png", "73tentacruel.png", "76golem.png", "78rapidash.png", "80slowbro.png", "91cloyster.png", "106hitmonlee.png", "107hitmonchan.png", "108lickitung.png", "112rhydon.png",
               "122mrmime.png", "130gyarados.png", "132ditto.png", "133eevee.png", "139omastar.png", "141kabutops.png", "148dragonair.png"]; // Example image names, replace with actual names
              } else if (randomRoll <= 99) {
              imageFolder = "./assets/cert/5percent/";
              imageNames = ["3venusaur.png", "6charizard.png", "9blastoise.png", "65alakazam.png", "68machamp.png", "94gengar.png", "113chansey.png", "114kangaskhan.png", "123scyther.png", "124jynx.png", "125electabuzz.png", "126magmar.png", "127pinsir.png",
               "128tauros.png", "131lapras.png", "134vaporeon.png", "135jolteon.png", "136flareon.png", "137porygon.png", "142aerodactyl.png", "143snorlax.png", "149dragonite.png"];
              } else {
              imageFolder = "./assets/cert/1percent/";
              imageNames = ["150mewtwo.png", "hooh.png", "151mew.png", "146moltres.png", "144articuno.png", "145zapdos.png", "25pikachurare.png"];
              }

            // Generate a random index within the range of available image names
            const randomImageIndex = getRandomInt(0, imageNames.length - 1);

            // Get the random image name from the array
            const imageName = imageNames[randomImageIndex];

            // Generate the HTML for the image
            const randomImage = `<img src="${imageFolder}${imageName}" style="width: 200px; height: auto" alt="Random Image">`;

            // Certificate text with the random image
            const certificateText = `
            <h2 style="font-family: 'Old English Text MT', serif;">Certificate</h2><br>
            <h3> of<br>${randomAdverb} ${randomCertificateEnding}</h3>
            <p>You've beaten all the Gym Leaders and the Elite Four!</p>
            <div class="badges">
            <img src="./assets/boulder.png" style="width: 50px; height: auto" alt="Boulder Badge">
            <img src="./assets/cascade.png" style="width: 50px; height: auto" alt="Cascade Badge">
            <img src="./assets/thunder.png" style="width: 50px; height: auto" alt="Thunder Badge">
            <img src="./assets/rainbow.png" style="width: 50px; height: auto" alt="Rainbow Badge">
            <img src="./assets/marsh.png" style="width: 50px; height: auto" alt="Marsh Badge">
            <img src="./assets/soul.png" style="width: 50px; height: auto" alt="Soul Badge">
            <img src="./assets/fire.png" style="width: 50px; height: auto" alt="Fire Badge">
            <img src="./assets/earth.png" style="width: 50px; height: auto" alt="Earth Badge">
            </div>
            <p>Completing this Pokémon quiz isn't just about answering questions—it's a journey that reflects your deep connection with the Pokémon universe.</p>
            <p>As you delved into the quiz, you couldn't help but feel a rush of excitement, reminiscent of the countless adventures you've embarked on in the Pokémon games, the thrill of battling opponents in the trading card game, and the nostalgia of watching the animated series. With each question, you found yourself immersed in memories of exploring new regions, capturing elusive Pokémon, and forming bonds with beloved characters.</p>
            <p>Some questions were easy, tapping into your wellspring of Pokémon knowledge effortlessly. Others, however, posed a real challenge, requiring you to dig deep into your memory, carefully analyze the options, and trust your instincts to select the right answer. But through it all, you persevered, fueled by your unwavering determination to conquer every obstacle in your path.</p>
            <div class="signatures">
            <div style="display: inline-block;">
            <p>The Golden Times<br> <img src="./assets/signature2.png" style="width: 100px; height: auto" alt="signature"></p></div>
            ${randomImage}<div style="display: inline-block; min-width: 130px;"><p>${username}</p></div>
            </div>
          `;

                // Set the certificate text to the certificateWrapper
                certificateWrapper.innerHTML = certificateText;

                  // Append the new wrapper to the parent container (articlequiz3 div)
                  const contentDiv = document.querySelector('.content');
                  contentDiv.appendChild(certificateWrapper);

                  // Fade in the new wrapper
                  setTimeout(() => {
                      certificateWrapper.style.opacity = '1';
                  }, 100); // Start fading in after a short delay to ensure the new wrapper is appended
                  certificateWrapper.addEventListener('click', () => {
                    // Store the current HTML content of the body
                    const originalBodyContent = document.body.innerHTML;

                    // Replace the body content with the certificateWrapper content
                    document.body.innerHTML = certificateWrapper.outerHTML;

                    // Print the certificateWrapper content
                    window.print();

                    // Restore the original body content
                    document.body.innerHTML = originalBodyContent;
                    certificateWrapper.addEventListener('click',);

                });
                  // You can also add further actions here, such as downloading the certificate
              }, 4000); // Wait for the transition duration
          }

          let proceedToEliteClicked = false;

          proceedToEliteButton.addEventListener('click', function() {
              if (!proceedToEliteClicked) {
                  // Increment the current level
                  currentLevel++;

                  // Initialize the appropriate quiz level based on the current level
                  // Add your initialization logic here

                  // Reset display styles for question and options containers
                  questionContainer.style.display = "none";
                  optionsContainer.style.display = "none";
                  resultContainer.innerHTML = `<h2>Lorelei is up first!</h2><img src="./assets/loreleisprite.png" style="width: 150px; height: auto" alt="Lorelei Sprite"><br><p>Good luck on the Elite Four, the final part of the quiz!`;
                  proceedToEliteButton.style.display = "";


                  proceedToEliteClicked = true;
              } else {
                  // Initialize quiz level 41
                  currentLevel = 41;
                  // Add initialization logic for level 41 here

                  // Reset display styles for question and options containers
                  questionContainer.style.display = "";
                  optionsContainer.style.display = "";
                  resultContainer.style.display = "none";
                  proceedToEliteButton.style.display = "none";
                  initializeQuizLevel(currentLevel, questionsLevel41);
              }
          });

            resultContainer.innerHTML = `<h2>Congratulations!</h2>
              <img src="./assets/${gymLeaderBeatenImage}" alt="Gym Leader Beaten" style="width: 150px; height: auto;" />
              <p>${gymLeaderText2}</p>`;

        } else {
            // Some questions are incorrect
            resultContainer.innerHTML = `<h2>Oh, you only got ${correctCount} out of ${shuffledQuestions.length} correct.</h2><p>Press restart to try again!</p>`;
            restartButton.style.display = 'block';
            nextLevelButton.innerText = "Next Level";
        }
    } else {
        if (correctCount === shuffledQuestions.length) {
          const messages = [
            "Congratulations, you've aced every question!",
            "Incredible! You've answered all questions correctly!",
            "Outstanding! Every question has been conquered!",
            "Fantastic job! You've mastered every question!",
            "Amazing! You got every question right!",
            "Impressive work! You've aced the entire quiz!",
            "Brilliant! All questions have been answered flawlessly!",
            "Superb performance! You've nailed every question!",
            "Remarkable! You've flawlessly completed every question!",
            "Terrific job! You've aced every single question!",
            "Exceptional work! Every question has been conquered!",
            "Well done! You've answered every question perfectly!",
            "Phenomenal effort! You've aced all the questions!",
            "Stellar performance! You've conquered every question!",
            "Incredible achievement! Every question is correct!",
            "Bravo! You've mastered all the questions!",
            "Excellent work! You've answered every question right!",
            "Splendid job! You've aced all the questions!",
            "Magnificent! Every question has been answered flawlessly!",
            "Congratulations! You've flawlessly completed every question!"
        ];
            // All questions are correct
            const randomIndex = Math.floor(Math.random() * messages.length);

            // Use the random index to get a random congratulatory message
            const randomMessage = messages[randomIndex];

            // Set the congratulatory message to the result container
            resultContainer.innerHTML = `<h2>${randomMessage}</h2><p>You may now proceed to the next level!</p>`;
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

        mergedDiv.style.height = '170px';



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

    mergedDiv.style.height = '170px';



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

    mergedDiv.style.height = '170px';

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

    mergedDiv.style.height = '170px';


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


    mergedDiv.style.height = '170px';


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


    mergedDiv.style.height = '170px';


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


    mergedDiv.style.height = '170px';

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


    mergedDiv.style.height = '25%';


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
    const eliteMemberDivs = Array.from(document.querySelectorAll('.elite-member'));
    const finalHeight = 400; // Final height you want to achieve

    function expandBottomDiv() {
      let height = bottomDiv.clientHeight;
      const interval = setInterval(function() {
          height += 10; // Increment height gradually
          bottomDiv.style.height = height + 'px';
          if (height >= finalHeight) {
              clearInterval(interval); // Stop the interval when final height is reached

              // Show elite member divs one after the other with a delay
              eliteMemberDivs.forEach(function(div, index) {
                  setTimeout(function() {
                      div.style.display = 'inline-block';
                      div.classList.add(`elite-member-${index + 1}`); // Add class based on index
                  }, 500 * index); // Set the delay for each div
              });
          }
      }, 100); // Adjust the interval timing as needed
  }

  expandBottomDiv(); // Call the function to expand the bottom div
}

if (currentLevel === 41 && correctCount === shuffledQuestions.length) {
  const eliteMember1 = document.querySelector('.bottom .elite-member-1');
  eliteMember1.classList.add("elite-member-defeated");
  const eliteMember2 = document.querySelector('.bottom .elite-member-2')
  eliteMember2.style.opacity = '1';
}

if (currentLevel === 42 && correctCount === shuffledQuestions.length) {
  const eliteMember2 = document.querySelector('.bottom .elite-member-2');
  eliteMember2.classList.add("elite-member-defeated");
  const eliteMember3 = document.querySelector('.bottom .elite-member-3')
  eliteMember3.style.opacity = '1';

}

if (currentLevel === 43 && correctCount === shuffledQuestions.length) {
  const eliteMember3 = document.querySelector('.bottom .elite-member-3');
  eliteMember3.classList.add("elite-member-defeated");
  const eliteMember4 = document.querySelector('.bottom .elite-member-4')
  eliteMember4.style.opacity = '1';
}

if (currentLevel === 44 && correctCount === shuffledQuestions.length) {
  const eliteMember4 = document.querySelector('.bottom .elite-member-4');
  eliteMember4.classList.add("elite-member-defeated");

  // Get all elite member elements
  const eliteMembers = document.querySelectorAll('.bottom .elite-member');

  // Apply fade out transition to all elements simultaneously
  eliteMembers.forEach(eliteMember => {
    eliteMember.style.transition = 'opacity 5s';
    eliteMember.style.opacity = '0'; // Fade out the element
});

// Remove all elite member elements from the DOM after fading out
setTimeout(() => {
  eliteMembers.forEach(eliteMember => {
      eliteMember.remove();
 });
  const bottomDiv = document.querySelector('.bottom');

  // Add .champion class to bottomDiv
  bottomDiv.classList.add('champion');

  // Add a delay before fading in the champion div
  setTimeout(() => {
      // Apply transition and opacity to fade in the champion div
      bottomDiv.style.transition = 'opacity 4s';
      bottomDiv.style.opacity = '1';
  }, 50); // Adjust timing to your preference
}, 3000); // Adjust timing to match the previous setTimeout
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
    } else if (currentLevel === 41) {
      initializeQuizLevel(currentLevel, questionsLevel41);
    } else if (currentLevel === 42) {
      initializeQuizLevel(currentLevel, questionsLevel42);
    } else if (currentLevel === 43) {
      initializeQuizLevel(currentLevel, questionsLevel43);

    } else if (currentLevel === 44) {
      initializeQuizLevel(currentLevel, questionsLevel44);
    } else if (currentLevel === 45) {
      initializeQuizLevel(currentLevel, questionsLevel45);

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
      questionContainers[currentLevel - 7].textContent = "Silph Co. 🔒";
    } else if (currentLevel === 22) {
      questionContainers[currentLevel - 8].classList.add("rocket");
      questionContainers[currentLevel - 8].textContent = "Silph Co. ✔"; // Additional message for final level
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
      questionContainers[currentLevel - 9].textContent = "Cycling Road 🔒"; // Additional message for final level

    } else if (currentLevel === 27) {
      questionContainers[currentLevel - 10].classList.add("bike-path");
      questionContainers[currentLevel - 10].textContent = "Cycling Road ✔"; // Additional message for final level
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
      questionContainers[currentLevel - 13].textContent = "Mt. Ember 🔒";
    } else if (currentLevel === 39) {
      questionContainers[currentLevel - 14].classList.add("kindle-road");
      questionContainers[currentLevel - 14].textContent = "Mt. Ember ✔"; // Additional message for final level
      questionContainers[currentLevel - 13].textContent = "Viridian City II 🔒";
    } else if (currentLevel === 40) {
      questionContainers[currentLevel - 14].classList.add("viridian2");
      questionContainers[currentLevel - 14].textContent = "Viridian City II ✔"; // Additional message for final level
      questionContainers[currentLevel - 13].textContent = "Giovanni 🔒";
    }



  });


});
