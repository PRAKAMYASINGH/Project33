class Ground{
    constructor(x,y,w,h) {
      var options = {
          isStatic: true
      }

//creation of a rectangular body for the class...

      this.body = Bodies.rectangle(x,y,w,h,options);
      this.w = w; 
      this.h = h;

//adding the created body to the world...

      World.add(world, this.body);

    }

//the display function to display everything accordingly in sketcth.js ...

    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("red");

    rect(pos.x, pos.y, this.w,this.h);
    }
  }