import classes from "./Tablet.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/cartSlice";

const TabletList = ({ tablet }) => {
  const { name, price, image } = tablet;
  const cartItems = useSelector((state) => state.cart.cartItems);

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(tablet));
  };

  return (
    <div>
      <div className={classes.parent}>
        <div className={classes.child}>
          <img src={image} alt="" />
          <span className={classes.rating}>
            <i class="stars fa-solid fa-star"></i>
            <i class="stars fa-solid fa-star"></i>
            <i class="stars fa-solid fa-star"></i>
            <i class="stars fa-solid fa-star"></i>
            <i class="stars last fa-solid fa-star"></i>
          </span>
          <h2>{name}</h2>

          <p className={classes.price}>${price}</p>
          <button onClick={addToCartHandler}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default TabletList;
