
$(document).ready(function () {

	var spriteObject = {
		sourceX: 0,
		sourceY: 0,
		sourceWidth: 64,
		sourceHeight: 64,
		x: 0,
		y: 0,
		width: 64,
		height: 64,
		vx: 0,
		vy: 0,
		visible: true,

		//Physical properties
		accelerationX: 0,
		accelerationY: 0,
		speedLimit: 5,
		friction: 0.96,
		bounce: -0.7,
		gravity: 0.3,

		//Platform game properties
		isOnGround: undefined,
		jumpForce: -10,

		//Getters (return info when called)
		centerX: function () {
			return this.x + (this.width / 2);
		},

		centerY: function () {
			return this.y + (this.height / 2);
		},

		halfWidth: function () {
			return this.width / 2;
		},

		halfHeight: function () {
			return this.height / 2;
		}
	};

	//The main program
	var canvas = $("canvas");
	var context = canvas.get(0).getContext("2d");

	$(image).load(function () {
		var image = new Image();
		image.src = ("1-1.png");
		context.drawImage(image, 500, 500);
	});

	//Object arrays
	var sprites = [];
	var assetsToLoad = [];
	var assetsLoaded = 0;

	//Create the box
	var box = Object.create(spriteObject);
	box.x = 350;
	box.y = 250;
	sprites.push(box);

	//The cat
	var mario = Object.create(spriteObject);
	mario.sourceX = 64;
	mario.x = 550 / 2 - mario.halfWidth();
	mario.y = 400 / 2 - mario.halfHeight();
	sprites.push(cat);

	//Load the tilesheet image
	var image = new Image();
	image.addEventListener("load", loadHandler, false);
	image.src = "1-1.png";
	assetsToLoad.push(image);

	//Game states
	var LOADING = 0;
	var PLAYING = 1;
	var gameState = LOADING;

	//Keycodes
	var RIGHT = 39;
	var LEFT = 37;
	var SPACE = 32;

	//Directions
	var moveRight = false;
	var moveLeft = false;
	var jump = false;

	//Add keyboard listeners
	window.addEventListener("keydown", keydownHandler, false);
	window.addEventListener("keyup", keyupHandler, false);

	function keydownHandler(event) {
		switch (event.keyCode) {
			case LEFT:
				moveLeft = true;
				break;

			case RIGHT:
				moveRight = true;
				break;

			case SPACE:
				jump = true;
				break;
		}
	}

	function keyupHandler(event) {
		switch (event.keyCode) {
			case LEFT:
				moveLeft = false;
				break;

			case RIGHT:
				moveRight = false;
				break;

			case SPACE:
				jump = false;
				break;
		}
	}

	Update();

	function Update() {
		//Set up the animation loop
		requestAnimationFrame(Update, canvas);

		switch (gameState) {
			case LOADING:
				break;

			case PLAYING:
				PlayGame();
				break;
		}

		Render();
	}
	//To keep track of assets that are loading
	function loadHandler() {
		assetsLoaded++;
		if (assetsLoaded === assetsToLoad.length) {
			gameState = PLAYING;
		}
	}

	function PlayGame() {
		//Left
		if (moveLeft && !moveRight) {
			mario.accelerationX = -0.2;
			mario.friction = 1;
		}

		//Right
		if (moveRight && !moveLeft) {
			mario.accelerationX = 0.2;
			mario.friction = 1;
		}

		if (jump && mario.isOnGround) {
			mario.vy += mario.jumpForce;
			mario.isOnGround = false;
			mario.friction = 1;
		}

		//Set the cat's acceleration, friction and gravity to zero if none of the arrow keys are being pressed
		if (!moveLeft && !moveRight) {
			mario.accelerationX = 0;
			mario.friction = 0.96;
			mario.gravity = 0.3;
		}

		//Apply the acceleration
		mario.vx += mario.accelerationX;
		mario.vy += mario.accelerationY;

		//Apply the friction
		if (mario.isOnGround) {
			mario.vx *= mario.friction;
		}

		//Apply the gravity
		mario.vy += mario.gravity;

		//Limit the speed
		//Don't limit the upward because it will choke the jump effect
		if (mario.vx > mario.speedLimit) {
			mario.vx = mario.speedLimit;
		}

		if (mario.vx < -mario.speedLimit) {
			mario.vx = -mario.speedLimit;
		}

		if (mario.vy > mario.speedLimit * 2) {
			mario.vy = mario.speedLimit * 2;
		}

		//Move the cat
		mario.x += mario.vx;
		mario.y += mario.vy;


		var collisionSide = blockRectangle(mario, box, false);
		//collisionSide variable info is stored under 'function blockrectangle, etc'
		if (collisionSide === "bottom" && mario.vy >= 0) {
			//Tell the game that the cat is on the ground if it's standing on top of a platform
			mario.isOnGround = true;

			mario.vy = - mario.gravity;
		} else if (collisionSide === "top" && mario.vy >= 0) {
			cat.vy = 0;
		} else if (collisionSide === "left" && mario.vx <= 0) {
			cat.vx = 0;
		} else if (collisionSide === "right" && mario.vx >= 0) {
			cat.vx = 0;
		}

		if (collisionSide !== "bottom" && mario.vy > 0) {
			cat.isOnGround = false;
		}

		//Bounce off the screen edges
		//Left
		if (cat.x < 0) {
			cat.vx *= cat.bounce;
			cat.x = 0;
		}

		//Top
		if (cat.y < 0) {
			cat.vy *= cat.bounce;
			cat.y = 0;
		}

		//Right
		if (cat.x + cat.width > 550) {
			cat.vx *= cat.bounce;
			cat.x = 550 - cat.width;
		}

		//Bottom
		if (cat.y + cat.height > 400) {
			cat.y = 400 - cat.height;
			cat.isOnGround = true;
			cat.vy = -cat.gravity;
		}

	}

	function blockRectangle(r1, r2, bounce) {
		//Set bounce to a default value of false if it's not specified
		if (typeof bounce === "undefined") {
			bounce = false;
		}

		//A local variable to tell us which side the collision is occuring on
		var collisionSide = "";

		//Calculate the distance vector
		var vx = r1.centerX() - r2.centerX();
		var vy = r1.centerY() - r2.centerY();

		//Figure out the combined half-widths and half-heights
		var combinedHalfWidths = r1.halfWidth() + r2.halfWidth();
		var combinedHalfHeights = r1.halfHeight() + r2.halfHeight();

		//Check if vx is less than the combined half-widths
		if (Math.abs(vx) < combinedHalfWidths) {
			//A collision might be occuring!
			//Check if the vy is less than the combined half-heights
			if (Math.abs(vy) < combinedHalfHeights) {
				//A collision has occured
				//Find out the size of the overlap on both x and y
				var overlapX = combinedHalfWidths - Math.abs(vx);
				var overlapY = combinedHalfHeights - Math.abs(vy);

				//The collision has occured on the axis with the *smallest amount of overlap.Let's figure out which axis that is

				if (overlapX >= overlapY) {
					//The collision is happening on the X axis, but on which side? vy can tell us

					if (vy > 0) {
						collisionSide = "top";

						//Move the rectangle out of the collision
						r1.y = r1.y + overlapY;
					} else {
						collisionSide = "bottom";

						r1.y = r1.y - overlapY;
					}

					//Bounce
					if (bounce) {
						r1.vy *= -1;
					}
				} else {
					//The collision is happening on the Y axis (left/right) but on which side? vx can tell us
					if (vx > 0) {
						collisionSide = "left";

						r1.x = r1.x + overlapX;
					} else {
						collisionSide = "right";

						r1.x = r1.x - overlapX;
					}

					if (bounce) {
						r1.vx *= -1;
					}
				}
			} else {
				//No collision
				collisionSide = "none";
			}
		} else {
			collisionSide = "none";
		}

		return collisionSide;
	}

	function Render() {
		context.clearRect(0, 0, 550, 400);
		//A for looop for the sprites to write out once and not have to repeat
		//Math.floor is to round down the numbers
		for (var i = 0; i < sprites.length; i++) {
			var sprite = sprites[i];
			context.drawImage(image, sprite.sourceX, sprite.sourceY, sprite.sourceWidth, sprite.sourceHeight, Math.floor(sprite.x), Math.floor(sprite.y), sprite.width, sprite.height);
		}
	}
});
