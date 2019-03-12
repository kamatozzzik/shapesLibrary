export class Arrow {
	constructor(x, y) {
		this.setPos(x, y);
	}

	setPos(x, y) {
		this.x = x;
		this.y = y;
	}

	setFillColor(color) {
		this.fillStyle = color;
	}
	setStrokeColor(color) {
		this.strokeColor = color;
	}

	render(ctx) {
		throw Error('Error');
	}
}
