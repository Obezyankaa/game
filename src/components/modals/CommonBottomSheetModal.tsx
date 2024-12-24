// components/modals/CommonBottomSheetModal.tsx
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useEffect, useRef} from 'react';
import {BottomSheetModal, BottomSheetView} from '@gorhom/bottom-sheet';
import {
  BottomSheetBackground,
  RenderBackdrop,
} from './BottomSheetCommonComponents';

interface CommonBottomSheetModalProps {
  isOpen: boolean;
  count?: number | null;
  title?: string;
  onClose: () => void;
  children?: React.ReactNode;
}

export default function CommonBottomSheetModal({
  isOpen,
  count,
  onClose,
  children,
}: CommonBottomSheetModalProps) {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const snapPoints = count ? [count] : ['25%', '50%', '75%'];

  const handleSheetChanges = useCallback(
    (index: number) => {
      if (index === -1) {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (isOpen) {
      bottomSheetModalRef.current?.present();
    } else {
      bottomSheetModalRef.current?.dismiss();
    }
  }, [isOpen]);

  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      snapPoints={snapPoints}
      index={1}
      onChange={handleSheetChanges}
      backdropComponent={RenderBackdrop}
      stackBehavior="push"
      backgroundComponent={props => <BottomSheetBackground {...props} />}
      handleIndicatorStyle={{width: 40}}>
      <BottomSheetView>{children}</BottomSheetView>
    </BottomSheetModal>
  );
}
