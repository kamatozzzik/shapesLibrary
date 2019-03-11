export class Line {
	constructor(fromX, fromY) {
		this.lineToPos = [];
		this.lineFromPos = [];
		this.setFromPosition(fromX, fromY);
	}

	addFromPos(x, y) {
		this.lineFromPos.push({ fromX: x, fromY: y });
	}

	addToPos(x, y) {
		this.lineToPos.push({ toX: x, toY: y });
	}

	setFromPosition(fromX, fromY) {
		this.fromX = fromX;
		this.fromY = fromY;
	}

	setToPosition(toX, toY) {
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
