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
    {
      question: "Which Professor resides in Pallet Town?",
      options: ["Professor Oak", "Professor Elm", "Professor Birch", "Professor Willow"],
      answer: "Professor Oak"
    },
    {
      question: "In which region is Pallet Town located?",
      options: ["Kanto", "Johto", "Hoenn", "Sinnoh"],
      answer: "Kanto"
    },
    {
      question: "Which of the following Pokemon CAN'T be chosen as a starter?",
      options: ["Bulbasaur", "Charmander", "Rattata", "Squirtle"],
      answer: "Rattata"
    },
    {
      question: "Which Pokémon will your rival choose if you take Charmander?",
      options: ["Squirtle", "Bulbasaur", "Eevee", "Pikachu"],
      answer: "Squirtle"
    }
    // MORE QUESTIONS HERE LVL 1
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
    // MORE QUESTIONS HERE LVL 2
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
      question: "WHich of the following moves would be super effective against Sandshrew?",
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
      question: "Hello?",
      options: ["Bye", "Hi", "Henlo", "Ciao"],
      answer: "Henlo"
    },
    {
      question: "Which Pokémon evolves into Steelix?",
      options: ["Onix", "Skarmory", "Diglett", "Registeel"],
      answer: "Onix"
    },
    {
      question: "Which Pokémon can be found on Route 1 in Gen 1?",
      options: ["Ekans & Rattata", "Rattata & Pidgey", "Geodude & Diglett", "Onix & Oddish"],
      answer: "Rattata & Pidgey"
    },
    {
      question: "What type of Pokemon is Koffing?",
      options: ["Water", "Poison", "Grass", "Flying"],
      answer: "Poison"
    },
    {
      question: "Which ball is best for catching low level Pokemon?",
      options: ["Net ball", "Nest ball", "Master ball", "Love ball"],
      answer: "Nest ball"
    }
    // Add more questions for the next level...
  ];

  const questionsLevel7 = [
    {
      question: "Hello?",
      options: ["Bye", "Hi", "Henlo", "Ciao"],
      answer: "Henlo"
    },
    {
      question: "Which Pokémon evolves into Steelix?",
      options: ["Onix", "Skarmory", "Diglett", "Registeel"],
      answer: "Onix"
    },
    {
      question: "Which Pokémon can be found on Route 1 in Gen 1?",
      options: ["Ekans & Rattata", "Rattata & Pidgey", "Geodude & Diglett", "Onix & Oddish"],
      answer: "Rattata & Pidgey"
    },
    {
      question: "What type of Pokemon is Koffing?",
      options: ["Water", "Poison", "Grass", "Flying"],
      answer: "Poison"
    },
    {
      question: "Which ball is best for catching low level Pokemon?",
      options: ["Net ball", "Nest ball", "Master ball", "Love ball"],
      answer: "Nest ball"
    }
    // Add more questions for the next level...
  ];

  const questionsLevel8 = [
    {
      question: "Hello?",
      options: ["Bye", "Hi", "Henlo", "Ciao"],
      answer: "Henlo"
    },
    {
      question: "Which Pokémon evolves into Steelix?",
      options: ["Onix", "Skarmory", "Diglett", "Registeel"],
      answer: "Onix"
    },
    {
      question: "Which Pokémon can be found on Route 1 in Gen 1?",
      options: ["Ekans & Rattata", "Rattata & Pidgey", "Geodude & Diglett", "Onix & Oddish"],
      answer: "Rattata & Pidgey"
    },
    {
      question: "What type of Pokemon is Koffing?",
      options: ["Water", "Poison", "Grass", "Flying"],
      answer: "Poison"
    },
    {
      question: "Which ball is best for catching low level Pokemon?",
      options: ["Net ball", "Nest ball", "Master ball", "Love ball"],
      answer: "Nest ball"
    }
    // Add more questions for the next level...
  ];

  const questionsLevel9 = [
    {
      question: "Hello?",
      options: ["Bye", "Hi", "Henlo", "Ciao"],
      answer: "Henlo"
    },
    {
      question: "Which Pokémon evolves into Steelix?",
      options: ["Onix", "Skarmory", "Diglett", "Registeel"],
      answer: "Onix"
    },
    {
      question: "Which Pokémon can be found on Route 1 in Gen 1?",
      options: ["Ekans & Rattata", "Rattata & Pidgey", "Geodude & Diglett", "Onix & Oddish"],
      answer: "Rattata & Pidgey"
    },
    {
      question: "What type of Pokemon is Koffing?",
      options: ["Water", "Poison", "Grass", "Flying"],
      answer: "Poison"
    },
    {
      question: "Which ball is best for catching low level Pokemon?",
      options: ["Net ball", "Nest ball", "Master ball", "Love ball"],
      answer: "Nest ball"
    }
    // Add more questions for the next level...
  ];

  const questionsLevel10 = [
    {
      question: "Hello?",
      options: ["Bye", "Hi", "Henlo", "Ciao"],
      answer: "Henlo"
    },
    {
      question: "Which Pokémon evolves into Steelix?",
      options: ["Onix", "Skarmory", "Diglett", "Registeel"],
      answer: "Onix"
    },
    {
      question: "Which Pokémon can be found on Route 1 in Gen 1?",
      options: ["Ekans & Rattata", "Rattata & Pidgey", "Geodude & Diglett", "Onix & Oddish"],
      answer: "Rattata & Pidgey"
    },
    {
      question: "What type of Pokemon is Koffing?",
      options: ["Water", "Poison", "Grass", "Flying"],
      answer: "Poison"
    },
    {
      question: "Which ball is best for catching low level Pokemon?",
      options: ["Net ball", "Nest ball", "Master ball", "Love ball"],
      answer: "Nest ball"
    }
    // Add more questions for the next level...
  ];

  const questionsLevel11 = [
    {
      question: "Hello?",
      options: ["Bye", "Hi", "Henlo", "Ciao"],
      answer: "Henlo"
    },
    {
      question: "Which Pokémon evolves into Steelix?",
      options: ["Onix", "Skarmory", "Diglett", "Registeel"],
      answer: "Onix"
    },
    {
      question: "Which Pokémon can be found on Route 1 in Gen 1?",
      options: ["Ekans & Rattata", "Rattata & Pidgey", "Geodude & Diglett", "Onix & Oddish"],
      answer: "Rattata & Pidgey"
    },
    {
      question: "What type of Pokemon is Koffing?",
      options: ["Water", "Poison", "Grass", "Flying"],
      answer: "Poison"
    },
    {
      question: "Which ball is best for catching low level Pokemon?",
      options: ["Net ball", "Nest ball", "Master ball", "Love ball"],
      answer: "Nest ball"
    }
    // Add more questions for the next level...
  ];

  const questionsLevel12 = [
    {
      question: "Hello?",
      options: ["Bye", "Hi", "Henlo", "Ciao"],
      answer: "Henlo"
    },
    {
      question: "Which Pokémon evolves into Steelix?",
      options: ["Onix", "Skarmory", "Diglett", "Registeel"],
      answer: "Onix"
    },
    {
      question: "Which Pokémon can be found on Route 1 in Gen 1?",
      options: ["Ekans & Rattata", "Rattata & Pidgey", "Geodude & Diglett", "Onix & Oddish"],
      answer: "Rattata & Pidgey"
    },
    {
      question: "What type of Pokemon is Koffing?",
      options: ["Water", "Poison", "Grass", "Flying"],
      answer: "Poison"
    },
    {
      question: "Which ball is best for catching low level Pokemon?",
      options: ["Net ball", "Nest ball", "Master ball", "Love ball"],
      answer: "Nest ball"
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

    // Check if the current level is questionsLevel4
    if (currentLevel === 4) {
      if (correctCount === shuffledQuestions.length) {
        // All questions are correct
        resultContainer.innerHTML = `<h2>Awesome, you got all questions correct! Get ready for your first gym leader!</h2><p>You may now proceed to the next level!</p>`;
        nextLevelButton.style.display = 'block';
      } else {
        // Some questions are incorrect
        resultContainer.innerHTML = `<h2>Oh, you only got ${correctCount} out of ${shuffledQuestions.length} correct.</h2><p>Press restart to try again!</p>`;
        restartButton.style.display = 'block';
      }
    } else {
      if (correctCount === shuffledQuestions.length) {
        // All questions are correct
        resultContainer.innerHTML = `<h2>Awesome, you got all questions correct!</h2><p>You may now proceed to the next level!</p>`;
        nextLevelButton.style.display = 'block';
      } else {
        // Some questions are incorrect
        resultContainer.innerHTML = `<h2>Oh, you only got ${correctCount} out of ${shuffledQuestions.length} correct.</h2><p>Press restart to try again!</p>`;
        restartButton.style.display = 'block';
      }
    }
      // Check if the current level is 6
  if (currentLevel === 5) {
    // Merge divs square1, square2, and square3 into one div
    const mergedDiv = document.createElement('div');
    mergedDiv.classList.add('left-square', 'merged');
    // Set height of merged div to accommodate the height of three divs
    const squareHeight = document.querySelector('.left-square.square1').clientHeight;
    mergedDiv.style.height = (squareHeight * 3) + 'px';
    const square1Content = document.querySelector('.left-square.square1').innerHTML;
    const square2Content = document.querySelector('.left-square.square2').innerHTML;
    const square3Content = document.querySelector('.left-square.square3').innerHTML;
    mergedDiv.innerHTML = '<p>Brock Defeated!</p>';

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
    square4.innerHTML = '';
    square4.style.backgroundColor = '';
    const square5 = document.querySelector('.left-square.square5');
    square5.innerHTML = '';
    square5.style.backgroundColor = '';

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
    }

    // Add more conditions for additional levels if needed

    // Reset display styles for question and options containers
    questionContainer.style.display = '';
    optionsContainer.style.display = '';
    resultContainer.style.display = "none";

    const levelCompleteText = document.createElement('p');
    levelCompleteText.textContent = `Level ${currentLevel - 1} Complete!`; // Display the completed level number

    // Set background color based on the completed level and add additional messages
    if (currentLevel === 2) {
      questionContainers[currentLevel - 2].style.backgroundColor = "green"; // Level 1 complete, green background
      levelCompleteText.textContent = "Pallet Town ✔"; // Additional message for level 1
    } else if (currentLevel === 3) {
      questionContainers[currentLevel - 2].style.backgroundColor = "red"; // Level 2 complete, red background
      levelCompleteText.textContent = "Viridian City ✔"; // Additional message for level 2
    } else if (currentLevel === 4) {
      questionContainers[currentLevel - 2].style.backgroundColor = "blue"; // Level 3 complete, blue background
      levelCompleteText.textContent = "Viridian Forest ✔"; // Additional message for level 3
    } else if (currentLevel === 5) {
      questionContainers[currentLevel - 2].style.backgroundColor = "orange"; // Level 4 complete, orange background
      levelCompleteText.textContent = "Pewter City ✔"; // Additional message for level 4
    } else if (currentLevel === 6) {
      questionContainers[currentLevel - 2].style.backgroundColor = ""; // Level 5 complete, purple background
      levelCompleteText.textContent = ""; // Additional message for final level
    } else if (currentLevel === 7) {
      questionContainers[currentLevel - 2].style.backgroundColor = "gold"; // Level 6 complete, purple background
      levelCompleteText.textContent = "Brock Defeated!"; // Additional message for final level
    } else if (currentLevel === 8) {
      questionContainers[currentLevel - 2].style.backgroundColor = "pink"; // Level 6 complete, purple background
      levelCompleteText.textContent = "Brock Defeated!";
    }

    // Add the completion message to the completed level container
    questionContainers[currentLevel - 2].appendChild(levelCompleteText);
    levelCompleteText.classList.add('level-complete');
  });
});
