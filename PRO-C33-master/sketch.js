
// creation of the variables from Matter.js ...

var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies; 

//the arrays for the functions to be mentioned later...    

var particles = [];
var plinkos = [];
var divisions =[];

// creating a particle variable to calculate the score...

var particle;

var divisionHeight=300;
var score =0;
var count = 0;
var gameState ="start";

//the setup function to create a canvas, engines and the assigned default functions...

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //creating the function to create a row for all the divisions to be in order...

   for (var c = 0; c <=width; c = c + 80) {
     divisions.push(new Divisions(c, height-divisionHeight/2, 10, divisionHeight));
   }

   //the functions to push the plinkos, inheriting the properties of plinko class, to the plinko array...

    for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,75));
    }

    for (var l = 50; l <=width-10; l=l+50) {
        plinkos.push(new Plinko(l,175));
    }

    for (var k = 75; k <=width; k=k+50) {
        plinkos.push(new Plinko(k,275));
    }

    for (var o = 50; o <=width-10; o=o+50) {
        plinkos.push(new Plinko(o,375));
    }
    
}
 
function draw() {
  background("darkgreen");

  //the text instruction to create the score as a text in the display...
  
  text("Score : "+score,20,40);
  textSize(35);
  fill("blue");
  textSize(35);

  text(" 500 ", 5, 550);
  text(" 500 ", 80, 550);
  text(" 500 ", 160, 550);
  text(" 500 ", 240, 550);
  text(" 100 ", 320, 550);
  text(" 100 ", 400, 550);
  text(" 100 ", 480, 550);
  text(" 200 ", 560, 550);
  text(" 200 ", 640, 550);
  text(" 200 ", 720, 550);

//updating all the made changes to the created default engine...

  Engine.update(engine);
  
  ground.display();
  
//the function to be executed after the game ends...

  if ( gameState =="end") {
    
    textSize(100);
    text("GameOver", 150, 250);
    
  }

  //the loop function for the plinkos to get displayed with suitable parameters...

  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();  
  }
 

    if(particle!=null)  {
   
 particle.display();
        
        if (particle.body.position.y>760) {
        
 if (particle.body.position.x < 300) {
 
                  score=score+500;      
                  particle=null;
                  if ( count>= 5) gameState ="end";                          
              }

//the else function if our written function is not getting executed...              

 else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) {
              
score = score + 100;
particle=null;
             if ( count>= 5) gameState ="end";

              }

  else if (particle.body.position.x < 900 && particle.body.position.x > 601 )  {
             
   score = score + 200;
  particle=null;
                    if ( count>= 5)  gameState ="end";

              }      
              
        }
  
      }

   for (var k = 0; k < divisions.length; k++) 
   {
     divisions[k].display();
   }
 
}

//the function to be executed after the mouse is pressed...

function mousePressed() {

  if(gameState!=="end") {
  
      count++;

//the making of the particle inheriting the properties of the particle class...

     particle=new Particle(mouseX, 10, 10, 10); 

  }   

}