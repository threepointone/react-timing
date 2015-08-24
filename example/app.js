import React from 'react';
import {Timing} from '../src';
import {Spring} from 'react-motion';



export class App extends React.Component{
  render(){
    return <Timing from={{top: 1000, left: 0}} sequence={[
      {period: 1000, value:{top: 100, left: 0}},
      {period: 1000, value:{top: 100, left: 100}},
      {period: 1000, value:{top: 0, left: 100}},
      {period: 1000, value:{top: 0, left: 0}}
      ]}>{val =>
        <Spring endValue={{val}}>{ i9ed =>
          <div style={{...i9ed.val, backgroundColor: 'wheat', height: 100, width: 100, position: 'absolute'}}>
            move it
          </div>
        }</Spring>

    }</Timing>;
  }
}

function string(){
  return JSON.stringify(this, null, ' ');
}

function log(msg = this){
  console.log(msg);
  return this;
}

