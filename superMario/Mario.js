var player = (function (x, y) {
    this.sourceX = 32;
    this.sourceY = 96;
    this.sourceWidth = 32;
    this.sourceHeight = 32;
    this.x = 200;
    this.y = 210;
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
    image.src = ("Images/mario.png");


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



    }
});






       /* function PlayGame() {

            if (moveLeft && !moveRight) {
                mario.accelerationX = -0.2;
                mario.friction = 1;
            }


            if (moveRight && !moveLeft) {
                mario.accelerationX = 0.2;
                mario.friction = 1;
            }

            if (jump && mario.isOnGround) {
                mario.vy += mario.jumpForce;
                mario.isOnGround = false;
                mario.friction = 1;
            }


            if (!moveLeft && !moveRight) {
                mario.accelerationX = 0;
                mario.friction = 0.96;
                mario.gravity = 0.3;
            }


            mario.vx += mario.accelerationX;
            mario.vy += mario.accelerationY;

            //Apply the friction
            if (mario.isOnGround) {
                mario.vx *= mario.friction;
            }

            //Apply the gravity
            mario.vy += mario.gravity;

            //Limit the speed

            if (mario.vx > mario.speedLimit) {
                mario.vx = mario.speedLimit;
            }

            if (mario.vx < -mario.speedLimit) {
                mario.vx = -mario.speedLimit;
            }

            if (mario.vy > mario.speedLimit * 2) {
                mario.vy = mario.speedLimit * 2;
            }

            //Move mario
            mario.x += mario.vx;
            mario.y += mario.vy;


            var collisionSide = blockRectangle(mario, box, false);
            //collisionSide variable info is stored under 'function blockrectangle, etc'
            if (collisionSide === "bottom" && mario.vy >= 0) {
                //Tell the game that mario is on the ground if it's standing on top of a platform
                mario.isOnGround = true;

                mario.vy = - mario.gravity;
            } else if (collisionSide === "top" && mario.vy >= 0) {
                mario.vy = 0;
            } else if (collisionSide === "left" && mario.vx <= 0) {
                mario.vx = 0;
            } else if (collisionSide === "right" && mario.vx >= 0) {
                mario.vx = 0;
            }

            if (collisionSide !== "bottom" && mario.vy > 0) {
                mario.isOnGround = false;
            }


        }

        function Render() {
            
            //A for looop for the sprites to write out once and not have to repeat
            //Math.floor is to round down the numbers
            for (var i = 0; i < sprites.length; i++) {
                var sprite = sprites[i];
                context.drawImage(image, sprite.sourceX, sprite.sourceY, sprite.sourceWidth, sprite.sourceHeight, Math.floor(sprite.x), Math.floor(sprite.y), sprite.width, sprite.height);
            }
        }
    });
});*/