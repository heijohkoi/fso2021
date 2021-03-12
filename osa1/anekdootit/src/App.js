import React, { useState } from 'react';

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const FavoriteAnecdote = ({ votes, anecdotes }) => {
  let i = votes.indexOf(Math.max(...votes));
  if (votes[i] === 0) {
    return <div>No votes yet</div>;
  }
  return (
    <div>
      {anecdotes[i]} has {votes[i]} votes
    </div>
  );
};

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(
    Array.apply(null, new Array(anecdotes.length)).map(
      Number.prototype.valueOf,
      0,
    ),
  );

  const randomAnecdote = () =>
    setSelected(Math.floor(Math.random() * 6));

  const giveVote = () => {
    const copy = [...points];
    copy[selected] += 1;
    setPoints(copy);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>
        <strong>{anecdotes[selected]}</strong>
      </div>
      <div>has {points[selected]} votes</div>
      <div>
        <Button handleClick={giveVote} text="vote" />
        <Button handleClick={randomAnecdote} text="next anecdote" />
      </div>
      <h1>Anecdote with most votes</h1>
      <FavoriteAnecdote votes={points} anecdotes={anecdotes} />
    </div>
  );
};

export default App;
