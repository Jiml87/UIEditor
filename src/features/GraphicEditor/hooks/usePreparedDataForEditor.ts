import { useEffect } from 'react';
import { useDataStore } from '@/store/data';
import { FOLDER_WIDTH } from '@/consts/styles';

interface CanvasSize {
  width: number;
  height: number;
}

const generateRandomPosition = (
  existingBlocks: Array<{ x: number; y: number }>,
  canvasSize: CanvasSize,
  maxAttempts = 100
) => {
  let attempts = 0;
  while (attempts < maxAttempts) {
    const x = Math.random() * (canvasSize.width - FOLDER_WIDTH);
    const y = Math.random() * (canvasSize.height - FOLDER_WIDTH);

    const overlaps = existingBlocks.some(
      (block) =>
        x < block.x + FOLDER_WIDTH &&
        x + FOLDER_WIDTH > block.x &&
        y < block.y + FOLDER_WIDTH &&
        y + FOLDER_WIDTH > block.y
    );

    if (!overlaps) {
      return { x, y };
    }
    attempts++;
  }
  return { x: Math.random() * 10, y: Math.random() * 10 };
};

export const usePreparedDataForEditor = (canvasSize: CanvasSize) => {
  const { folderData, updateFolderData } = useDataStore();

  useEffect(() => {
    const newBlocks: Array<{ x: number; y: number }> = [];
    for (let i = 0; i < folderData.length; i++) {
      const position = generateRandomPosition(newBlocks, canvasSize);
      if (position) {
        newBlocks.push(position);
      }
    }
    const data = folderData.map((folder, index) => {
      folder.meta.position = newBlocks[index];
      return folder;
    });
    updateFolderData(data);
  }, []);

  return folderData;
};
