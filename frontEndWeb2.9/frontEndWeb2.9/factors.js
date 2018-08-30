window.onload = checkCompletedFactors;

function checkCompletedFactors(){
    var DistractionCompleted = Cookies.get('Distraction-completed');
    var FatigueCompleted = Cookies.get('Fatigue-completed');
    var SpeedyCompleted = Cookies.get('Speedy-completed');
    var Drunkompleted = Cookies.get('Drunk-completed');
    var GeneralCompleted = Cookies.get('General-completed');
    var factor1totScore = Cookies.get('factor1score');
    var factor2totScore = Cookies.get('factor2score');
    var factor3totScore = Cookies.get('factor3score');
    var factor4totScore = Cookies.get('factor4score');
    var factor5totScore = Cookies.get('factor5score');
    var totalScore = factor1totScore + factor2totScore + factor3totScore + factor4totScore + factor5totScore;


    if(DistractionCompleted == 1 && FatigueCompleted == 1 && SpeedyCompleted == 1 && Drunkompleted == 1 && GeneralCompleted == 1) {
        alert(" Congratulations! Your total score is: " + totalScore + "/"  );
    }
}
