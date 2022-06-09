import React from "react";
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const Summary = () => {
  return (
    <div className="ml-5">
      <div className="bg-base-300 rounded mt-3 pt-2 pl-3">
        <h1 className="text-xl font-bold">Retirement Strategy</h1>
        <div>
          <p className="text-xs font-bold">Employee Contribution</p>
          <progress className="progress w-56" value={12} max={20}> {" "}
          </progress> <span className="text-xs">12%</span>
        </div>
        <div>
          <p className="text-xs font-bold">Retirement Age</p>
          <progress className="progress w-56" value={65} max={80}> {" "}
          </progress> <span className="text-xs">65%</span>
        </div>
        
        <div className="divider my-1 mr-4"></div>
        <div className="flex flex-row justify-between mr-5">
          <p className="text-xs font-bold">Employer Contribution</p>
          <p>8.4%</p>
        </div>
        <div className="flex flex-row justify-between mr-5">
          <p className="text-xs font-bold">Interest Rate</p>
          <p>5%</p>
        </div>
        <div className="flex flex-row justify-center">
          <button className="btn btn-primary w-2/3">Update</button>
        </div>
        <p className="text-center text-sm text-primary flex flex-row my-3 justify-center">
          <a className="flex flex-row place-items-center text-center" href="abc">View Help Docs <MdOutlineKeyboardArrowRight/></a>
        </p>
      </div>

      <div className="flex flex-row">
      <div className="divider  divider-horizontal ml-0 pl-0"></div> 
        <div>
          <p>Are you considering a</p>
          <p className="font-bold">Housing Advance?</p>
          <p className="text-gray-400 text-xs">Limited time reduce interest</p>
          <p className="text-sm text-primary">
            <a className="flex flex-row place-items-center" href="abc">Learn More <MdOutlineKeyboardArrowRight/></a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
