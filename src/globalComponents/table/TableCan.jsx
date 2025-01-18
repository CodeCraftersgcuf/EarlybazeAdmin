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
  return (
    <div className="border border-green-800 rounded-lg overflow-hidden">
      {showHeading && (
        <div className="flex items-center justify-between gap-2 p-4">
          <h1 className="text-2xl font-bold capitalize">{heading}</h1>
          <Viewall_button
            navigationLink={ButtonLink}
            navigationName={ButtonName}
          />
        </div>
      )}
      <div className="overflow-auto md:overflow-y-visible">
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-theme-dark text-white capitalize">
            <tr>
              {headerTr.map((item, index) => (
                <th
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
            {dataTr.map((transaction, index) => (
              <TrName displayData={transaction} index={index} key={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableCan;
