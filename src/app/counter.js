import React from 'react';
import ButtonCounter from '../components/counter/button';
import Result from '../components/counter/result';
import './counter.css';

class CounterApp extends React.Component {

  render() {
    return(
      <>
        <div className="container">
          <Result count={0} />
          <ButtonCounter type="button"> + </ButtonCounter>
          <ButtonCounter type="button"> - </ButtonCounter>
        </div>
      </>
    )
  }
}
export default CounterApp;