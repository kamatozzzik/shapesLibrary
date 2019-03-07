import { Shape } from './Shape';

export class Circle extends Shape {
	render(ctx) {
		ctx.beginPath();

		ctx.arc(0, 0, this.size / 2, 0, 2 * Math.PI, false);

		// ctx.fillStyle = this.fillColor;
		// ctx.fill();
		ctx.lineWidth = this.strokeWidth;
		ctx.strokeStyle = this.strokeColor;
		ctx.stroke();
	}
}
