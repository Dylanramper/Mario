var hud = (function (context,text,x,y) {
	this.text = text;
	this.x = x;
	this.y = y;
	context.font = "30px prstartk";
	context.fillStyle = "rgb(255, 255, 255)";

	this.Render = function(){
		context.fillText(this.text, this.x, this.y);
	}
});

