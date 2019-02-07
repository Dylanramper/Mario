
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
				//console.log(background.x);
				if (background.x < -6050) {
					background.vx = 0;

				}
				for (var i = 0; i < block.length; i++) {
					block[i].vx = -5;
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

	}

	function Update() {
		requestAnimationFrame(Update, canvas);
		//mario.Update();
		background.Update();
		for (var i = 0; i < backgroundCollisions.length; i++) {
			//backgroundCollisions[i].Update(background.x, background.y);
		}
		for (var i = 0; i < block.length; i++) {
			block[i].Update();
		}

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
	
		for (var i = 0; i < block.length; i++) {
			block[i].Render();
		}
	}

	Update();
});
