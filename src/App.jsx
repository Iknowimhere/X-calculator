import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleInput = (value) => {
    setInput(input + value);
  };

  const handleOperator = (operator) => {
    setInput(input + operator);
  };

  const handleCalculate = () => {
    if (input === '') {
      setResult('Error');
    } else {
      try {
        const expression = input;
        const result = eval(expression);
        if (result === Infinity) {
          setResult('Infinity');
        } else if (isNaN(result)) {
          setResult('NaN');
        } else {
          setResult(result);
        }
        setInput('');
      } catch (error) {
        setResult('Error');
      }
    }

  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  return (
    <>
      <h1>React calculator</h1>
      <div className="calculator">
        <input type="text" value={input} readOnly />
        <div className="result">{result}</div>
        <div className="buttons">
          <button onClick={() => handleInput('7')}>7</button>
          <button onClick={() => handleInput('8')}>8</button>
          <button onClick={() => handleInput('9')}>9</button>
          <button onClick={() => handleOperator('+')}>+</button>
          <button onClick={() => handleInput('4')}>4</button>
          <button onClick={() => handleInput('5')}>5</button>
          <button onClick={() => handleInput('6')}>6</button>
          <button onClick={() => handleOperator('-')}>-</button>
          <button onClick={() => handleInput('1')}>1</button>
          <button onClick={() => handleInput('2')}>2</button>
          <button onClick={() => handleInput('3')}>3</button>
          <button onClick={() => handleOperator('*')}>*</button>
          <button onClick={() => handleInput('0')}>0</button>
          <button onClick={() => handleOperator('/')}>/</button>
          <button onClick={handleCalculate}>=</button>
          <button onClick={handleClear}>C</button>
        </div>
      </div>
    </>

  );
}

export default App;