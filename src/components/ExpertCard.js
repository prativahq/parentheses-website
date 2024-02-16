import React from "react";

export const ExpertCard = ({ platform }) => {
  //   console.log(props.platform);
  return (
    <div className="border border-gray-300 rounded-lg overflow-clip flex flex-col  ">
      <img className="w-full h-[200px] rounded-t-lg" src={platform.image} />
      {/* <img
        className="w-full h-[200px] rounded-t-lg"
        src="images/Kusumika.jpeg"
      /> */}
      <div className="flex flex-col gap-5 p-5">
        <h2 className="text-xl font-semibold">{platform?.org_name}</h2>
        <p className="flex-1 text-gray-800">{platform?.description}</p>
        <button className="py-3 px-5 w-full text-white font-semibold rounded-xl focus:ring focus:ring-pink-300 bg-pink-500 hover:bg-pink-700 transition ease-in-out duration-200">
          Shop now
        </button>
      </div>
    </div>
  );
};
