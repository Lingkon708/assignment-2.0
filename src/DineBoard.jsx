/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
import CreateOrder from "./components/CreateOrder";
import Navbar from "./components/Navbar";
import OrderReport from "./components/OrderReport";
import OrderSumumary from "./components/OrderSamary";
export default function () {
  const [price, setPrice] = useState(0);
  const [addedItems, setAddedItems] = useState({});
  const [count, setCount] = useState(0);
  const [finalTask, setFinalTask] = useState([]);
  const [orderId, setOrderId] = useState(1);
  const [deleiverd, setDelivered] = useState(0);
  const [filterStatus, setFilterStatus] = useState("All");
  const handleAddClick = (productName, itemPrice) => {
    setAddedItems((prev) => {
      const isAdded = !!prev[productName];
      const updatedPrice = isAdded ? price - itemPrice : price + itemPrice;

      setCount(isAdded ? count - 1 : count + 1);
      setPrice(updatedPrice < 0 ? 0 : updatedPrice); // Prevent negative price

      return {
        ...prev,
        [productName]: !isAdded,
      };
    });
  };

  const handlePlaceOrder = (customerName) => {
    const newOrder = {
      id: orderId,
      Productname: customerName,
      TotalProducts: count,
      TotalPrice: price,
      Status: "Pending",
    };

    setFinalTask((prev) => [newOrder, ...prev]);
    setOrderId((prevId) => prevId + 1); // increment ID for next order

    // Reset values for new order
    setPrice(0);
    setCount(0);
    setAddedItems({});
  };

  // const totalPendingProducts = finalTask
  // .filter((order) => order.Status === "Pending")
  // .reduce((sum, order) => sum + order.TotalProducts, 0);

  let totalPendingProducts = 0;
  finalTask.forEach((task) => {
    if (
      task.Status === "Pending" &&
      task.Productname.trim() !== "" &&
      task.TotalProducts !== 0
    ) {
      
      totalPendingProducts += 1;
    }
  });

  const handleMarkAsDelivered = (id) => {
    console.log(id);
    setFinalTask((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, Status: "Delivered" } : task
      )
    );
    
    setDelivered(deleiverd + 1);
  };

  const handleMarkDelete = (id) => {
    setFinalTask((previous) => previous.filter((task) => task.id !== id));
    setDelivered(deleiverd - 1);
  };
  
  const handleChangeFilter = (filterStatus) => {
    setFilterStatus(filterStatus);
  };
  const totalTasks = finalTask.length;

  const visibleTasks = finalTask.filter((task) => {
    if (filterStatus === "All") return true;
    return task.Status === filterStatus;
  });

  return (
    <div className="text-white bg-background">
      <div className="container mx-auto px-4 h-screen flex flex-col font-bold">
        <Navbar />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow font-bold">
          <CreateOrder
            handleClick={handleAddClick}
            price={price}
            addedItems={addedItems}
            onPlaceOrder={handlePlaceOrder}
          />
          <div className="md:col-span-2 h-[calc(100vh_-_130px)] font-bold">
            <OrderSumumary
              finalTask={finalTask}
              totalPendingProducts={totalPendingProducts}
              deleiverd={deleiverd}
              totalPendingTasks={totalTasks}
            />
            <OrderReport
              finalTask={visibleTasks}
              onMarkAsDelivered={handleMarkAsDelivered}
              onMarkAsDelete={handleMarkDelete}
              onChangeFilter={handleChangeFilter}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
