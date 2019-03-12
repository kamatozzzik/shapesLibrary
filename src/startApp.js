import { shapeMap, lineMap, styles } from './js/Data';
import { App } from './js/App';

const canvasNode = document.querySelector('#main-canvas');
const app = new App(canvasNode);

// Отрисовка фигуры возле курсора
canvasNode.addEventListener('mousemove', e => {
	if (app.currentShape) {
		app.currentShape.setPosition(e.clientX, e.clientY);
	}
});

// Установка фигуры на экране
canvasNode.addEventListener('click', e => {
	if (
		app.currentShape &&
		app.checkPositions(e.clientX, e.clientY, styles.currentDistance)
	) {
		const shapeClass = app.currentShape.constructor;
		app.addShape(app.currentShape);
		app.addPosition(e.clientX, e.clientY);
		app.setCurrentShape(createShape(shapeClass, e.clientX, e.clientY));
	}
});

// Установка фигуры на курсор
document.addEventListener('click', e => {
	const shape = e.target.dataset.shape;
	if (shape && shapeMap.hasOwnProperty(shape)) {
		app.setCurrentShape(createShape(shapeMap[shape]));
	}
});

// Сброс текущей фигуры
document.addEventListener('keydown', e => {
	if (e.keyCode === 27) {
		app.setCurrentShape(null);
	}
});

// Задание параметров фигуре
function createShape(ShapeClass, x, y) {
	const shape = new ShapeClass(x, y, styles.currentSize);
	shape.setFillColor(styles.currentFillColor);
	shape.setStrokeColor(styles.currentStrokeColor);
	shape.setStrokeWidth(styles.currentStrokeWidth);
	return shape;
}

window.addEventListener('load', handlerResize);
window.addEventListener('resize', handlerResize);

// При ресайзе изменяется ширина окна canvas
function handlerResize() {
	canvasNode.width = window.innerWidth;
	canvasNode.height = window.innerHeight;
}

///////////////------------------ LINES -------------------------////////////

function createLine(LineClass) {
	const line = new LineClass();

	line.setStrokeColor(styles.currentStrokeColor);
	line.setStrokeWidth(styles.currentStrokeWidth);
	return line;
}

document.addEventListener('click', e => {
	const line = e.target.dataset.line;
	if (line && lineMap.hasOwnProperty(line)) {
		app.setCurrentLine(createLine(lineMap[line]));
	}
});

canvasNode.addEventListener('click', e => {
	if (app.currentLine) {
		if (app.lineFromPos.length > app.lineToPos.length) {
			app.addToPos(e.clientX, e.clientY);
			app.currentLine.setToPos(e.clientX, e.clientY);
			let lineClass = app.currentLine.constructor;
			app.lines.push(app.currentLine);
			app.setCurrentLine(createLine(lineClass));
			console.log('Установили позицию to');
		} else {
			app.addFromPos(e.clientX, e.clientY);
			app.currentLine.setFromPos(e.clientX, e.clientY);
			console.log('Установили позицию from');
			console.log(app.lines);
		}
	}
});
