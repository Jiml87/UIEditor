import { FC } from 'react';
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

export const Panel: FC<PanelProps> = () => {
  return (
    <div className="flex justify-between items-center panel-wrapper px-3 border-b border-zinc-300">
      <div className="font-semibold">Industrial Pathway</div>
      <div className="flex">
        <PanelButton>
          <AiOutlineArrowLeft size={24} />
        </PanelButton>
        <PanelButton>
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
