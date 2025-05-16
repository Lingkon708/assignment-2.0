import { FaFilter } from "react-icons/fa";
import OrderBtn from "./OrderBtn";
export default function OrderReport() {
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-xl font-bold mb-4">Order Reports</h2>

        <div className="flex gap-4 items-center">
          <FaFilter color="white" />
          <select className="appearance-none bg-zinc-900 accent-orange-600 border-none outline-none rounded-sm text-blue-50">
            <option>All</option>
            <option>Pending</option>
            <option>Delivered</option>
          </select>
        </div>
      </div>
      <div className="bg-cardbg rounded-lg p-4">
        <div className="reports-container">
          <table className="min-w-full">
            <thead>
              <tr className="text-left text-sm">
                <th className="pb-3 font-medium">ID</th>
                <th className="pb-3 font-medium">Customer Name</th>
                <th className="pb-3 font-medium">Items</th>
                <th className="pb-3 font-medium">Amount</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-t border-gray-700">
                <td className="py-3">21</td>
                <td className="py-3">Sumit Saha</td>
                <td className="py-3">5</td>
                <td className="py-3">123123</td>
                <td className="py-3">
                  <span className="text-red-500">PENDING</span>
                </td>
                <td className="py-3">
                  <OrderBtn className={"hover:bg-red-600"}>Delete</OrderBtn>
                  <OrderBtn className={"hover:bg-green-600 "}>
                    DELEVIRE
                  </OrderBtn>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
