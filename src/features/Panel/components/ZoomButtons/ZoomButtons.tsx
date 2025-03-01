import { AiOutlineZoomOut, AiOutlineZoomIn } from 'react-icons/ai';

import { PanelButton } from '@/components/Button/PanelButton';
import { useZoomStore } from '@/store/zoom';

export const ZoomButtons = () => {
  const { increase, decrease } = useZoomStore();

  return (
    <>
      <PanelButton onClick={decrease}>
        <AiOutlineZoomOut size={24} />
      </PanelButton>
      <PanelButton onClick={increase}>
        <AiOutlineZoomIn size={24} />
      </PanelButton>
    </>
  );
};
