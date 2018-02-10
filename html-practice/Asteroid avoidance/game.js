$(document).ready(function(){
	var canvas=$("#gameCanvas");
	var context=canvas.get(0).getContext("2d");
	//画布尺寸
	var canvasWidth=canvas.width();
	var canvasHeight=canvas.height();
	//游戏设置
	var playerGame;
	//创建小行星
	var asteroids;
	var numAsteroids;
	var player;
	var arrowUp;
	var arrowRight;
	var arrowDown;
	//游戏UI
	var ui=$("#gameUI");
	var uiIntro=$("#gameIntro");
	var uiStats=$("#gameStats");
	var uiComplete=$("#gameComplete");
	var uiPlay=$("#gamePlay");
	var uiReset=$(".gameReset");
	var uiScore=$(".gameScore");
	var Asteroid=function(x,y,radius,vX){
		this.x=x;
		this.y=y;
		this.radius=radius;
		this.vX=vX;
	}
	var Player=function(x,y){
		this.x=x;
		this.y=y;
		this.width=24;
		this.height=24;
		this.halfWidth=this.width/2;
		this.halfHeight=this.height/2;
		this.vX=0;
		this.vY=0;
		this.moveRight=false;
		this.moveUp=false;
		this.moveDown=false;
		this.flameLength=20;
	}
	//重置和启动游戏
	function startGame(){
		//重置游戏状态
		uiScore.html("0");
		uiStats.show();
		//初始游戏设置
		playerGame=false;
		asteroids=new Array();
		numAsteroids=10;
		player=new Player(150,canvasHeight/2);
		for(var i=0;i<numAsteroids;i++){
			var radius=5+(Math.random()*10);
			var x=canvasWidth+radius+Math.floor(Math.random()*canvasWidth);
			var y=Math.floor(Math.random()*canvasHeight);
			var vX=-5-(Math.random()*5);
			asteroids.push(new Asteroid(x,y,radius,vX))
		}
		$(window).keydown(function(e){
			var keyCode=e.keyCode;
			if(!playerGame){
				playerGame=true;
				animate();
			}
			if(keyCode==arrowRight){
				player.moveRight=true;
			}else if(keyCode==arrowUp){
				player.moveUp=true;
			}else if(keyCode==arrowDown){
				player.moveDown=true;
			}
		});
		$(window).keyup(function(e){
			var keyCode=e.keyCode;
			if(keyCode==arrowRight){
				player.moveRight=false;
			}else if(keyCode==arrowUp){
				player.moveUp=false;
			}else if(keyCode==arrowDown){
				player.moveDown=false;
			}
		});
		//开始动画循环
		animate();
	}
	function init(){
		uiStats.hide();
		uiComplete.hide();
		uiPlay.click(function(e){
			e.preventDefault();
			uiIntro.hide();
			startGame();
		});
		uiReset.click(function(e){
			e.preventDefault();
			uiComplete.hide();
			$(window).unbind("keyup");
			$(window).unbind("keydown");
			startGame();
		});
	}
	function animate(){
		context.clearRect(0,0,canvasWidth,canvasHeight);
		var asteroidsLength=asteroids.length;
		for(var i=0;i<asteroidsLength;i++){
			var tmpAsteriod=asteroids[i];
			tmpAsteriod.x+=tmpAsteriod.vX;
			//循环利用小行星
			if(tmpAsteriod.x+tmpAsteriod.radius<0){
				tmpAsteriod.radius=5+(Math.random()*10);
				tmpAsteriod.x=canvasWidth+tmpAsteriod.radius;
				tmpAsteriod.y=Math.floor(Math.random()*canvasHeight);
				tmpAsteriod.vX=-5-(Math.random()*5);
			}

			context.fillStyle="rgb(255,255,255)";
			context.beginPath();
			context.arc(tmpAsteriod.x,tmpAsteriod.y,tmpAsteriod.radius,0,Math.PI*2,true);
			context.closePath();
			context.fill();
			player.vX=0;
			player.vY=0;
			if(player.moveRight){
				player.vX=3;
			}else{
				player.vX=-3;
			}
			if(player.moveUp){
				player.vY=-3;
			}
			if(player.moveDown){
				player.vY=3;
			}
			player.x+=player.vX;
			player.y+=player.vY;

			//添加边界
			if(player.x-player.halfWidth<20){
				player.x=20+player.halfWidth;
			}else if(player.x+player.halfWidth>canvasWidth-20){
				player.x=canvasWidth-20-player.halfWidth;
			}
			if(player.y-player.halfHeight<20){
				player.y=20+player.halfHeight;
			}else if(player.y+player.halfHeight>canvasHeight-20){
				player.y=canvasHeight-20-player.halfHeight;
			}
			//绘制火箭尾巴
			if(player.moveRight){
				context.save();
				context.translate(player.x-player.halfWidth,player.y);
				if(player.flameLength==20){
					player.flameLength=15;
				}else{
					player.flameLength=20;
				}
				context.fillStyle="orange";
				context.beginPath();
				context.moveTo(0,-5);
				context.lineTo(-player.flameLength,0);
				context.lineTo(0,5);
				context.closePath();
				context.fill();
				context.restore();
			}
			//绘制火箭
			context.fillStyle="rgb(255,0,0)";
			context.beginPath();
			context.moveTo(player.x+player.halfWidth,player.y);
			context.lineTo(player.x-player.halfWidth,player.y-player.halfHeight);
			context.lineTo(player.x-player.halfWidth,player.y+player.halfHeight);
			context.closePath();
			context.fill();
		}
		if(playerGame){
			setTimeout(animate,33);
		}
	}
	init();
});