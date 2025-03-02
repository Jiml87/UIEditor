import { FC, useRef, useState, useEffect } from 'react';
import { Group, Rect, Text, Line } from 'react-konva';
import { FolderInputOutput } from '@/consts/folder';

import {
  PADDING_1_2,
  PADDING_3_4,
  PADDING,
  INPUTS_OUTPUTS_WIDTH,
} from '@/consts/styles';

import { ConsumptionMetrics } from './ConsumptionMetrics';

interface InputsOutputsBoxProps {
  x?: number;
  y?: number;
  type: 'inputs' | 'outputs';
  metrics: FolderInputOutput[];
}

export const InputsOutputsBox: FC<InputsOutputsBoxProps> = ({
  x = 0,
  y = 0,
  type,
  metrics,
}) => {
  const contentRef = useRef(null);
  const [contentSize, setContentSize] = useState<{ height: number }>();

  useEffect(() => {
    const updateSize = () => {
      if (contentRef.current) {
        // @ts-ignore
        const height = contentRef.current.getClientRect().height;
        setContentSize({ height });
      }
    };

    requestAnimationFrame(updateSize);
  }, [metrics]);

  return (
    <Group x={x} y={y}>
      <Rect
        width={INPUTS_OUTPUTS_WIDTH}
        height={(contentSize?.height || 0) + PADDING}
        fill="#ffffff"
        cornerRadius={12}
      />
      <Group ref={contentRef}>
        <Group x={PADDING} y={PADDING_3_4}>
          <Line
            points={[0, 0, 4, 4, 0, 8]}
            stroke="#565656"
            strokeWidth={2}
            lineCap="round"
            lineJoin="round"
          />
          <Text
            x={15}
            y={-1}
            text={type.toLocaleUpperCase()}
            fill="#565656"
            fontStyle="500"
          />
        </Group>
        <Line
          points={[PADDING_1_2, 0, INPUTS_OUTPUTS_WIDTH - PADDING_1_2, 0]}
          y={30}
          stroke="#cccccc"
          strokeWidth={1}
          lineCap="round"
          lineJoin="round"
        />
        <ConsumptionMetrics metrics={metrics} />
      </Group>
    </Group>
  );
};
