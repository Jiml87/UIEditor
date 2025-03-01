import { FC } from 'react';
import { Group, Rect, Text, Line } from 'react-konva';
import { EditorFolder, FOLDER_BACKGROUND } from '@/consts/folder';

import {
  PADDING_1_2,
  PADDING_3_4,
  PADDING_1_4,
  PADDING,
  INPUTS_OUTPUTS_WIDTH,
  INPUTS_OUTPUTS_HEIGHT,
  FOLDER_WIDTH,
} from '@/consts/styles';

const InputsOutputsBox = ({
  x = 0,
  y = 0,
  title,
}: {
  x?: number;
  y?: number;
  title: string;
}) => (
  <Group x={x} y={y}>
    <Rect
      width={INPUTS_OUTPUTS_WIDTH}
      height={INPUTS_OUTPUTS_HEIGHT}
      fill="#ffffff"
      cornerRadius={12}
    />
    <Group x={PADDING} y={PADDING_3_4}>
      <Line
        points={[0, 0, 4, 4, 0, 8]}
        stroke="#565656"
        strokeWidth={2}
        lineCap="round"
        lineJoin="round"
      />
      <Text x={15} y={-1} text={title} fill="#565656" fontStyle="500" />
    </Group>
    <Line
      points={[PADDING_1_2, 0, INPUTS_OUTPUTS_WIDTH - PADDING_1_2, 0]}
      y={30}
      stroke="#cccccc"
      strokeWidth={1}
      lineCap="round"
      lineJoin="round"
    />
  </Group>
);

interface InfoItemProps {
  data: EditorFolder;
}

export const InfoItem: FC<InfoItemProps> = ({ data }) => {
  return (
    <Group draggable>
      <Rect
        fill={FOLDER_BACKGROUND[data.folderStatus]}
        width={FOLDER_WIDTH}
        height={200}
        cornerRadius={12}
      />
      <Group x={PADDING_3_4} y={PADDING_3_4}>
        <Text y={5} text={data.title} fontStyle="600" />
        <Text y={20} text={`Last updated ${data.lastUpdatedDate}`} />
        <Group y={40}>
          <InputsOutputsBox title="INPUTS" />
          <InputsOutputsBox
            title="OUTPUTS"
            x={INPUTS_OUTPUTS_WIDTH + PADDING_1_2}
          />
          <Group y={INPUTS_OUTPUTS_HEIGHT + PADDING_1_2}>
            <Text y={5} text="Publication Details Title:" fontStyle="600" />
            <Text
              y={5}
              x={145}
              text={`Last updated ${data.publicationDetails}`}
            />
          </Group>
        </Group>
      </Group>
    </Group>
  );
};
