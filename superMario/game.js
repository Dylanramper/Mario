$(document).ready(function () {
	var canvas = $("canvas");
	var context = canvas.get(0).getContext("2d");
	

	var JUMP = 40;
	var RIGHT = 39;
	var LEFT = 37;



	var rightInnerBoundary = (500 / 2) + (500 / 2);

	var background = new Background(context, canvas.width(), canvas.height());
	background.image.src = background.imageSource;

	window.addEventListener("keydown", keydownHandler, false);
	window.addEventListener("keyup", keyupHandler, false);

	function keydownHandler(event) {
		switch (event.keyCode) {

			case RIGHT:
				background.vx = -5;
				//console.log(background.x);
				if (background.x < -6050) {
					background.vx = 0;

				}
				break;

		}
	}


	function keyupHandler(event) {
		if (event.keyCode === LEFT || event.keyCode === RIGHT) {
			background.vx = 0;
		}

	}
	

	//var mario = new Mario();
	//mario.Image.src = mario.imageSource;

	function Update() {
		requestAnimationFrame(Update, canvas);

		//mario.Update();
		background.Update();

		//Check wether the cat moved to the edges of the inner boundaries.
		//if (mario.x < rightInnerBoundary) {
			//mario.x = rightInnerBoundary;
			//background.vx -= mario.vx;
			//rightInnerBoundary = (400 / 2) + (400 / 2);

		//}
		Render();
	}

	function CollisionBox() {
		context.fillRect(0, 520, 750, 80);
	}

	function Render() {
		context.clearRect(0,0,canvas.width, canvas.height);
		background.Render();
		CollisionBox();
	}

	Update();
});
