import React, {useState, useRef} from 'react';
import {Text, View} from 'react-native';
import ButtonCalc from '../components/ButtonCalc';
import {useCalculadora} from '../hooks/useCalculadora';
import {styles} from '../theme/appTheme';

const Calculadora = () => {
  const {
    number,
    prevResult,
    clean,
    postiveNegative,
    operate,
    buildResult,
    deleteLastNumber,
  } = useCalculadora();

  return (
    <View style={styles.calcContainer}>
      {prevResult !== '0' && (
        <Text style={styles.prevResult}>{prevResult}</Text>
      )}
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>

      <View style={styles.row}>
        <ButtonCalc
          bgColor="#9B9B9B"
          bColor="white"
          symbol="C"
          action={clean}
        />
        <ButtonCalc
          bgColor="#9B9B9B"
          bColor="white"
          symbol="+/-"
          action={postiveNegative}
        />
        <ButtonCalc
          bgColor="#9B9B9B"
          bColor="white"
          symbol="Del"
          action={deleteLastNumber}
        />
        <ButtonCalc
          bgColor="orange"
          bColor="white"
          symbol="/"
          action={operate}
        />
      </View>
      <View style={styles.row}>
        <ButtonCalc bColor="white" symbol="7" action={buildResult} />
        <ButtonCalc bColor="white" symbol="8" action={buildResult} />
        <ButtonCalc bColor="white" symbol="9" action={buildResult} />
        <ButtonCalc
          bgColor="orange"
          bColor="white"
          symbol="x"
          action={operate}
        />
      </View>
      <View style={styles.row}>
        <ButtonCalc bColor="white" symbol="4" action={buildResult} />
        <ButtonCalc bColor="white" symbol="5" action={buildResult} />
        <ButtonCalc bColor="white" symbol="6" action={buildResult} />
        <ButtonCalc
          bgColor="orange"
          bColor="white"
          symbol="-"
          action={operate}
        />
      </View>
      <View style={styles.row}>
        <ButtonCalc bColor="white" symbol="1" action={buildResult} />
        <ButtonCalc bColor="white" symbol="2" action={buildResult} />
        <ButtonCalc bColor="white" symbol="3" action={buildResult} />
        <ButtonCalc
          bgColor="orange"
          bColor="white"
          symbol="+"
          action={operate}
        />
      </View>
      <View style={styles.row}>
        <ButtonCalc bColor="white" symbol="0" wideButton action={buildResult} />
        <ButtonCalc bColor="white" symbol="." action={buildResult} />
        <ButtonCalc
          bgColor="orange"
          bColor="white"
          symbol="="
          action={operate}
        />
      </View>
    </View>
  );
};

export default Calculadora;
