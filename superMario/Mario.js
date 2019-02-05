var Player = (function (x, y, context) {
    this.sourceX = 0;
    this.sourceY = 64;
    this.sourceWidth = 32;
    this.sourceHeight = 32;
    this.x = 200;
    this.y = 488;
    this.width = 32;
    this.height = 32;
    this.vx = 0;
    this.vy = 0;
    this.visible = true;
    this.accelerationX = 0;
    this.accelerationY = 0;
    this.speedLimit = 5;
    this.friction = 0.96;
    this.gravity = 0.4;
    this.isOnGround = undefined;
    this.jumpForce = -10;
    this.image = new Image();
    this.image.src = ("Images/mario.png");


    this.CenterX = function () {
        return this.x + (this.width / 2);
    }
    this.CenterY = function () {
        return this.y + (this.height / 2);
    }
    this.halfWidth = function () {
        return this.width / 2;
    }
    this.halfHeight = function () {
        return this.height / 2;
    }

    this.Update = function () {


    }

    this.Render = function () {
        context.drawImage(this.image, this.sourceX, this.sourceY, this.sourceWidth, this.sourceHeight, this.x, this.y, this.width, this.height);
    }
});



