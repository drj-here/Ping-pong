// so that js executes when the content is loaded
document.addEventListener("DOMContentLoaded",()=>{
    let table=document.getElementById("ping-pong-table");
    let paddle=document.getElementById("paddle");
    let ball=document.getElementById("ball");
    let ballX=50;
    let ballY=50;
    let score=0;
    let dx=2;
    let dy=2;
   
    function render(){
        document.getElementById("score").innerHTML=score;
    }

   ball.style.left=`${ballX}px`;
   ball.style.top=`${ballY}px`;

   setInterval(function exec(){

    ballX+=dx;
    ballY+=dy;

    ball.style.left=`${ballX}px`;
    ball.style.top=`${ballY}px`;

   if(ballX< paddle.offsetLeft + paddle.offsetWidth && ballY> paddle.offsetTop && 
      ballY- ball.offsetHeight <paddle.offsetTop + paddle.offsetHeight
   ) {dx*=-1; score+=1; render();}

    if(ballX < paddle.offsetLeft + paddle.offsetWidth-4) {
        score=0;
        ballX=50;
        ballY=50;
        dx=2;
        dy=3;
        ballX+=dx;
        ballY+=dy;
        render();
        ball.style.left=`${ballX}px`;
        ball.style.top=`${ballY}px`;
        alert("Game Over :(, Play again!");
    } 

    if(ballX>=table.offsetWidth-ball.offsetWidth || ballX<=0) dx*=-1;
    if(ballY>=table.offsetHeight-ball.offsetHeight || ballY<=0) dy*=-1;
    },1);

   let paddleY=0;
   let pdy=5;

   document.addEventListener("keydown",(event)=>{
    event.preventDefault();
    if(event.keyCode==38){
        if(paddleY>pdy) paddleY+=(-1*pdy);
    }
    else if(event.keyCode==40 && paddleY<table.offsetHeight-paddle.offsetHeight-pdy) { paddleY+=pdy;}

    paddle.style.top=`${paddleY}px`;
   });

   document.addEventListener("mousemove",(event)=>{
    // if(event.clientX > table.offsetLeft + (table.offsetWidth/2)) return;
    let mouseFromTop=event.clientY;
    let tableFromTop=table.offsetTop;
    let mousePoint=mouseFromTop-tableFromTop-paddle.offsetHeight/2;
    paddleY=mousePoint;
    if(paddleY<=0 || paddleY> table.offsetHeight-paddle.offsetHeight) return;
    paddle.style.top=`${paddleY}px`;
   });
});