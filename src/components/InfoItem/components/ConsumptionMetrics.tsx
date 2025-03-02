import { FC, useRef, useState, useEffect } from 'react';
import { Group, Text } from 'react-konva';
import { FolderInputOutput } from '@/consts/folder';
import {
  PADDING_3_4,
  PADDING_1_4,
  INPUTS_OUTPUTS_WIDTH,
} from '@/consts/styles';

interface ConsumptionMetricsProps {
  metrics: FolderInputOutput[];
}
export const ConsumptionMetrics: FC<ConsumptionMetricsProps> = ({
  metrics,
}) => {
  const textRefs = useRef([]);
  const [positions, setPositions] = useState<Array<{ y: number }>>([]);

  useEffect(() => {
    if (textRefs.current.length > 0) {
      const newPositions: Array<{ y: number }> = [];
      let currentY = 0;

      textRefs.current.forEach((textNode, index) => {
        if (textNode) {
          const height = textNode.getClientRect().height;
          newPositions.push({ y: currentY });
          currentY += height + PADDING_1_4;
        }
      });

      setPositions(newPositions);
    }
  }, [metrics]);
  return (
    <Group y={37} x={PADDING_3_4}>
      {metrics.map((item, index) => (
        <Group
          ref={(el) => (textRefs.current[index] = el)}
          key={item.id}
          y={positions[index]?.y || 0}
        >
          <Text
            key={index}
            text={item.title}
            fontSize={10}
            fontStyle="600"
            width={INPUTS_OUTPUTS_WIDTH - 50}
            align="left"
            wrap="word"
          />
          <Text
            key={index}
            y={10}
            text={item.subTitle}
            fontSize={10}
            fontStyle="500"
            width={INPUTS_OUTPUTS_WIDTH - 50}
            align="left"
            wrap="word"
          />
          <Text
            key={index}
            text={item.value}
            fontSize={10}
            fontStyle="400"
            width={INPUTS_OUTPUTS_WIDTH - 20}
            align="right"
            wrap="word"
          />
        </Group>
      ))}
    </Group>
  );
};
