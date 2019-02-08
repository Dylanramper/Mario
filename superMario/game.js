$(document).ready(function () {
	var canvas = $("canvas");
	var context = canvas.get(0).getContext("2d");

	var JUMP = 32;
	var RIGHT = 39;
	var LEFT = 37;
	var DOWN = 40;
    var FireMario = 90;
    var BigMario = 88;
    var StarMarioLarge = 83;
    var StarMarioMini = 65;

    var rightInnerBoundary = (500 / 2) + (500 / 2);

	var mario = [];
	mario.push(new Player(200, 488, context));

	var background = new Background(context, canvas.width(), canvas.height());
	background.image.src = background.imageSource;

	var backgroundCollisions = [];
	backgroundCollisions.push(new collisionBox(0, 520, 2210, 80, context));
	backgroundCollisions.push(new collisionBox(2275, 520, 475, 80, context));
	backgroundCollisions.push(new collisionBox(2850, 520, 2045, 80, context));
	backgroundCollisions.push(new collisionBox(4960, 520, 2045, 80, context));
	backgroundCollisions.push(new collisionBox(900, 440, 55, 100, context));
	backgroundCollisions.push(new collisionBox(1220, 402, 55, 118, context));
	backgroundCollisions.push(new collisionBox(1476, 360, 55, 160, context));
	backgroundCollisions.push(new collisionBox(1830, 360, 55, 160, context));
	backgroundCollisions.push(new collisionBox(1830, 0, 55, 160, context));


	var block = [];
	block.push(new Block(context, 515, 370,79,112));
	block.push(new Block(context, 651, 370, 79, 112));
	block.push(new Block(context, 713, 370, 79, 112));
	block.push(new Block(context, 683, 262, 79, 112));
	block.push(new Block(context, 2048, 320, 79, 112));
	block.push(new Block(context, 2498, 370, 79, 112));
	block.push(new Block(context, 3010, 262, 79, 112));
	block.push(new Block(context, 3232, 370, 79, 112));
	block.push(new Block(context, 3392, 370, 79, 112));
	block.push(new Block(context, 3488, 370, 79, 112));
	block.push(new Block(context, 3488, 262, 79, 112));
	block.push(new Block(context, 3584, 370, 79, 112));
	block.push(new Block(context, 4130, 262, 79, 112));
	block.push(new Block(context, 4158, 262, 79, 112));
	block.push(new Block(context, 5442, 370, 79, 112));

	block.push(new Block(context, 621, 370, 273, 112));
	block.push(new Block(context, 683, 370, 273, 112));
	block.push(new Block(context, 745, 370, 273, 112));
	block.push(new Block(context, 2470, 370, 273, 112));
	block.push(new Block(context, 2530, 370, 273, 112));
	block.push(new Block(context, 2563, 262, 273, 112));
	block.push(new Block(context, 2595, 262, 273, 112));
	block.push(new Block(context, 2625, 262, 273, 112));
	block.push(new Block(context, 2655, 262, 273, 112));
	block.push(new Block(context, 2685, 262, 273, 112));
	block.push(new Block(context, 2715, 262, 273, 112));
	block.push(new Block(context, 2745, 262, 273, 112));
	block.push(new Block(context, 2775, 262, 273, 112));
	block.push(new Block(context, 2980, 262, 273, 112));
	block.push(new Block(context, 2950, 262, 273, 112));
	block.push(new Block(context, 2920, 262, 273, 112));
	block.push(new Block(context, 3010, 370, 273, 112));
	block.push(new Block(context, 3202, 370, 273, 112));
	block.push(new Block(context, 3775, 370, 273, 112));
	block.push(new Block(context, 3870, 262, 273, 112));
	block.push(new Block(context, 3900, 262, 273, 112));
	block.push(new Block(context, 3930, 262, 273, 112));
	block.push(new Block(context, 4100, 262, 273, 112));
	block.push(new Block(context, 4190, 262, 273, 112));
	block.push(new Block(context, 4130, 370, 273, 112));
	block.push(new Block(context, 4158, 370, 273, 112));
	block.push(new Block(context, 5473, 370, 273, 112));
	block.push(new Block(context, 5412, 370, 273, 112));
	block.push(new Block(context, 5380, 370, 273, 112));

    var goombas = [];
    goombas.push(new Goombas(525, 494, context));
    goombas.push(new Goombas(550, 494, context));
    goombas.push(new Goombas(6250, 494, context));
    goombas.push(new Goombas(650, 494, context));
    goombas.push(new Goombas(700, 494, context));
    goombas.push(new Goombas(1025, 494, context));
    goombas.push(new Goombas(1050, 494, context));
    goombas.push(new Goombas(1100, 494, context));
    goombas.push(new Goombas(1150, 494, context));
    goombas.push(new Goombas(1450, 494, context));
    goombas.push(new Goombas(1500, 494, context));
    goombas.push(new Goombas(1550, 494, context));
    goombas.push(new Goombas(1625, 494, context));


    var koopas = [];
    koopas.push(new Koopas(400, 483, context));
    koopas.push(new Koopas(500, 483, context));
    koopas.push(new Koopas(600, 483, context));
    koopas.push(new Koopas(800, 483, context));
    koopas.push(new Koopas(900, 483, context));
    koopas.push(new Koopas(1000, 483, context));
    koopas.push(new Koopas(1200, 483, context));
    koopas.push(new Koopas(1300, 483, context));
    koopas.push(new Koopas(1400, 483, context));
    koopas.push(new Koopas(1600, 483, context));
    koopas.push(new Koopas(1700, 483, context));


	window.addEventListener("keydown", keydownHandler, false);
	window.addEventListener("keyup", keyupHandler, false);

	function keydownHandler(event) {
		switch (event.keyCode) {

			case RIGHT:
				background.vx = -5;
				mario[0].vx = 5;

				if (background.x < -6050) {
					background.vx = 0;
				}
				for (var i = 0; i < block.length; i++) {
					block[i].vx = -2.5;
				}
				break;

			case LEFT:
                background.vx = 5;
                mario[0].vx = -5;
                if (background.x > 6050) {
                    background.vx = 0;
				}
				
				break;

            case JUMP:
                background.vx= 0;
                mario[0].jump = -15;
				if (background.vy = 0) {
					mario[0].vy = 0;
				}
                break;

            case FireMario:
                mario[0].FireMario();
                mario[0].y -= 28;
                break;

            case BigMario:
                mario[0].BigMario();
                mario[0].y -= 30;
                break;

            case StarMarioMini:
                mario[0].StarMarioMini();
                mario[0].y -= 30;
                break;

            case StarMarioLarge:
                mario[0].StarMarioLarge();
                mario[0].y -= 30;
                break;
				
		}
	}

	function keyupHandler(event) {
		if (event.keyCode === LEFT || event.keyCode === RIGHT) {
			background.vx = 0;

			mario[0].vx = 0;

			for (var i = 0; i < block.length; i++) {
				block[i].vx = 0;
			}

		}
		mario.vx = 0;
	}

		/*if (moveLeft && !moveRight) {
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

	} */

	//var mario = new Mario();
	//mario.Image.src = mario.imageSource;

	function Update() {
		//console.log(backgroundCollisions[0]);
		requestAnimationFrame(Update, canvas);
		background.Update();

		for (var i = 0; i < backgroundCollisions.length; i++) {
			backgroundCollisions[i].Update(background.vx);
		}
		for (var i = 0; i < mario[0].length; i++) {
			mario[0].Update();
		}

		for (var i = 0; i < block.length; i++) {
			block[i].Update();
		}


        for (var i = 0; i < block.length; i++) {
            block[i].Update();
        }

        for (var i = 0; i < goombas.length; i++) {
            goombas[i].Update();
        }

        for (var i = 0; i < koopas.length; i++) {
            koopas[i].Update();
        }

        Render();
    }

	//collision boxes for the floor

	function CollisionBox() {
		//context.fillRect(background.x, 520, 2210, 80);
		//context.fillRect(background(2280), 520, 500, 80);
	}

	function Render() {		
        context.clearRect(0, 0, canvas.width, canvas.height);
        //CollisionBox();

		background.Render();
		for (var i = 0; i < backgroundCollisions.length; i++) {
			backgroundCollisions[i].Render();
		}
	
		for (var i = 0; i < block.length; i++) {
			block[i].Render();
		}

		for (var i = 0; i < mario.length; i++) {
			mario[i].Render();

        }

        for (var i = 0; i < goombas.length; i++) {
            goombas[i].Render();
        }

        for (var i = 0; i < koopas.length; i++) {
            koopas[i].Render();
        }
        
	}   

    Update();

});
