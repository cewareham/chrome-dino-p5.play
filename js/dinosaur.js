class Dinosaur {
    constructor() {
        this.x = 80+cc.dinoRun1.width/2;
        this.y = 310+cc.dinoRun1.height/2;
        this.x_duck = 80+cc.dinoDuck1.width/2;
        this.y_duck = 340+cc.dinoDuck1.height/2;

        this.sprite = new Sprite(this.x, this.y);
        this.sprite.addAni('start', cc.dinoStart);
        this.sprite.addAni('run',   cc.dinoRun1, cc.dinoRun2).frameDelay = 10;
        this.sprite.addAni('jump',  cc.dinoJump);
        this.sprite.addAni('duck',  cc.dinoDuck1, cc.dinoDuck2).frameDelay = 10;
        this.sprite.addAni('dead',  cc.dinoDead);
        this.ani = 'run';
        this.jumping = false;
        this.sprite.changeAni(this.ani);
        this.cOffset = 9;   // collider offset to 'tighten' the collider box rect
        // collider box rects for anims
        this.cRunX = cc.dinoRun1.width-this.cOffset;
        this.cRunY = cc.dinoRun1.height-this.cOffset;
        this.cDuckX = cc.dinoDuck1.width-this.cOffset;
        this.cDuckY = cc.dinoDuck1.height-this.cOffset;
        this.cJumpX = cc.dinoJump.width-this.cOffset;
        this.cJumpY = cc.dinoJump.height-this.cOffset;
        this.setCollider(this.cRunX, this.cRunY);
        this.sprite.debug = true;
    }

    // set dino sprite collider rect
    setCollider(xDist, yDist) {
        this.sprite.removeColliders();
        this.sprite.addCollider(0, 0, xDist, yDist);
    }

    changeAni(ani) {
        if (ani != this.ani) {
            let collideX, collideY;
            if (ani == 'duck') {
                this.sprite.x = this.x_duck;
                this.sprite.y = this.y_duck;
                collideX = this.cDuckX;
                collideY = this.cDuckY;
            } else if (ani == 'jump') {
                this.sprite.vel.y = -10.5;
                world.gravity.y = 15;
                this.jumping = true;
                collideX = this.cJumpX;
                collideY = this.cJumpY;
            } else {
                this.sprite.x = this.x;
                this.sprite.y = this.y;
                collideX = this.cRunX;
                collideY = this.cRunY;
            }
            this.ani = ani;
            this.sprite.changeAni(ani);
            this.setCollider(collideX, collideY);
        }
    }

    update() {
        if (this.jumping) {
            if (this.sprite.y > this.y) {   // back to start-stop jumping
                this.sprite.vel.y = 0;
                world.gravity.y = 0;
                this.jumping = false;
            }
        }
    }

    draw() {}
}