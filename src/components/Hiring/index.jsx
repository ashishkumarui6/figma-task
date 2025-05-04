import React from "react";
import styles from "./index.module.css";
import Circle from "../Circle";

const circleItem = [{}, {}, {}, {}];

const Hiring = () => {
  return (
    <div className={styles.content}>
      <div className={styles.hiring}>
        <h1>Our Hiring Process</h1>
        <p>
          Take a look at our simple and straightforward process to hire software
          developers from ValueCoders.
        </p>
        <div className={styles.circleContent}>
          {circleItem.map((it, ind) => (
            <Circle />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hiring;
