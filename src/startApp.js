import { shapeMap, styles } from './js/Data';
import { App } from './js/App';

const canvasNode = document.querySelector('#main-canvas');

const app = new App(canvasNode);

canvasNode.addEventListener('mousemove', e => {
	if (app.currentShape) {
		app.currentShape.setPosition(e.clientX, e.clientY);
	}
});

canvasNode.addEventListener('click', e => {
	if (app.currentShape) {
		const shapeClass = app.currentShape.constructor;
		app.addShape(app.currentShape);
		app.setCurrentShape(createShape(shapeClass, e.clientX, e.clientY));
	}
});

document.addEventListener('click', e => {
	const shape = e.target.dataset.shape;

	if (shape && shapeMap.hasOwnProperty(shape)) {
		app.setCurrentShape(createShape(shapeMap[shape]));
		console.log('ok');
	}
});

function createShape(ShapeClass, x, y) {
	const shape = new ShapeClass(x, y, styles.currentSize);

	// shape.setFillColor(styles.currentFillColor);
	shape.setStrokeColor(styles.currentStrokeColor);
	shape.setStrokeColor(styles.currentStrokeColor);

	return shape;
}

console.log(shapeMap.circle);