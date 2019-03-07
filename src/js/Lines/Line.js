export class Line {
	constructor(position) {
		this.setPosition(position);
	}

	setPosition(position) {
		let { fromX, fromY, toX, toY } = position;
		this.fromX = fromX;
		this.fromY = fromY;
		this.toX = toX;
		this.toY = toY;
	}

	setStrokeColor(color) {
		this.strokeColor = color;
	}

	render(ctx) {
		throw Error('Error');
	}
}

export class Vector extends Line {
	render(ctx) {
		ctx.beginPath();
		ctx.moveTo(this.fromX, this.fromY);
		ctx.lineTo(this.toX, this.toY);

		ctx.stroke();
	}
}
