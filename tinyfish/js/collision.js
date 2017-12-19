//碰撞检测 gameover后停止检测
//判断大鱼和果实的距离
function momFruitsCollision() {
	if (!data.gameOver) {
		for (var i = 0; i < fruit.num; i++) {
			if (fruit.alive[i]) {
				var l=calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);//两点间平方值
				if (l<900) {
					fruit.dead(i);
					data.fruitNum++;
					mom.momBodyCount++;
					if (mom.momBodyCount>7) {
						mom.momBodyCount=7;
					}
					if (fruit.fruitType[i] ==="blue") {
						data.double=2;
					}
					wave.from="mom";
					wave.born(fruit.x[i],fruit.y[i]);
					
				}
			}
		}
	}
	
}
//大鱼和小鱼的距离
function momBabyCollision() {
	if (data.fruitNum>0 && !data.gameOver) {
		var l=calLength2(mom.x,mom.y,baby.x,baby.y);
		if (l<900) {
			//小鱼身体颜色恢复
			baby.babyBodyCount=0;
			//data.reset();
			mom.momBodyCount=0;
			data.addScore();
			wave.from="baby";
			wave.born(baby.x,baby.y);
			
		}
	}
}