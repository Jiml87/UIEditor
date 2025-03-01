import { FC, useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { PanelButton } from '@/components/Button/PanelButton';
import { Separator } from '@/components/Separator/Separator';
import { FullScreenButtons } from './components/FullScreenButtons/FullScreenButtons';
import { ZoomButtons } from './components/ZoomButtons/ZoomButtons';

import './Panel.css';

interface PanelProps {
  stageRef: any;
}

export const PANEL_HEIGHT = 100;

export const Panel: FC<PanelProps> = ({ stageRef }) => {
  const [history, setHistory] = useState<any[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const saveHistory = () => {
    const json = stageRef.current.toJSON();
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(json);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  const undo = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
      stageRef.current?.destroyChildren();
      stageRef.current?.draw();
      stageRef.current?.load(history[historyIndex - 1]);
    }
  };

  const redo = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1);
      stageRef.current?.destroyChildren();
      stageRef.current?.draw();
      stageRef.current?.load(history[historyIndex + 1]);
    }
  };
  return (
    <div className="flex justify-between items-center panel-wrapper px-3">
      <div className="font-semibold">Industrial Pathway</div>
      <div className="flex">
        <PanelButton onClick={undo} disabled={historyIndex <= 0}>
          <AiOutlineArrowLeft size={24} />
        </PanelButton>
        <PanelButton
          onClick={redo}
          disabled={historyIndex >= history.length - 1}
        >
          <AiOutlineArrowRight size={24} />
        </PanelButton>
        <Separator />
        <FullScreenButtons />
        <Separator />
        <ZoomButtons />
      </div>
    </div>
  );
};
