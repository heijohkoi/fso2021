import React, { useState } from 'react';

const Statistics = ({ good, neutral, bad }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return <div>No feedback given</div>;
  }
  const total = good + neutral + bad;
  const average = (
    Math.round(((good - bad) / total) * 100) / 100
  ).toFixed(2);
  const positive = (
    Math.round((good / total) * 100 * 100) / 100
  ).toFixed(1);

  return (
    <div>
      <table>
        <colgroup>
          <col style={{ width: 70 }} />
          <col style={{ width: 70 }} />
        </colgroup>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={positive} />
      </table>
    </div>
  );
};

const StatisticLine = ({ text, value }) => {
  if (text === 'positive') {
    return (
      <tr>
        <td>{text}</td>
        <td>{value} %</td>
      </tr>
    );
  } else {
    return (
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    );
  }
};

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button handleClick={handleGoodClick} text="good" />
        <Button handleClick={handleNeutralClick} text="neutral" />
        <Button handleClick={handleBadClick} text="bad" />
      </div>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
