import { useDispatch, useSelector } from "react-redux";
import { remove } from "../Store/cartSlice";

const Cart = () => {
  const items = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (itemId) => {
    dispatch(remove(itemId));
  };

  return (
    <>
      <h3>Cart</h3>
      <div>
        {items.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt={item.title} />
            <h5>{item.title}</h5>
            <h4>${item.price}</h4>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
