import React, { useContext } from "react";
import styles from "./Navbar.module.css";
import CartContext from "../../store/context/CartContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { qty } = useContext(CartContext);

  return (
    <nav className={styles.navbar}>
      <ul className={styles.left}>
        <li>
          {" "}
          <Link to="/">Logo</Link>{" "}
        </li>
      </ul>
      <ul className={styles.right}>
        <li>
          <Link to="cart">
            <span className={styles.cart}>
              <i className="fa-solid fa-cart-plus"></i>
              <span className={styles["cart-count"]}>{qty}</span>{" "}
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
