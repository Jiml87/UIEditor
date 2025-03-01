import { useRef } from 'react';
import { Stage, Layer } from 'react-konva';
import { CanvasBackground } from '@/components/CanvasBackground/CanvasBackground';
import { Panel } from '@/features/Panel/Panel';
import { useCanvasSize } from './hooks/useCanvasSize';
import { useZoomStore } from '@/store/zoom';
import { InfoItem } from '@/components/InfoItem/InfoItem';
import { usePreparedDataForEditor } from './hooks/usePreparedDataForEditor';

export const GraphicEditor = () => {
  const stageRef = useRef<any>(null);
  const canvasSize = useCanvasSize();
  const { scale } = useZoomStore();
  const data = usePreparedDataForEditor(canvasSize);

  return (
    <div>
      <Panel stageRef={stageRef} />
      <Stage ref={stageRef} width={canvasSize.width} height={canvasSize.height}>
        <CanvasBackground />
        <Layer scaleX={scale} scaleY={scale}>
          {data?.map((item) => <InfoItem data={item} key={item.id} />)}
        </Layer>
      </Stage>
    </div>
  );
};
