import PropTypes from "prop-types";
import { BsCurrencyDollar, BsBook } from "react-icons/bs";

const Course = ({ course }) => {
  const { title, description, cover, price, credit_hour } = course;
  return (
    <div className="rounded-xl p-4 bg-white w-[312px] shadow-lg shadow-slate-300">
      <img src={cover} alt="" />
      <h3 className="text-xl font-semibold mt-4">{title}</h3>
      <p className="mt-3 text-sm text-[#1C1B1B99]">{description}</p>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex gap-3 items-center">
          <p className="text-xl">
            <BsCurrencyDollar />
          </p>
          <p className="text-base text-[#1C1B1B99] font-medium">
            Price: {price}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <p className="text-xl">
            <BsBook />
          </p>
          <p className="text-base text-[#1C1B1B99] font-medium">
            Credit : {credit_hour}hr
          </p>
        </div>
      </div>
      <button className="bg-[#2F80ED] w-full p-2 rounded-lg text-white text-lg font-semibold mt-8">
        Select
      </button>
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object,
  handleCourseName: PropTypes.func,
};

export default Course;
