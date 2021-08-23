import React, {ReactChild, Ref} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

interface Props {
  bgColor?: string;
  bColor: string;
  symbol: string;
  wideButton?: boolean;
  action: (action: string) => void;
}

const ButtonCalc = ({
  bgColor = '#2D2D2D',
  bColor = 'gray',
  symbol,
  wideButton = false,
  action,
}: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => action(symbol)}>
      <View
        style={{
          ...styles.button,
          backgroundColor: `${bgColor}`,
          width: wideButton ? 180 : 80,
        }}>
        <Text
          style={{
            ...styles.textButton,
            color: `${bColor}`,
          }}>
          {symbol}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonCalc;

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 8,
    color: 'white',
    height: 80,
    width: 80,
    borderRadius: 100,
    justifyContent: 'center',
  },

  textButton: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: '400',
  },
});
