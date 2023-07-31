class Background {
    constructor() {
        this.width = cc.bg.width;
        this.x0 = this.width/2;         // p5.play draws all sprites at center &
        this.y0 = 380+cc.bg.height/2;   // python draws @ top left, so compensate
        this.x1 = this.x0+this.width;
        this.y1 = this.y0;
        this.sprite = new Sprite(cc.bg, this.x0, this.y0, 'n');
        this.sprite1 = new Sprite(cc.bg, this.x1, this.y1, 'n');
    }

    update() {
        this.sprite.vel.x = -cc.game_speed;
        this.sprite1.vel.x = -cc.game_speed;
        if (this.sprite.x <= -this.width) {
            this.sprite.x = this.sprite1.x+this.width;
        } else if (this.sprite1.x <= -this.width) {
            this.sprite1.x = this.sprite.x+this.width;
        }
    }

    draw() {}
}