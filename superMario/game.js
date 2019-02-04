$(document).ready(function () {
	var canvas = $("canvas");
	var context = canvas.get(0).getContext("2d");
	

	var JUMP = 40;
	var RIGHT = 38;
	var LEFT = 37;

	var rightInnerBoundary = (500 / 2) + (500 / 2);

	var background = new Background(context, canvas.width(), canvas.height());
	background.image.src = background.imageSource;
	

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

	function Render() {
		background.Render();
	}

	Update();
});
