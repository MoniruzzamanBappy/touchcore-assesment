import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Profile from './components/Profile/Profile';
import Dashboard from './components/Dashboard/Dashboard';
import Summary from "./components/Summary/Summary";

function App() {
  return (
    <div className="flex flex-col h-screen  lg:flex-row md:flex-row w-full">
      <div className="order-last lg:sticky lg:left-0  lg:order-first md:order-first">
      <Navbar />
      </div>
      <div class="flex flex-col w-full  lg:flex-row">
        <div className='none lg:w-1/4'>

        </div>
        <div class="grid flex-grow lg:w-1/4 lg:fixed lg:h-screen  mx-1  bg-base-300 ">
          <Profile/>
        </div>
        <div class="grid flex-grow lg:pl-5 lg:w-1/2  mx-1 ">
         <Dashboard/>
        </div>
        <div class="grid flex-grow lg:w-1/4 mb-24 lg:mb-0 lg:h-screen  mx-1  ">
          <Summary/>
        </div>
      </div>
    </div>
  );
}

export default App;
