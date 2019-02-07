var Goombas = (function (x, y, context) {
   
    this.sourceX = 0;
    this.sourceY = 0;
    this.sourceWidth = 17;
    this.sourceHeight = 16;

    this.x = x;
    this.y = y;

    this.width = 27;
    this.height = 26;

    this.vx = -1;
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