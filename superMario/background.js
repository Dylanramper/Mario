var Background = (function (canvas, canvasW, canvasH) {
	this.sourceX = 0;
	this.sourceY = 0;
	this.sourceWidth = 3584;
	this.sourceHeight = 240;
	this.x = 0;
	this.y = 0;
	


	this.width = 3584 * 2;
	this.height = canvasH;

	this.image = new Image();
	this.imageSource = "Images/background.png";
	this.image.src = this.imageSource;

	this.vx = 0;
	this.vy = 0;



	//this.camera.x = (this.gameWorld.x + this.gameWorld.width / 2) - this.camera.width / 2;
	

	this.Update = function () {
		this.x += this.vx;
		this.y += this.vy;
	}

	this.Render = function () {
		canvas.drawImage(this.image, this.sourceX, this.sourceY, this.sourceWidth, this.sourceHeight, this.x, this.y, this.width, this.height);
	}
});


