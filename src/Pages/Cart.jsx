import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import classes from "./RootLayout.module.css";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const TotalAmount = useSelector((state) => state.cart.cartTotalAmount);

  return (
    <div className={classes.cartParent}>
      <h2>Shopping Cart</h2>

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
        <div>
          <div className={classes.titles}>
            <div className={classes.productTitle}>Product</div>
            <div className={classes.price}>Price</div>
            <div className={classes.quantity}>Quantity</div>
            <div className={classes.total}>Total</div>
          </div>
          <div className={classes.cartItems}>
            {cartItems.map((item, index) => {
              const { name, price, image, cartQuantity } = item;

              return (
                <div key={index}>
                  <img src={image} className={classes.cartImg} alt="" />
                  <h3>{name}</h3>
                  <p>${price}</p>
                  <p>Quantity</p>
                  <button>Remove</button>

                  <div className={classes.quantity}>
                    <button>-</button>
                    <div>{cartQuantity}</div>
                    <button>+</button>
                  </div>
                  <div className={classes.totalPrice}>
                    ${price * cartQuantity}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* summary */}
      <div className={classes.cartSummary}>
        <button className={classes.clear}>Clear Cart</button>

        {/* checkout */}
        <div className={classes.checkOut}>
          <div className={classes.subtotal}>
            <span>Subtotal</span>
            <span className={classes.amount}>{TotalAmount}</span>
            <p>Taxes and shipping calculated at checkout</p>
            <button>Check out</button>
            <Link to="/">
              <i class="fa-solid fa-arrow-left"></i>
              <span>Continue Shopping</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
