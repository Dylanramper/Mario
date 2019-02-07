var Block = (function (context,x,y,sourceX,sourceY) {
	this.sourceX = sourceX;
	this.sourceY = sourceY;
	this.sourceWidth = 17;
	this.sourceHeight = 16;
	this.x = x;
	this.y = y;

	this.width = 32;
	this.height = 32;

	this.image = new Image();
	this.imageSource = "Images/blocks.png";
	this.image.src = this.imageSource;

	this.vx = 0;
	this.vy = 0;

	this.Update = function () {
		this.x += this.vx;
		this.y += this.vy;
	}

	this.Render = function () {
		context.drawImage(this.image, this.sourceX, this.sourceY, this.sourceWidth, this.sourceHeight, this.x, this.y, this.width, this.height);
	}

	this.Update = function () {
		this.x += this.vx;
	}
});