
//果实类
var fruitObj =function () {
	this.alive=[];
	this.x=[];
	this.y=[];
	this.aneNo=[];
	this.l=[];
	this.spd=[];
	this.fruitType=[];
	this.orange=new Image();
	this.blue=new Image();
}
fruitObj.prototype.num=30;
//初始化
fruitObj.prototype.init=function () {
	for (var i = 0; i < this.num; i++) {
		this.alive[i]=false;
		this.x[i]=0;
		this.y[i]=0;
		this.aneNo[i]=0;
		this.l[i]=0;
		this.spd[i]=Math.random()*0.01 + 0.005;//[0.005,0.015)
		this.fruitType[i]="";
		//this.born(i);
	}
	this.orange.src="./src/fruit.png"; 
	this.blue.src="./src/blue.png";
}
//绘制
fruitObj.prototype.draw=function () {
	for (var i = 0; i < this.num; i++) {
		if (this.alive[i]) {
			if (this.fruitType[i] ==="blue") {//初始都是黄色果实
				var pic=this.blue;	
			} else {
				var pic=this.orange;
			}

			if (this.l[i] <= 14) {
				var Num=this.aneNo[i];
				this.x[i]=ane.headx[Num];
				this.y[i]=ane.heady[Num];
				this.l[i]+=this.spd[i]*deltaTime;
			}else{
				this.y[i]-=this.spd[i]*5*deltaTime;
			}
			ctx2.drawImage(pic,this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);

			if (this.y[i]<10) {
				this.alive[i] = false;
			}
		}
	
		//ctx2.drawImage(this.orange,this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);

	}
}

//果实被吃掉
fruitObj.prototype.dead=function (i) {
	this.alive[i]=false;
}
//果实生成
fruitObj.prototype.born=function (i) {
	this.aneNo[i]= Math.floor(Math.random()*ane.num);//从哪个海葵上出生
	//this.x[i] = ane.headx[aneID]; //第aneid个海葵的x,y
	//this.y[i] = ane.heady[aneID];
	this.l[i]=0;
	this.alive[i]=true;
	var ran =Math.random();
	if (ran<=0.1) {
		this.fruitType[i]="blue";
	} else {
		this.fruitType[i]="orange";
	}
}
//检查屏幕上果实的数量,如果少于15个 生成
function fruitMonitor() {
	var num= 0;
	for(var i=0;i<fruit.num;i++){
		if(fruit.alive[i]){
			num++;}

	}
	if(num<15){
		sendFruit();
		//return;
	}
	//console.log(num);
}
function sendFruit() {
	for(var i=0;i<fruit.num;i++){
		if(!fruit.alive[i]){
			fruit.born(i);
			return;//return终止函数的执行，一帧只生成一个果实
		} 
	}
	//console.log("test");	
}