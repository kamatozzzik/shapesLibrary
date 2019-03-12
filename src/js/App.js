export class App {
	constructor(canvas) {
		this.canvas = canvas;
		this.ctx = canvas.getContext('2d');
		this.shapes = [];
		this.lines = [];
		this.arrows = [];
		this.positions = [];
		this.lineToPos = [];
		this.lineFromPos = [];
		this._render();
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

	addArrow(arrow) {
		if (arrow && !this.arrows.includes(arrow)) {
			this.arrows.push(arrow);
		}
	}

	setCurrentShape(shape) {
		this.currentShape = shape;
	}

	setCurrentLine(line) {
		this.currentLine = line;
	}

	setCurrentArrow(arrow) {
		this.currentArrow = arrow;
	}

	clear() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}

	_renderShape(shape) {
		if (shape.canRender()) {
			this.ctx.save();
			this.ctx.translate(shape.x, shape.y);
			shape.render(this.ctx);
			this.ctx.restore();
		}
	}

	_renderLine(line) {
		line.render(this.ctx);
	}

	_renderArrow(arrow) {
		arrow.render(this.ctx);
	}

	_render() {
		requestAnimationFrame(() => {
			this.clear();

			this.shapes.forEach(shape => {
				this._renderShape(shape);
			});
			this.lines.forEach(line => {
				this._renderLine(line);
			});

			this.arrows.forEach(arrow => {
				this._renderArrow(arrow);
			});

			if (this.currentShape) {
				this._renderShape(this.currentShape);
			}

			if (this.currentLine) {
				this._renderLine(this.currentLine);
			}

			if (this.currentArrow) {
				this._renderArrow(this.currentArrow);
			}

			this._render();
		});
	}
}
