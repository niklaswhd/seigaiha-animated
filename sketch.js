let w =1600
let h =400
let bpm=100
let fr=(bpm/60)

function setup() {

 createCanvas(w, h)
    frameRate(fr)
}

function draw() {
    background(255)
 //   stroke (255,255,255)
  strokeWeight(2);
 
fill (50, 137, 184);
 
let x=-20 //starting point
let y=0   //
let r=20  //radius
let speed = random (1)
     
while (x<w){
    
    let speed = random (50)
    //colorize 50% chance
    if (speed>24){
    fill (random(255),random(255),random(255))
    }
    else{
        fill (50, 137, 184)
    }
    ellipse(x,y,2*r,2*r)
    ellipse(x,y,r+r/2,r+r/2)
    ellipse(x,y,r,r)
    ellipse(x,y,r/2,r/2)
    
   //colorize 50% chance 
    speed=random(50)
  if (speed>24){
    fill (random(255),random(255),random(255))
    }
    else{
        fill (50, 137, 184)
    }
    
 
    
    ellipse(x-20,y+10,2*r,2*r)
   ellipse(x-20,y+10,r+r/2,r+r/2)
    ellipse(x-20,y+10,r,r)
    ellipse(x-20,y+10,r/2,r/2)
    
    x+=2*r
  
    
    if (x>w){
        x=20
        y+=r;
        
        if (y>h){
            x=1700
        }
    }

    

}

}

    
    


 

