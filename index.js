var userClickedPattern=[];
var gamePattern=[];
var buttonColors=["red","blue","green","yellow"];
var level=0;

$(".btn").click(function(){
    
    var userChosenColor= $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    // nextSequence();
    checkAnswer(userClickedPattern.length -1);

    
});


function nextSequence(){
    level+=1;
    
        $("h1").text("Level "+level);

    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColor=buttonColors[randomNumber];

gamePattern.push(randomChosenColor);
$("#"+randomChosenColor).fadeOut(100).fadeIn(100);

playSound(randomChosenColor);
userClickedPattern=[];


}

function playSound(name){
    var audio = new Audio(name+'.mp3');
    audio.play();  
}
function animatePress(currentColor){
    $("."+currentColor).addClass("pressed");
    setTimeout(function(){$("."+currentColor).removeClass("pressed")},100);

}

function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel]==gamePattern[currentLevel])
    {
        if(userClickedPattern.length===gamePattern.length){
            
           setTimeout(function (){
            nextSequence();
           },1000);
        }
        
    }
    else{
        if(level>0){$("h1").text("Game Over! Press any key to Play again");
        playSound("wrong");
        level=0;
        gamePattern=[];
        userClickedPattern=[];
        $("body").addClass("game-over");
        setTimeout(function(){$("body").removeClass("game-over");},200);
        restartGame();
    }

    }

}
function restartGame(){$(document).on("keydown",function(){
    if(level===0){    
    nextSequence();}
});
    
}
$(document).on("keydown",function(){
    if(level===0){    
    nextSequence();}
});