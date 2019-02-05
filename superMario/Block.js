var Block = (function (canvas, canvasW, canvasH) {
	this.sourceX = 272;
	this.sourceY = 112;
	this.sourceWidth = 15;
	this.sourceHeight = 15;
	this.x = 0;
	this.y = 0;



	this.width = canvasW;
	this.height = canvasH;

	this.image = new Image();
	this.imageSource = "blocks.png";
	this.image.src = this.imageSource;

	this.vx = 0;
	this.vy = 0;
});