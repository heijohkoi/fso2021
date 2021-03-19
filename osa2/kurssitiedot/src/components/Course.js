import React from 'react';

const Course = ({ courses }) => {
  const Header = ({ course }) => {
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

export default Course;
