import { Circle } from './Shapes/Circle';
import { Square } from './Shapes/Square';
import { Vector } from './Lines/Vector';
import { Bold } from './Arrows/Bold';
import { Thick } from './Arrows/Thick';

export const shapeMap = {
	circle: Circle,
	square: Square,
};

export const arrowMap = {
	bold: Bold,
	thick: Thick,
};

export const lineMap = {
	vector: Vector,
};

let currentFillColor = '#fff';
let currentFontColor = '#000';
let currentStrokeColor = '#000';
let currentStrokeWidth = 1;
let currentSize = 100;
let currentDistance = currentSize;

export const styles = {
	currentFillColor: currentFillColor,
	currentFontColor: currentFontColor,
	currentStrokeColor: currentStrokeColor,
	currentStrokeWidth: currentStrokeWidth,
	currentSize: currentSize,
	currentDistance: currentDistance,
};
