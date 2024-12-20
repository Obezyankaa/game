import {create} from 'zustand';

interface BottomSheetStore {
  isOpen: boolean;
  title: string;
  count: number | null;
  content: React.ReactNode;
  open: (title: string, count: number | null, content: React.ReactNode) => void;
  close: () => void;
}

export const useBottomSheetStore = create<BottomSheetStore>(set => ({
  isOpen: false,
  title: '',
  count: null,
  content: null,
  open: (title, count, content) => set({isOpen: true, title, count, content}),
  close: () => set({isOpen: false, title: '', count: null, content: null}),
}));
