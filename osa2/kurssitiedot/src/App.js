import React from 'react';

const Course = ({ courses }) => {
  const Header = ({ course }) => {
    // console.log('from Header', course.name, 'id=', course.id);
    return <h2>{course.name}</h2>;
  };

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

  const Total = ({ course }) => {
    const totalCount = course.parts.reduce(
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
      <h1>Web development curriculum</h1>
      {courses.map((course, index) => {
        return (
          <div key={course.id}>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />
          </div>
        );
      })}
    </div>
  );
};

const App = () => {
  const courses = [
    {
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
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1,
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return (
    <div>
      <Course courses={courses} />
    </div>
  );
};

export default App;
