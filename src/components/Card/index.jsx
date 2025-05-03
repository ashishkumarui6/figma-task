import React from "react";
import styles from "./index.module.css";
const Card = ({ img, title, name, rename, rating }) => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.card_img}>
          <img src={img} alt={title} />
        </div>
        <div className={styles.text}>
          <h3>{name}</h3>
          <h6>{rename}</h6>
          <p>{rating}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
