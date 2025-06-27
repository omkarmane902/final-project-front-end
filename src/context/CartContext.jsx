  import React, { createContext, useState, useEffect } from 'react';

  // Create context
  export const CartContext = createContext();

  // CartProvider component
  export const CartProvider = ({ children }) => {
    // Initialize cartItems and orders from localStorage
    const [cartItems, setCartItems] = useState(() => {
      const storedCart = localStorage.getItem('cartItems');
      return storedCart ? JSON.parse(storedCart) : [];
    });

    const [orders, setOrders] = useState(() => {
      const storedOrders = localStorage.getItem('orders');
      return storedOrders ? JSON.parse(storedOrders) : [];
    });

    // Persist cartItems and orders to localStorage
    useEffect(() => {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      localStorage.setItem('orders', JSON.stringify(orders));
    }, [cartItems, orders]);

    // Add item to cart
    const addToCart = (item, quantity = 1) => {
      setCartItems((prevItems) => {
        const existingItem = prevItems.find((i) => i.id === item.id);
        if (existingItem) {
          return prevItems.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
          );
        }
        return [...prevItems, { ...item, quantity }];
      });
    };

    // Remove item from cart
    const removeFromCart = (id) => {
      setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    // Update item quantity in cart
    const updateQuantity = (id, newQuantity) => {
      setCartItems((prevItems) =>
        prevItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item))
      );
    };

    // Clear cart
    const clearCart = () => {
      setCartItems([]);
    };

    // Calculate total price
    const getCartTotal = () => {
      return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    // Place an order
    const placeOrder = (orderDetails) => {
      const newOrder = {
        ...orderDetails,
        id: new Date().toISOString(),  // Use timestamp as a unique ID
        status: 'Pending',
        timestamp: new Date().toISOString(),
      };
      setOrders((prevOrders) => [...prevOrders, newOrder]);
      setCartItems([]); // Clear cart after placing the order
    };

    // Update order status (e.g., mark as 'Completed')
    const updateOrderStatus = (orderId, status) => {
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.id === orderId ? { ...order, status } : order
        )
      );
    };

    // Remove an order by ID
    const deleteOrder = (orderId) => {
      setOrders((prevOrders) => prevOrders.filter((order) => order.id !== orderId));
    };

    return (
      <CartContext.Provider
        value={{
          cartItems,
          orders,
          addToCart,
          removeFromCart,
          updateQuantity,
          clearCart,
          getCartTotal,
          placeOrder,
          updateOrderStatus,
          deleteOrder,  // Providing deleteOrder method
        }}
      >
        {children}
      </CartContext.Provider>
    );
  };
