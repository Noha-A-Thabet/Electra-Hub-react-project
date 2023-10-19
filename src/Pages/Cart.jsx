import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../Components/Redux/cartSlice";
import classes from "./cart.module.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const TotalAmount = useSelector((state) => state.cart.cartTotalAmount);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Shopping Cart</h1>
      <div className={classes.cart}>
        <table className={classes.cartParent}>
          {/* map through cart items */}
          {cartItems.length === 0 ? (
            <div className={classes.emptyCart}>
              <p>Your Cart IsCurrently Empty </p>
              <Link to="/">
                <i class="fa-solid fa-arrow-left"></i>
                <span>Start Shopping</span>
              </Link>
            </div>
          ) : (
            <>
              {/* table head */}
              <thead className={classes.cartArticles}>
                <tr>
                  <th className={classes.item}>Item</th>
                  <th className={classes.priceRw}>Price</th>
                  <th className={classes.quantityRw}>Quantity</th>
                  <th className={classes.totalPriceRw}>Total Price</th>
                  <th className={classes.trashRw}></th>
                </tr>
              </thead>
              {/* table body */}
              <tbody>
                {cartItems.map((item, index) => {
                  const { name, price, image, cartQuantity } = item;

                  const totalPrice = price * cartQuantity;
                  // remove items Handler
                  const removeItemHandler = () => {
                    dispatch(removeItem({ id: item.id }));
                  };
                  return (
                    <tr key={index}>
                      <td className={classes.itemInfo}>
                        <img src={image} className={classes.cartImg} alt="" />
                        <h3>{name}</h3>
                      </td>
                      <td className={classes.price}>${price}</td>
                      <td>
                        <div className={classes.quantity}>
                          <button>-</button>
                          <div className={classes.quantityNumber}>
                            {cartQuantity}
                          </div>
                          <button>+</button>
                        </div>
                      </td>
                      <td className={classes.totalPrice}>${totalPrice}</td>
                      <td>
                        <button
                          className={classes.trash}
                          onClick={removeItemHandler}
                        >
                          <i class="fa-solid fa-x"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </>
          )}

          {/* summary */}
        </table>
        <div className={classes.cartSummary}>
          {/* checkout */}

          <div className={classes.subtotal}>
            <div className={classes.subTotal}>
              <span>Subtotal</span>
              <span className={classes.amount}>{TotalAmount}</span>
            </div>
            <p>Taxes and shipping calculated at checkout</p>
          </div>
          <div>
            <button>Check out</button>
            <button className={classes.checkout}>
              <Link to="/">
                <i class="fa-solid fa-arrow-left"></i>
                <span>Continue Shopping</span>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
