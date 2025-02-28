import { useRef } from 'react';
import { Stage, Layer, Rect } from 'react-konva';
import { CanvasBackground } from '@/components/CanvasBackground/CanvasBackground';
import { Panel } from '@/features/Panel/Panel';

export const GraphicEditor = () => {
  const stageRef = useRef<any>(null);

  return (
    <div>
      <Panel stageRef={stageRef} />
      <Stage
        ref={stageRef}
        width={window.innerWidth}
        height={window.innerHeight - 100}
      >
        <CanvasBackground />
        <Layer>
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
