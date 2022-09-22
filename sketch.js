const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ryan;
var joao;
var olho, outro;
var boca;
var fogo, fogoI, fogoG;
var bichosG
var rosto, rostoI, rostoG;
var END = 0;
var PLAY = 1;
var gameState = PLAY
var restartI, restart, gameover, gameoverI;
var monstro

function preload(){
	rostoI = loadImage("cara-de-caveira.png");
	restartI = loadImage("restart.png");
	gameoverI = loadImage("gameOver.png");
	joao = loadImage("robo.png");
	fogoI = loadImage("bomb-g129ef7289_1280.png");
}

function setup(){
createCanvas(650, 350);
engine = Engine.create();
world = engine.world;

ryan = createSprite(325, 175, 30, 30);


/*ryan = createSprite(325, 175, 30, 30);
ryan.shapeColor = "lightblue";

joao = createSprite(325, 167.6, 30, 15);
joao.shapeColor = "darkblue";

olho = createSprite(325, 167.6, 10, 10);
olho.shapeColor = "white";

outro = createSprite(325, 167.6, 5, 5);
outro.shapeColor = "black";

boca = createSprite(325, 182.4, 18, 10);
boca.shapeColor = "red"*/

//fogo = createSprite(325, 300, 8, 15);


bichosG = new Group();
rostoG = new Group();
fogoG = new Group();

}

function draw(){
	background("darkred");
	drawSprites();
	Engine.update(engine);

	

	if( ryan.position.x > 690){
			ryan.position.x = -40
	};

	if( ryan.position.x < -40){
			ryan.position.x = 690
	};

	if( ryan.position.y > 390){
			ryan.position.y = -40
	};

	if( ryan.position.y < -40){
			ryan.position.y = 390
	};

	/*joao.position.x = ryan.position.x;
	joao.position.y = ryan.position.y - 7.4;

	olho.position.x = ryan.position.x;
	olho.position.y = ryan.position.y - 7.4;

	outro.position.x = ryan.position.x;
	outro.position.y = ryan.position.y - 7.4;

	boca.position.x = ryan.position.x;
	boca.position.y = ryan.position.y + 7.4;*/

	restart = createSprite(325, 175,);
	restart.addImage(restartI);
	restart.scale = 0.5;

	gameover = createSprite(325, 140);
	gameover.addImage(gameoverI);
	gameover.scale = 0.5;

	ryan.addImage(joao);
	ryan.scale = 0.08;

	//fogo.position.x = ryan.position.x;
	//fogo.position.y = ryan.position.y + 22.6;

	/*if(ryan.isMooving){
			fogo = createSprite(x, y, 8, 15);
			fogo.position.x = ryan.position.x;
			fogo.position.y = ryan.position.y + 15;
	}*/



	if(gameState == PLAY){
		bichos();
		setas();

		bichosG.lifetimeEach = 5
		rostoG.lifetimeEach = 50

		
		if(bichosG.isTouching(ryan)){
			gameState = END;
		}

		restart.visible = false
		gameover.visible = false
	}
	else if(gameState == END){
		bichosG.velocityY = 0;
		rostoG.velocityY = 0;

		ryan.velocityY = 0;
		ryan.velocityX = 0;

		bichosG.setVelocityYEach(0);
    rostoG.setVelocityYEach(0);

		gameover.visible = true;
		restart.visible = true;
	}

	if(mousePressedOver(restart)){
		gameState = PLAY;
    gameover.visible = false
    restart.visible = false
    bichosG.destroyEach();
	  rostoG.destroyEach();
    ryan.position.x = 325;
	  ryan.position.y = 175;
	}

}

function reset(){
  gameState = PLAY
  gameover.position.x = 650
  restart.visible = false
  bichosG.destroyEach();
	rostoG.destroyEach();
  ryan.position.x = 325;
	ryan.position.y = 175;

}

function setas(){
	if(keyIsDown(UP_ARROW)){
		ryan.position.y -= 5
	}

	if(keyIsDown(DOWN_ARROW)){
		ryan.position.y += 5
	}

	if(keyIsDown(RIGHT_ARROW)){
		ryan.position.x += 5
	}

	if(keyIsDown(LEFT_ARROW)){
		ryan.position.x -= 5
	}


 
}

function keyReleased(){
	if(keyCode === 32){
		fogo = createSprite(ryan.x, ryan.y,);
		fogo.position.x = ryan.position.x
		fogo.position.y = ryan.position.y + 22.6
		fogo.velocity.y = 7;
		fogo.lifeTime = 650/8;
		fogo.addImage(fogoI);
		fogo.scale = 0.02
		fogoG.add(fogo);
		
	}
	 
}


function bichos(){
	if(frameCount %200 === 0){
		monstro = createSprite(random(30, 570), 410, 50, 50);
		monstro.shapeColor = "green";
		monstro.velocity.y = -2;
		rosto = createSprite(monstro.x, monstro.y);
		rosto.position.x = monstro.position.x;
		rosto.position.y = monstro.position.y;
		rosto.velocityY = monstro.velocityY;
		rosto.addImage(rostoI)
		rosto.scale = 0.095

		rostoG.add(rosto);
		

		bichosG.add(monstro);
		

		
		
	}

}

function colisao(){
	
	monstro.destroy();
	fogoG.destroy();

}
