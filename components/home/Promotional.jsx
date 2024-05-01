import React from "react";

const Promotional = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-black text-white h-64 items-center lg:justify-between px-32 mt-10 py-5">
      <div>
        <p className="text-lg">PROMOTIONAL</p>
        <p className="text-xl lg:text-4xl">Do You Want To Study in Canada?</p>
      </div>
      <div>
        <button className="btn btn-error mt-10 font-bold">Apply Now</button>
      </div>
    </div>
  );
};

export default Promotional;
