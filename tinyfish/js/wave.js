//波浪特效
var waveObj=function () {
	 this.x=[];
	 this.y=[];
	 this.alive=[];//false,mom,baby
	 this.r=[];
	 this.from=null;
}
waveObj.prototype.num=15;
waveObj.prototype.init=function () {
	for (var i = 0; i < this.num; i++) {
		this.alive[i]=false; 
		this.r[i]=0;
	}
}
waveObj.prototype.draw=function (){
	ctx1.save();
	ctx1.lineWidth=2;
	ctx1.shadowBlur=10;
	
	for (var i = 0; i < this.num; i++) {
		if (this.alive[i]) {
			this.r[i]+=deltaTime*0.04;//半径和时间成正比
			var alpha=1-this.r[i]/60; //透明度和半径成反比
			ctx1.beginPath();
			ctx1.arc(this.x[i],this.y[i],this.r[i],0,Math.PI*2);
			ctx1.closePath();
			if (this.r[i]>60) {
				this.alive[i]=false; break;
			}
			if (this.from==="mom") {
				ctx1.strokeStyle="rgba(255,255,255,"+alpha+")";
				ctx1.shadowColor="white";				
			} else {
				ctx1.strokeStyle="rgba(203,91,0,"+alpha+")";
				ctx1.shadowColor="rgba(203,91,0,1)";
			}
			ctx1.stroke();
		}
	}
	ctx1.restore();
}
waveObj.prototype.born=function (x,y){
	for (var i = 0; i < this.num; i++){
		if (this.alive[i]===false){
			this.alive[i]=true;
			this.r[i]=20;
			this.x[i]=x;
			this.y[i]=y;
			return //一次只找一个 跳出循环 否则所有符合条件的都会出生出来
		}
	}
}
