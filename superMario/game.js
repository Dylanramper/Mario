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
                background.vx = 5;
                //console.log(background.x);
                if (background.x < -64) {
                    background.vx = 
                    break;
                }
            
                
		}
	}

	function keyupHandler(event) {
		switch (event.keyCode) {


			case RIGHT:
				moveRight = false;
				break;

		}
    }

	var mario = new Player(0,0,context);
	//mario.Image.src = mario.imageSource;

	function Update() {
		requestAnimationFrame(Update, canvas);

		//mario.Update();
		background.Update();

		for (var i = 0; i < backgroundCollisions.length; i++) {
			//backgroundCollisions[i].Update(background.x, background.y);
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

        CollisionBox();
        mario.Render();

		for (var i = 0; i < backgroundCollisions.length; i++) {
			backgroundCollisions[i].Render();
		}

	}

	Update();
});
