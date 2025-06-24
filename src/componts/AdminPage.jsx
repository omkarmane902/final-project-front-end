import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import { FaCogs, FaTrashAlt, FaShippingFast, FaCheck, FaHourglassStart } from 'react-icons/fa';
import { motion } from 'framer-motion';

function AdminPage() {
  const { orders, deleteOrder, updateOrderStatus } = useContext(CartContext);
  const [statusUpdate, setStatusUpdate] = useState({});

  useEffect(() => {
    // Reset local status updates if orders change externally (optional)
    // setStatusUpdate({});
  }, [orders]);

  const handleRemoveOrder = (orderId) => {
    deleteOrder(orderId);
  };

  const handleStatusChange = (orderId) => {
    // Get the current status considering local updates
    const currentStatus = statusUpdate[orderId] || orders.find(o => o.id === orderId)?.status || 'Pending';

    // Calculate the next status
    const nextStatus = 
      currentStatus === 'Pending' ? 'Shipped' :
      currentStatus === 'Shipped' ? 'Completed' :
      'Pending';

    // Update local state for UI feedback
    setStatusUpdate(prev => ({ ...prev, [orderId]: nextStatus }));

    // Call context function to update backend or global state
    updateOrderStatus(orderId, nextStatus);
  };

  return (
    <div className="admin-page p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8 flex items-center justify-center">
        <FaCogs className="mr-4 text-blue-600" />
        Admin Dashboard
      </h1>

      {orders.length === 0 ? (
        <p className="text-center text-xl text-gray-600">No orders yet.</p>
      ) : (
        <div className="orders-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {orders.map((order, index) => {
            const currentStatus = statusUpdate[order.id] || order.status;

            return (
              <motion.div
                key={order.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="order-card bg-white p-6 rounded-lg shadow-lg border border-gray-300 transform transition-all hover:scale-105 hover:shadow-xl"
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Order #{index + 1}</h3>
                <p className="text-md text-gray-600 mb-4">
                  Status: <span className={`font-bold ${currentStatus === 'Completed' ? 'text-green-600' : 'text-yellow-600'}`}>
                    {currentStatus}
                  </span>
                </p>
                <p className="text-lg font-semibold text-gray-800">Total Price: ₹{order.finalPrice.toFixed(2)}</p>
                <p className="text-md font-medium text-gray-700 mb-4">Points Earned: {Math.round(order.finalPrice)}</p>

                <div className="items-list mt-4">
                  <p className="font-semibold text-gray-800">Items:</p>
                  <ul className="list-disc pl-5 mt-2">
                    {order.items.map((item, idx) => (
                      <li key={idx} className="flex items-center justify-between text-gray-700 mb-2">
                        <div className="flex items-center">
                          {item.image && (
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-12 h-12 object-cover rounded-md mr-4"
                            />
                          )}
                          <span>{item.name} - {item.quantity} x ₹{item.price}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.button
                  onClick={() => handleRemoveOrder(order.id)}
                  className="mt-6 w-full py-3 text-lg font-semibold text-white bg-red-600 rounded-md hover:bg-red-700 flex items-center justify-center transition-all transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <FaTrashAlt className="mr-3" /> Remove Order
                </motion.button>

                <motion.button
                  onClick={() => handleStatusChange(order.id)}
                  className="mt-4 w-full py-3 text-lg font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 flex items-center justify-center transition-all transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {currentStatus === 'Pending' ? (
                    <>
                      <FaHourglassStart className="mr-3" /> Mark as Shipped
                    </>
                  ) : currentStatus === 'Shipped' ? (
                    <>
                      <FaShippingFast className="mr-3" /> Mark as Completed
                    </>
                  ) : (
                    <>
                      <FaCheck className="mr-3" /> Mark as Pending
                    </>
                  )}
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default AdminPage;
