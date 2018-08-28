window.onload = checkCompletedFactors;

function checkCompletedFactors(){
    var factor1Completed = Cookies.get('Distraction-completed');
    var factor2Completed = Cookies.get('Fatigue-completed');
    var factor3Completed = Cookies.get('Speedy-completed');
    var factor4Completed = Cookies.get('Drunk-completed');

    if(factor1Completed != 1 || factor2Completed != 1 || factor3Completed != 1 || factor4Completed != 1) {
        alert(" Go on your challenge, send joey home safely! ");
    }

    if(factor1Completed == 1 && factor2Completed == 1) {
        alert(" Congratulations! You pass ALL :) ");
    }
}
