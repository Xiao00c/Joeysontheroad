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
	var selectedOption = document.querySelector('input[type=radio]:checked');
	if(!selectedOption){
		alert('Please selct your answer');	
	}

	if(selectedOption) {var currentQuestion = 0;
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
		
		
		function openModal() {
			var selectedOption = document.querySelector('input[type=radio]:checked');
			if (!selectedOption) {
				alert('Please selct your answer');
			}
		
			if (selectedOption) {
				modal.style.display = 'block';
				var selectedOptionValue = document.querySelectorAll('input[type=radio]:checked')[0].value;
				var index = selectedOptionValue - 1;
				// console.log(index);
				fetch('https://apilearningapi.azurewebsites.net/api/questions')
					.then(response => response.json())
					.then(json => document.querySelector('#explainationText').textContent = json[currentQuestion].answers[index].answer_desc)
					.catch(error => console.error(error));
			}
		}
		
		
		function closeModal() {
			modal.style.display = 'none';
		}
		
		function loadQuestion(questionIndex) {
			fetch('https://apilearningapi.azurewebsites.net/api/questions')
				.then(response => response.json())
				.then(json => {
					questionEl.textContent = (questionIndex + 1) + '.' + json[0].question_desc;
					opt1.textContent = json[0].answers[0].answer_desc;
					opt2.textContent = json[0].answers[1].answer_desc;
					opt3.textContent = json[0].answers[2].answer_desc;
				})
				.catch(error => console.error(error));
		
			showProgress((questionIndex + 1));
		}
		
		function loadNextQuestion(questionIndex) {
			currentQuestion++;
			closeModal();
		
			// if submitted the last questions, show complete message.
			if (currentQuestion == totQuestions) {
				container.style.display = 'none';
				resultCont.style.display = 'block';
				var resultText = document.createTextNode('Your score is: ' + score + '/50');
				var resultTextDiv = document.getElementById('resultText');
				resultTextDiv.appendChild(resultText);
				Cookies.set('Distraction-completed', '1');
				Cookies.set('factor4score',score);
				return;
			}
		
			// Begin fetching questions
			fetch('https://apilearningapi.azurewebsites.net/api/questions')
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
		
			selectedOption.checked = false;
			if (currentQuestion == totQuestions - 1) {
				nextButton.textContent = 'This is your last question!';
			}
		
		
		}
		
		function showProgress(questionIndex) {
			var q = questions[questionIndex] + 1;
			var currentQuestionNumber = questionIndex + 1;
			var element = document.getElementById("progress");
			element.innerHTML = "Qustion " + questionIndex + " of " + totQuestions;
		}
		
		loadQuestion(currentQuestion);
		
		
		
		
		fetch("abc.com/api/questions?postcode=" + postcode)
			.then(response => response.json())
			.then(json => {
				console.log(json)
			})
		modal.style.display = 'block';
	}
}

function closeModal(){
	modal.style.display = 'none';
}

function loadQuestion (questionIndex) {
	var q = questions[questionIndex]+1;
	questionEl.textContent = (questionIndex + 1) + '.' + q.question;
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;
	opt3.textContent = q.option3;
	showProgress((questionIndex + 1));
}

function loadNextQuestion (questionIndex){
	closeModal();
	var q = questions[questionIndex]+1;
	var selectedOption = document.querySelector('input[type=radio]:checked');
	showProgress((questionIndex + 1));
	
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
		resultCont.style.display = 'block';
		resultCont.textContent = 'Your score is: ' + score + '/50';
		Cookies.set('Drunk-completed', '1');
		return;
	}

	loadQuestion(currentQuestion);
}

function showProgress(questionIndex){
	var q = questions[questionIndex]+1;
	var currentQuestionNumber = questionIndex + 1;
	var element = document.getElementById("progress");
	element.innerHTML = "Qustion " + questionIndex + " of " + totQuestions; 
}

loadQuestion(currentQuestion);

// .... questions from server;
// for(var i=0; i<question.length; i++){
// 	loadNextQuestion(i);
// }


// number = questions.length;
// 假设总共有38道题

// function clickNext(){
// 	if（目前===第number道题){
// 		//在cookies里面将factor1=1
// 	}

// }


// // 主页面
// // 每次页面加载,检查是不是全部做完
// if factor1===1&& factor2===1 & ..............
// 	弹窗恭喜




