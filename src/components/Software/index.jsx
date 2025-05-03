import React from "react";
import styles from "./index.module.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdArrowOutward } from "react-icons/md";
import { SlEye } from "react-icons/sl";
const Software = () => {
  return (
    <>
      <div className={styles.software_software}>
        <div>
          <div className={styles.content}>
            <h1 className={styles.heading}>
              Why Hire Software Developers in India?
            </h1>
            <div className={styles.checkIt}>
              <p>
                English Speaking Programmers
                <span>
                  <MdArrowOutward />
                </span>
              </p>

              <p>
                Flexible Work Hours
                <span>
                  <MdArrowOutward />
                </span>
              </p>

              <p>
                Rapid Onboarding Process
                <span>
                  <MdArrowOutward />
                </span>
              </p>

              <p>
                Expertise in Top Technologies
                <span>
                  <MdArrowOutward />
                </span>
              </p>

              <p>
                Reliable Partner Credentials
                <span>
                  <MdArrowOutward />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Software;
