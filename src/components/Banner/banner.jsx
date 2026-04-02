import React from "react";
import shadow from "../../assets/bg-shadow.png";
import Cricket from "../../assets/banner-main.png";
const Banner = () => {
  return (
    <div
      className="flex items-center justify-center
        min-h-135 bg-gray-900 overflow-hidden relative max-mx sm:rounded-3xl p-2"
    >
      <img src={shadow} className=" absolute h-full " alt="" />
      <div className="text-center text-white space-y-2 absolute z-10">
        <div>
          <img src={Cricket} className="mx-auto mb-3" alt="" />
        </div>
        <h2 className="text-[30px] sm:text-[40px] font-bold">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h2>
        <p className="text-[20px] sm:text-[24px] font-medium text-gray-400">
          Beyond Boundaries Beyond Limits
        </p>
        <a className="btn bg-[#E7FE29] rounded-xl border-0 ">
          Claim Free Credit
        </a>
      </div>
    </div>
  );
};

export default Banner;
