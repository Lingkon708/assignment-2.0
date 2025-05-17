import { FaFilter } from "react-icons/fa";

export default function OrderReport({
  finalTask,
  onMarkAsDelivered,
 
  onMarkAsDelete,
  onChangeFilter
  
}) {
  
 
      let handleFilterChange=(e)=>{
               const selected = e.target.value;
               onChangeFilter(selected)
      }



         
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-xl font-bold mb-4">Order Reports</h2>

        <div className="flex gap-4 items-center">
          <FaFilter color="white" />
          <select className="appearance-none bg-zinc-900 accent-orange-600 border-none outline-none rounded-sm text-blue-50"
           
            onChange={handleFilterChange}
           >
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
                <th className="pb-3 font-medium">customer Name</th>
                <th className="pb-3 font-medium">Items</th>
                <th className="pb-3 font-medium">Amount</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {finalTask.map((task) => {
                if (task.Productname !== "" && task.TotalProducts !== 0) {
                  return (
                    <tr className="border-t border-gray-700" key={task.id}>
                      <td className="py-3">{task.id}</td>
                      <td className="py-3">{task.Productname}</td>
                      <td className="py-3">{task.TotalProducts}</td>
                      <td className="py-3">{task.TotalPrice}</td>
                      <td className="py-3">
                        <span
                          className={
                            task.Status == "Pending"
                              ? "text-red-500"
                              : "text-green-500"
                          }
                        >
                          {task.Status}
                        </span>
                      </td>
                      <td className="py-3">
                      
                        <button
                          className="bg-gray-800  text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300 hover:bg-red-600" 
                          onClick={() => onMarkAsDelete(task.id)}>
                          Delete
                        </button>

                        {task.Status === "Pending" ? (
                          <button
                            className="bg-gray-800  text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300 hover:bg-green-600"
                            onClick={() => onMarkAsDelivered(task.id)}
                          >
                            Delever
                          </button>
                        ) : (
                          ""
                        )}
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
