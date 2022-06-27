import React from "react";
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <header className={styles.head}>
      <div className={styles["head-text"]}>
        <div>
          <h1>We are here now</h1>
          <p>Enjoy online shopping with localla</p>
        </div>
      </div>
    </header>
  );
};

export default Banner;
