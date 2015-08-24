import React from 'react';

function sleep(period){
  return new Promise(resolve => setTimeout(() => resolve(), period));
}

function log(msg = this){
  console.log(msg);
  return this;
}

export class Timing extends React.Component{
  static defaultProps = {
    from: null,
    sequence: []
  }
  state = {
    value: this.props.from
  }
  async componentDidMount() {
    let {sequence} = this.props;
    for(let i = 0; i < sequence.length; i++){
      this.setState({
        value: sequence[i].value
      });
      await sleep(sequence[i].period);
    }
  }
  render(){
    return this.props.children(this.state.value);
  }
}
