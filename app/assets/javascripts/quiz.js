document.addEventListener("DOMContentLoaded", function() {
  let currentLevel = 1; // Initialize current level

  const questionContainers = [
    document.querySelector('.left-square.square1'),
    document.querySelector('.left-square.square2'),
    document.querySelector('.left-square.square3'),
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
      question: "Which Pokemon of the following Pokemon CAN'T be chosen as a starter?",
      options: ["Bulbasaur", "Charmander", "Rattata", "Squirtle"],
      answer: "Rattata"
    },
    {
      question: "Which Pokémon will your rival choose if you take Charmander?",
      options: ["Squirtle", "Bulbasaur", "Eevee", "Pikachu"],
      answer: "Squirtle"
    }
    // Add more questions here...
  ];

  const questionsLevel2 = [
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

  const questionsLevel3 = [
    {
      question: "Helwefwefweflo?",
      options: ["Bye", "Hi", "Henlo", "Ciao"],
      answer: "Henlo"
    },
    {
      question: "Whicwefwefh Pokémon evolves into Steelix?",
      options: ["Onix", "Skarmory", "Diglett", "Registeel"],
      answer: "Onix"
    },
    {
      question: "Whiwefwefh Pokémon can be found on Route 1 in Gen 1?",
      options: ["Ekans & Rattata", "Rattata & Pidgey", "Geodude & Diglett", "Onix & Oddish"],
      answer: "Rattata & Pidgey"
    },
    {
      question: "Whatwefwf type of Pokemon is Koffing?",
      options: ["Water", "Poison", "Grass", "Flying"],
      answer: "Poison"
    },
    {
      question: "Whiwefwefch ball is best for catching low level Pokemon?",
      options: ["Net ball", "Nest ball", "Master ball", "Love ball"],
      answer: "Nest ball"
    }
    // Add more questions for the next level...
  ];

  const questionsLevel4 = [
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
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
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
      levelCompleteText.textContent = "Pallet Town Complete!"; // Additional message for level 1
    } else if (currentLevel === 3) {
      questionContainers[currentLevel - 2].style.backgroundColor = "red"; // Level 2 complete, red background
      levelCompleteText.textContent = "Viridian City Complete!"; // Additional message for level 2
    } else if (currentLevel === 4) {
      questionContainers[currentLevel - 2].style.backgroundColor = "blue"; // Level 3 complete, blue background
      levelCompleteText.textContent = "Level 3 Complete!"; // Additional message for level 3
    } else if (currentLevel === 5) {
      questionContainers[currentLevel - 2].style.backgroundColor = "orange"; // Level 4 complete, orange background
      levelCompleteText.textContent = "Level 4 Complete!"; // Additional message for level 4
    } else if (currentLevel === 6) {
      questionContainers[currentLevel - 2].style.backgroundColor = "purple"; // Level 5 complete, purple background
      levelCompleteText.textContent = "Final Level Complete!"; // Additional message for final level
    }

    // Add the completion message to the completed level container
    questionContainers[currentLevel - 2].appendChild(levelCompleteText);
    levelCompleteText.classList.add('level-complete');
  });
});
