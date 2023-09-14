import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Courses from "./components/Courses/Courses";
import Header from "./components/Header/Header";
import Swal from "sweetalert2";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [hour, setHour] = useState(0);
  const handleCourseName = (course) => {
    const isExist = blogs.find((item) => item.id === course.id);
    let totalHour = course.credit_hour;

    if (isExist) {
      return Swal.fire({
        title: "Error!",
        text: "You have already select this course.",
        icon: "error",
        confirmButtonText: "Close",
      });
    } else {
      blogs.forEach((item) => {
        totalHour += item.credit_hour;
      });
      if (totalHour > 20) {
        return Swal.fire({
          title: "Error!",
          text: "Your credit hour limit is over.",
          icon: "warning",
          confirmButtonText: "Close",
        });
      }
    }

    setHour(totalHour);
    setBlogs([...blogs, course]);
  };
  return (
    <div className="container mx-auto py-10">
      <Header></Header>
      <div className="md:flex gap-3 mt-8">
        <Courses handleCourseName={handleCourseName}></Courses>
        <Cart blogs={blogs} hour={hour}></Cart>
      </div>
    </div>
  );
}

export default App;
