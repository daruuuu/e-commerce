import React, { useContext } from "react";
import CartContext from "../../store/context/CartContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

import styles from "./Cart.module.css";
const Cart = () => {
  const { shoppingCart, total, dispatch } = useContext(CartContext);

  let navigate = useNavigate();

  const handleToken = async (token) => {
    const product = { name: "All Products", price: total };

    const res = await axios.post("http://localhost:8080/payment", {
      product,
      token,
    });
    console.log(res);
    const { status } = res.data;
    if (status === "success") {
      dispatch({ type: "EMPTY" });
      navigate("/");
      toast.success("Payment succesfull", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className={styles["cart-container"]}>
      <div className={styles["cart-info"]}>
        {shoppingCart.length > 0 ? (
          shoppingCart.map((cart) => (
            <CartItem
              id={cart.id}
              img={cart.img}
              product={cart.product}
              price={cart.price}
              qty={cart.qty}
              cart={cart}
            />
          ))
        ) : (
          <div className={styles.empty}>Sorry your cart is empty</div>
        )}
      </div>
      {shoppingCart.length > 0 ? <CartSummary handleToken={handleToken} /> : ""}
    </div>
  );
};

export default Cart;
