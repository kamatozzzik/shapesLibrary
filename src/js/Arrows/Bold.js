import { Arrow } from './Arrow';

export class Bold extends Arrow {
	render(ctx) {
		ctx.fillStyle = this.fillStyle;
		ctx.strokeStyle = this.strokeStyle;
		ctx.font = 'bold 30pt Arial';
		ctx.fillText('Bold', this.x, this.y);
	}
}
