var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;

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


function openModal(){
	modal.style.display = 'block';
}


function closeModal(){
	modal.style.display = 'none';
}

function loadQuestion (questionIndex) {
	var q = questions[questionIndex];
	questionEl.textContent = (questionIndex + 1) + '.' + q.question;
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;
	opt3.textContent = q.option3;
};

function loadNextQuestion (){
	var selectedOption = document.querySelector('input[type=radio]:checked');

	if(!selectedOption){
		alert('Please selct your answer');	
	}

	if(selectedOption) {
		modalBtn.style.display = 'block';
	}

	var answer = selectedOption.value;
	if(questions[currentQuestion].answer == answer){

		score += 10;
	}

	selectedOption.checked = false;
	currentQuestion++;
	if (currentQuestion == totQuestions - 1){
		nextButton.textContent = 'This is your last question!';
	}

	if (currentQuestion == totQuestions){
		container.style.display = 'none';
		resultCont.style.display = '';
		resultCont.textContent = 'Your score is: ' + score + '/50';
		return;
	}

	loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);

