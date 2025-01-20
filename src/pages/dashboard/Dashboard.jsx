import React from "react";
import TotalCard from "../../globalComponents/TotalCard";
import Usericon_image from "../../assets/icons/User.png";
import Money_image from "../../assets/icons/Money.png";
import transaction_image from "../../assets/icons/ReadCvLogo.png";
import wallet_image from "../../assets/icons/Wallet.png";
import BarChart from "./components/BarChart";
import TableCan from "../../globalComponents/table/TableCan";
import BTC from "../../assets/icons/DummyIcon/btc.png";
import trx from "../../assets/icons/DummyIcon/trx.png";
import usdt from "../../assets/icons/DummyIcon/usdt.png";
import sol from "../../assets/icons/DummyIcon/sol.png";
import MasterCard from "./components/masterCard/MasterCard";
import RecetTransactionTr from "./components/RecetTransactionTr";
import CryptoTr from "./components/CryptoTr";
import FONTS from "../../constants/font";
const Dashboard = () => {
  // cards
  const dashboard_cardValues = [
    {
      icon: Usericon_image,
      iconBg: "bg-[#126EB9]",
      heading: "total",
      subheading: "users",
      cardValue: "25,000",
      valueStatus: false,
    },
    {
      icon: Money_image,
      iconBg: "bg-[#78CA19]",
      heading: "total",
      subheading: "revenue",
      cardValue: "25,000",
      valueStatus: true,
      cardUnit: "USD",
    },
    {
      icon: transaction_image,
      iconBg: "bg-[#B95A12]",
      heading: "total",
      subheading: "Transactions",
      cardValue: "2,000",
      valueStatus: false,
    },
    {
      icon: wallet_image,
      iconBg: "bg-[#CA1919]",
      heading: "total",
      subheading: "Wallets",
      cardValue: "2,000",
      valueStatus: true,
    },
  ];

  // table display of recet transactions
  const transactions_headerTr = ["type", "user", "amount", "date"];
  const transactions = [
    {
      typeimg: BTC,
      type: "BTC",
      action: "Deposit",
      user: "Maleekfrenzy",
      amount: "0.00023 BTC",
      date: "21 - 12 - 24",
      time: "11:23 AM",
    },
    {
      typeimg: usdt,
      type: "USDT",
      action: "Sending",
      user: "Alex",
      amount: "25,000 USDT",
      date: "21 - 12 - 24",
      time: "11:23 AM",
    },
    {
      typeimg: sol,
      type: "SOL",
      action: "Receiving",
      user: "Anita",
      amount: "0.00023 SOL",
      date: "21 - 12 - 24",
      time: "11:23 AM",
    },
    {
      typeimg: trx,
      type: "TRX",
      action: "Swap",
      user: "Zainy",
      amount: "0.00023 TRX",
      date: "21 - 12 - 24",
      time: "11:23 AM",
    },
    {
      typeimg: BTC,
      type: "BTC",
      action: "Deposit",
      user: "Balla",
      amount: "0.00023 BTC",
      date: "21 - 12 - 24",
      time: "11:23 AM",
    },
  ];

  // table display of crypto prices
  const cryptoPrices_headerTr = ["token", "price", "change"];
  const cryptoPrices_DataTr = [
    {
      name: "btc",
      rating: "1.88T",
      price: "$95,567.01",
      change: "graph place",
      tokenImg: BTC,
    },
    {
      name: "sol",
      rating: "1.88T",
      price: "$197.01",
      change: "graph place",
      tokenImg: sol,
    },
    {
      name: "usdt",
      rating: "1.88T",
      price: "$1.01",
      change: "graph place",
      tokenImg: usdt,
    },
    {
      name: "trx",
      rating: "1.88T",
      price: "$0.56",
      change: "graph place",
      tokenImg: trx,
    },
    {
      name: "btc",
      rating: "1.88T",
      price: "$95,000",
      change: "graph place",
      tokenImg: BTC,
    },
  ];

  return (
    <>
      {/* Dashboard first row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="">
          <h1
            className="text-[30px] chivo-bold mb-4"
          >
            Dashboard
          </h1>{" "}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dashboard_cardValues.map((item, index) => {
              return (
                <TotalCard
                  icon={item.icon}
                  iconBg={item.iconBg}
                  heading={item.heading}
                  subheading={item.subheading}
                  cardValue={item.cardValue}
                  valueStatus={item.valueStatus}
                  cardUnit={item.cardUnit}
                  key={index}
                />
              );
            })}
          </div>
        </div>
        {/* chart js */}
        <BarChart />
      </div>

      {/* dashboard second row */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 my-8">
        <div className="md:col-span-7">
          <TableCan
            showHeading={true}
            // table heading
            heading={"react transactions"}
            // th in first tr
            headerTr={transactions_headerTr}
            // td data display
            dataTr={transactions}
            // name of tr using
            TrName={RecetTransactionTr}
            // button ButtonName and ButtonLink
            ButtonLink={"#"}
            ButtonName={"view all"}
          />
        </div>
        <div className="md:col-span-5">
          <TableCan
            showHeading={true}
            // table heading
            heading={"Crypto Wallet"}
            // th in first tr
            headerTr={cryptoPrices_headerTr}
            // td data display
            dataTr={cryptoPrices_DataTr}
            // name of tr using
            TrName={CryptoTr}
            // button ButtonName and ButtonLink
            ButtonLink={"#"}
            ButtonName={"view all"}
          />
        </div>
      </div>

      {/* third row master card */}
      <div className="mt-14">
        <h1 className="text-2xl font-bold mb-4">Master Wallet</h1>
        <MasterCard heading={"crypto wallet"} />
      </div>
    </>
  );
};

export default Dashboard;
