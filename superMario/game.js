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

    var goombas = [];
    goombas.push(new Goombas(0, 0, context));
    goombas.push(new Goombas(100, 0, context));

        var turtles = new Turtles(0, 0, context);


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

   
       

        function Update() {
            requestAnimationFrame(Update, canvas);
            //goombas.x--;
            turtles.x--;
   
            

            //mario.Update();
            background.Update();

            for (var i = 0; i < backgroundCollisions.length; i++) {
                //backgroundCollisions[i].Update(background.x, background.y);
            }
            //Check wether mario moved to the edges of the inner boundaries.
            //if (mario.x < rightInnerBoundary) {
            //mario.x = rightInnerBoundary;
            //background.vx -= mario.vx;
            //rightInnerBoundary = (400 / 2) + (400 / 2);

            //

            for (var i = 0; i < goombas.length; i++) {
                goombas[i].Update();
            }

            Render();
        }

        function CollisionBox() {
            context.fillRect(background.x, 520, 2210, 80);
        }

        function Render() {
            context.clearRect(0, 0, canvas.width, canvas.height);
            background.Render();
            for (var i = 0; i < backgroundCollisions.length; i++) {
                backgroundCollisions[i].Render();
            }

            for (var i = 0; i < goombas.length; i++) {
                goombas[i].Render();
            }
            turtles.Render();
            
    }

   
        Update();
    
});
