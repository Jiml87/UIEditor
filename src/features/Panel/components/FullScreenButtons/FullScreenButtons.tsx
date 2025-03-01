import { AiOutlineFullscreenExit, AiOutlineFullscreen } from 'react-icons/ai';
import screenfull from 'screenfull';

import { PanelButton } from '@/components/Button/PanelButton';

export const FullScreenButtons = () => {
  const showFullscreen = () => {
    if (!screenfull.isFullscreen) {
      screenfull.toggle();
    }
  };
  const closeFullscreen = () => {
    if (screenfull.isFullscreen) {
      screenfull.toggle();
    }
  };

  return (
    <>
      <PanelButton onClick={closeFullscreen}>
        <AiOutlineFullscreenExit size={24} />
      </PanelButton>
      <PanelButton onClick={showFullscreen}>
        <AiOutlineFullscreen size={24} />
      </PanelButton>
    </>
  );
};
