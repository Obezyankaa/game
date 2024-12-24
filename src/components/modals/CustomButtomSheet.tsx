import React from 'react';
import {useBottomSheetStore} from '../../store/useBottomSheetStore';
import {StyledView} from './styles';
import CustomText from '../CustomText';
import CrossIconWhite from '../../assets/CrossIconWhite';
import CommonBottomSheetModal from './CommonBottomSheetModal';
import {useThemeStore} from '../../store/themeStore';
import {themes} from '../../constants/themeConfig';

const CustomButtomSheet = () => {
  const modal1 = useBottomSheetStore(state => state.modal1);
  const close1 = useBottomSheetStore(state => state.close1);
  const {theme} = useThemeStore();
  const currentTheme = themes[theme];

  return (
    <CommonBottomSheetModal
      isOpen={modal1.isOpen}
      count={modal1.count}
      onClose={close1}>
      <StyledView>
        <CustomText
          content={modal1.title}
          variant="title"
          customStyle={{color: currentTheme.white}}
        />
        <CrossIconWhite onPress={close1} />
      </StyledView>
      {modal1.content}
    </CommonBottomSheetModal>
  );
};

export default CustomButtomSheet;
