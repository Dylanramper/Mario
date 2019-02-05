$(document).ready(function () {

   
    var canvas = $("canvas");
	var context = canvas.get(0).getContext("2d");
	

	var JUMP = 40;
	var RIGHT = 39;
	var LEFT = 37;



	var rightInnerBoundary = (500 / 2) + (500 / 2);

    var background = new Background(context, canvas.width(), canvas.height());
	background.image.src = background.imageSource;

	var backgroundCollisions = [];
	backgroundCollisions.push(new collisionBox(background.x, 520, 2210, 80, context));

	

	window.addEventListener("keydown", keydownHandler, false);
	window.addEventListener("keyup", keyupHandler, false);

	function keydownHandler(event) {
		switch (event.keyCode) {

			case RIGHT:
				background.vx = -5;
				mario.vx = 5;
				if (background.x < -6050) {
					background.vx = 0;
                }
				break;

			case LEFT:
				mario.vx = -5;
				background.vx = 0;
				break;
                }
	}


	function keyupHandler(event) {
		if (event.keyCode === LEFT || event.keyCode === RIGHT) {
			background.vx = 0;
		}

	}

	function PlayGame() {

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
	}

	//var mario = new Mario();
	//mario.Image.src = mario.imageSource;

	function Update() {
		console.log(backgroundCollisions[0]);
		requestAnimationFrame(Update, canvas);

		//mario.Update();
		background.Update();

		for (var i = 0; i < backgroundCollisions.length; i++) {
			backgroundCollisions[i].Update(background.x);
		}
		//Check wether the cat moved to the edges of the inner boundaries.
		//if (mario.x < rightInnerBoundary) {
			//mario.x = rightInnerBoundary;
			//background.vx -= mario.vx;
			//rightInnerBoundary = (400 / 2) + (400 / 2);

		//}
		Render();
	}

	function CollisionBox() {
		context.fillRect(background.x, 520, 2210, 80);
	}

	function Render() {
		context.clearRect(0,0,canvas.width, canvas.height);
		background.Render();
		for (var i = 0; i < backgroundCollisions.length; i++) {
			backgroundCollisions[i].Render();
		}
	}

	Update();
});
