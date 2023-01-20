import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../Store/cartSlice";
import { fetchProducts } from "../Store/productSlice";
import { STATUS } from "../Store/productSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  if (status === STATUS.LOADING) {
    return <h2>Loading....</h2>;
  }

  if (status === STATUS.ERROR) {
    return <h2>Something went wrong!</h2>;
  }

  return (
    <>
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.title} />
          <h4>{product.title}</h4>
          <p>{product.description}</p>
          <button onClick={() => handleAdd(product)}>Add to cart</button>
        </div>
      ))}
    </>
  );
};

export default Products;
