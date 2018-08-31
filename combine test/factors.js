
window.onload = checkCompletedFactors;

function checkCompletedFactors() {
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
    var totalScore = parseInt(factor1totScore || "0") + parseInt(factor2totScore || "0") + parseInt(factor3totScore || "0") +
        parseInt(factor4totScore || "0") + parseInt(factor5totScore || "0");
    const f1Full = parseInt(Cookies.get('factor1scoreFull') || "0")
    const f2Full = parseInt(Cookies.get('factor2scoreFull') || "0")
    const f3Full = parseInt(Cookies.get('factor3scoreFull') || "0")
    const f4Full = parseInt(Cookies.get('factor4scoreFull') || "0")
    const f5Full = parseInt(Cookies.get('factor5scoreFull') || "0")
    const total = f1Full + f2Full + f3Full + f4Full + f5Full

    displayLock()
    if (DistractionCompleted == 1 && FatigueCompleted == 1 && SpeedyCompleted == 1 && Drunkompleted == 1 && GeneralCompleted == 1) {
        swal({
            title: "Good job!",
            text: `You've got ${totalScore} points out of 100!`,
            icon: "success",
            button: "Restart again!",
        })
            .then(() => {
                document.cookie.split(";").forEach(function (c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
                displayLock()
            });
    }
}

function displayLock() {
    var DistractionCompleted = Cookies.get('Distraction-completed');
    var FatigueCompleted = Cookies.get('Fatigue-completed');
    var SpeedyCompleted = Cookies.get('Speedy-completed');
    var Drunkompleted = Cookies.get('Drunk-completed');
    var GeneralCompleted = Cookies.get('General-completed');
    let speedLock = document.getElementById("speed-lock")
    let speedDone = document.getElementById("speed-done")

    if (SpeedyCompleted == undefined) {
        speedDone.style.display = 'none'
        FatigueCompleted == 1 ? speedLock.style.display = 'none' : speedLock.style.display = 'flex'
    } else {
        SpeedyCompleted == 1 ? speedLock.style.display = 'flex' : speedLock.style.display = 'none';
        speedDone.style.display = 'flex';
    }


    let distractionLock = document.getElementById("distraction-lock")
    let distractionDone = document.getElementById("distraction-done")
    if (DistractionCompleted == undefined) {
        distractionDone.style.display = 'none'
        distractionLock.style.display = 'none'
    } else {
        DistractionCompleted == 1 ? distractionLock.style.display = 'flex' : distractionLock.style.display = 'none';
        distractionDone.style.display = 'flex'
    }


    let fatigueLock = document.getElementById("fatigue-lock")
    let fatigueDone = document.getElementById("fatigue-done")
    if (FatigueCompleted == undefined) {
        fatigueDone.style.display = 'none'
        DistractionCompleted == 1 ? fatigueLock.style.display = 'none' : fatigueLock.style.display = 'flex'
    }
    else {
        FatigueCompleted == 1 ? fatigueLock.style.display = 'flex' : fatigueLock.style.display = 'none';
        fatigueDone.style.display = 'flex';
    }


    let generalLock = document.getElementById("general-lock")
    let generalDone = document.getElementById("general-done")
    if (GeneralCompleted == undefined) {
        generalDone.style.display = 'none'
        SpeedyCompleted == 1 ? generalLock.style.display = 'none' : generalLock.style.display = 'flex'
    }
    else {
        GeneralCompleted == 1 ? generalLock.style.display = 'flex' : generalLock.style.display = 'none';
        generalDone.style.display = 'flex';
    }


    let drunkLock = document.getElementById("drunk-lock")
    let drunkDone = document.getElementById("drunk-done")
    if (Drunkompleted == undefined) {
        drunkDone.style.display = 'none'
        GeneralCompleted == 1 ? drunkLock.style.display = 'none' : drunkLock.style.display = 'flex'
    } else {
        Drunkompleted == 1 ? drunkLock.style.display = 'flex' : drunkLock.style.display = 'none';
        drunkDone.style.display = 'flex';
    }

}