let questions = [
    {
        "question": "Wer hat HTML erfunden",
        "answer_1": "Robbie Wiliams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "Wei heißt dieSchicht der Atmosphäre, die der Erde am nächsten ist?",
        "answer_1": "Stratosphäre",
        "answer_2": "Mesosphäre",
        "answer_3": "Troposphäre",
        "answer_4": "Thermosphäre",
        "right_answer": 3
    },
    {
        "question": "Wie hoch ist der Eiffelturm",
        "answer_1": "150m",
        "answer_2": "176m",
        "answer_3": "220m",
        "answer_4": "300m",
        "right_answer": 4
    },
    {
        "question": "In welchem Jahr wurde Michael Jackson geboren",
        "answer_1": "1958",
        "answer_2": "1959",
        "answer_3": "1965",
        "answer_4": "1934",
        "right_answer": 1
    },
    {
        "question": "Wer koponierte 'Die Zauberflöte'",
        "answer_1": "Joseph Haydn",
        "answer_2": "Albert Einstein",
        "answer_3": "Johann Sebastian Bach",
        "answer_4": "Wofgang Amadeus Mozart",
        "right_answer": 4
    },
    {
        "question": "Welche Insel gehört nicht zu den Balearischen Inseln",
        "answer_1": "Ibiza",
        "answer_2": "Gran Canaria",
        "answer_3": "Formentera",
        "answer_4": "Cabrera",
        "right_answer": 2
    },
    {
        "question": "Mit welcher Tiergruppe sind die Dinosaurier am engsten verwandt?",
        "answer_1": "Vögel",
        "answer_2": "Affen",
        "answer_3": "Eidechsen",
        "answer_4": "Alligatoren",
        "right_answer": 1
    }
];

let rightQuestions = 0;
let currentQuestion = 0;

let AUDIO_SUCCESS = new Audio('sounds/right.mp3');
let AUDIO_FAIL = new Audio('sounds/wrong.mp3');

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;


    showQuestion();
}

function showQuestion() {

    if (currentQuestion >= questions.length) {
        // show End Screen
        document.getElementById('end-screen').style = '';
        document.getElementById('questionBody').style = 'display: none;';

        document.getElementById('amount-of-questions').innerHTML = questions.length; // gibt die am Ende die gesamten Fragen an!
        document.getElementById('amount-of-right-questions').innerHTML = rightQuestions;
        document.getElementById('header-img').src = 'img/trophy.png';
    } else { // show question

        let percent = (currentQuestion + 1) / questions.length;
        percent = Math.round(percent * 100); // Math.round rundet die Zahl auf

        document.getElementById('progress-bar').innerHTML = `${percent} %`;
        document.getElementById('progress-bar').style = `width: ${percent}%;`;


        let question = questions[currentQuestion];

        document.getElementById('question-number').innerHTML = currentQuestion + 1;

        document.getElementById('questiontext').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);

    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) { // Richtige Frage beantwortet
        document.getElementById(selection).parentNode.classList.add('bg-success'); // Übergeordneter Div-Container wird angesprochen!
        AUDIO_SUCCESS.play();
        rightQuestions++; // gibt am Ende die richtigen Antworten aus
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger'); // Übergeordneter Div-Container wird angesprochen!
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        AUDIO_FAIL.play();
    }
    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    currentQuestion++; // erhöcht von 0 auf 1
    document.getElementById('next-button').disabled = true;
    resetAnswerButton();
    showQuestion();
}

function resetAnswerButton() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function restartGame() {
    document.getElementById('header-img').src = 'img/pencil.jpg';
    document.getElementById('questionBody').style = ''; // questionBody wieder anzeigen
    document.getElementById('end-screen').style = 'display: none;'; // Endscreen ausblenden

    rightQuestions = 0;
    currentQuestion = 0;


    init();
}