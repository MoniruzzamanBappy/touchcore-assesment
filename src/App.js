import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="flex flex-col h-screen lg:flex-row md:flex-row w-full">
      <div className="order-last  lg:order-first md:order-first">
      <Navbar />
      </div>
      <div class="flex flex-col w-full lg:flex-row">
        <div class="grid flex-grow lg:w-1/4  mx-1  bg-base-300 place-items-center">
          content
        </div>
        <div class="grid flex-grow lg:w-1/2  mx-1  bg-base-300 place-items-center">
          content
        </div>
        <div class="grid flex-grow lg:w-1/4  mx-1  bg-base-300 place-items-center">
          content
        </div>
      </div>
    </div>
  );
}

export default App;
