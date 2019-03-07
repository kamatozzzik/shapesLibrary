import { Shape } from './Shape';

export class Square extends Shape {
	render(ctx) {
		ctx.beginPath();

		ctx.rect(-this.size / 2, -this.size / 2, this.size, this.size);

		ctx.fillStyle = this.fillColor;
		ctx.fill();
		ctx.lineWidth = this.strokeWidth;
		ctx.strokeWidth = this.strokeColor;
		ctx.stroke();
	}
}
