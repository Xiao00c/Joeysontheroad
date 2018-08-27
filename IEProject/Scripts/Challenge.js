var currentEvent;
var maxEvent = 1;

init();

function init() {
    currentEvent = 0;
    document.getElementById("question").innerHTML = '@Model[0].question_desc';
    document.getElementById("opt1").innerHTML = '@Model[0].answers[0].answer_desc';
    document.getElementById("opt2").innerHTML = '@Model[0].answers[1].answer_desc';
    document.getElementById("opt3").innerHTML = '@Model[0].answers[2].answer_desc';

}

function next() {
    if (currentEvent < maxEvent) {
        currentEvent = currentEvent + 1;
    }
    document.getElementById("scenarioDescription").innerHTML = data[currentEvent].scenarioDescription;
    document.getElementById("choice1").innerHTML = data[currentEvent].choice1.chioceText;
    document.getElementById("choice2").innerHTML = data[currentEvent].choice2.chioceText;
    document.getElementById("choice3").innerHTML = data[currentEvent].choice3.chioceText;

}

function clickChoice1() {
    if (data[currentEvent].choice1.chioceResult) {
        //alert("good work!");
        document.getElementById("popUpWindow").style.display = "block";
        next();
    } else {
        alert("Sorry, you lost.");
        init();
    }
}

function clickChoice2() {
    if (data[currentEvent].choice2.chioceResult) {
        //alert("good work!");
        document.getElementById("popUpWindow").style.display = "block";
        next();
    } else {
        alert("Sorry, you lost.");
        init();
    }
}

function clickChoice3() {
    if (data[currentEvent].choice3.chioceResult) {
        //alert("good work!");
        document.getElementById("popUpWindow").style.display = "block";
        next();
    } else {
        alert("Sorry, you lost.");
        init();
    }
}

function continueChallenge() {
    document.getElementById("popUpWindow").style.display = "none";
}
