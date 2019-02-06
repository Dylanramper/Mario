var Turtles = (function (x, y, context) {

    this.sourceX = 0;
    this.sourceY = 0;
    this.sourceWidth = 17;
    this.sourceHeight = 24;

    this.x = 600;
    this.y = 490;
    this.width = 30;
    this.height = 29;

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
    this.image.src = ("Images/turtles.png");


    this.Update = function () {

    }
    this.Render = function () {
        context.drawImage(this.image, this.sourceX, this.sourceY, this.sourceWidth, this.sourceHeight, this.x, this.y, this.width, this.height);
    }


});