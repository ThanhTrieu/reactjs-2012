import React from 'react';
import ButtonIncrement from '../components/button-increment';
import ButtonDecrement from '../components/button-decrement';
import ResultCounter from '../components/result-counter';

const CounterPage = () => {
  return (
    <>
      <ResultCounter />
      <ButtonIncrement/>
      <ButtonDecrement/>
    </>
  )
}
export default React.memo(CounterPage);