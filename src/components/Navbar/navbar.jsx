import React from 'react';
import logo from "../../assets/logo.png"
import Dollar from "../../assets/dollar 1.png"

const navbar = () => {
  return (
    <div>
       <div className="navbar bg-base-100 max-mx">
      <div className="flex-1">
        <img src={logo} alt="" />
      </div>
      <div className="flex items-center">
        <div className='mr-6'>
          <ul className='flex gap-6 text-gray-600'>
            <li>Home</li>
            <li>Fixture</li>
            <li>Teams</li>
            <li>Schedules</li>
          </ul>
        </div>
        <button className="flex items-center gap-2 p-5 btn btn-soft rounded-2xl">
          <span>1000000</span>Coins
          <img src={Dollar} alt="" />
        </button>
      </div>
    </div>
    </div>
  );
};

export default navbar;
