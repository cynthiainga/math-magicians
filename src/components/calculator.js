import React, { Component } from 'react';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentsDidMount = () => {
    this.setState({
      total: null,
      next: null,
      operation: null,
    });
  }

  handleCalculate = ({ currentTarget: btn }) => {
    try {
      const buttonName = btn.outerText === '' ? btn.id : btn.outerText;
      const object = calculate(this.state, buttonName);
      this.setState(object);
    } catch (error) {
      const buttonName = btn.outerText === '' ? btn.id : btn.outerText;
      const { next } = this.state;

      if (next) {
        this.setState({ total: next, next: null });
      }

      this.setState({ operation: buttonName });
    }
  }

  render() {
    const { next, total } = this.state;

    return (
      <div className="main-container">
        <div className="result ligth-text">
          {total && next ? next : total || next || '0'}
        </div>
        <div className="calc-wrapper">
          <button type="button" className="btn" onClick={this.handleCalculate}>AC</button>
          <button type="button" className="btn" onClick={this.handleCalculate}>+/-</button>
          <button type="button" className="btn" onClick={this.handleCalculate}>%</button>
          <button type="button" className="btn bck-orange" onClick={this.handleCalculate}>÷</button>
          <button type="button" className="btn" onClick={this.handleCalculate}>7</button>
          <button type="button" className="btn" onClick={this.handleCalculate}>8</button>
          <button type="button" className="btn" onClick={this.handleCalculate}>9</button>
          <button type="button" className="btn bck-orange" onClick={this.handleCalculate}>×</button>
          <button type="button" className="btn" onClick={this.handleCalculate}>4</button>
          <button type="button" className="btn" onClick={this.handleCalculate}>5</button>
          <button type="button" className="btn" onClick={this.handleCalculate}>6</button>
          <button type="button" className="btn bck-orange" onClick={this.handleCalculate}>-</button>
          <button type="button" className="btn" onClick={this.handleCalculate}>1</button>
          <button type="button" className="btn" onClick={this.handleCalculate}>2</button>
          <button type="button" className="btn" onClick={this.handleCalculate}>3</button>
          <button type="button" className="btn bck-orange" onClick={this.handleCalculate}>+</button>
          <button type="button" className="btn btn-0" onClick={this.handleCalculate}>0</button>
          <button type="button" className="btn" onClick={this.handleCalculate}>.</button>
          <button type="button" className="btn bck-orange" onClick={this.handleCalculate}>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
