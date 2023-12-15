const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Create ball prop
const ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  size: 10,
  speed: 4,
  dx: 1,
  dy: 0.5,
};

// Draw ball on canvas
function drawBall() {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2, true);
  ctx.fillStyle = "#0095dd";
  ctx.fill();
  ctx.closePath();
}

// Function to move the ball
function moveBall() {
  ball.x += ball.dx;
  ball.y += ball.dy;

  // Wall collision (right/left)
  if (ball.x + ball.size > canvas.width || ball.x - ball.size < 0) {
    ball.dx *= -1; // ball.dx = ball.dx * -1
  }

  // Wall collision (top/bottom)
  if (ball.y + ball.size > canvas.height || ball.y - ball.size < 0) {
    ball.dy *= -1;
  }
}

// Push the ball (is called when canvas is clicked - see event listener)
function pushBall(e) {
  console.log("Pre-click dx and dy", ball.dx, ball.dy);
  console.log("Adding 20 to dx and 5 to dy");
  ball.dx += 20;
  ball.dy += 5;
  console.log("Post-click dx and dy", ball.dx, ball.dy);
}

// Draw the ball
function draw() {
  // clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
}

// Function to update canvas drawing and animation
function update() {
  moveBall();
  // Draw everything
  draw();
  // Standard callback function to update the animation frame (see docs)
  requestAnimationFrame(update);
}

// Update the canvas drawing and animation
update();

// Event listeners to run functions when evnt occurs on webpage
canvas.addEventListener("click", pushBall);
