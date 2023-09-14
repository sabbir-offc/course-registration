import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("course.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:w-3/4 gap-6 place-items-center"></div>
  );
};

Courses.propTypes = {
  handleCourseName: PropTypes.func,
};
export default Courses;
