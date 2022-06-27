import React from "react";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles["not-found"]}>
        <h2>Page Not Found</h2>
      </div>
    </div>
  );
};

export default NotFound;
