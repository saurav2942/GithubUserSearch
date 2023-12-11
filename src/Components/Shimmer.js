import React from "react";

const Shimmer = () => {
  return (
    <div className="noise bg-[#fff] min-h-screen m-0 p-5">
      <div className="min-h-screen grid grid-cols-8 gap-2 md:gap-4 md:px-[8rem]">
        <div className="h-[40%] col-span-8 grid md:grid-cols-8 gap-2 md:gap-4 mt-[10rem] md:mt-0 ">
          <div className="h-[3rem] bg-gray-200 rounded-3xl overflow-hidden col-span-3 col-start-2 "></div>
          <div className="w-[3rem] aspect-square bg-gray-200 rounded-full overflow-hidden col-span-1 col-end-8"></div>
          <div className="h-[4rem] bg-gray-200 rounded-3xl overflow-hidden col-span-6 col-start-2"></div>
        </div>

        <div className="w-full h-[70%] md:h-[60%] aspect-square bg-white rounded-3xl overflow-hidden col-span-6 col-start-2 col-end-8 flex justify-between py-1 md:p-10">
          <div className="bg-white w-[35%] p-5 hidden md:grid grid-cols-3">
            <div className="bg-gray-200 col-span-1 col-end-2 aspect-square rounded-full w-[5rem]"></div>
            <div className="bg-gray-200 col-span-2 col-start-1 rounded-3xl h-[2rem]"></div>
            <div className="bg-gray-200 col-span-2 col-end-3 rounded-3xl h-[3rem]"></div>
            <div className="bg-gray-200 col-span-2 col-end-3 rounded-3xl h-[2rem]"></div>
            <div className="bg-gray-200 col-span-2 col-end-3 rounded-3xl h-[2rem]"></div>
          </div>
          <div className="bg-white w-full md:w-[65%] md:p-5 grid grid-cols-6">
            <div className="bg-white col-span-6 grid grid-cols-4">
              <div className="bg-gray-200 col-span-2 rounded-3xl h-[2rem]"></div>
              <div className="bg-gray-200 col-span-1 col-end-5 rounded-3xl h-[2rem]"></div>
              <div className="bg-gray-200 col-span-1 col-start-1 col-end-2 rounded-3xl h-[2rem]"></div>
            </div>
            <div className="bg-white col-span-6 grid grid-cols-5 my-5">
              <div className="bg-gray-200 col-span-2 rounded-3xl h-[2rem]"></div>
              <div className="bg-gray-200 col-span-2 col-start-4 rounded-3xl h-[2rem]"></div>
              <div className="bg-gray-200 col-span-2 rounded-3xl h-[2rem]"></div>
              <div className="bg-gray-200 col-span-2 col-start-4 rounded-3xl h-[2rem]"></div>
            </div>
            <div className="bg-gray-200 col-span-6 rounded-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
