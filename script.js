function hide() {
    inhale = document.getElementById('inhale').value;
    hold1 = document.getElementById('hold1').value;
    exale = document.getElementById('exhale').value;
    hold2 = document.getElementById('hold2').value;
    document.getElementsByClassName('hidee')[0].style.visibility="hidden";  
    document.getElementsByClassName('hidee')[1].style.visibility="hidden";
    document.getElementsByClassName('hidee')[2].style.visibility="hidden";
    document.getElementsByClassName('hidee')[3].style.visibility="hidden";

}

function start() {

hide();
console.log(inhale,hold1,exale,hold2);
document.getElementById('app').innerHTML = "<p class='yoo' id='timer'></p><br><p class='yoo' id='name'></p><br><button id='butt1' class='yoo' onclick=stop();>Stop</button>"
startTimer();
console.log("Starting Inhale")
document.getElementsByClassName('yoo')[0].style.visibility="visible";
    document.getElementsByClassName('yoo')[1].style.visibility="visible";
}


//TIMER START
function startTimer() {
    

    timerInhale = setInterval(() => {
        document.getElementById('timer').innerHTML = inhale + "s"
        document.getElementById('name').innerHTML = "Inhale"
        if(inhale == 0) {
            clearInterval(timerInhale)
            startHold1();
            console.log("Starting Hold1")
        }
        else {
            inhale = inhale - 1;

            
        }
    }, 1000);
}

function startHold1() {

    timerHold1 = setInterval(() => {

        if(hold1 == 0) {
            clearInterval(timerHold1)
            startExhale();
            console.log("Starting Exale")
        }
        else {
            document.getElementById('timer').innerHTML = hold1 + "s"
            document.getElementById('name').innerHTML = "Hold"
            hold1 = hold1 - 1;
    
            
        }
    }, 1000);
}
function startExhale() {

    timerExhale = setInterval(() => {

        if(exale == 0) {
            clearInterval(timerExhale)
            startHold2();
            console.log("Starting Hold2")
        }
        else {
            document.getElementById('timer').innerHTML = exale + "s"
            document.getElementById('name').innerHTML = "Exhale"
            exale = exale - 1;
    
            
        }
    }, 1000);
}

function startHold2() {

    timerHold2 = setInterval(() => {

        if(hold2 == 0) {
            clearInterval(timerHold2)
            startStop();
            console.log("Stopping")
        }
        else {
            document.getElementById('timer').innerHTML = hold2 + "s"
            document.getElementById('name').innerHTML = "Hold"
            hold2 = hold2 - 1;
    
            
        }
    }, 1000);
}


function startStop() {
    document.getElementsByClassName('hidee')[0].style.visibility="visible";
    document.getElementsByClassName('hidee')[1].style.visibility="visible";
    document.getElementsByClassName('hidee')[2].style.visibility="visible";
    document.getElementsByClassName('hidee')[3].style.visibility="visible";
    document.getElementsByClassName('yoo')[0].style.visibility="hidden";
    document.getElementsByClassName('yoo')[1].style.visibility="hidden";
}