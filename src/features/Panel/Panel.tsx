import { FC, useState } from 'react';
import { AiOutlineFullscreenExit } from 'react-icons/ai';
import { PanelButton } from '@/components/Button/PanelButton';

import './Panel.css';

interface PanelProps {
  stageRef: any;
}
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
    <div className="flex justify-between items-center panel-wrapper">
      <div className="font-semibold">Industrial Pathway</div>
      <div className="flex">
        <PanelButton onClick={undo} disabled={historyIndex <= 0}>
          Back
        </PanelButton>
        <PanelButton
          onClick={redo}
          disabled={historyIndex >= history.length - 1}
        >
          Forward
        </PanelButton>
        <AiOutlineFullscreenExit />
      </div>
    </div>
  );
};
