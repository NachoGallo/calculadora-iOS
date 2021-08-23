import {useState, useRef} from 'react';

export const useCalculadora = () => {
  const [number, setNumber] = useState('0');
  const [prevResult, setPrevResult] = useState('0');
  const [mathError, setMathError] = useState(false);

  const operator = useRef('');

  const clean = () => {
    setNumber('0');
    setPrevResult('0');
  };

  const resetResult = () => {
    setNumber('0');
  };

  const buildResult = (numberText: string) => {
    setNumber(normalizeNumber(number, numberText));
  };

  const deleteLastNumber = () => {
    if (number.length === 1 || (number.length === 2 && number.includes('-')))
      resetResult();
    else setNumber(number.slice(0, -1));
  };

  const setCurrentAsPrevNumber = () => {
    if (number.endsWith('.')) setPrevResult(number.slice(0, number.length - 1));
    else setPrevResult(number);

    resetResult();
  };

  const operate = (symbol: string) => {
    if (symbol === '=') {
      let result: any = 0;

      switch (operator.current) {
        case '+':
          result = parseFloat(prevResult) + parseFloat(number);
          break;

        case '-':
          result = parseFloat(prevResult) - parseFloat(number);
          break;

        case 'x':
          result = parseFloat(prevResult) * parseFloat(number);
          break;

        case '/':
          if (number === '0') {
            setMathError(true);
            result = 'No es posible dividir entre 0';
          } else result = parseFloat(prevResult) / parseFloat(number);
          break;

          defualt: break;
      }
      setPrevResult('0');
      operator.current = '';

      if (isNaN(parseInt(result))) resetResult();

      setNumber(String(result));
    } else {
      operator.current = symbol;
      setCurrentAsPrevNumber();
    }
  };

  const normalizeNumber = (currentNumber: string, newNumber: string) => {
    //Si hubo mathError, seteo en 0 antes de concatenar y armar el numero.
    if (mathError) {
      setMathError(false);
      return newNumber;
    }

    //No aceptar doble punto
    if (newNumber === '.' && currentNumber.includes('.')) return currentNumber;

    //No aceptar 0 a menos que sea despues de un punto.
    if ((currentNumber === '0' || currentNumber === '-0') && newNumber !== '.')
      return newNumber;
    else return currentNumber + newNumber;
  };

  const postiveNegative = () => {
    if (number.includes('-')) setNumber(number.replace('-', ''));
    else setNumber('-' + number);
  };

  return {
    number,
    prevResult,
    clean,
    postiveNegative,
    deleteLastNumber,
    operate,
    buildResult,
    mathError,
    setMathError,
  };
};
