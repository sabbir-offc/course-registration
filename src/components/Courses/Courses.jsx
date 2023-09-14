import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const Courses = ({ handleSelectButton }) => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("course.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:w-3/4 gap-6 place-items-center">
      {courses.map((course) => (
        <Course
          key={course.id}
          course={course}
          handleSelectButton={handleSelectButton}
        ></Course>
      ))}
    </div>
  );
};

Courses.propTypes = {
  handleSelectButton: PropTypes.func,
};
export default Courses;
