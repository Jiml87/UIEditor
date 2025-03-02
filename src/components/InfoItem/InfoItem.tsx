import { FC } from 'react';
import { Group, Rect, Text } from 'react-konva';
import { EditorFolder, FOLDER_BACKGROUND } from '@/consts/folder';

import {
  PADDING_1_2,
  PADDING_3_4,
  INPUTS_OUTPUTS_WIDTH,
  INPUTS_OUTPUTS_HEIGHT,
  FOLDER_WIDTH,
} from '@/consts/styles';

import { InputsOutputsBox } from './components/InputsOutputsBox';

interface InfoItemProps {
  data: EditorFolder;
}

export const InfoItem: FC<InfoItemProps> = ({ data }) => {
  return (
    <Group x={data.meta.position?.x} y={data.meta.position?.y} draggable>
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
          <InputsOutputsBox type="inputs" metrics={data.inputs} />
          <InputsOutputsBox
            type="outputs"
            x={INPUTS_OUTPUTS_WIDTH + PADDING_1_2}
            metrics={data.outputs}
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
