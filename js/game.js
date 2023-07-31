class Game {
    constructor() {
        this.dino = new Dinosaur();
        this.cloud = new Cloud();
        this.bg = new Background();
        this.points = 0;
    }

    score() {
        this.points++;
        if (this.points % 100 == 0) cc.game_speed++;
        textFont(cc.freesandbold);
        textSize(20);
        textAlign(CENTER, CENTER);
        text("Points: " + this.points, 1000, 10);
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
        this.cloud.update();
        this.bg.update();
    }

    draw() {
        background(255);
        this.score();
    }
}