import { useState } from 'react';
import ButtonCounter from './components/button';
import ResultCounter from './components/result';
import HeaderComponent from './components/header';

const AppCounter = () => {
  const [count, setCount] = useState(0);
  // count la 1 state
  // setCount ~~ this.setState({});
  /*
    constructor(props){
      super(props);
      this.state = {
        count: 0
      }
    }
  */
  
  const increment = () => {
    setCount(count+1);
    // this.setState({count: this.state.count+1})
  }

  const decrement = () => {
    setCount(count-1);
    // this.setState({count: this.state.count-1})
  }

  return(
    <>
      <HeaderComponent/>
      <ResultCounter result={count} />
      <ButtonCounter
        type="button"
        click={increment}
      > + </ButtonCounter>
      <ButtonCounter
        type="button"
        click={decrement}
      > - </ButtonCounter>
    </>
  )
}
export default AppCounter;