var score = document.getElementById("scores");
var storage = JSON.parse(localStorage.getItem("highscores")) || [];
var clearScore = document.getElementById("clear");


clearScore.addEventListener("click", function() {
    localStorage.clear();
    return window.location.assign("game.html");
});



function saveData() {
    var initials = document.body.querySelector("#firstName").value;
    var secondsLeft = localStorage.getItem("secondsLeft"); 
    var obj = {secondsLeft, initials};
   

    if(!initials) {
        alert("Please input a name");
        return;
    } else {
    storage.push(obj);
    localStorage.setItem("highscores", JSON.stringify(storage));
    var s = JSON.parse(localStorage.getItem("highscores"));
    document.getElementById("closing").style.display = "block";
    s.forEach(element => {
        score.innerHTML += `<div>${element.initials + " " + element.secondsLeft}</div>`
    });
    document.getElementById("name").style.display = "none";
    }
    
}

var initialsEL = document.getElementById("initialsEnter");

initialsEL.addEventListener("click", saveData);