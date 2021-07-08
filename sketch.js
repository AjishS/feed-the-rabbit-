var garden, rabbit;
var gardenImg, rabbitImg;
var apple, appleImg;
var leaves, leavesImg;

function preload() {
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leavesImg = loadImage("redImage.png", "orangeLeaf.png", "leaf.png");
}

function setup() {

  createCanvas(400, 400);

  // Moving background
  garden = createSprite(200, 200);
  garden.addImage(gardenImg);

  //creating boy running
  rabbit = createSprite(180, 340, 30, 30);
  rabbit.scale = 0.09;
  rabbit.addImage(rabbitImg);
  rabbit.x = World.mouseX;
  //creating apple


}


function draw() {
  background(0);

  edges = createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX;
  createApples()


  createLeaves()







  var select_sprites = Math.round(random(1, 2));

  if (frameCount % 80 == 0) {
    if (select_sprites == 1) {
      function createApples() {
        apple = createSprite(random(50, 350), 40, 10, 10);
        apple.addImage(appleImg);
        apple.scale = 0.1;
        apple.velocityY = 5;
        apple.lifetime = 150;
      }
    }
    else {
      function createLeaves() {
        leaves = createSprite(random(50, 350), 40, 10, 10);
        leaves.addImage(leavesImg);
        leaves.scale = 0.1;
        leaves.velocityY = 5;
        leaves.lifetime = 150;

      }
    }
  }


  drawSprites();


}