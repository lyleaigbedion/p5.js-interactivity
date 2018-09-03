function setup() {
	
	//Creates a canvas the width of the window
	createCanvas(windowWidth, windowHeight);
	background(10,10,255);
	//interprets the first two parameters of ellipse() as the shape's center point,
	//while the third and fourth parameters are its width and height.
	ellipseMode(CENTER);
	
}

 
function draw() {
	
	//sets the framerate
	frameRate(15);
	
	// global variables that randomize the width and height numbers
	var randW = random(windowWidth);
	var randH = random(windowHeight);
	
	//redraws the shapes in different places
	translate(randW, randH);
	
	// spins the images a rate 60x the frame count at the time
	rotate(radians(60*frameCount));
	
    //Circle
    noStroke(); //no outline for donut
    fill(255, 255, 0); //make the Circle yellow
    ellipse( 250, 250, 450, 450); //shape of Battle Network logo
 

    //inner circle
	//red with a black stroke
    strokeWeight(20);
    stroke(0, 0, 0); //color of the Circle outline
    fill(255, 0, 0); //color of the hole
    ellipse(250, 250, 400, 400);
	
	// line through red circle
    strokeWeight(15); //Line thickness
    stroke(0, 0, 0); //black
    line(385, 100, 115, 400); // Diagonally from edge of the red circle to the other end
    
	
	//Triangle 1
	noStroke();
	fill(0,0,0);//Black triangle
	triangle(439, 160, 310, 50, 315, 180);//placed to intersect the line at thes cooridnates
	
	//Triangle 2
	noStroke();
	fill(0,0,0);//black
	triangle(180, 439, 60, 340, 190, 315);// a rough approximation of Triangle 1 flipped
}

// if mouse is pressed, the image stops being withdrawn.
function mousePressed() {
    noLoop();
}
// Canvas is re-drawn over the Multiple images.
function mouseReleased() {
	background(10,10,255);
	loop();
}
	