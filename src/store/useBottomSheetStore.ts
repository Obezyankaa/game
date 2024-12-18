import {create} from 'zustand';

interface BottomSheetStore {
  isOpen: boolean;
  title: string;
  content: React.ReactNode;
  open: (title: string, content: React.ReactNode) => void;
  close: () => void;
}

export const useBottomSheetStore = create<BottomSheetStore>(set => ({
  isOpen: false,
  title: '',
  content: null,
  open: (title, content) => set({isOpen: true, title, content}),
  close: () => set({isOpen: false, title: '', content: null}),
}));
