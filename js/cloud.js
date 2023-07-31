class Cloud {
    constructor() {
        this.width = cc.cloud.width;
        this.halfWidth = cc.cloud.width/2;
        this.halfHeight = cc.cloud.height/2
        this.x = width + int(random(800, 1001))+this.halfWidth;
        this.y = int(random(50, 101))+this.halfHeight;
        this.sprite = new Sprite(cc.cloud, this.x, this.y, 'n');
    }

    update() {
        this.sprite.vel.x = -cc.game_speed;
        if (this.sprite.x < -this.width) {
            this.sprite.x = width + int(random(2500, 3001))+this.halfWidth;
            this.sprite.y = int(random(50, 101))+this.halfHeight;
        }
    }

    draw() {}
}