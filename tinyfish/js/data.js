//分值
var dataObj=function () {
	this.fruitNum=0;
	this.double=1;//是否吃到蓝色果实
	this.score=0;
	this.gameOver=false;
	this.alpha=0;
}
/*dataObj.prototype.reset=function () {
	this.fruitNum=0;
	this.double=1;
}*/
dataObj.prototype.draw=function () {
	var w=can1.width;
	var h=can1.height; 
	ctx1.save();
	ctx1.shadowBlur=5;
	ctx1.shadowColor="white";	
	//ctx1.fillText("num: "+this.fruitNum,w*0.5,h-50);
	//ctx1.fillText("double: "+this.double,w*0.5,h-80);
	ctx1.fillText("SCORE: "+this.score,w*0.5,h-20);
	if (this.gameOver) {
		ctx1.save();
		this.alpha+=deltaTime*0.0005;
		if (this.alpha>1) {this.alpha=1;}
		ctx1.fillStyle="rgba(255,255,255,"+this.alpha+")";
		ctx1.fillText("GAMEOVER",w*0.5,h*0.5);
		ctx1.restore();
	}
	ctx1.restore();
}
dataObj.prototype.addScore=function () {
	this.score+=this.fruitNum*10*this.double;
	this.fruitNum=0;
	this.double=1;
}
dataObj.prototype.checkScore=function () {
	if(this.score>=2020){
		var r=confirm("恭喜，小鱼长大啦~\n继续游戏？");	
		if (r===true) {
			this.score=0;
		} else {
			this.score=0;
			this.gameOver=true;
		} 	
	}

}

//console.log("%c我%c爱%c你","font-size:60px;color:red;","font-size:40px;color:blue;","font-size:20px;color:green;")