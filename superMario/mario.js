var Player = (function (x, y, context) {
    this.sourceX = 0;
    this.sourceY = 64;
    this.sourceWidth = 32;
    this.sourceHeight = 32;
    this.x = x;
    this.y = y;
    this.width = 32;
    this.height = 32;
    this.vx = 0;
    this.vy = 0;
    this.visible = true;
    this.accelerationX = 0.2;
    this.accelerationY = 0;
    this.speedLimit = 4;
    this.friction = 0.96;
    this.gravity = .3;
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
		 this.x += this.vx;
		 this.y += this.vy;
    }

     this.BigMario = function () {
         this.sourceX = 0;
         this.sourceY = 0;
         this.sourceWidth = 32;
         this.sourceHeight = 64;
         this.height = 64;
         this.image.src = ("Images/mario.png");
     }

     this.FireMario = function () {
         this.sourceX = 0;
         this.sourceY = 0;
         this.sourceWidth = 32;
         this.sourceHeight = 64;
         this.height = 64;
         this.image.src = ("Images/FireMario.png");
        
     }

    this.Render = function () {
        context.drawImage(this.image, this.sourceX, this.sourceY, this.sourceWidth, this.sourceHeight, this.x, this.y, this.width, this.height);
    } 
});
