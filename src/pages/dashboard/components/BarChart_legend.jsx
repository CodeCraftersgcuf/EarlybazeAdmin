import React from 'react'

const BarChart_legend = ({legendItems}) => {

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            {legendItems.map((item, index) => (
                <div key={index} className="flex items-center">
                    <span
                        style={{
                            backgroundColor: item.color,
                            width: "20px",
                            height: "20px",
                            display: "inline-block",
                            marginRight: "8px",
                            borderRadius: "4px",
                        }}
                    ></span>
                    <span className="text-white">{item.label}</span>
                </div>
            ))}
        </div>
    );
};

export default BarChart_legend
