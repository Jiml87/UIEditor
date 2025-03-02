import { FC, useRef, useState, useEffect } from 'react';
import { Group, Rect, Text } from 'react-konva';
import { EditorFolder, FOLDER_BACKGROUND } from '@/consts/folder';
import colors from 'tailwindcss/colors';

import {
  PADDING,
  PADDING_1_2,
  PADDING_3_4,
  INPUTS_OUTPUTS_WIDTH,
  FOLDER_WIDTH,
} from '@/consts/styles';
import { ToggleButton } from '@/components/ToggleButton/ToggleButton';
import { useDataStore } from '@/store/data';

import { InputsOutputsBox } from './components/InputsOutputsBox';

interface InfoItemProps {
  data: EditorFolder;
}

export const InfoItem: FC<InfoItemProps> = ({ data }) => {
  const { toggleOpenFolder } = useDataStore();
  const inputsOutputsBoxRef = useRef(null);
  const [inputsOutputsBoxSize, setInputsOutputsBoxSize] = useState<{
    height: number;
  }>();
  const contentRef = useRef(null);
  const [contentSize, setContentSize] = useState<{
    height: number;
  }>();

  useEffect(() => {
    const updateSize = () => {
      if (inputsOutputsBoxRef.current) {
        const height = inputsOutputsBoxRef.current.getClientRect().height;
        setInputsOutputsBoxSize({ height });
      }
    };

    requestAnimationFrame(updateSize);
  }, [data]);

  useEffect(() => {
    const updateSize = () => {
      if (contentRef.current) {
        const height = contentRef.current.getClientRect().height;

        setContentSize({ height });
      }
    };
    requestAnimationFrame(updateSize);
  }, [inputsOutputsBoxSize]);

  return (
    <Group x={data.meta.position?.x} y={data.meta.position?.y} draggable>
      <Rect
        fill={FOLDER_BACKGROUND[data.folderStatus]}
        width={FOLDER_WIDTH}
        height={(contentSize?.height || 0) + PADDING_3_4 + 20}
        cornerRadius={12}
      />
      <ToggleButton
        active={!data.meta.collapsed}
        onToggle={() => toggleOpenFolder(data.id)}
      />
      <Group ref={contentRef} x={PADDING_3_4} y={PADDING_3_4}>
        <Group ref={inputsOutputsBoxRef}>
          <Text y={5} text={data.title} fontStyle="600" />
          <Text
            y={20}
            text={`Last updated ${data.lastUpdatedDate}`}
            fill={colors.zinc[600]}
            fontSize={10}
          />
          {!data.meta.collapsed && (
            <Group y={40}>
              <InputsOutputsBox type="inputs" metrics={data.inputs} />
              <InputsOutputsBox
                type="outputs"
                x={INPUTS_OUTPUTS_WIDTH + PADDING_1_2}
                metrics={data.outputs}
              />
            </Group>
          )}
        </Group>
        {!data.meta.collapsed && (
          <Group y={(inputsOutputsBoxSize?.height || 0) + PADDING}>
            <Text
              y={5}
              text="Publication Details Title:"
              fontStyle="600"
              fontSize={10}
            />
            <Text
              y={5}
              x={120}
              text={`Last updated ${data.publicationDetails}`}
              fontSize={10}
            />
          </Group>
        )}
      </Group>
    </Group>
  );
};
