var mario = (function () {
	this.sourceX = 0;
	this.sourceY = 0;
	this.sourceWidth = 447;
	this.sourceHeight = 687;

	this.x = 81;
	this.y = 35;
	this.width = 16;
	this.height = 16;

	this.Image = new Image();
	this.imageSource = "Images/marioStates.png";

	this.vx = 0;
	this.vy = 0;
	this.width = 16;
	this.height = 16;

	this.Update = function () {
		this.x += this.vx;
		this.y += this.vy;
	}
});