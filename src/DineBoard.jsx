/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
import CreateOrder from "./components/CreateOrder";
import Navbar from "./components/Navbar";
import OrderReport from "./components/OrderReport";
import OrderSumumary from "./components/OrderSamary";
export default function () {
  const [price, setPrice] = useState(0);
  let handleClick = (pri,setisClick) => {
    let total = price + pri;
    setPrice(total <= 0 ? (total = 0) : total);
    setisClick(true);
  
  };
  return (
    <div className="text-white bg-background">
      <div className="container mx-auto px-4 h-screen flex flex-col font-bold">
        <Navbar />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow font-bold">
          <CreateOrder handleAddClick={handleClick} price={price} />
          <div className="md:col-span-2 h-[calc(100vh_-_130px)] font-bold">
            <OrderSumumary />
            <OrderReport />
          </div>
        </div>
      </div>
    </div>
  );
}
