class Divisions {
    constructor(x, y, w, h) {
        var options = {

            isStatic: true
        }

//creation of the main rectangular body for this class...        

        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;

//adding the created body to the world...

        World.add(world, this.body);

    }

//the display function with suitable parameters to be mentioned in sketch.js ...

    display() {

//the abbreviation variable for the class's body's position...

        var position = this.body.position;
        
        rectMode(CENTER);
        fill("silver");

        rect(position.x, position.y, this.w, this.h);
    }
};