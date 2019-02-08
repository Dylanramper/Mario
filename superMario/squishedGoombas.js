var SquishedGoombas = (function (x, y, context) {

    this.sourceX = 17;
    this.sourceY = 6;
    this.sourceWidth = 17;
    this.sourceHeight = 10;

    this.x = x;
    this.y = y;

    this.width = 27;
    this.height = 20;

    this.vx = 0;
    this.vy = 0;

    this.visible = true;

    this.accelerationX = 0;
    this.accelerationY = 0;
    this.speedLimit = 0;
    this.friction = 0.96;
    this.gravity = 0;
    this.isOnGround = true;

    this.image = new Image();
    this.image.src = ("Images/goombas.png");

    this.Update = function () {
        this.x += this.vx;
        this.y += this.vy;
    }
    this.Render = function () {
        context.drawImage(this.image, this.sourceX, this.sourceY, this.sourceWidth, this.sourceHeight, this.x, this.y, this.width, this.height);
    }
});