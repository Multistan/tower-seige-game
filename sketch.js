const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var block;
var blocks = [];
var polygon,polygonImg

function preload(){

polygonImg = loadImage("polygon.png")

}



function setup(){
    createCanvas(1000, 500)

    engine = Engine.create();
    world = engine.world;
    
    var options={
        isStatic: true
    }

    ground = Bodies.rectangle(500,500,1000,20, options)
    stand = Bodies.rectangle(500, 400, 300,20, options)
    stand2 = Bodies.rectangle(800, 350, 300, 20, options)
    Polygon = Bodies.circle(100,300, 5, options)

    World.add(world,ground)
    World.add(world,stand)
    World.add(world,stand2)

    for(var i = 380; i < 650; i+= 60){
        // for(var j = 0; j < 200; j+=5){
        blocks.push(new Block(i, 300, 50,50,"red"))
        // }
    }

    for(var i = 400; i < 630 ; i+= 60){
        // for(var j = 0; j < 200; j+=5){
        blocks.push(new Block(i, 240, 50,50,"orange"))
        // }
    }

     for(var i = 420; i < 610 ; i+= 70){
         // for(var j = 0; j < 200; j+=5){
         blocks.push(new Block(i, 190, 50,50,"yellow"))
         // }
     }

     for(var i = 450; i < 580 ; i+= 90){
        // for(var j = 0; j < 200; j+=5){
        blocks.push(new Block(i, 140, 50,50,"blue"))
        // }
     }

        for(var i = 490; i < 530; i+=95){ 
        // for(var j = 0; j < 200; j+=5){ 
         blocks.push(new Block(i, 70, 50,50, "purple")) 
         // }
        }
    
 }

function draw(){
    background("pink")
    Engine.update(engine)
    push()
    rectMode(CENTER)
    rect(ground.position.x,ground.position.y, 1000,20)
    rect(stand.position.x,stand.position.y, 300,20)
    rect(stand2.position.x,stand2.position.y, 300,20)
    pop()

     imageMode(CENTER)
     image(polygonImg, Polygon.position.x,Polygon.position.y, 35,35)

    for(var i = 0; i < blocks.length; i++){
        blocks[i].show();
    }
}