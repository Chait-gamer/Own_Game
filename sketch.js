var cowboyrun2, cowboyrun3, cowboyrun4, cowboyrun5, cowboyrun6, cowboyrun7, cowboyrun8;
var cowboygirl2, cowboygirl3, cowboygirl4, cowboygirl5, cowboygirl6, cowboygirl7, cowboygirl8;
var cowboyJUMP1, cowboyJUMP2, cowboyJUMP3, cowboyJUMP4, cowboyJUMP5, cowboyJUMP6, cowboyJUMP7, cowboyJUMP8, cowboyJUMP9, cowboyJUMP10;
var cowgirlJUMP1, cowgirlJUMP2, cowgirlJUMP3, cowgirlJUMP4, cowgirlJUMP5, cowgirlJUMP6, cowgirlJUMP7, cowgirlJUMP8, cowgirlJUMP9, cowgirlJUMP10;
var cowboy, cowgirl, platbackground;
var snake, hyena, scorpio, Vulture, Mummy, Deceased, Camel;
var snakeImg, hyenaImg, scorpioImg, VultutreImg, MummyImg, DeceasedImg, CamelImg;
var invisline;

function preload(){

  cowboyrun2 = loadImage('https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/run01.png')
  cowboyrun3 = loadImage('https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/run02.png')
  cowboyrun4 = loadImage('https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/run03.png')
  cowboyrun5 = loadImage('https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/Run04.png')
  cowboyrun6 = loadImage('https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/run05.png')
  cowboyrun7 = loadImage('https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/run06.png')
  cowboyrun8 = loadImage('https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/run07.png')

  runningAnimationcowgirl = loadAnimation(cowboyrun2, cowboyrun3, cowboyrun4, cowboyrun5, cowboyrun6, cowboyrun7, cowboyrun8);

  cowboygirl2 =loadImage("https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureWoman/run01.png")
  cowboygirl3 =loadImage("https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureWoman/run02.png")
  cowboygirl4 =loadImage("https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureWoman/run03.png")
  cowboygirl5 =loadImage("https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureWoman/run04.png")
  cowboygirl6 =loadImage("https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureWoman/run05.png")
  cowboygirl7 = loadImage("https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureWoman/run06.png")
  cowboygirl8 =loadImage("https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureWoman/run07.png")

  runningAnimationcowboy = loadAnimation(cowboygirl2, cowboygirl3, cowboygirl4, cowboygirl5, cowboygirl6, cowboygirl7, cowboygirl8);

  cowboyJUMP1 = loadImage('https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/jump00.png')
  cowboyJUMP2 = loadImage('https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/jump01.png')
  cowboyJUMP3 = loadImage('https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/jump02.png')
  cowboyJUMP4 = loadImage('https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/jump03.png')
  cowboyJUMP5 = loadImage('https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/jump04.png')
  cowboyJUMP6 = loadImage('https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/jump05.png')
  cowboyJUMP7 = loadImage('https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/jump06.png')
  cowboyJUMP8 = loadImage('https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/jump07.png')
  cowboyJUMP9 = loadImage('https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/jump08.png')
  cowboyJUMP10 = loadImage('https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/jump09.png')

  jumpingAnimationcowboy = loadAnimation(cowboyJUMP1, cowboyJUMP2, cowboyJUMP3, cowboyJUMP4, cowboyJUMP5, cowboyJUMP6, cowboyJUMP7, cowboyJUMP8, cowboyJUMP9, cowboyJUMP10)

  cowgirlJUMP1 = loadImage('https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureWoman/jump00.png')
  cowgirlJUMP2 = loadImage('https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureWoman/jump01.png')
  cowgirlJUMP3 = loadImage('https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureWoman/jump02.png')
  cowgirlJUMP4 = loadImage('https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureWoman/jump03.png')
  cowgirlJUMP5 = loadImage('https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureWoman/jump04.png')
  cowgirlJUMP6 = loadImage('https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureWoman/jump05.png')
  cowgirlJUMP7 = loadImage('https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureWoman/jump06.png')
  cowgirlJUMP8 = loadImage('https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureWoman/jump07.png')
  cowgirlJUMP9 = loadImage('https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureWoman/jump08.png')
  cowgirlJUMP10 = loadImage('https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureWoman/jump09.png')

  jumpingAnimationcowgirl = loadAnimation(cowgirlJUMP1, cowgirlJUMP2, cowgirlJUMP3, cowgirlJUMP4, cowgirlJUMP5, cowgirlJUMP6, cowgirlJUMP7, cowgirlJUMP8, cowgirlJUMP9, cowgirlJUMP10)

  cowgirlStill = loadAnimation(cowboygirl2, cowboygirl2, cowboygirl2, cowboygirl2)
  cowboyStill = loadAnimation(cowboyrun2, cowboyrun2, cowboyrun2, cowboyrun2)

  gameBackground = loadImage('https://la-wit.github.io/build-an-infinite-runner/build/images/environments/desertBackground.png');
  platformBackground = loadImage('https://la-wit.github.io/build-an-infinite-runner/build/images/environments/desertPlatform.png');

  hyenaImg = loadImage("Hyena.png")
  scorpioImg = loadImage("Scorpio (2).png")
  VultutreImg = loadImage("Vulture.png")
  DeceasedImg = loadImage("Deceased.png")
  snakeImg = loadImage("Snake.png")
  CamelImg = loadImage("Camel.png")
}

