import { useRef } from 'react';
import { Stage, Layer, Rect } from 'react-konva';
import { CanvasBackground } from '@/components/CanvasBackground/CanvasBackground';
import { Panel } from '@/features/Panel/Panel';
import { useCanvasSize } from './hooks/useCanvasSize';
import { useZoomStore } from '@/store/zoom';

export const GraphicEditor = () => {
  const stageRef = useRef<any>(null);
  const canvasSize = useCanvasSize();
  const { scale } = useZoomStore();

  return (
    <div>
      <Panel stageRef={stageRef} />
      <Stage ref={stageRef} width={canvasSize.width} height={canvasSize.height}>
        <CanvasBackground />
        <Layer scaleX={scale} scaleY={scale}>
          <Rect
            x={50}
            y={50}
            width={200}
            height={100}
            cornerRadius={20}
            fill="red"
            draggable
          />
        </Layer>
      </Stage>
    </div>
  );
};
