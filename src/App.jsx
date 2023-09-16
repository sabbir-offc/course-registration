import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Courses from "./components/Courses/Courses";
import Header from "./components/Header/Header";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
function App() {
  const [blogs, setBlogs] = useState([]);
  const [hour, setHour] = useState(0);
  const [remaining, setRemaining] = useState(20);
  const [price, setPrice] = useState(0);

  const handleSelectButton = (course) => {
    const isExist = blogs.find((item) => item.id === course.id);
    let totalHour = course.credit_hour;
    let totalPrice = course.price;

    if (isExist) {
      return Swal.fire({
        title: "Error!",
        text: "The course is already exist in your cart.",
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
          title: "Warning!",
          text: "You cannot add credit hour more than 20.",
          icon: "warning",
          confirmButtonText: "Close",
        });
      }
      let remainingTime = 20 - totalHour;
      if (remainingTime < 1) {
        toast.error("Your remaining credit hour limit is over.", {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
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
      <div className="md:flex gap-3 mt-8 relative">
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
