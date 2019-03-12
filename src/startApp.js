import { shapeMap, lineMap, arrowMap, styles } from './js/Data';
import { App } from './js/App';

const canvasNode = document.querySelector('#main-canvas');
const fromOption = document.querySelector('#from');
const toOption = document.querySelector('#to');
const app = new App(canvasNode);

/////////////////////// ------------------ MOVING THE FIGURE WITH CURSOR ---------------///////////
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

///////////////////////------------------- SETTING THE FIGURE ON SCREEN --------------- //////////////
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

			let lineClass = app.currentLine.constructor;
			app.lines.push(app.currentLine);
			app.setCurrentLine(createLine(lineClass));

			let selectedOption = fromOption.options[fromOption.selectedIndex].value;
			let ArrowClass = arrowMap[selectedOption];
			setDirection(ArrowClass, currentX, currentY);
			app.setCurrentArrow(createArrow(ArrowClass, currentX, currentY));
		} else {
			app.addFromPos(currentX, currentY);
			app.currentLine.setFromPos(currentX, currentY);

			let selectedOption = toOption.options[toOption.selectedIndex].value;
			let ArrowClass = arrowMap[selectedOption];

			setDirection(ArrowClass, currentX, currentY);
		}
	}
});

////////////////////////////------------ CHANGE CLASS -----------------//////////////

function setDirection(ArrowClass, x, y) {
	if (app.currentArrow) {
		app.currentArrow.setPos(x, y);
		app.addArrow(app.currentArrow);
		app.setCurrentArrow(createArrow(ArrowClass, x, y));
	} else {
		let selectedOption = toOption.options[toOption.selectedIndex].value;
		ArrowClass = arrowMap[selectedOption];
		app.setCurrentArrow(createArrow(ArrowClass, x, y));
	}
}

///////////////////////---------------SETTING THE FIGURE ------------------/////////////////
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
fromOption.addEventListener('change', e => {
	const arrow = e.target.value;
	if (arrow && app.currentLine && arrowMap.hasOwnProperty(arrow)) {
		app.setCurrentArrow(createArrow(arrowMap[arrow]));
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
	if (ArrowClass) {
		const arrow = new ArrowClass(x, y);

		arrow.setStrokeColor(styles.currentFontColor);
		arrow.setFillColor(styles.currentFontColor);

		return arrow;
	} else return null;
}

/////////////////////////////////////--------- RESET -------------- ////////////////////////
document.addEventListener('keydown', e => {
	if (e.keyCode === 27) {
		app.setCurrentShape(null);
		app.setCurrentLine(null);
		app.setCurrentArrow(null);
	}
});

/////////////////////// ---------------- RESIZE HUNDLER --------------/////////////
function handlerResize() {
	canvasNode.width = window.innerWidth;
	canvasNode.height = window.innerHeight;
}

window.addEventListener('load', handlerResize);
window.addEventListener('resize', handlerResize);
