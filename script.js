const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Create ball prop
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
  ball.dy += 5;
};

canvas.addEventListener('click', pushBall);
