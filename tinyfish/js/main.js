
var can1;
var can2;
var ctx1;
var ctx2;
var canWidth;
var canHeight;
var lastTime;//上一帧执行的时间
var deltaTime;//两帧时间差
var bgPic=new Image();
var ane;
var fruit;
var mom;
var baby;
var mx,my;
var data;
var wave;
var dust;

document.body.onload=game;
function game() {
	lastTime=Date.now();
	init();	
	deltaTime =0;
	gameloop();
}
function init() {
	can1=document.getElementById('canvas1');//fish,ui
	ctx1=can1.getContext("2d");
	can2=document.getElementById('canvas2');//background,ane,fruit
	ctx2=can2.getContext("2d");
	can1.addEventListener("mousemove",onMouseMove,false);
	bgPic.src="./src/background.jpg";
	canWidth=can1.width;
	canHeight=can1.height;
	ane=new aneObj();
	ane.init();
	fruit=new fruitObj();
	fruit.init();
	mom=new momObj();
	mom.init();
	baby=new babyObj();
	baby.init();
	mx=canWidth*0.5;
	my=canHeight*0.5;
	data=new dataObj();
	ctx1.fillStyle ="white";
	ctx1.font="30px Verdana";
	ctx1.textAlign="center";
	wave=new waveObj();
	wave.init();
	dust=new dustObj;
	dust.init();	
}
function gameloop() {
	window.requestAnimFrame(gameloop);//根据机器的性能决定动画间隔
	var now=Date.now();
	deltaTime=now-lastTime;
	lastTime=now;
	if (deltaTime>20) deltaTime=20;
	drawBackground();
	ane.draw();
	fruitMonitor();
	fruit.draw(); 
	ctx1.clearRect(0,0,canWidth,canHeight);//清除上一帧的内容
	mom.draw();
	momFruitsCollision();
	baby.draw();
	momBabyCollision();
	data.draw();
	wave.draw();
	dust.draw();
	data.checkScore();
	//console.log("&"+deltaTime);
}
function onMouseMove(e) {
	if (e.offsetX || e.layerX) {
		mx=e.offsetX ==undefined ? e.layerX : e.offsetX;
		my=e.offsetY ==undefined ? e.layerY : e.offsetY;
		//console.log(mx,my);
	}
}