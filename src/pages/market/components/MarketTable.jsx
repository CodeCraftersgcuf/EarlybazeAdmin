import React from "react";
import ProgressIndicator from "./ProgressIndicator";

const tableData = [
  {
    title: "Join the best crypto app",
    sent: 250,
    openRate: "12% (120)",
    conversionRate: "25% (134)",
    bounceRate: "25% (134)",
    progress: 75,
  },
  {
    title: "Join the best crypto app",
    sent: 250,
    openRate: "12% (120)",
    conversionRate: "28% (134)",
    bounceRate: "25% (134)",
    progress: 30,
  },
  {
    title: "Join the best crypto app",
    sent: 250,
    openRate: "12% (120)",
    conversionRate: "25% (134)",
    bounceRate: "25% (134)",
    progress: -15,
  },
  {
    title: "Join the best crypto app",
    sent: 250,
    openRate: "12% (120)",
    conversionRate: "26% (134)",
    bounceRate: "25% (134)",
    progress: 100,
  },
  {
    title: "Join the best crypto app",
    sent: 250,
    openRate: "12% (120)",
    conversionRate: "25% (134)",
    bounceRate: "25% (134)",
    progress: 78,
  },
];

const MarketTable = () => {
  return (
    <div className="bg-[#031E11] rounded-lg text-white p-4">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="p-3 text-left">Title</th>
            <th className="p-3">Sent</th>
            <th className="p-3">Open Rate</th>
            <th className="p-3">Conversion Rate</th>
            <th className="p-3">Bounce Rate</th>
            <th className="p-3">Progress</th>
            <th className="p-3">More</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr key={index} className="border-b border-gray-700">
              <td className="p-3 flex items-center gap-2">
                <input type="checkbox" className="accent-green-500" />
                {item.title}
              </td>
              <td className="p-3 text-center">{item.sent}</td>
              <td className="p-3 text-center">{item.openRate}</td>
              <td className="p-3 text-center">{item.conversionRate}</td>
              <td className="p-3 text-center">{item.bounceRate}</td>
              <td className="p-3 text-center">
                <ProgressIndicator progress={item.progress} />
              </td>
              <td className="p-3 text-center">
                <i className="bi bi-three-dots cursor-pointer"></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MarketTable;
