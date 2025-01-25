import React from "react";

const Lists = ({ items }) => {
  return (
    <div className="flex space-x-6">
      {items &&
        items.map((item, index) => (
          <div key={index} className="item ">
            <div className="icon"></div>
            <div className="name">{item.title}</div>
          </div>
        ))}
    </div>
  );
};

export default Lists;
