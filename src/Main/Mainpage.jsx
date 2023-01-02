import "../index.css"
import React from "react";

const Mainpage = () => {
  return (
    <div className=" h-screen pt-3 px-1 z-10 relative">
      <div className="container grid lg:grid-cols-2 gap-2 md:grid-cols-2 sm:grid-cols-1">
        <h1 className="bg-red-400 rounded-md text-white text-lg p-5 text-center cus">
          HelLo World
        </h1>
        <h1 className="!bg-red-400 rounded-md text-white text-lg p-5 text-center">
          HelLo World
        </h1>
      </div>
      <h1 className="text-cyan-400 text-center p-10">Hello World</h1>
      <p className="text-black text-center absolute bottom-0 right-0">
        Hello World
      </p>
    </div>
  );
};

export default Mainpage;
