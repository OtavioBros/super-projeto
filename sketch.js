const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ryan;
var joao;
var olho, outro;
var boca;
var fogo;
//var bichosG = createGroup();
var rosto, rostoI;

function upload(){
	rostoI = loadImage("cara-de-caveira.png");
}

function setup(){
createCanvas(650, 350);
engine = Engine.create();
world = engine.world;

ryan = createSprite(325, 175, 30, 30);
ryan.shapeColor = "lightblue";

joao = createSprite(325, 167.6, 30, 15);
joao.shapeColor = "darkblue";

olho = createSprite(325, 167.6, 10, 10);
olho.shapeColor = "white";

outro = createSprite(325, 167.6, 5, 5);
outro.shapeColor = "black";

boca = createSprite(325, 182.4, 18, 10);
boca.shapeColor = "grey"

//fogo = createSprite(325, 300, 8, 15);
//fogo.shapeColor = "yellow"

}

function draw(){
background("black");
drawSprites();
Engine.update(engine);

setas();

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

joao.position.x = ryan.position.x;
joao.position.y = ryan.position.y - 7.4;

olho.position.x = ryan.position.x;
olho.position.y = ryan.position.y - 7.4;

outro.position.x = ryan.position.x;
outro.position.y = ryan.position.y - 7.4;

boca.position.x = ryan.position.x;
boca.position.y = ryan.position.y + 7.4;

//fogo.position.x = ryan.position.x;
//fogo.position.y = ryan.position.y + 22.6;

/*if(ryan.isMooving){
		fogo = createSprite(x, y, 8, 15);
		fogo.position.x = ryan.position.x;
		fogo.position.y = ryan.position.y + 15;
}*/

//if(fogo.collide(ryan)){
//colisao();
//}

bichos();

rosto.loadImage("rosto",rostoI);

}

function setas(){
	if(keyIsDown(UP_ARROW)){
		ryan.position.y -= 4

		//fogo = createSprite(325, 300, 8, 15);
		//fogo.shapeColor = "yellow"
		//fogo.position.x = ryan.position.x;
//fogo.position.y = ryan.position.y + 22.6;
	}

	if(keyIsDown(DOWN_ARROW)){
		ryan.position.y += 4

	 // fogo = createSprite(325, 300, 8, 15);
		//fogo.shapeColor = "yellow"
	 // fogo.position.x = ryan.position.x;
//fogo.position.y = ryan.position.y + 22.6;
	}

	if(keyIsDown(RIGHT_ARROW)){
		ryan.position.x += 4

		//fogo = createSprite(325, 300, 8, 15);
		//fogo.shapeColor = "yellow"
	 // fogo.position.x = ryan.position.x;
//fogo.position.y = ryan.position.y + 22.6;
	}

	if(keyIsDown(LEFT_ARROW)){
		ryan.position.x -= 4

		//fogo = createSprite(325, 300, 8, 15);
	 // fogo.shapeColor = "yellow"
		//fogo.position.x = ryan.position.x;
	 //fogo.position.y = ryan.position.y + 22.6;
	}


 
}

function keyReleased(){
	if(keyCode === 32){
		fogo = createSprite(ryan.x, ryan.y, 8, 15);
		fogo.shapeColor = "yellow";
		fogo.position.x = ryan.position.x
		fogo.position.y = ryan.position.y + 22.6
		fogo.velocity.y = 8;
		fogo.lifeTime = 650/8;
		
	}
	 
}

function colisao(){
	
		/*	swal(
			{
				title: `Fim de Jogo!!!`,
				text: "Obrigada por jogar!!",
				imageUrl:
					"https://w7.pngwing.com/pngs/296/534/png-transparent-robot-cute-robot-blue-electronics-humanoid-robot-thumbnail.png",
				imageSize: "150x150",
				confirmButtonText: "Jogar Novamente"
			},
			//function(isConfirm) {
			 // if (isConfirm) {
			 //   location.reload();
			 // }
			//}
	 )*/
 
}

function bichos(){
	if(frameCount %200 === 0){
		var monstro;
		monstro = createSprite(random(30, 570), 410, 50, 50);
		monstro.shapeColor = "green";
		monstro.velocity.y = -2;
		rosto.position.x = monstro.position.x;
		rosto.position.y = monstro.position.y;

		//bichosG.add(monstro);
	}

}