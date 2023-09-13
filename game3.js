var buttonColor=["green", 'red', 'yellow', 'blue'];
var newPattern=[];

function userChosenColor(){
    
}

function sequence(){
    var randomNumber=Math.floor(Math.random()*4)+1;
    var randomChosenColor=buttonColor[randomNumber];
    newPattern.push(randomChosenColor);
    alert(randomChosenColor);
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}

function playSound(np){
    var audio = new Audio("./sounds"+np+".mp3");
    audio.play();
}
