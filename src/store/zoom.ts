import { create } from 'zustand';

interface ZoomState {
  scale: number;
  increase: (by: number) => void;
  decrease: (by: number) => void;
}

export const useZoomStore = create<ZoomState>()((set) => ({
  scale: 1,
  increase: () => set((state) => ({ scale: state.scale + 0.1 })),
  decrease: () => set((state) => ({ scale: state.scale - 0.1 })),
}));
