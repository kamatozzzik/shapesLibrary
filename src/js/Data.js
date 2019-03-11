import { Circle } from './Shapes/Circle';
import { Square } from './Shapes/Square';

export const shapeMap = {
	circle: Circle,
	square: Square,
};

let currentFillColor = '#000';
let currentStrokeColor = '#000';
let currentStrokeWidth = 1;
let currentSize = 100;
let currentDistance = currentSize;

export const styles = {
	currentFillColor: currentFillColor,
	currentStrokeColor: currentStrokeColor,
	currentStrokeWidth: currentStrokeWidth,
	currentSize: currentSize,
	currentDistance: currentDistance,
};
