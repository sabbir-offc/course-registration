import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Courses from "./components/Courses/Courses";
import Header from "./components/Header/Header";
import Swal from "sweetalert2";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [hour, setHour] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [price, setPrice] = useState(0);

  const handleSelectButton = (course) => {
    const isExist = blogs.find((item) => item.id === course.id);
    let totalHour = course.credit_hour;
    let totalPrice = course.price;

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
        totalPrice += item.price;
      });
      if (totalHour > 20) {
        return Swal.fire({
          title: "Error!",
          text: "Your credit hour limit is over.",
          icon: "warning",
          confirmButtonText: "Close",
        });
      }
      let remainingTime = 20 - totalHour;
      if (remainingTime > 20) {
        return Swal.fire({
          title: "Error!",
          text: "Your remaining time limit is over.",
          icon: "error",
          confirmButtonText: "Close",
        });
      }

      setPrice(totalPrice);
      setRemaining(remainingTime);
      setHour(totalHour);
      setBlogs([...blogs, course]);
    }
  };
  return (
    <div className="container mx-auto py-10">
      <Header></Header>
      <div className="md:flex gap-3 mt-8">
        <Courses handleSelectButton={handleSelectButton}></Courses>
        <Cart
          blogs={blogs}
          hour={hour}
          remaining={remaining}
          price={price}
        ></Cart>
      </div>
    </div>
  );
}

export default App;
