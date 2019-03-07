import { Circle } from './Circle';
import { Square } from './Shapes/Square';

export const shapeMap = {
	circle: Circle,
	square: Square,
};

let currentFillColor = '#000';
let currentStrokeColor = '#000';
let currentStrokeWidth = 1;
let currentSize = 100;

export const styles = {
	currentFillColor: currentFillColor,
	currentStrokeColor: currentStrokeColor,
	currentStrokeWidth: currentStrokeWidth,
	currentSize: currentSize,
};
