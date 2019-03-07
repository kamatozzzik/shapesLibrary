export class App {
	constructor(canvas) {
		this.canvas = canvas;
		this.ctx = canvas.getContext('2d');
		this.shapes = [];
		this.lines = [];
		this.shapePositions = [];
		this.render();
	}

	addShape(shape) {
		if (shape && !this.shapes.includes(shape)) {
			this.shapes.push(shape);
		}
	}

	addLine(line) {
		if (line && !this.lines.includes(line)) {
			this.lines.push(line);
		}
	}

	setCurrentShape(shape) {
		this.currentShape = shape;
	}

	setCurrentLine(line) {
		this.currentLine = line;
	}

	clear() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}

	renderShape(shape) {
		if (shape.canRender()) {
			this.ctx.save();
			this.ctx.translate(shape.x, shape.y);
			shape.render(this.ctx);
			this.ctx.restore();
		}
	}

	renderLine(line) {
		this.ctx.save();
		line.render(this.ctx);
		this.ctx.restore();
	}

	render() {
		requestAnimationFrame(() => {
			this.clear();

			this.lines.forEach(line => {
				this.renderLine(line);
			});

			this.shapes.forEach(shape => {
				this.renderShape(shape);
			});

			if (this.currentShape) {
				this.renderShape(this.currentShape);
			}

			if (this.currentLine) {
				this.renderLine(this.currentLine);
			}

			this.render();
		});
	}
}
