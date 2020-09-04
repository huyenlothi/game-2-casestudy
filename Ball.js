let Ball = function(x, y, radius, dx, dy) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;

    this.stepForward = function() {
        if (this.x - this.radius < 0 || this.x + this.radius >= DEFAULT_WIDTH) {
            this.dx = -this.dx;
        }else {
            if (this.y - this.radius < 0 ) {
                this.dy = -this.dy;
            }else {
                if ((this.y + this.radius) === bar.y) {
                    if ( this.x+ this.radius > bar.x && this.x < (bar.x + bar.width )) {
                        score++;
                        this.dy = -this.dy;
                    }
                }
            }
        }
        this.x = this.x + this.dx;
        this.y = this.y + this.dy;
    }
    this.checkWin = function () {
        if ((Math.abs(ball.y)+ ball.radius)>=DEFAULT_HEIGHT) {
            alert("GAME OVER !!!");
            document.location.reload();
            cancelAnimationFrame(draw);
        }
        if (score==20) {
            alert("YOU WIN!!!");
            document.location.reload();
        }
    }
}
function ballRun() {
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    function draw() {
        ctx.clearRect(0, 0, DEFAULT_WIDTH, DEFAULT_HEIGHT);
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI*2);
        ctx.closePath();
        ctx.fillStyle="red";
        ctx.fill();
        ctx.font = "30px Arial";
        ctx.fillStyle = "white";
        ctx.fillText("Score: " + score, 10, 50);

        bar.draw();
        ball.stepForward();
        ball.checkWin();
        requestAnimationFrame(draw);
    }
    draw();

}