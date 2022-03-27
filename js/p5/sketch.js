let posX = 0;
let posY = 0;
let speed = 3;
let speedX = 3;
let speedY = 3;
let randomColor1 = 0;
let randomColor2 = 0;
let randomColor3 = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function getColors()
{
  randomColor1 = random(255);
  randomColor2 = random(255);
  randomColor3 = random(255);
}

function draw() {
  background(0);
  if (randomColor1 != 0 || randomColor2 != 0 || randomColor3 != 0)
      fill(randomColor1, randomColor2, randomColor3);
  ellipse(posX, posY, 50);
  strokeWeight(1);
  if (posY + 25 >= height)
  {
    getColors();
    if (speedX == -3 && speedY == 3)
    {
      speedX = -3;
      speedY = -3;
    }
    else
    {
      speedX = 3;
      speedY = -3;
    }
  }
  else if (posX - 25 <= 0)
  {
    getColors();
    if (speedX == -3 && speedY == -3)
    {
      speedX = 3;
      speedY = -3;
    }
    else
    {
      speedX = 3;
      speedY = 3;
    }
  }
  else if (posX + 25 >= width)
  {
    getColors();
    if (speedX == 3 && speedY == 3)
    {
      speedX = -3;
      speedY = 3;
    }
    else {
      speedX = -3;
      speedY = -3;
    }
  }
  else if (posY - 25 <= 0)
  {
    getColors();
    if (speedX == 3 && speedY == -3)
    {
      speedX = 3;
      speedY = 3;
    }
    else{
      speedX = -3;
      speedY = 3;
    }
  }
  posX += speedX;
  posY += speedY;
}