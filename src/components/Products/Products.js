import React, { useContext } from "react";
import Banner from "../Banner/Banner";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductContext from "../../store/context/ProductContext";
import CartContext from "../../store/context/CartContext";
import styles from "./Products.module.css";

const Products = () => {
  const { products } = useContext(ProductContext);
  const { dispatch } = useContext(CartContext);

  return (
    <div className={styles.container}>
      <Banner />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className={styles.products}>
        {products.map((product) => (
          <div key={product.id} className={styles.product}>
            <div className={styles["product-img"]}>
              <img src={product.img} alt={product.product} />
            </div>
            <div className={styles["product-info"]}>
              <div className={styles["product-name"]}>{product.product}</div>
              <div className={styles["product-price"]}>${product.price}.00</div>
            </div>

            <div
              className={styles["add-cart"]}
              onClick={() =>
                dispatch({ type: "ADD_TO_CART", id: product.id, product })
              }
            >
              add to cart
            </div>
            {product.stat === "hot" ? (
              <div className={styles.hot}>Hot</div>
            ) : (
              <div className={styles.new}>New</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
