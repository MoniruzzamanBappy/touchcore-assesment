import React from "react";
import { GrHomeRounded } from 'react-icons/gr';
import { FaUserAlt } from 'react-icons/fa';
import { BsFillCreditCard2FrontFill } from 'react-icons/bs';
import { BsCardList } from 'react-icons/bs';
import { GiButterfly } from 'react-icons/gi';
import { BsSearch } from 'react-icons/bs';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='flex abc-nav justify-between place-items-center lg:flex-col  md:flex-col sm:bottom-0 flex-row'>
      <p className=" btn btn-link"><GiButterfly/></p>
      <p className=" btn btn-link"><BsSearch/></p>
     <button class="btn bg-primary m-5 btn-square"><GrHomeRounded/></button>
     <button class="btn bg-outline m-5 btn-square"><FaUserAlt/></button>
     <button class="btn bg-outline m-5 btn-square"><BsFillCreditCard2FrontFill/></button>
     <button class="btn bg-outline m-5 btn-square"><BsCardList/></button>
     <button className=" btn btn-link lg:mt-32 hidden lg:block">
     <div class="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        <span class="badge badge-xs badge-primary indicator-item"></span>
      </div>
     </button>
    </div>
  );
};

export default Navbar;
