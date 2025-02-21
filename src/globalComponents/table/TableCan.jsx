import React from "react";
import Viewall_button from "../Viewall_button";

const TableCan = ({
  heading,
  ButtonName,
  ButtonLink,
  headerTr,
  dataTr,
  TrName,
  showHeading = false,
}) => {
  console.log(dataTr, " : tablecan datetr");
  return (
    <div className="border border-green-800 rounded-lg overflow-y-visible">
      {showHeading && (
        <div className="flex items-center justify-between gap-2 p-4">
          <h1 className="text-xl font-bold chivo capitalize">{heading}</h1>
          <Viewall_button
            navigationLink={ButtonLink}
            navigationName={ButtonName}
          />
        </div>
      )}
      <div className="overflow-x-auto overflow-y-visible rounded-lg">
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-[#01190F] text-white capitalize">
            <tr>
              {headerTr.map((item, index) => (
                <th
                  Details
                  key={index}
                  className={`p-4 ${
                    item === "Action" ? "text-center" : "text-left"
                  } capitalize`}
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataTr.length > 0 ? (
              dataTr.map((data, index) => (
                <TrName key={index} displayData={data} index={index} />
              ))
            ) : (
              <tr className="bg-green-950">
                <td
                  colSpan={`${headerTr.length}`}
                  className="text-center py-2 px-4"
                >
                  No Data Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableCan;
