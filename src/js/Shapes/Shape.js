export class Shape {
	constructor(x, y, size) {
		this.setPosition(x, y);
		this.setSize(size);
	}

	setSize(size) {
		this.size = size < 0 ? 0 : size;
	}

	setPosition(x, y) {
		this.x = x;
		this.y = y;
	}

	setStrokeColor(color) {
		this.strokeColor = color;
	}

	setFillColor(color) {
		this.fillColor = color;
	}

	setStrokeWidth(width) {
		this.strokeWidth = width;
	}

	canRender() {
		return (
			Number.isFinite(this.size) &&
			Number.isFinite(this.x) &&
			Number.isFinite(this.y)
		);
	}
	render(ctx) {
		throw Error('This method cannot be called');
	}
}
