class Game {
    constructor() {
        this.dino = new Dinosaur();
    }

    update() {
        if (kb.pressing('down') && !this.dino.jumping) {
            this.dino.changeAni('duck');
        } else if (kb.pressing('up') && !this.dino.jumping) {
            this.dino.changeAni('jump');
        } else if (!(this.dino.jumping || kb.pressing('down'))) {
            this.dino.changeAni('run');
        }
        this.dino.update();
    }

    draw() {
        background(255);
        //this.dino.draw();
    }
}