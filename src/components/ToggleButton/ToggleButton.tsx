import { FC } from 'react';
import { Group, Circle, Line } from 'react-konva';
// @ts-ignore
import { KonvaEventObject } from 'konva';
import colors from 'tailwindcss/colors';

import {
  PADDING,
  PADDING_1_4,
  PADDING_1_2,
  FOLDER_WIDTH,
} from '@/consts/styles';

interface ToggleButtonProps {
  active: boolean;
  onToggle(): void;
}

const showCursor = (e: KonvaEventObject<MouseEvent>) => {
  const stage = e.target.getStage();
  stage.container().style.cursor = 'pointer';
};
const hideCursor = (e: KonvaEventObject<MouseEvent>) => {
  const stage = e.target.getStage();
  stage.container().style.cursor = 'default';
};
export const ToggleButton: FC<ToggleButtonProps> = ({ active, onToggle }) => {
  return active ? (
    <Group
      x={FOLDER_WIDTH - PADDING - PADDING_1_4}
      y={PADDING + PADDING_1_2}
      onMouseEnter={showCursor}
      onMouseLeave={hideCursor}
      onClick={onToggle}
    >
      <Circle fill="#209553" radius={9} />
      <Line
        points={[0, 0, 3, 3, 6, 0]}
        x={-3}
        y={-1}
        stroke="#ffffff"
        strokeWidth={2}
        lineCap="round"
        lineJoin="round"
      />
    </Group>
  ) : (
    <Group
      x={FOLDER_WIDTH - PADDING - PADDING_1_4}
      y={PADDING + PADDING_1_2}
      onMouseEnter={showCursor}
      onMouseLeave={hideCursor}
      onClick={onToggle}
    >
      <Circle stroke={colors.zinc[700]} radius={8} strokeWidth={2} />
      <Line
        points={[0, 0, 3, 3, 0, 6]}
        x={-1}
        y={-3}
        stroke={colors.zinc[700]}
        strokeWidth={2}
        lineCap="round"
        lineJoin="round"
      />
    </Group>
  );
};
