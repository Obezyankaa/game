// components/CustomBottomSheet2.tsx
import React from 'react';
import {useBottomSheetStore} from '../../store/useBottomSheetStore';
import {StyledView} from './styles';
import CustomText from '../CustomText';
import CrossIconWhite from '../../assets/CrossIconWhite';
import CommonBottomSheetModal from './CommonBottomSheetModal';
import {useThemeStore} from '../../store/themeStore';
import {themes} from '../../constants/themeConfig';

const CustomBottomSheet2 = () => {
  const modal2 = useBottomSheetStore(state => state.modal2);
  const close2 = useBottomSheetStore(state => state.close2);
  const {theme} = useThemeStore();
  const currentTheme = themes[theme];

  return (
    <CommonBottomSheetModal
      isOpen={modal2.isOpen}
      count={modal2.count}
      onClose={close2}>
      <StyledView>
        <CustomText
          content={modal2.title}
          variant="title"
          customStyle={{color: currentTheme.white}}
        />
        <CrossIconWhite onPress={close2} />
      </StyledView>
      {modal2.content}
    </CommonBottomSheetModal>
  );
};

export default CustomBottomSheet2;
