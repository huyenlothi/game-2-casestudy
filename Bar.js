function Bar(width, height, x, y, speed) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;

    this.draw = function () {
        let ctx = document.getElementById("canvas").getContext("2d");
        ctx.beginPath();
        ctx.fillStyle = "brown";
        ctx.fillRect(this.x, this.y,this.width,this.height);
        ctx.fill();
        ctx.closePath();
    }
    this.moveLeft = function () {
        this.x -= this.speed;
        if (this.x <= 0) {
            this.x = 0;
        }
    }
    this.moveRight = function () {
        if (this.x < DEFAULT_WIDTH-this.width) {
            this.x += this.speed;
            console.log("ok: " + this.x);
        }
    }
}
function moveObj(event) {
    switch (event.which) {
        case 37:
            bar.moveLeft();
            break;
        case 39:
            bar.moveRight();
            break;
    }
    bar.draw();
}