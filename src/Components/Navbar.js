import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const items = useSelector((state) => state.cart);

  return (
    <div>
      <span>Redux Store</span>
      <div>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <span>cart item: {items.length}</span>
      </div>
    </div>
  );
};

export default Navbar;
