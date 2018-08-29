window.onload = checkCompletedFactors;

function checkCompletedFactors(){
    var factor1Completed = Cookies.get('Distraction-completed');
    var factor2Completed = Cookies.get('Fatigue-completed');
    var factor3Completed = Cookies.get('Speedy-completed');
    var factor4Completed = Cookies.get('Drunk-completed');
    var generalCompleted = Cookies.get('General-completed');
    var factor1totScore = Cookies.get('factor1score');
    var factor2totScore = Cookies.get('factor2score');
    var factor3totScore = Cookies.get('factor3score');
    var factor4totScore = Cookies.get('factor4score');
    var factor5totScore = Cookies.get('factor5score');
    var totalScore = factor1totScore + factor2totScore + factor3totScore + factor4totScore + factor5totScore;


    if(factor1Completed == 1 && factor2Completed == 1 && factor3Completed == 1 && factor4Completed == 1 && generalCompleted == 1) {
        alert(" Congratulations! Your total score is: " + totalScore);
    }
}
