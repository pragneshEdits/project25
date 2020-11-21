class Dustbin{
    constructor(x,y,width,height,angle){
       var options={
         isStatic:true
       }
       this.body=Bodies.rectangle(x,y,width,height,options,angle);
      this.width = width;
      this.height = height;
    this.image=loadImage("sprites/dustbingreen.png");
       World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y); rotate(angle);
        imageMode(CENTER);
        fill("white");
        image(this.image,0,0,this.width,this.height);
        pop();
        
    }
    
    
    
    
    
    
    
    
    }
    