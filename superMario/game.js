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
			mario.vx = 0;
		}

	}


	//function PlayGame() {
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
		for (var i = 0; i < mario.length; i++) {
			mario[i].Render();
		}
	}

	Update();
});
