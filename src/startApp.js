import { shapeMap, lineMap, arrowMap, styles } from './js/Data';
import { App } from './js/App';

const canvasNode = document.querySelector('#main-canvas');
const arrowList = document.querySelector('.arrow-list');
const app = new App(canvasNode);

// Отрисовка фигуры возле курсора
canvasNode.addEventListener('mousemove', e => {
	if (app.currentShape) {
		app.currentShape.setPosition(e.clientX, e.clientY);
	} else if (app.currentLine) {
		app.currentLine.setToPos(e.clientX, e.clientY);
		if (app.currentArrow) {
			app.currentArrow.setPos(e.clientX, e.clientY);
		}
	}
});

// Установка фигур на экране
canvasNode.addEventListener('click', e => {
	let currentX = e.clientX,
		currentY = e.clientY;
	if (
		app.currentShape &&
		app.checkPositions(currentX, currentY, styles.currentDistance)
	) {
		const shapeClass = app.currentShape.constructor;
		app.addShape(app.currentShape);
		app.addPosition(currentX, currentY);
		app.setCurrentShape(createShape(shapeClass, currentX, currentY));
	}

	if (
		app.currentLine &&
		!app.checkPositions(currentX, currentY, styles.currentDistance / 4)
	) {
		if (app.lineFromPos.length > app.lineToPos.length) {
			app.addToPos(currentX, currentY);
			app.currentLine.setToPos(currentX, currentY);
			if (app.currentArrow) {
				app.currentArrow.setPos(currentX, currentY);
				const arrowClass = app.currentArrow.constructor;
				app.addArrow(app.currentArrow);
				app.setCurrentArrow(createArrow(arrowClass, currentX, currentY));
			}
			let lineClass = app.currentLine.constructor;
			app.lines.push(app.currentLine);
			app.setCurrentLine(createLine(lineClass));
		} else {
			app.addFromPos(currentX, currentY);
			app.currentLine.setFromPos(currentX, currentY);
		}
	}
});

// Установка фигуры
document.addEventListener('click', e => {
	const shape = e.target.dataset.shape;
	if (shape && shapeMap.hasOwnProperty(shape)) {
		app.setCurrentLine(null);
		app.setCurrentShape(createShape(shapeMap[shape]));
	}
	const line = e.target.dataset.line;
	if (line && lineMap.hasOwnProperty(line)) {
		app.setCurrentShape(null);
		app.setCurrentLine(createLine(lineMap[line]));
	}
});

/////////////////------------------ Arrows -------------------////////////////
arrowList.addEventListener('change', e => {
	const arrow = e.target.value;
	if (arrow && app.currentLine && arrowMap.hasOwnProperty(arrow)) {
		app.setCurrentArrow(createArrow(arrowMap[arrow]));
		console.log(app.currentArrow);
	}
});

///////////////------------------ Shapes-------------------------////////////
function createShape(ShapeClass, x, y) {
	const shape = new ShapeClass(x, y, styles.currentSize);
	shape.setFillColor(styles.currentFillColor);
	shape.setStrokeColor(styles.currentStrokeColor);
	shape.setStrokeWidth(styles.currentStrokeWidth);
	return shape;
}

///////////////------------------ LINES -------------------------////////////
function createLine(LineClass) {
	const line = new LineClass();

	line.setStrokeColor(styles.currentStrokeColor);
	line.setStrokeWidth(styles.currentStrokeWidth);
	return line;
}

function createArrow(ArrowClass, x, y) {
	const arrow = new ArrowClass(x, y);

	arrow.setStrokeColor(styles.currentFontColor);
	arrow.setFillColor(styles.currentFontColor);

	return arrow;
}

// Сброс текущей фигуры
document.addEventListener('keydown', e => {
	if (e.keyCode === 27) {
		app.setCurrentShape(null);
		app.setCurrentLine(null);
	}
});

// При ресайзе изменяется ширина окна canvas
function handlerResize() {
	canvasNode.width = window.innerWidth;
	canvasNode.height = window.innerHeight;
}

window.addEventListener('load', handlerResize);
window.addEventListener('resize', handlerResize);
