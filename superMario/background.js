var Background = (function (canvas) {
    this.sourceX = 0;
    this.sourceY = 64;
    this.sourceWidth = 2561;
    this.sourceHeight = 1922;

    this.canvas = canvas;

    this.width = 2561;
    this.height = 1922;

    this.x = -(this.width - 550) / 2;
    this.y = -(this.height - 400) / 2;

    this.image = new Image();
    this.imageSource = "1-1.png";

    this.vx = 0;
    this.vy = 0;

    this.Update = function () {
        this.x = this.vx;
        this.y = this.vy;
    }
});