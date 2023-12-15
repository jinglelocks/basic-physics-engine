const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Initialise an array to hold the physical objects
var physicalObjects = [];
 

function drawRect() {
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");

    ctx.fillRect(50, 50, 20, 20);
  };
};

function drawPath() {
  ctx.beginPath();
  ctx.moveTo(200, 150);
  ctx.lineTo(225, 125);
  ctx.lineTo(225, 175);
  ctx.fill();
  ctx.closePath();
};

function drawCircle() {
  ctx.beginPath();
  ctx.arc(200, 150, 20, 0, Math.PI * 2, true); // Outer circle
  ctx.stroke();
  ctx.closePath();
};

// drawPath();
//drawRect();
//drawCircle();

// var win = window,
//     d = document,
//     e = d.documentElement,
//     g = d.getElementsByTagName('body')[0],
//     width = win.innerWidth || e.clientWidth || g.clientWidth,
//     height = win.innerHeight|| e.clientHeight|| g.clientHeight;


// var PhysicalObject = function(x, y, w, h) {
//     // Set the object's x/y position
//     this.x = x;
//     this.y = y;
    
//     // Set the object's width and height
//     this.width = w;
//     this.height = h;
    
//     // Initialise the object's x and y velocity with a value of 0 (it's stationary initially)
//     this.xVel = 0.1;
//     this.yVel = 0.1;
    
//     // Adjust the object's x velocity
//     this.addXVel = function(vel) { 
//         this.xVel += vel;
//     };
    
//     // Adjust the object's y velocity
//     this.addYVel = function(vel) { 
//         this.yVel += vel;
//     };
    
//     // Update the object's position for the next frame
//     this.nextFrame = function() { 
//         this.x += this.xVel;
//         this.y += this.yVel;
//     }
// };

// frameRender = function() {
//     // Clear view
//     ctx.clearRect(0, 0, width, height);
//     // For each object in the physicalObjects array...
//     for (var i = 0; i < physicalObjects.length; i++) {
//         // Draw a rectangle on the canvas to represent the object, based on the object's x, y, width and height
//         ctx.fillRect(
//             physicalObjects[i].x, 
//             physicalObjects[i].y, 
//             physicalObjects[i].width, 
//             physicalObjects[i].height
//         );
//         // Tell the object to update itself for the next frame
//         physicalObjects[i].nextFrame();
//     }
// };
     
// frameRenderLoop = function() {
//     // Use requestAnimationFrame to trigger the 'frameRenderLoop' function as soon as the browser is ready to repaint
//     requestAnimationFrame(frameRenderLoop);  
//     // Render the current frame
//     frameRender();
// };

// frameRenderLoop();

// // Add an object into the engine at x: 100, y: 100, with a width and height of 20 pixels.
// physicalObjects.push(new PhysicalObject(100, 100, 20, 20)); 


// Create ball props
const ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  size: 10,
  speed: 4,
  dx: 1,
  dy: 0.5
};

// Draw ball on canvas
function drawBall() {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2, true);
  ctx.fillStyle = '#0095dd';
  ctx.fill();
  ctx.closePath();
};

function moveBall() {
  ball.x += ball.dx;
  ball.y += ball.dy;

  // Wall collision (right/left)
  if(ball.x + ball.size > canvas.width || ball.x - ball.size < 0) {
    ball.dx *= -1; // ball.dx = ball.dx * -1
  }

  // Wall collision (top/bottom)
  if(ball.y + ball.size > canvas.height || ball.y - ball.size < 0) {
    ball.dy *= -1;
  }
};


// Draw everything
function draw() {
  // clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
};


// Update canvas drawing and animation
function update() {
  moveBall();

  // Draw everything
  draw();

  requestAnimationFrame(update);
};

update();

function pushBall(e) {
  console.log(ball.dx);
  ball.dx += 20;
  console.log(ball.dx);
};

canvas.addEventListener('click', pushBall);
