import { Line } from './Line';

export class Vector extends Line {
	render(ctx) {
		ctx.beginPath();
		ctx.moveTo(this.fromX, this.fromY);
		ctx.lineTo(this.toX, this.toY);
		ctx.stroke();
	}
}
