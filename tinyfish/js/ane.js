
//海葵类
var aneObj =function () {
	this.rootx=[];
	this.headx=[];
	this.heady=[];
	this.amp=[];
	this.alpha=0;//正弦角度
}
aneObj.prototype.num=50;
aneObj.prototype.init=function () {
	var h=can1.height;
	for(var i=0;i<this.num;i++){
		this.rootx[i]=i*16+Math.random()*20;
		this.headx[i]=this.rootx[i];
		this.heady[i]=h-250+Math.random()*50;
		this.amp[i]=Math.random()*30+35;//振幅
	}	
}

aneObj.prototype.draw=function () {
	this.alpha+=deltaTime*0.0006;//摆动速度
	var l=Math.sin(this.alpha); //[-1,1]
	ctx2.save();
	ctx2.globalAlpha=0.6;
	ctx2.lineWidth=20;
	ctx2.lineCap="round";
	ctx2.strokeStyle="#3b154e";
	for(var i=0;i<this.num;i++){
		ctx2.beginPath();
		ctx2.moveTo(this.rootx[i],canHeight);
		this.headx[i]=this.rootx[i]+l*this.amp[i]; //没一帧headx的值变化
		ctx2.quadraticCurveTo(this.rootx[i],canHeight-110,this.headx[i],this.heady[i]);
		ctx2.stroke();
	}
	ctx2.restore();
}  