import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main-container">
        <div className="result ligth-text">0</div>
        <div className="calc-wrapper">
          <button type="button" className="btn light-gray">AC</button>
          <button type="button" className="btn light-gray">+/-</button>
          <button type="button" className="btn light-gray">%</button>
          <button type="button" className="btn bck-orange">÷</button>
          <button type="button" className="btn light-gray">7</button>
          <button type="button" className="btn light-gray">8</button>
          <button type="button" className="btn light-gray">9</button>
          <button type="button" className="btn bck-orange">×</button>
          <button type="button" className="btn light-gray">4</button>
          <button type="button" className="btn light-gray">5</button>
          <button type="button" className="btn light-gray">6</button>
          <button type="button" className="btn bck-orange">-</button>
          <button type="button" className="btn light-gray">1</button>
          <button type="button" className="btn light-gray">2</button>
          <button type="button" className="btn light-gray">3</button>
          <button type="button" className="btn bck-orange">+</button>
          <button type="button" className="btn light-gray btn-0">0</button>
          <button type="button" className="btn light-gray">.</button>
          <button type="button" className="btn bck-orange">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
