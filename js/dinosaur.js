class Dinosaur {
    constructor() {
        this.x = 80+cc.dinoRun1.width/2;
        this.y = 310+cc.dinoRun1.height/2;
        this.sprite = new Sprite(this.x, this.y);
        this.sprite.addAni('start', cc.dinoStart);
        this.sprite.addAni('run',   cc.dinoRun1, cc.dinoRun2).frameDelay = 10;
        this.sprite.addAni('jump',  cc.dinoJump);
        this.sprite.addAni('duck',  cc.dinoDuck1, cc.dinoDuck2).frameDelay = 10;
        this.sprite.addAni('dead',  cc.dinoDead);
        this.sprite.changeAni('run');
    }

    update() {

    }

    draw() {

    }
}