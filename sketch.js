var direction=0;
var posx=50;
var posy=50;
var flag=0;
var elwid=50;
var elhi=50;
var xadd=0;
var speed=5;
var screenwidth=600;
var screenhight=400;
var score=0;
var highscore=0;

function setallzero(){
   direction=0;
   posx=50;
   posy=50;
   flag=0;
   elwid=50;
   elhi=50;
   xadd=0;
   score=0;
   speed=5;
}

function setup() {
  screenwidth=windowWidth;
  screenhight=windowHeight;
  createCanvas(screenwidth, screenhight);
  textSize(25);
  highscore=getItem("hiscore");
}

function draw() {
  background(150,250,50);
  fill(250,10,10);
  if(flag===1){
    ellipse(posx,posy,elwid,elhi);
    if(direction===0){
      posy=posy+speed+(posy*0.01);
    }
    else{
      posy=posy-speed-(posy*0.01);
    }
    if(posy<50){
      direction=0;
    }
    if(posy>screenhight){
      if(score>highscore){
        highscore=score;
      }
      flag=0;
    }
    if(posx-elwid<0 || posx+elwid>screenwidth){
      xadd=-xadd;
    }

    posx=posx+xadd;
    speed=speed+score*0.0005;
    

  }
  else{
    textSize(24);
    text("Highest Score: "+highscore,100,100)
    text("Click to start new game",100,200)
    textSize(15);    
    text("Click on ball to keep it in screen",100,300)
  }
    textSize(24);
    text("score:"+score,screenwidth-screenwidth/3,50)
}

function mousePressed(){
  

  if(flag===0){
    storeItem("hiscore",highscore);
    setallzero();
    flag=1;
  }
  else{
    console.log(score);
    if(mouseX>posx-elwid && mouseX<posx+elwid && mouseY>posy-elhi && mouseY<posy+elhi ){
      direction=1;
      xadd=(posx-mouseX)*0.1;
      score=score+1;
    }
  }


}
