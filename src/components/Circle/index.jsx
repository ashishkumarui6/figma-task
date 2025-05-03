import React from "react";
import { RiAdminFill } from "react-icons/ri";
import styles from "./index.module.css";
const Circle = () => {
  return (
    <>
      <div>
        <div className={styles.circle}>
          <div className={styles.left}>
            <RiAdminFill />
          </div>
          <div className={styles.count}>
            <span>1</span>
          </div>
        </div>
        <div className={styles.right}>
          <h2>Inquiry</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and
            typesettingindustry.{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Circle;
