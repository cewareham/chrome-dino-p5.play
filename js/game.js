class Game {
    constructor() {
        this.dino = new Dinosaur();
    }

    update() {
        this.dino.update();
    }

    draw() {
        background(255);
        this.dino.draw();
    }
}