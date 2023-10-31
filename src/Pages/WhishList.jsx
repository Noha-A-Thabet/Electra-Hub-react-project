import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import classes from "./WhishList.module.css";
import { removeFromFav } from "../Components/Redux/favouriteSlice";

const WhishList = () => {
  const { listItems } = useSelector((state) => state.listItems);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Liked Items</h1>
      <div className={classes.whishList}>
        <table className={classes.parent}>
          {/* map through cart items */}
          {listItems.length === 0 ? (
            <div className={classes.emptyCart}>
              <p className={classes.emptyPara}>
                Heart items to keep track of them here. Try it. (You’ll like
                it.)
              </p>
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
                  <th className={classes.trashRw}></th>
                </tr>
              </thead>
              {/* table body */}
              <tbody>
                {listItems.map((item, index) => {
                  const { name, price, image } = item;

                  // remove items
                  const removeItemHandler = () => {
                    dispatch(removeFromFav({ id: item.id, name: item.name }));
                  };

                  return (
                    <tr key={index}>
                      <td className={classes.itemInfo}>
                        <img src={image} className={classes.cartImg} alt="" />
                        <h3>{name}</h3>
                      </td>
                      <td className={classes.price}>${price}</td>

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
      </div>
    </>
  );
};

export default WhishList;
