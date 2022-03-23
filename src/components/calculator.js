import React, { useState } from 'react';
import calculate from '../logic/calculate';
import CalcData from './Data';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleCalculate = ({ currentTarget: btn }) => {
    const buttonName = btn.outerText;
    try {
      const object = calculate(state, buttonName);
      setState({ ...state, ...object });
    } catch (error) {
      const { next } = state;

      if (next) {
        setState({ ...state, total: next, next: null });
      }

      setState({ operation: buttonName });
    }
  };

  const { next, total } = state;

  return (
    <section className="main-container">
      <h3 className="text">Let&apos;s do some math!!</h3>
      <div className="calc-content">
        <div className="result ligth-text">
          {total && next ? next : total || next || '0'}
        </div>
        <div className="calc-wrapper">
          {CalcData.map((row) => row.map((data) => (
            <button
              type="button"
              key={data.name}
              className={data.className}
              onClick={(e) => handleCalculate(e)}
            >
              {data.name}
            </button>
          )))}
        </div>
      </div>
    </section>
  );
};

export default Calculator;
