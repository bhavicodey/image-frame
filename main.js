function preload() {
    img=loadImage("image.png")
    }
    
    function setup() {
    createCanvas(700,550);
    }
    
    function draw() {
    image(img,300,220,150,120);
    
    fill(255, 0, 0);
    stroke(255, 0, 0);
    rect(600,150,20,250);
      
    fill(255, 0, 0);
    stroke(255, 0, 0);
    rect(150,150,20,250);
      
    fill(255, 0, 0);
    stroke(255, 0, 0);
    rect(150,150,450,20);
      
    fill(255, 0, 0);
    stroke(255, 0, 0);
    rect(150,400,450,20);
      
    fill(0,255, 0);
    stroke(128, 0, 0);
    square(130, 150, 55, 55);
      
    fill(0,255, 0);
    stroke(128, 0, 0);
    square(580, 150, 55, 55);
    
    fill(0,255, 0);
    stroke(128, 0, 0);
    square(570, 390, 55, 55);
      
    fill(0,255, 0);
    stroke(128, 0, 0);
    square(150, 390, 55, 55);
    }