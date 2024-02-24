import React from 'react';
import '../../assets/css/Courses.css';
import data from '../../data.json';

const Courses = () => {
  return (
    <div className="courses">
      <h1>Courses Offered</h1>
      <div className="course-list">
        {data.courses.map((course, index) => (
          <div className="course" key={index}>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <p>Duration: {course.duration}</p>
            <p>For more information, visit <a href={course.website}>{course.title} Website</a></p>
            <img src={course.logo} alt={course.title + " Logo"} />
            <p>Download the reference book PDF <a href={course.reference_book_pdf}>here</a></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
