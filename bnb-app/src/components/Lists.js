import React from "react";

const Lists = ({ items }) => {
    return (
        <div>
            {items && items.map((item, index) => (
                <div key={index} className="item">
                    <div className="icon"></div>
                    <div className="name">{item.name}</div>
                </div>
            ))}
        </div>
    );
};

export default Lists;