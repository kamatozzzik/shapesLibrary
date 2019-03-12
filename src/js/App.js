export class App {
	constructor(canvas) {
		this.canvas = canvas;
		this.ctx = canvas.getContext('2d');
		this.shapes = [];
		this.lines = [];
		this.positions = [];
		this.lineToPos = [];
		this.lineFromPos = [];
		this.render();
	}

	addPosition(x, y) {
		this.positions.push({ x, y });
	}

	addFromPos(x, y) {
		this.lineFromPos.push({ fromX: x, fromY: y });
	}

	addToPos(x, y) {
		this.lineToPos.push({ toX: x, toY: y });
	}

	checkPositions(x, y, distance) {
		if (this.positions.length > 0)
			for (let pos of this.positions) {
				if ((2 * distance) ** 2 <= (x - pos.x) ** 2 + (y - pos.y) ** 2)
					continue;
				return false;
			}
		return true;
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
		line.render(this.ctx);
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
