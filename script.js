const questions = [
  {
    question: "Экономика нені зерттейді?",
    answers: [
      "Адамдар мен қоғамдардың шектеулі ресурстарды қажеттіліктерді қанағаттандыру үшін пайдалануын",
      "Тек банктер мен ақша қозғалысын",
      "Мемлекеттердің пайда болу тарихын"
    ],
    correct: 0
  },
  {
    question: "Неліктен ресурстар шектеулі деп аталады?",
    answers: [
      "Олардың саны әрқашан нөлге дейін азаяды",
      "Барлық қажеттіліктерді қанағаттандыруға олардың мөлшері жетіспейді",
      "Оларды тек ірі кәсіпорындар пайдалана алады"
    ],
    correct: 1
  },
  {
    question: "Экономиканың негізгі мәселелері қандай?",
    answers: [
      "Заңдарды кім шығарады?",
      "Елдің шекарасы қай жерде?",
      "Нені, қалай және кім үшін өндіру керек?"
    ],
    correct: 2
  },
  {
    question: "Экономиканың негізгі қызметтерінің бірі қандай?",
    answers: [
      "Тауарлар мен қызметтерді өндіруді және таратуды ұйымдастыру",
      "Білім мен денсаулық сақтауды өзгерту",
      "Әр адамның хоббиін анықтау"
    ],
    correct: 0
  },
  {
    question: "Нарықтық экономиканы қандай сипаттайды?",
    answers: [
      "Барлық баға мен өндіріс көлемін бір орталық орган белгілейді",
      "Өндірушілер мен сатып алушылардың шешімдерін сұраныс пен ұсыныс үйлестіреді",
      "Тауарлар тек алдымен келгенге беріледі"
    ],
    correct: 1
  },
  {
    question: "Командалық экономикада шешімдер қалай қабылданады?",
    answers: [
      "Тек жеке сатып алушылар арқылы",
      "Табиғи жағдайларға байланысты",
      "Негізінен мемлекеттік жоспар бойынша"
    ],
    correct: 2
  },
  {
    question: "Аралас экономикаға қандай белгі тән?",
    answers: [
      "Нарықтық механизмдер мен мемлекеттің араласуы",
      "Жеке кәсіпорындар болмайды",
      "Тек өз тұтынуына өндіріледі"
    ],
    correct: 0
  },
  {
    question: "Экономикада өндіру нені білдіреді?",
    answers: [
      "Дүкеннен дайын тауарды сатып алу",
      "Ресурстарды пайдаланып тауарлар мен қызметтерді жасау",
      "Шоттар арасында ақша аудару"
    ],
    correct: 1
  },
  {
    question: "Бөлу дегеніміз не?",
    answers: [
      "Қажеттілікті қанағаттандыру үшін өнімді пайдалану",
      "Кәсіпорында жаңа өнім жасау",
      "Өндірілген тауарды кім және қанша алады деп анықтау"
    ],
    correct: 2
  },
  {
    question: "Экономикада айырбас қалай аталады?",
    answers: [
      "Ақшаға немесе басқа игіліктерге айырбас ретінде тауар мен қызмет алу",
      "Қызметкердің жұмыс орнын ауыстыруы",
      "Өнімді қоймада сақтау"
    ],
    correct: 0
  },
  {
    question: "Тұтыну дегеніміз не?",
    answers: [
      "Шикізатты басқа кәсіпорынға сату",
      "Қажеттіліктерді қанағаттандыру үшін тауар мен қызметтерді пайдалану",
      "Мемлекеттік бюджет кірістерін есептеу"
    ],
    correct: 1
  },
  {
    question: "Кәсіпорынның пайдасы қалай есептеледі?",
    answers: [
      "Барлық өндірілген тауарлардың құны ретінде",
      "Кіріс пен шығыстың айырмасы ретінде",
      "Қызметкерлер санының жалақысына көбейткендегі сомасы ретінде"
    ],
    correct: 1
  },
  {
    question: "Бәсекелестік нарықта қандай рөл атқарады?",
    answers: [
      "Кәсіпорындарды өнімді жақсартуға және тиімді жұмыс істеуге ынталандырады",
      "Сатып алушылардың таңдау мүмкіндігін жояды",
      "Барлық сатушыларға бірдей баға кепілдік береді"
    ],
    correct: 0
  },
  {
    question: "Сұраныс деген не?",
    answers: [
      "Кәсіпорындар шығарған тауар көлемі",
      "Сатып алушылар сатып алуға дайын және қабілетті тауар саны",
      "Сатушылар төлейтін салық сомасы"
    ],
    correct: 1
  },
  {
    question: "Нарықтық ұсыныс дегеніміз не?",
    answers: [
      "Сатып алушының өнімге деген қажеттілігі",
      "Мемлекеттік бюджетке түсетін ақша",
      "Сатушылар сата алатын тауарлардың саны"
    ],
    correct: 2
  },
  {
    question: "Салықтардың негізгі рөлі қандай?",
    answers: [
      "Мемлекеттік қызметтерді қаржыландыру үшін бюджет кірісін қалыптастыру",
      "Әрбір кәсіпорынға пайда кепілдігін беру",
      "Барлық тауар бағасын тұрақтандыру"
    ],
    correct: 0
  },
  {
    question: "Қазақстан экономикасында қандай сектор маңызды?",
    answers: [
      "Мұнай, газ және табиғи ресурстар өндіру",
      "Тек теңіз кемелерін өндіру",
      "Тек кофе өсіру"
    ],
    correct: 0
  },
  {
    question: "Экономиканы әртараптандыру неліктен маңызды?",
    answers: [
      "Сатумен және қызмет көрсетумен шектелуге мүмкіндік береді",
      "Әртүрлі салаларды дамытуға және бір секторға тәуелділікті азайтуға көмектеседі",
      "Табиғи ресурстарды мұқият пайдалану қажет емес етеді"
    ],
    correct: 1
  },
  {
    question: "Еңбек өнімділігі нені білдіреді?",
    answers: [
      "Жалақы алған қызметкерлер саны",
      "Бірлік еңбекке шаққандағы өнім мөлшері",
      "Кәсіпорын аумағының ауданы"
    ],
    correct: 1
  },
  {
    question: "Тұрақты дамудың экономикаға қатысы қандай?",
    answers: [
      "Ұзақ мерзімді әл-ауқат пен ресурстарды үнемді пайдалануды ескеретін экономика",
      "Әрқашан мүмкіндігінше көп өндіру",
      "Экономикалық қызметтен бас тарту"
    ],
    correct: 0
  }
];

