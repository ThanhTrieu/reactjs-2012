import React from 'react';
// import { useSelector } from 'react-redux';
import { connect } from 'react-redux';

const ResultCounter = (props) => {
  // const count = useSelector(state => state.counter.count)
  return (
    <h1> {props.count} </h1>
  )
}
const mapStateToProps = state => ({
  count : state.counter.count
});
const ConnectResultCounter = connect(mapStateToProps, null)(ResultCounter);
export default React.memo(ConnectResultCounter);