class Drawer {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = this.canvas.getContext("2d");
    }
    getCanvas() {
        return this.canvas;
    }
    getContext() {
        return this.context;
    }
    colorize(color) {
        this.context.fillStyle = color || Settings.CanvasColor;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
    clear() {
        this.colorize();
    }
    start() {
        this.context.beginPath();
    }
    draw(a, b) {
        this.context.moveTo(a.getX(), a.getY());
        this.context.lineTo(b.getX(), b.getY());
        this.context.lineWidth = Settings.LineSize;
        this.context.strokeStyle = Settings.LineColor;
        this.context.stroke();
    }
    drawPoints(points) {
        this.start();
        for (let i = 0; i < points.length - 1; i++)
            this.draw(points[i], points[i + 1]);
        this.stop();
    }
    drawBezierPoints(points) {
        this.context.beginPath();
        this.context.lineWidth = Settings.LineSize;
        this.context.strokeStyle = Settings.LineColor;
        for (let i = 0; i < points.length - 2; i += 2) {
            this.context.moveTo(
                points[i].getX(),
                points[i].getY());
            this.context.bezierCurveTo(
                points[i + 1].getX(), points[i + 1].getY(),
                points[i + 1].getX(), points[i + 1].getY(),
                points[i + 2].getX(), points[i + 2].getY(),);
        }
        this.context.stroke();
        this.context.closePath();
    }
    stop() {
        this.context.closePath();
    }
}