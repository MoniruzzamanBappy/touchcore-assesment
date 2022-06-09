import React from "react";

const Profile = () => {
  return (
    <div className="ml-10">
      <div className="flex mx-auto mt-5 flex-row place-items-center">
        <div className="avatar">
          <div className="w-20 rounded-full">
            <img
              alt="user"
              src="https://api.lorem.space/image/face?hash=92310"
            />
          </div>
        </div>
        <div className="ml-5">
          <h1 className="text-2xl font-bold">John Doe</h1>
          <p className="text-sm">Welcome back</p>
        </div>
      </div>
      <div>
        <h1 className="text-xl font-bold mt-1">Today</h1>
        <div>
          <p className="lg:text-2xl text-xl font-bold">$19,892</p>
          <p className="text-gray-400">Account Balance</p>
        </div>
        <div className="flex flex-row lg:flex-col">
        <div >
          <p className="lg:text-xl font-bold">$4000</p>
          <p className="text-gray-400">Year-to-Date Contribution</p>
        </div>
        <div className="ml-6 lg:ml-0">
          <p className="font-bold ">$1892</p>
          <p className="text-gray-400">Total Interest</p>
        </div>
        </div>
        <div className="mt-2">
          <button
            id="dropdownDividerButton"
            data-dropdown-toggle="dropdownDivider"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            I want to{" "}
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>

          <div
            id="dropdownDivider"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
          >
            <ul
              className="py-1 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDividerButton"
            >
              <li>
                <a
                  href="a"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="b"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="c"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Earnings
                </a>
              </li>
            </ul>
            <div className="py-1">
              <a
                href="d"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Separated link
              </a>
            </div>
          </div>
        </div>
        <div>
        <h1 className="text-xl font-bold">Recent Transactions</h1>
        <div className="">
          <p className="text-gray-400">2020-08-07</p>
          <p>Withdrawal Transfer to Bank XXX11</p>
          <div className="divider my-1 mr-4"></div>
        </div>
        <div className="">
          <p className="text-gray-400">2020-07-21</p>
          <p>Withdrawal Transfer to Bank XXX11</p>
          <div className="divider my-1 mr-4"></div>
        </div>
        <div className="">
          <p className="text-gray-400">2020-07-16</p>
          <p>Withdrawal Transfer to Bank XXX11</p>
          <div className="divider my-1 mr-4"></div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
