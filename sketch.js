var canvas;

var contestantCount,database, quiz, question ,contestant ; 
var gameState = 0;

function setup(){
  database = firebase.database();
  canvas = createCanvas(850,400);

quiz=new Quiz();
quiz.getState();
 quiz.start();
 contestant=new Contestant();
}


function draw(){
  background("pink");

  if(contestantCount===4){
    quiz.update(1);

  }
  if(gameState===1){
    clear();
  quiz.play ();
  }
  
}
