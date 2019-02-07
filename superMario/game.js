$(document).ready(function () {
	var canvas = $("canvas");
	var context = canvas.get(0).getContext("2d");

	var JUMP = 32;
	var RIGHT = 39;
	var LEFT = 37;
	var DOWN = 40;

    var rightInnerBoundary = (500 / 2) + (500 / 2);

	var mario = [];
	mario.push(new Player(200, 488, context));

	var mario = [];
	mario.push(new Player(200, 488, context));

	var background = new Background(context, canvas.width(), canvas.height());
	background.image.src = background.imageSource;

	var backgroundCollisions = [];
	backgroundCollisions.push(new collisionBox(0, 520, 2210, 80, context));
	backgroundCollisions.push(new collisionBox(2275, 520, 475, 80, context));
	backgroundCollisions.push(new collisionBox(2850, 520, 2045, 80, context));
	backgroundCollisions.push(new collisionBox(4960, 520, 2045, 80, context));


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
					block[i].vx = -5;
				}
				break;

			case LEFT:
				mario[0].vx = -5;
				if (mario.vx < canvas.x) {
					mario.vx = 0;
				}
				
				break;

			case DOWN:

				break;
			
			case JUMP:
				mario.vy = -5;
				if (background.vx = 0) {
					mario.vy = 0;
				}
					break;
				
		}
	}


	function keyupHandler(event) {
		if (event.keyCode === LEFT || event.keyCode === RIGHT) {
			background.vx = 0;
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
		for (var i = 0; i < mario.length; i++) {
			mario[i].Update();
		}

		for (var i = 0; i < block.length; i++) {
			block[i].Update();
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
			//backgroundCollisions[i].Render();
		}
	
		for (var i = 0; i < block.length; i++) {
			block[i].Render();
		}

		for (var i = 0; i < mario.length; i++) {
			mario[i].Render();

		}
	}

	Update();
});
