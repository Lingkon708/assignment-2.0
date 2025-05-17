
export default function OrderSumumary({totalPendingProducts,deleiverd,totalPendingTasks}){   
    return (              
         <div>
                    <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                    <div className="grid grid-cols-3 gap-4 mb-6">
                  
                        <div className="bg-cardbg rounded-lg p-4 relative overflow-hidden">
                            <div className="text-5xl font-bold text-yellow-500 mb-2">{totalPendingTasks}  </div>
                            <div
                                className="bg-yellow-800 bg-opacity-50 text-yellow-200 text-xs font-medium px-3 py-1 rounded-full inline-block">
                                Total Order
                            </div>
                        </div>

                   
                        <div className="bg-cardbg rounded-lg p-4 relative overflow-hidden">
                            <div className="text-5xl font-bold text-red-500 mb-2">
                                {totalPendingProducts}
                              </div>
                            <div
                                className="bg-red-800 bg-opacity-50 text-red-200 text-xs font-medium px-3 py-1 rounded-full inline-block">
                              Panding
                            </div>
                        </div>

                     
                        <div className="bg-cardbg rounded-lg p-4 relative overflow-hidden">
                            <div className="text-5xl font-bold text-green-500 mb-2">{deleiverd<0?deleiverd=0:deleiverd}</div>
                            <div
                                className="bg-green-800 bg-opacity-50 text-green-200 text-xs font-medium px-3 py-1 rounded-full inline-block">
                                Delivered
                            </div>
                        </div>
                    </div>
                </div>
    );
}