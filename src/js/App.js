export class App {
	constructor(canvas) {
		this.canvas = canvas;
		this.ctx = canvas.getContext('2d');
		this.shapes = [];
		this.render();
	}

	addShape(shape) {
		if (shape && !this.shapes.includes(shape)) {
			this.shapes.push(shape);
		}
	}

	setCurrentShape(shape) {
		this.currentShape = shape;
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

	render() {
		requestAnimationFrame(() => {
			this.clear();

			this.shapes.forEach(shape => {
				this.renderShape(shape);
			});

			if (this.currentShape) {
				this.renderShape(this.currentShape);
			}

			this.render();
		});
	}
}
