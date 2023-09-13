var buttoncolor = ["green", 'red', 'yellow', 'blue'];
var gamePattern =[];
var usserChosenPattern =[];
var starte= false;
var level = 0;

$(document).keypress( function(){
    if(!starte){
        $("#level-title").text("Level "+ level);
        newSequence();
        starte=true;
    }
});


$('.btn').click(function(){
    var userChosenColour=$(this).attr('id');
    usserChosenPattern.push(userChosenColour);
    animatePress(userChosenColour);
    pla(userChosenColour);
    checkAnswer(usserChosenPattern.length-1);

})



function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]===usserChosenPattern[currentLevel]){
        if(usserChosenPattern.length===gamePattern.length){
            setTimeout(function () {
                newSequence();
              }, 1000);
        }
    }else{
        pla(wrong);
        $('body').addClass('game-over');
        $("#level-title").text("game over");
        setTimeout(function () {
            $("body").removeClass("game-over");
          }, 200);
          startOver();

    }
}

function newSequence(){
    var ran = Math.floor(Math.random()*4)+1;
    var randomChoosenColor = buttoncolor[ran];
    gamePattern.push(randomChoosenColor);
    $("#"+randomChoosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    pla(randomChoosenColor);
    
}




function pla(ne){
    var audio = new Audio('./sounds'+ne+'.mp3'); 
    audio.play();
}
function startOver(){
    level =0;
    gamePattern = [];
    starte=false;
}
function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
  }