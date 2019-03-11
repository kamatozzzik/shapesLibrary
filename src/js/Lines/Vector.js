import { Line } from './Line';

export class Vector extends Line {
	startDraw(ctx) {
		ctx.beginPath();
		ctx.moveTo(this.fromX, this.fromY);
	}

	endDraw(ctx) {
		ctx.lineTo(this.toX, this.toY);
		ctx.stroke();
	}

	render(ctx) {
		this.startDraw(ctx);
		this.endDraw(ctx);
	}
}
