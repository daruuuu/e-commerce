import React, { useContext } from "react";
import StripeCheckout from "react-stripe-checkout";
import CartContext from "../../store/context/CartContext";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Cart.module.css";

const CartSummary = (props) => {
  const { total, qty } = useContext(CartContext);

  return (
    <div className={styles["cart-summary"]}>
      <div className={styles.summary}>
        <h3>Cart Summary</h3>
        <div className={styles["total-items"]}>
          <div className={styles.items}>Total Items</div>
          <div className={styles["items-count"]}>{qty}</div>
        </div>
        <div className={styles["total-summary"]}>
          <div className={styles["just-title"]}>Total Price</div>
          <div className={styles["items-price"]}>${total}.00</div>
        </div>
        <div className={styles.stripe}>
          <StripeCheckout
            stripeKey="pk_test_51LEzvSIkYK3bUsO5Acd7g5JfcxVq6r3Hw7C9oGlkyuz8OA6nZQRMCYvAUb9Kpx1f7Vlt5CndmDCvozsnlMbi3Gky00I3kiBxBt"
            token={props.handleToken}
            billingAddress
            shippingAddress
            name="All Products"
          ></StripeCheckout>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
