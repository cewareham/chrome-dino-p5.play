let game;

function setup() {
  createCanvas(cc.SCREEN_WIDTH, cc.SCREEN_HEIGHT);
  game = new Game();
}

function draw() {
  game.update();
  game.draw();
}
