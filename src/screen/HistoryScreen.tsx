import {View, Text, Button} from 'react-native';
import React from 'react';

const GameScreen = ({navigation}) => {
  return (
      <View>
        <Text>GameScreen</Text>
        <Button
          title="Go to TestScreen"
          onPress={() => navigation.navigate('TestScreen')}
        />
      </View>
  );
};

export default GameScreen;
