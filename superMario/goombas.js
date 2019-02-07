var Goombas = (function (x, y, context) {
   
    this.sourceX = 0;
    this.sourceY = 0;
    this.sourceWidth = 17;
    this.sourceHeight = 16;

    this.x = x;
    this.y = y;
    this.width = 17;
    this.height = 16;

    this.vx = 0;
    this.vy = 0;

    this.visible = true;

    this.accelerationX = 0;
    this.accelerationY = 0;
    this.speedLimit = -2;
    this.friction = 0.96;
    this.gravity = 0;
    this.isOnGround = true;

    this.image = new Image();
    this.image.src = ("Images/goombas.png");
    

    this.Update = function () {
    
    }
    this.Render = function () {
        context.drawImage(this.image, this.sourceX, this.sourceY, this.sourceWidth, this.sourceHeight, this.x, this.y, this.width, this.height);
    }


    //var goombas = [];
    //goombas.image.src = "Images/goombas.png";

   // for (var i = 0; i < 1; i++) {
       // goombas.push(new Goombas(100, 100, 17, 16));
       // goombas[i].image.src = goombas[i].source;
    

    //function Update() {
    // goombas[0].x--;

        

});