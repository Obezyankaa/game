import {Text} from 'react-native';
import React from 'react';
import { CustomTouchableOpacity } from './styles';
import ArrowWhiteIcon from '../../assets/arrow-white';

interface ButtonTransitionProps {
    label: string;
    onPress?: () => void;
}

const ButtonTransition = ({label, onPress}: ButtonTransitionProps) => {
    return (
      <CustomTouchableOpacity onPress={onPress}>
        <Text>{label ? label : 'label не передан'}</Text>
        <ArrowWhiteIcon />
      </CustomTouchableOpacity>
    );
};

export default ButtonTransition;
