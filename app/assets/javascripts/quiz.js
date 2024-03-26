document.addEventListener("DOMContentLoaded", function() {
  let questions = [
    {
      question: "Which Pokémon is known as the 'Electric Mouse'?",
      options: ["Pikachu", "Jigglypuff", "Charmander", "Squirtle"],
      answer: "Pikachu"
    },
    {
      question: "Which Pokémon evolves into Charizard?",
      options: ["Squirtle", "Bulbasaur", "Charmander", "Pidgey"],
      answer: "Charmander"
    },
    {
      question: "Which Pokémon is not a legendary bird in Generation I?",
      options: ["Zapdos", "Articuno", "Moltres", "Mewtwo"],
      answer: "Mewtwo"
    },
    {
      question: "What is the type of Eevee's evolution into Vaporeon?",
      options: ["Water", "Fire", "Electric", "Psychic"],
      answer: "Water"
    },
    {
      question: "Which Pokémon can Mega Evolve into Mega Blastoise?",
      options: ["Squirtle", "Wartortle", "Blastoise", "Charizard"],
      answer: "Blastoise"
    },
    // Add more questions here...
  ];

  let shuffledQuestions;
  let userAnswers = [];

  const questionContainer = document.getElementById('question-container');
  const optionsContainer = document.getElementById('options');
  const nextButton = document.getElementById('next-btn');
  const resultContainer = document.getElementById('result');
  const restartButton = document.getElementById('restart-btn');

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function initializeQuiz() {
    // Shuffle questions
    shuffledQuestions = shuffleArray(questions.map((question, index) => ({ ...question, originalIndex: index })));
    userAnswers = [];
    showQuestion(0);
    restartButton.style.display = 'none';
  }

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

  function showResult() {
    questionContainer.style.display = 'none';
    optionsContainer.style.display = 'none';
    nextButton.style.display = 'none';
    resultContainer.style.display = 'block';
    resultContainer.innerHTML = `<h2>Your Result:</h2>`;
    shuffledQuestions.forEach((question, index) => {
      const originalQuestion = questions[question.originalIndex];
      const resultItem = document.createElement('p');
      resultItem.innerHTML = `<strong>Question ${index + 1}: </strong>${originalQuestion.answer === userAnswers[index] ? 'Correct' : 'Incorrect'}`;
      resultContainer.appendChild(resultItem);
    });
    restartButton.style.display = 'block';
  }

  initializeQuiz();

  restartButton.addEventListener('click', function() {
    location.reload(); // Reload the page to restart the quiz
  });
});
