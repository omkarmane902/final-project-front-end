const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };
<button
  onClick={() => removeFromCart(item.id)}
  className="text-xs text-red-500 flex items-center cursor-pointer"
>
  <FaTrashAlt className="mr-2" />
  Remove
</button>
  