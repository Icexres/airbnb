import React from "react";

const Lists = ({ items, id }) => {
  return (
    <>
    <div className="relative flex space-x-10 pt-5 z-10">
      {items &&
        items.map((item, index) => (
          <div key={index} className="item">
            <div className="text-center">{item.id}</div>
            <div className="self-center font-Cereal text-sm">{item.title}</div>
          </div>
        ))}
      <button className="mb-8">
        <div className="rounded-full border shadow-lg w-10 h-10 flex items-center justify-center pb-1 text-lg font-bold">></div>
      </button>

    <div className="flex space-x-5 px-16 z-20 pt-2">
      <div className="text-sm font-Cereal cursor-pointer flex">filter</div>
      <div className="text-sm font-Cereal cursor-pointer">display total before taxes</div>
    </div>
    </div>
  </>
  
  );
};

export default Lists;