function setup(){

  createCanvas(windowWidth, windowHeight)
  platbackground = createSprite(width/2,height+200,width,2);
  platbackground.addImage(platformBackground);
  platbackground.scale = 2;
  platbackground.velocityX = 0;

  cowgirl = createSprite(100,height - 200,100,100);
  cowgirl.addAnimation("cow Still", cowgirlStill);
  cowgirl.addAnimation("Run Cowboy",runningAnimationcowboy);
  cowgirl.addAnimation("jumpcow2",jumpingAnimationcowgirl)
  cowgirl.scale = 3;

  cowboy = createSprite(180,height - 200,100,100);
  cowboy.addAnimation("cow Still2", cowboyStill);
  cowboy.addAnimation("Run Cowboy2",runningAnimationcowgirl);
  cowboy.addAnimation("jumpcow",jumpingAnimationcowboy)
  cowboy.scale = 3;

  invisline = createSprite(width/2,height-120, 2000, 5)
  invisline.visible = false

}

function draw(){

  background(gameBackground);

  if(keyWentDown("RIGHT_ARROW")){
    cowgirl.changeAnimation("Run Cowboy");
    cowboy.changeAnimation("Run Cowboy2");
    cowgirl.velocityX = 3;
    cowboy.velocityX = 3;
  }
  if(keyWentUp("RIGHT_ARROW")){
    cowgirl.changeAnimation("cow Still");
    cowboy.changeAnimation("cow Still2");
    cowgirl.velocityX = 0;
    cowboy.velocityX = 0;
    platbackground.velocityX = 0;

  }
  if(cowboy.x >= 700){
    platbackground.velocityX = -3;
    cowgirl.velocityX = 0;
    cowboy.velocityX = 0;
  }
  if(platbackground.x <= 800){
    platbackground.x = width/2
  }
  if(keyDown("SPACE") && cowboy.y >= 740 ){
    cowboy.velocityY = -21
    cowgirl.velocityY = -21
    cowboy.changeAnimation('jumpcow')
    cowgirl.changeAnimation('jumpcow2')
  }
  cowboy.velocityY = cowboy.velocityY + 0.8
  cowgirl.velocityY = cowgirl.velocityY + 0.8

  cowboy.collide(invisline)
  cowgirl.collide(invisline)

  drawSprites();
  SpawnObstacles();

}

function SpawnObstacles(){
  if (frameCount % 60 === 0){
    var obstacle1 = createSprite(width+10,height - 180, 1,10);
    var obstacle2 = createSprite(width+10,height - 135, 1,10);
    var obstacle3 = createSprite(width+10,height - 220, 1,10);

    obstacle3.scale = 0.1
    obstacle2.scale = 0.2
    obstacle1.scale = 0.15

    
     //generate random obstacles
     var rand = Math.round(random(1,3));
     switch(rand) {
       case 1: obstacle1.addImage(snakeImg);
               break;
       case 2: obstacle3.addImage(CamelImg);
               break;
       case 3: obstacle2.addImage(scorpioImg);
               break;
       default: break;
     }

     obstacle1.velocityX = -5
     obstacle2.velocityX = -5
     obstacle3.velocityX = -5

     obstacle1.lifetime = 400
     obstacle2.lifetime = 400
     obstacle3.lifetime = 400

     //cowboy.depth = obstacle.depth
     //cowboy.depth = cowboy.depth + 1
     //cowgirl.depth = obstacle.depth
     //cowgirl.depth = cowgirl.depth + 1
    
  }
}
