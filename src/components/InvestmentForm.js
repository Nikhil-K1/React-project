import { useState } from "react";

const InvestmentForm = (props) => {
  let IntialObj = {
    "current-savings": "",
    "yearly-contribution": "",
    "expected-return": "",
    duration: ""
  };
  const [obj, setObj] = useState(IntialObj);

  const inputHandler = (event, name) => {
    setObj((prevState) => {
      return {
        ...prevState,
        [name]: event.target.value
      };
    });
  };

  const onCaclculate = (event) => {
    event.preventDefault();
    props.onCalculate(obj);
  };

  const onReset = (event) => {
    setObj(IntialObj);
  };

  return (
    <div>
      <form className="form" onSubmit={onCaclculate}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              type="number"
              id="current-savings"
              value={obj["current-savings"]}
              onChange={(event) => inputHandler(event, "current-savings")}
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              type="number"
              id="yearly-contribution"
              value={obj["yearly-contribution"]}
              onChange={(event) => inputHandler(event, "yearly-contribution")}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              type="number"
              id="expected-return"
              value={obj["expected-return"]}
              onChange={(event) => inputHandler(event, "expected-return")}
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              type="number"
              id="duration"
              value={obj["duration"]}
              onChange={(event) => inputHandler(event, "duration")}
            />
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt" onClick={onReset}>
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    </div>
  );
};

export default InvestmentForm;
