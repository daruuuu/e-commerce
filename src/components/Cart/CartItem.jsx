import React, { useContext } from "react";
import CartContext from "../../store/context/CartContext";

import styles from "./Cart.module.css";

const CartItem = (props) => {
  const { dispatch } = useContext(CartContext);

  return (
    <div className={styles["cart-item"]} key={props.id}>
      <span className={styles["cart-img"]}>
        <img src={props.img} alt={props.product} />
      </span>
      <span className={styles["cart-name"]}>{props.product}</span>
      <span className={styles["cart-price"]}>${props.price}.00</span>
      <div>
        <span
          onClick={() =>
            dispatch({ type: "INC", id: props.id, cart: props.cart })
          }
          className={styles.inc}
        >
          <i className="fa-solid fa-plus"></i>
        </span>
        <span className={styles.quantity}>{props.qty}</span>
        <span
          onClick={() =>
            dispatch({ type: "DEC", id: props.id, cart: props.cart })
          }
          className={styles.dec}
        >
          <i className="fa-solid fa-minus"></i>
        </span>
      </div>
      <span className={styles["total-price"]}>
        ${props.cart.price * props.cart.qty}.00
      </span>
      <span
        onClick={() =>
          dispatch({ type: "REMOVE", id: props.cart.id, cart: props.cart })
        }
        className={styles.delete}
      >
        <i className="fa-solid fa-trash"></i>
      </span>
    </div>
  );
};

export default CartItem;
