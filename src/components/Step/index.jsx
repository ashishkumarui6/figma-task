import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import styles from "./index.module.css";

const Step = () => {
  return (
    <>
      <div className={styles.step}>
        <h1>User Guide to Hire Dedicated Software Developers</h1>

        <div className={styles.step_content}>
          <div className={styles.left}>
            <div>
              <p>Benefits of Hiring Developers</p>
            </div>
            <div>
              <p>Key Factors to Consider While Hiring</p>
            </div>
            <div>
              <p>Defining Your Project Requirements</p>
            </div>
            <div>
              <p>Choosing the Right Development Model</p>
            </div>
            <div>
              <p>Typical Challenges for Hiring Developers</p>
            </div>
            <div>
              <p>Hiring Freelancers vs. Dedicated Developers</p>
            </div>
            <div>
              <p>Communication with Remote Developers</p>
            </div>
          </div>
          <div className={styles.right}>
            <h3>Benefits of Hiring Developers</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
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
            <div className={styles.backPicture}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step;
