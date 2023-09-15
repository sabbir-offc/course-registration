import PropTypes from "prop-types";
const Cart = ({ blogs, hour, remaining, price }) => {
  return (
    <div className="md:w-1/4 bg-white rounded-xl shadow-xl h-fit shadow-slate-300 p-6">
      <h3 className="text-[#2F80ED] text-lg font-bold">
        Credit Hour Remaining {remaining} hr
      </h3>
      <hr className="my-4" />
      <h4 className="text-xl font-bold text-black">Course Name</h4>
      <ol className="my-5 list-decimal mx-4">
        {blogs.map((blog) => (
          <li key={blog.id}>{blog.title}</li>
        ))}
      </ol>
      <hr />
      <p className="text-base text-[#1C1B1BCC] font-medium my-4">
        Total Credit Hour : {hour} hr
      </p>
      <hr />
      <p className="mt-4 font-semibold text-base text-[#1C1B1BCC]">
        Total Price : {price} USD
      </p>
    </div>
  );
};

Cart.propTypes = {
  blogs: PropTypes.array,
  hour: PropTypes.number,
  remaining: PropTypes.number,
  price: PropTypes.number,
};
export default Cart;
