
var currentQuestion = 0;
var score = 0;
var totQuestions;
var total = 0;

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');

var modal = document.getElementById('modal');
var modalBtn = document.getElementById('modalButton');
var closeBtn = document.getElementById('closeBtn');

// window.onbeforeunload = null
window.onbeforeunload = function (e) {
    return false
}

function openModal() {
    var selectedOption = document.querySelector('input[type=radio]:checked');
    if (!selectedOption) {
        alert('Please selct your answer');
    }

    if (selectedOption) {
        modal.style.display = 'block';
        var selectedOptionValue = document.querySelectorAll('input[type=radio]:checked')[0].value;
        var index = selectedOptionValue - 1;

        fetch('https://apilearningapi.azurewebsites.net/api/questions/byFactor/distraction')
            .then(response => response.json())
            .then(json => document.querySelector('#explainationText').textContent = json[currentQuestion].answers[index].explanation)
            .catch(error => console.error(error));
    }
}


function closeModal() {
    modal.style.display = 'none';
}

function loadQuestion(questionIndex) {
    fetch('https://apilearningapi.azurewebsites.net/api/questions/byFactor/distraction')
        .then(response => response.json())
        .then(json => {
            totQuestions = json.length;
            questionEl.textContent = (questionIndex + 1) + '.' + json[0].question_desc;
            opt1.textContent = json[0].answers[0].answer_desc;
            opt2.textContent = json[0].answers[1].answer_desc;
            opt3.textContent = json[0].answers[2].answer_desc;
        })
        .catch(error => console.error(error));
    showProgress(currentQuestion + 1);
}

function loadNextQuestion(questionIndex) {
    currentQuestion++;
    closeModal();

    // Begin fetching questions
    fetch('https://apilearningapi.azurewebsites.net/api/questions/byFactor/distraction')
        .then(response => response.json())
        .then(json => {
            // begin
            var question = json[currentQuestion];
            questionEl.textContent = (currentQuestion + 1) + '.' + question.question_desc;
            opt1.textContent = question.answers[0].answer_desc;
            opt2.textContent = question.answers[1].answer_desc;
            opt3.textContent = question.answers[2].answer_desc;
            // end
        })
        .catch(error => console.error(error));
    var q = questions[questionIndex] + 1;
    var selectedOption = document.querySelector('input[type=radio]:checked');
    showProgress(currentQuestion + 1);

    var answer = selectedOption.value;
    if (questions[currentQuestion].answer == answer) {
        score += 10;
    }
    total += 10;
    selectedOption.checked = false;
    if (currentQuestion == totQuestions - 1) {
        nextButton.textContent = 'This is your last question!';
    }

    // if submitted the last questions, show complete message.
    if (currentQuestion >= totQuestions) {
        container.style.display = 'none';
        resultCont.style.display = 'block';
        var resultText = document.createTextNode('Your score is: ' + score + '/' + totQuestions * 10);
        var resultTextDiv = document.getElementById('resultText');
        resultTextDiv.appendChild(resultText);
        Cookies.set('Distraction-completed', '1');
        Cookies.set('factor1score', score);
        Cookies.set('factor1scoreFull', total);
        return;
    }
}

function showProgress(questionIndex) {
    fetch('https://apilearningapi.azurewebsites.net/api/questions/byFactor/distraction')
        .then(response => response.json())
        .then(json => {
            totQuestions = json.length;
            var element = document.getElementById("progress");
            element.innerHTML = "Qustion " + questionIndex + " of " + totQuestions;
        })
        .catch(error => console.error(error));
}

loadQuestion(currentQuestion);

