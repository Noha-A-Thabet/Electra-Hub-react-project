import classes from "./Mobiles.module.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/cartSlice";
import { addToFav } from "../Redux/favouriteSlice";

const MobileList = ({ mobile }) => {
  const { name, price, image } = mobile;

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(mobile));
  };

  const whishListHandler = () => {
    dispatch(addToFav(mobile));
  };

  return (
    <div>
      <div className={classes.parent}>
        <div className={classes.child}>
          <div className={classes.whishListDiv}>
            <button
              onClick={whishListHandler}
              className={classes.whistListIcon}
            >
              <i class="fa-solid fa-heart"></i>
            </button>
          </div>
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
          <button onClick={addToCartHandler} className={classes.addBtn}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileList;
