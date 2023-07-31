let game;

function preload() {
  // load all images in cc.sprites array giving them name of 1st property
  for (const property in cc.sprites) {
    cc[property] = loadImage(cc.sprites[property]["path"]);
  }
  // load all fonts in cc.fonts array giving them name of 1st property
  for (const property in cc.fonts) {
    cc[property] = loadFont(cc.fonts[property]["path"]);
  }
  // load all sounds in cc.sounds array giving them name of 1st property
    // for (const property in cc.sounds) {
    //   cc[property] = loadSound(cc.sounds[property]["path"]);
    // }
}

function setup() {
  createCanvas(cc.SCREEN_WIDTH, cc.SCREEN_HEIGHT);
  game = new Game();
}

function draw() {
  game.update();
  game.draw();
}