const startScreen = document.querySelector("#start-screen");
const questionScreen = document.querySelector("#question-screen");
const resultScreen = document.querySelector("#result-screen");
const startButton = document.querySelector("#start-button");
const restartButton = document.querySelector("#restart-button");
const nextButton = document.querySelector("#next-button");
const answerList = document.querySelector("#answer-list");
const feedback = document.querySelector("#feedback");
const questionTitle = document.querySelector("#question-title");
const questionNumber = document.querySelector("#question-number");
const questionCurrent = document.querySelector("#question-current");
const progressTrack = document.querySelector(".progress-track");
const progressFill = document.querySelector("#progress-fill");
const footerHint = document.querySelector("#footer-hint");

let currentQuestion = 0;
let score = 0;
let hasAnswered = false;

document.querySelector("#question-total").textContent = String(questions.length);

function showScreen(screenToShow) {
  [startScreen, questionScreen, resultScreen].forEach((screen) => {
    const isActive = screen === screenToShow;
    screen.hidden = !isActive;
    screen.classList.toggle("screen--active", isActive);
  });
}

function startQuiz() {
  currentQuestion = 0;
  score = 0;
  hasAnswered = false;
  showScreen(questionScreen);
  renderQuestion();
}

function renderQuestion() {
  const item = questions[currentQuestion];
  const questionIndex = currentQuestion + 1;

  hasAnswered = false;
  questionNumber.textContent = String(questionIndex).padStart(2, "0");
  questionCurrent.textContent = String(questionIndex);
  questionTitle.textContent = item.question;
  progressFill.style.width = `${(currentQuestion / questions.length) * 100}%`;
  progressTrack.setAttribute("aria-valuenow", String(currentQuestion));
  answerList.replaceChildren();
  feedback.hidden = true;
  feedback.classList.remove("is-incorrect");
  feedback.textContent = "";
  nextButton.disabled = true;
  nextButton.innerHTML = currentQuestion === questions.length - 1
    ? 'Нәтижені көру <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    : 'Келесі <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  footerHint.textContent = "Бір жауапты таңдаңыз";

  item.answers.forEach((answer, index) => {
    const option = document.createElement("button");
    const letter = document.createElement("span");
    const text = document.createElement("span");

    option.type = "button";
    option.className = "answer-option";
    letter.className = "answer-letter";
    letter.textContent = ["А", "Б", "В"][index];
    text.className = "answer-text";
    text.textContent = answer;
    option.append(letter, text);
    option.addEventListener("click", () => selectAnswer(index));
    answerList.append(option);
  });
}

