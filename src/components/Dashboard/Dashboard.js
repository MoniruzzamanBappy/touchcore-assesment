import React from "react";
import DataChart from "./DataChart";
import { BsFillCircleFill } from "react-icons/bs";

const Dashboard = () => {
  return (
    <div className="mt-5 mx-8">
      <h1 className="text-primary">Retirement Income</h1>
      <h1 className="text-2xl font-bold">Starting Year 2056</h1>
      <div className="flex flex-col mt-5 justify-between  lg:flex-row md:flex-row">
        <div className="w-full lg:w-1/3">
          <p className="text-2xl font-bold">$300,000</p>
          <p className="text-gray-400">My Goal</p>
          <div class="divider my-0"></div>
        </div>
        <div className="flex flex-row w-full lg:w-2/3 justify-between lg:justify-around">
          <div className="">
            <p className="text-2xl font-bold">59%</p>
            <p className="text-gray-400">Goal Achieved</p>
            <div class="divider my-0"></div>
          </div>
          <div className="">
            <p className="text-2xl font-bold">$300</p>
            <p className="text-gray-400">Est. Monthly Income</p>
            <div class="divider my-0"></div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-bold">Contributions Overtime</h1>
        <div className="flex flex-row justify-evenly">
          <p className="flex flex-col lg:flex-row place-items-center">
            {" "}
            <BsFillCircleFill style={{ color: "001D6E" }} />{" "}
            <span className="px-1 text-gray-400">Employer:</span>{" "}
            <span>K 73,500</span>
          </p>
          <p className="flex flex-col lg:flex-row place-items-center">
            {" "}
            <BsFillCircleFill style={{ color: "242F9B" }} />{" "}
            <span className="px-1 text-gray-400">Employee:</span>{" "}
            <span>K 52,500</span>
          </p>
          <p className="flex flex-col lg:flex-row place-items-center">
            {" "}
            <BsFillCircleFill style={{ color: "3A5BA0" }} />{" "}
            <span className="px-1 text-gray-400">Total Interest:</span>{" "}
            <span>K 244,313</span>
          </p>
        </div>
      </div>
      <DataChart />

      <div>
        <h1 className="font-bold">How do I compare my peers</h1>
        <h1 className="text-gray-400 text-xs">
          these number represent current goal achievement
        </h1>
        <div className="flex flex-col lg:flex-row lg:place-items-center justify-between">
          <div>
            <div>
              <p>
                Age:{" "}
                <select class="select select-bordered select-xs w-32 max-w-xs">
                  <option>Under 30</option>
                  <option>Above 30</option>
                </select>
              </p>
              <div class="divider my-0 mr-4"></div>
            </div>

            <div>
              <p>
                Salary:{" "}
                <select class="select select-bordered select-xs w-32 max-w-xs">
                  <option>K 20 - K 30</option>
                  <option>K 30 - K 40</option>
                  <option>K 40 - K 50</option>
                </select>
              </p>
              <div class="divider my-0 mr-4"></div>
            </div>
            <div>
              <p>
                Gender:{" "}
                <select class="select select-bordered select-xs w-32 max-w-xs">
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </p>
              <div class="divider my-0 mr-4"></div>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className=" flex flex-col place-items-center">
              <div
                class="radial-progress mx-4 text-success"
                style={{ "--value": 78 }}
              >
                78%
              </div>
              <p>Average</p>
            </div>
            <div className=" flex flex-col place-items-center">
              <div
                class="radial-progress mx-4 text-success"
                style={{ "--value": 95 }}
              >
                95%
              </div>
              <p>Top</p>
            </div>
            <div className=" flex flex-col place-items-center">
              <div
                class="radial-progress mx-4 text-success"
                style={{ "--value": 59 }}
              >
                59%
              </div>
              <p>Me</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
