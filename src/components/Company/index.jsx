import React from "react";
import company from "../../assets/hireimg.png";
import styles from "./index.module.css";
import { FiCheckCircle } from "react-icons/fi";
const Company = () => {
  return (
    <>
      <div className={styles.company}>
        <div className={styles.left}>
          <img src={company} alt="company" />
        </div>
        <div className={styles.right}>
          <h2>
            Top Companies Trust ValueCoders For Hiring Software Developers
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className={styles.check_content}>
            <div>
              <span>
                <FiCheckCircle />
              </span>
              Client-centric approach
            </div>
            <div>
              <span>
                <FiCheckCircle />
              </span>
              Client-centric approach
            </div>
            <div>
              <span>
                <FiCheckCircle />
              </span>
              Client-centric approach
            </div>
            <div>
              <span>
                <FiCheckCircle />
              </span>
              Client-centric approach
            </div>
            <div>
              <span>
                <FiCheckCircle />
              </span>
              Client-centric approach
            </div>
            <div>
              <span>
                <FiCheckCircle />
              </span>
              Client-centric approach
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Company;
