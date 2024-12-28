import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {buttomData} from './Buttom';
import {StyledTouchableOpacity} from './styles';

const CheckBoxTheme = () => {
  return (
    <StyledTouchableOpacity>
      {buttomData.map(button => (
        <TouchableOpacity key={button.id}>
          <button.icon />
          <Text>{button.title}</Text>
        </TouchableOpacity>
      ))}
    </StyledTouchableOpacity>
  );
};

export default CheckBoxTheme;
