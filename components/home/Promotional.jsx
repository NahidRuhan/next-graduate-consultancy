import React from "react";

const Promotional = () => {
  return (
    // <div className="flex flex-col lg:flex-row bg-black text-white h-64 lg:items-center lg:justify-between px-3 lg:px-32 mt-10 py-5">
    <div className="flex flex-col lg:flex-row bg-black text-white h-64 lg:items-center lg:justify-between px-3 lg:px-32 mt-10 py-14 lg:py-3 gap-3">
      <div>
        <p className="text-lg">PROMOTIONAL</p>
        <p className="text-xl lg:text-4xl">Do You Want To Study in Canada?</p>
      </div>
      <div>
        <button className="btn btn-error font-bold">Apply Now</button>
      </div>
    </div>
  );
};

export default Promotional;
