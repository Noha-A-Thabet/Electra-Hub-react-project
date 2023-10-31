import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  removeItem,
  decreaseCartItems,
  addToCart,
} from "../Components/Redux/cartSlice";
import classes from "./cart.module.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const dispatch = useDispatch();

  // calculate total price
  const subTotal = cartItems.reduce((accumulator, item) => {
    const { price, cartQuantity } = item;
    return accumulator + price * cartQuantity;
  }, 0);

  return (
    <>
      <h1>Shopping Cart</h1>
      <div className={classes.cart}>
        <table className={classes.cartParent}>
          {/* map through cart items */}
          {cartItems.length === 0 ? (
            <div className={classes.emptyCart}>
              <p className={classes.emptyPara}>Your Cart Is Currently Empty </p>
              <Link to="/" className={classes.emptyLink}>
                <i class="fa-solid fa-arrow-left"></i>
                <span className={classes.startShopping}>Start Shopping</span>
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
                  // calculate price
                  const Price = price * cartQuantity;

                  // .........

                  // remove items Handler
                  const removeItemHandler = () => {
                    dispatch(removeItem({ id: item.id, name: item.name }));
                  };

                  // decrease cart items
                  const decreaseItems = () => {
                    dispatch(decreaseCartItems({ id: item.id }));
                  };

                  return (
                    <tr key={index}>
                      <td className={classes.itemInfo}>
                        <img src={image} className={classes.cartImg} alt="" />
                        <h3>{name}</h3>
                      </td>
                      <td className={classes.price}>${price}</td>
                      <td className={classes.quantityTd}>
                        <div className={classes.quantity}>
                          <button onClick={decreaseItems}>-</button>
                          <div className={classes.quantityNumber}>
                            {cartQuantity}
                          </div>
                          {/* increase cart items */}
                          <button
                            onClick={() => {
                              dispatch(addToCart(item));
                            }}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className={classes.totalPrice}>
                        ${Price.toFixed(2)}
                      </td>
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
        </table>
        <div className={classes.cartSummary}>
          {/* summary */}
          <div className={classes.total}>
            <div className={classes.subTotal}>
              <div>
                <p>Subtotal : </p>
              </div>
              <div>
                <p className={classes.amount}>${subTotal.toFixed(2)}</p>
              </div>
            </div>
            <p className={classes.taxes}>
              Taxes and shipping calculated at checkout
            </p>
          </div>
          <div className={classes.checkoutDiv}>
            <button className={classes.btnCheckout}>Check out</button>
            <button className={classes.checkout}>
              <Link to="/">
                <i class="fa-solid fa-arrow-left arrow"></i>
                <span className={classes.continue}>Continue Shopping</span>
              </Link>
            </button>
          </div>
          {/* checkout */}
        </div>
      </div>
    </>
  );
};

export default Cart;
