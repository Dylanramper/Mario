var collisionBox = (function (x, y, width, height, context) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;

	this.Update = function (x, y) {
		this.x = x;
		this.y = y;
	}

	this.Render = function () {
		context.fillRect(this.x, this.y, this.width, this.height);
	}
});