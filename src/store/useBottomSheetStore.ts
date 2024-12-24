import { ReactNode } from 'react';
import { create } from 'zustand';

type ModalState = {
  isOpen: boolean;
  title: string;
  count: number | null;
  content: ReactNode;
};

interface BottomSheetStore {
  // Состояние и экшны для модалки №1
  modal1: ModalState;
  open1: (title: string, count: number | null, content: ReactNode) => void;
  close1: () => void;

  // Состояние и экшны для модалки №2
  modal2: ModalState;
  open2: (title: string, count: number | null, content: ReactNode) => void;
  close2: () => void;

  // Состояние и экшны для модалки №3
  modal3: ModalState;
  open3: (title: string, count: number | null, content: ReactNode) => void;
  close3: () => void;
}

export const useBottomSheetStore = create<BottomSheetStore>(set => ({
  // ---------- modal1 ----------
  modal1: {
    isOpen: false,
    title: '',
    count: null,
    content: null,
  },
  open1: (title, count, content) =>
    set({
      modal1: {isOpen: true, title, count, content},
    }),
  close1: () =>
    set({
      modal1: {isOpen: false, title: '', count: null, content: null},
    }),

  // ---------- modal2 ----------
  modal2: {
    isOpen: false,
    title: '',
    count: null,
    content: null,
  },
  open2: (title, count, content) =>
    set({
      modal2: {isOpen: true, title, count, content},
    }),
  close2: () =>
    set({
      modal2: {isOpen: false, title: '', count: null, content: null},
    }),

  // ---------- modal3 ----------
  modal3: {
    isOpen: false,
    title: '',
    count: null,
    content: null,
  },
  open3: (title, count, content) =>
    set({
      modal3: {isOpen: true, title, count, content},
    }),
  close3: () =>
    set({
      modal3: {isOpen: false, title: '', count: null, content: null},
    }),
}));
