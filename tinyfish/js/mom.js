//fishmom 
var momObj=function () {
	this.x;
	this.y;
	this.angle;
	this.bigEye=[];
	this.bigEyeTimer =0;
	this.bigEyeCount =0;
	this.bigEyeInterval =1000;
	//this.bigBody=new Image();
	this.bigTailTimer =0;
	this.bigTailCount =0;
	this.bigTail=[];
	this.momBodyOra=[];
	this.momBodyBlue=[];
	this.momBodyCount=0;
}
momObj.prototype.init=function () {
	this.x=canWidth*0.5;
	this.y=canHeight*0.5;
	this.angle=0;
	//this.bigEye.src="./src/bigEye0.png";
	//this.bigBody.src="./src/bigSwim0.png";
	//this.bigTail.src="./src/bigTail0.png";
	for(var i=0;i<8;i++){
		this.bigTail[i]=new Image();
		this.bigTail[i].src="./src/bigTail"+i+".png";
	}
	for(var i=0;i<2;i++){
		this.bigEye[i]=new Image();
		this.bigEye[i].src="./src/bigEye"+i+".png";
	}
	for (var i = 0; i < 8; i++) {
		this.momBodyOra[i]=new Image();
		this.momBodyBlue[i]=new Image();
		this.momBodyOra[i].src="./src/bigSwim"+i+".png";
		this.momBodyBlue[i].src="./src/bigSwimBlue"+i+".png";
	}
}
momObj.prototype.draw=function () {
	//使this的位置趋向于aim
	this.x = lerpDistance(mx,this.x,0.98);
	this.y = lerpDistance(my,this.y,0.98); 
	//使大鱼的角度趋向鼠标的角度
	var deltaY = this.y-my;
	var deltaX = this.x-mx;
	var beta=Math.atan2(deltaY,deltaX);//-PI,PI
	this.angle=lerpAngle(beta,this.angle,0.85);
	this.bigTailTimer+=deltaTime;
	if (this.bigTailTimer>50) {
		this.bigTailCount=(this.bigTailCount+1)%8;
		this.bigTailTimer=(this.bigTailTimer)%50;
	}
	this.bigEyeTimer+=deltaTime;
	if (this.bigEyeTimer>this.bigEyeInterval) {
		this.bigEyeCount=(this.bigEyeCount+1)%2;
		this.bigEyeTimer=(this.bigEyeTimer)%(this.bigEyeInterval);
		if (this.bigEyeCount===0) {
			this.bigEyeInterval=Math.random()*2000+2500;
		}else{
			this.bigEyeInterval=200;
		}
	}
	ctx1.save();
	ctx1.translate(this.x,this.y);//设置圆心在大鱼眼睛处
	ctx1.rotate(this.angle);
	var bigTailCount=this.bigTailCount;
	var bigEyeCount=this.bigEyeCount;
	var momBodyCount=this.momBodyCount;
	if (data.double==1) { //double为1为黄色果实，2为蓝色果实
		ctx1.drawImage(this.momBodyOra[momBodyCount],-this.momBodyOra[momBodyCount].width*0.5,-this.momBodyOra[momBodyCount].height*0.5);
	} else {
		ctx1.drawImage(this.momBodyBlue[momBodyCount],-this.momBodyBlue[momBodyCount].width*0.5,-this.momBodyBlue[momBodyCount].height*0.5);
	}
	ctx1.drawImage(this.bigTail[bigTailCount],-this.bigTail[bigTailCount].width*0.5+30,-this.bigTail[bigTailCount].height*0.5);
	ctx1.drawImage(this.bigEye[bigEyeCount],-this.bigEye[bigEyeCount].width*0.5,-this.bigEye[bigEyeCount].height*0.5);

	ctx1.restore();
}