function selectAnswer(selectedIndex) {
  if (hasAnswered) return;

  hasAnswered = true;
  const item = questions[currentQuestion];
  const options = answerList.querySelectorAll(".answer-option");
  const isCorrect = selectedIndex === item.correct;

  progressFill.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
  progressTrack.setAttribute("aria-valuenow", String(currentQuestion + 1));
  options.forEach((option, index) => {
    option.disabled = true;
    if (index === item.correct) option.classList.add("is-correct");
    if (index === selectedIndex && !isCorrect) option.classList.add("is-incorrect");
  });

  if (isCorrect) {
    score += 1;
    feedback.textContent = "Дұрыс! Тамаша жауап.";
    footerHint.textContent = "Жауап қабылданды";
  } else {
    feedback.textContent = `Дұрыс емес. Дұрыс жауап: ${item.answers[item.correct]}`;
    feedback.classList.add("is-incorrect");
    footerHint.textContent = "Дұрыс жауап көрсетілді";
  }

  feedback.hidden = false;
  nextButton.disabled = false;
}

function showResult() {
  const percentage = Math.round((score / questions.length) * 100);
  const resultKicker = document.querySelector("#result-kicker");
  const resultDescription = document.querySelector("#result-description");
  const resultIcon = document.querySelector("#result-icon");

  document.querySelector("#score-count").textContent = `${score}/${questions.length}`;
  document.querySelector("#score-percent").textContent = `${percentage}%`;

  if (percentage >= 80) {
    resultIcon.classList.remove("is-learning");
    resultKicker.textContent = "Тамаша жұмыс!";
    resultDescription.textContent = "Сіз экономика негіздерін өте жақсы түсінесіз.";
  } else if (percentage >= 50) {
    resultIcon.classList.remove("is-learning");
    resultKicker.textContent = "Жақсы нәтиже!";
    resultDescription.textContent = "Сіздің біліміңіз жақсы деңгейде. Біліміңізді одан әрі дамыта беріңіз.";
  } else {
    resultIcon.classList.add("is-learning");
    resultKicker.textContent = "Жақсы бастама!";
    resultDescription.textContent = "Нені қайталау керектігін білесіз. Викторинаны қайта өтіп көріңіз!";
  }

  showScreen(resultScreen);
}

function goToNextQuestion() {
  if (!hasAnswered) return;

  if (currentQuestion === questions.length - 1) {
    showResult();
    return;
  }

  currentQuestion += 1;
  renderQuestion();
}

startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", goToNextQuestion);
