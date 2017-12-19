var dustObj=function () {
	this.x=[];
	this.y=[];
	this.amp=[];
	this.NO=[];
	this.alpha;
	this.dustPic=[];
}
dustObj.prototype.num=30;
dustObj.prototype.init=function () {
	 for (var i = 0; i < this.num; i++) {
	 	this.x[i]=Math.random()*canWidth;
	 	this.y[i]=Math.random()*canHeight;
	 	this.NO[i]=Math.floor(Math.random()*7);
	 	this.amp[i] = ( 1 + this.NO[i] / 3) * 20;	 //尘埃振幅
	 }
	 this.alpha=0;
	 for(var i=0;i<7;i++){
		this.dustPic[i]=new Image();
		this.dustPic[i].src="./src/dust"+i+".png";
	}
}
dustObj.prototype.draw=function () {
	this.alpha+=deltaTime*0.0008;
	var l=Math.sin(this.alpha);
	for(var i=0;i<this.num;i++){
		var num=this.NO[i%7];
		ctx1.drawImage(this.dustPic[num],this.x[i]+this.amp[i]*l,this.y[i]);
	}
}
