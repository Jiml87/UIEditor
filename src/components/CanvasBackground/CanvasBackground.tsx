import { Circle, Layer } from 'react-konva';

const GRID_SIZE = 30; // Distance between dots
const DOT_RADIUS = 1; // Dot size

const renderDots = () => {
  const dots = [];
  const width = window.innerWidth;
  const height = window.innerHeight;

  for (let x = 0; x < width; x += GRID_SIZE) {
    for (let y = 0; y < height; y += GRID_SIZE) {
      dots.push(
        <Circle
          key={`${x}-${y}`}
          x={x}
          y={y}
          radius={DOT_RADIUS}
          fill="lightgray"
        />
      );
    }
  }
  return dots;
};

export const CanvasBackground = () => <Layer>{renderDots()}</Layer>;
