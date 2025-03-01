import { useRef } from 'react';
import { Stage, Layer, Group, Rect, Text } from 'react-konva';
import { CanvasBackground } from '@/components/CanvasBackground/CanvasBackground';
import { Panel } from '@/features/Panel/Panel';
import { useCanvasSize } from './hooks/useCanvasSize';
import { useZoomStore } from '@/store/zoom';
import { InfoItem } from '@/components/InfoItem/InfoItem';
import { useDataStore } from '@/store/data';

export const GraphicEditor = () => {
  const stageRef = useRef<any>(null);
  const canvasSize = useCanvasSize();
  const { scale } = useZoomStore();
  const { folderData } = useDataStore();

  return (
    <div>
      <Panel stageRef={stageRef} />
      <Stage ref={stageRef} width={canvasSize.width} height={canvasSize.height}>
        <CanvasBackground />
        <Layer scaleX={scale} scaleY={scale}>
          {folderData.map((item) => (
            <InfoItem data={item} key={item.id} />
          ))}
        </Layer>
      </Stage>
    </div>
  );
};
