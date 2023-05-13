import React, { useState } from "react";
import "./App.css";

function App() {
  const [currentResult, setCurrentResult] = useState(0);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [firstValue, setFirstValue] = useState(null);
  const [secondValue, setSecondValue] = useState(null);

  const num1 = (e) => setFirstValue(e.target.value);
  const num2 = (e) => setSecondValue(e.target.value);

  const errorMessage = () => {
    if (firstValue == null) {
      setError("Error: Num1 cannot be empty");
    }
    if (secondValue == null) {
      setError("Error: Num2 cannot be empty");
    }
    if (firstValue == null && secondValue == null) {
      setError("Error: Num1 & Num2 cannot be empty");
    }
  };

  const Add = (e) => {
    e.preventDefault();
    if (firstValue !== null) {
      if (secondValue !== null) {
        let sum = +firstValue + +secondValue;
        setCurrentResult(sum);
        setError("");
        setSuccess(true);
      } else {
        errorMessage();
      }
    } else {
      errorMessage();
      setSuccess(false);
    }
  };

  const Subtract = (e) => {
    e.preventDefault();
    if (firstValue !== null) {
      if (secondValue !== null) {
        let sub = +firstValue - +secondValue;
        setCurrentResult(sub);
        setError("");
        setSuccess(true);
      } else {
        errorMessage();
      }
    } else {
      errorMessage();
      setSuccess(false);
    }
  };

  const Multiply = (e) => {
    e.preventDefault();
    if (firstValue !== null) {
      if (secondValue !== null) {
        let multi = +firstValue * +secondValue;
        setCurrentResult(multi);
        setError("");
        setSuccess(true);
      } else {
        errorMessage();
      }
    } else {
      errorMessage();
      setSuccess(false);
    }
  };

  const Divide = (e) => {
    e.preventDefault();
    if (firstValue !== null) {
      if (secondValue !== null) {
        let divid = +firstValue / +secondValue;
        setCurrentResult(divid);
        setError("");
        setSuccess(true);
      } else {
        errorMessage();
      }
    } else {
      errorMessage();
      setSuccess(false);
    }
  };

  // const Clear=(e)=>{
  //   e.preventDefault();
  // setSuccess('');
  //   console.log('sum:', currentSum);
  //   document.querySelector('form').reset();
  //   setClear(true);
  //   setCurrentResult(0);
  // }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Calculator</h1>

        <form action="">
          <input type="text" id="num1" placeholder="Num 1" onChange={num1} />
          <br />
          <br />
          <input type="text" id="num2" placeholder="Num 2" onChange={num2} />
          <br />
          <button onClick={Add}>+</button>
          <button onClick={Subtract}>-</button>
          <button onClick={Multiply}>*</button>
          <button onClick={Divide}>/</button>
          <br />
          {error ? <p id="error">{error}</p> : null}
          {success ? (
            <>
              <p>
                Result = <span>{currentResult}</span>
              </p>
              <p id="success">Success: Your result is shown above!</p>
            </>
          ) : null}
        </form>
      </header>
    </div>
  );
}

export default App;
