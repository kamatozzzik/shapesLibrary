import { Arrow } from './Arrow';

export class Thick extends Arrow {
	render(ctx) {
		ctx.fillStyle = this.fillStyle;
		ctx.strokeStyle = this.strokeStyle;
		ctx.font = 'italic 30pt Arial';
		ctx.fillText('Thick', this.x, this.y);
	}
}
