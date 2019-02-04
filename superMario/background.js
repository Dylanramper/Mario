var Background = (function (canvas, canvasW, canvasH) {
	this.sourceX = 0;
	this.sourceY = 0;
	this.sourceWidth = 3584;
	this.sourceHeight = 240;



	this.width = 3584 * 2;
	this.height = canvasH;

	this.x = -(this.width - 800) / 2;
	this.y = -(this.height - 600) / 2;

	this.image = new Image();
	this.imageSource = "Images/background.png";
	this.image.src = this.imageSource;

	this.vx = 0;
	this.vy = 0;

	this.Update = function () {
		this.x += this.vx;
		this.y += this.vy;
	}

	this.Render = function () {
		canvas.drawImage(this.image, this.sourceX, this.sourceY, this.sourceWidth, this.sourceHeight, this.x, this.y, this.width, this.height);
	}
});



/*var Background = (function (canvas) {

	var canvas = document.querySelector("canvas");
	var drawingSurface = canvas.getContext("2d");

	var sprites = [];
	var assetsToLoad = [];

	var background = new Image();
	background.addEventListener("load", loadHandler, false);
	background.src = "Images/background.png";

	function imageLoadHandler() {
		drawingSurface.drawImage(background, 0, 0);
	}*/

	/*this.sourceX = 64;
	this.sourceY = 64;
	this.sourceWidth = 3584;
	this.sourceHeight = 240;

	this.canvas = canvas;

	this.width = 64;
	this.height = 64;

	this.x = -(this.width - 260) / 2;
	this.y = -(this.height - 240) / 2;

	this.image = new Image();
	this.imageSource = "Images/background.png";

	this.vx = 0;
	this.vy = 0;

	this.Update = function () {
		this.x = this.vx;
		this.y = this.vy;
	}*/
//});