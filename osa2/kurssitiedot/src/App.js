import React from 'react';

const Course = ({ course }) => {
  const Header = ({ course }) => (
    <h1 key={course.id}>{course.name}</h1>
  );
  const Content = ({ course }) => {
    return (
      <div>
        {course.parts.map((part) => (
          <Part
            key={part.id}
            part={part.name}
            exercises={part.exercises}
          />
        ))}
      </div>
    );
  };
  const Part = ({ part, exercises }) => {
    return (
      <p>
        {part} {exercises}
      </p>
    );
  };

  const Total = (props) => {
    const parts = props.course.parts;
    const totalCount = parts.reduce(
      (sum, part) => sum + part.exercises,
      0,
    );

    return (
      <p>
        <strong>total of {totalCount} exercises</strong>
      </p>
    );
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2,
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3,
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4,
      },
    ],
  };

  return (
    <div>
      {/*
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      */}
      <Course course={course} />
    </div>
  );
};

export default App;
