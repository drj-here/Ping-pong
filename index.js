// so that js executes when the content is loaded
document.addEventListener("DOMContentLoaded",()=>{
    let table=document.getElementById("ping-pong-table");
    let paddle=document.getElementById("paddle");
   let ball=document.getElementById("ball");
   let ballX=50;
   let ballY=50;
   console.log(ball)
   let dx=2;
   let dy=2;
   
   ball.style.left=`${ballX}px`;
   ball.style.top=`${ballY}px`;

   console.log(ballX)
   setInterval(function exec(){

    ballX+=dx;
    ballY+=dy;

    ball.style.left=`${ballX}px`;
   ball.style.top=`${ballY}px`;

    if(ballX>=table.offsetWidth-ball.offsetWidth || ballX<=0) dx*=-1;
    if(ballY>=table.offsetHeight-ball.offsetHeight || ballY<=0) dy*=-1;
   },1);

   let paddleY=0;
   let pdy=5;
   document.addEventListener("keydown",(event)=>{
    if(event.keyCode==38){
        if(paddleY>pdy) paddleY+=(-1*pdy);
    }
    else if(event.keyCode==40 && paddleY<table.offsetHeight-paddle.offsetHeight-pdy) { paddleY+=pdy;}

    paddle.style.top=`${paddleY}px`;
    console.log(paddleY)
   })
});