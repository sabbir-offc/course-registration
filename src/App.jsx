import Cart from "./components/Cart/Cart";
import Courses from "./components/Courses/Courses";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="container mx-auto py-10">
      <Header></Header>
      <div className="md:flex gap-3 mt-8">
        <Courses></Courses>
        <Cart></Cart>
      </div>
    </div>
  );
}

export default App;
