export class Line {
	constructor() {}

	setFromPos(fromX, fromY) {
		this.fromX = fromX;
		this.fromY = fromY;
	}

	setToPos(toX, toY) {
		this.toX = toX;
		this.toY = toY;
	}

	setStrokeColor(color) {
		this.strokeColor = color;
	}

	setStrokeWidth(width) {
		this.strokeWidth = width;
	}

	render(ctx) {
		throw Error('Error');
	}
}
