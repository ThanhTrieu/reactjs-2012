import React from 'react';
import { connect } from 'react-redux';
//import { useDispatch, useSelector } from 'react-redux';
import { incrementNumber } from '../actions/index';

const ButtonIncrement = (props) => {
  // lay ra state tu reducer trong store
  //const count = useSelector(state => state.counter.count);
  // tao ra doi tuong dispatch de dispatch vao store
  //const dispatch = useDispatch();

  return (
    // <button
    //   onClick={() => dispatch(incrementNumber(count))}
    // > + </button>
    <button
      onClick={() => props.increment(props.count)}
    > + </button>
  )
}

const mapStateToProps = state => ({
  count: state.counter.count
});
const mapDispatchToProps = dispatch => ({
  increment: (n) => dispatch(incrementNumber(n))
});

const ConnectButtonIncrement = connect(mapStateToProps, mapDispatchToProps)(ButtonIncrement);

export default React.memo(ConnectButtonIncrement);