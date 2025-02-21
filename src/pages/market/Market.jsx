import React from "react";
import AddingButton from "../../globalComponents/AddingButton";
import MarketStats from "./components/MarketStats";
import MarketTabs from "./components/MarketTabs";
import MarketTable from "./components/MarketTable";

const Market = () => {
  const HandleButton = () => {
    console.log("Button clicked");
  };

  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-4xl chivo-bold">Newsletters</h1>
        <div>
          <AddingButton
            icon={"bi bi-plus-lg"}
            title={"Create New"}
            handlefunction={HandleButton}
          />
        </div>
      </div>

      {/* Stats Section */}
      <MarketStats />

      {/* Tabs Section */}
      <MarketTabs />

      {/* Table Section */}
      <MarketTable />
    </>
  );
};

export default Market;
