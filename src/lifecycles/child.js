import React from 'react';

class ChildComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      c: 0,
      color: 'red'
    }
    console.log('constructor cua ChildComponent da chay');
  }
  static getDerivedStateFromProps(props, state){
    console.log('porps getDerivedStateFromProps ChildComponent', props);
    console.log('state getDerivedStateFromProps ChildComponent', state);
    return null;
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('nextProps shouldComponentUpdate ChildComponent', nextProps);
    console.log('nextState shouldComponentUpdate ChildComponent', nextState);
    //return false;
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // lan cuoi mh xu ly state hay props o day truoc khi update lai 
    console.log('prevProps getSnapshotBeforeUpdate', prevProps);
    console.log('prevState getSnapshotBeforeUpdate', prevState);
    return 10; 
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    //this.setState({color: 'yellow'}); // ko dc
    document.getElementById('text').style.color = 'yellow';
  }

  componentWillUnmount(){
    console.log('child component da bi xoa');
  }

  decrementCounter = () => {
    this.setState({c: this.state.c - 1, color: 'blue'});
  }

  render() {
    console.log('render child component da chay');
    return(
      <>
        <h2 style={{ color: this.state.color }} id="text">This child component: {this.state.c}</h2>
        <button type="button" onClick={() => this.decrementCounter()}> - </button>
      </>
    )
  }
}
export default ChildComponent;