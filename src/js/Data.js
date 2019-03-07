import { Circle } from './Circle';
import { Square } from './Square';

export const shapeMap = {
	circle: Circle,
	square: Square,
};

let currentFillColor = '#000';
let currentStrokeColor = '#000';
let currentStrokeWidth = 1;
let currentSize = 20;

export const styles = {
	currentFillColor: currentFillColor,
	currentStrokeColor: currentStrokeColor,
	currentStrokeWidth: currentStrokeWidth,
	currentSize: currentSize,
};
