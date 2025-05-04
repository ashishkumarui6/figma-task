import React from "react";
import Testimonial from "../../components/Testimonial";
import Step from "../../components/Step";
import Hiring from "../../components/Hiring";
import Company from "../../components/Company";
import Software from "../../components/Software";
import TechnologyCompetency from "../../components/TechnologyCompetency";
import { MdArrowOutward } from "react-icons/md";
import styles from "./index.module.css";
const Home = () => {
  return (
    <>
      <div>
        <div className={styles.content}>
          <div className={styles.left}>
            <h2>Hire Dedicated</h2>
            <h1>Developers</h1>
            <h4>
              Top 1% Pre-Vetted, In-house & Dedicated Software Programmers
            </h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <div className={styles.buttons}>
              <button className={styles.primaryBtn}>
                View More{" "}
                <span>
                  <MdArrowOutward />
                </span>
              </button>
              <button className={styles.secondaryBtn}>
                Get Touch{" "}
                <span>
                  <MdArrowOutward />
                </span>
              </button>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.top}>
              {" "}
              <h2 style={{ color: "#000" }}>Create Your Team</h2>
              <h4>Lorem Ipsum is simply dummy text of the printing</h4>
            </div>
            <form className={styles.form}>
              <div className={styles.formGroup}>
                <div>
                  <label htmlFor="fullName">Full Name</label>
                  <input type="text" id="fullName" name="fullName" />
                </div>
                <div>
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" />
                </div>
              </div>

              <div className={styles.formGroup}>
                <div>
                  <label htmlFor="phone">Phone Number</label>
                  <input type="text" id="phone" name="phone" />
                </div>
                <div>
                  <label htmlFor="company">Company</label>
                  <input type="text" id="company" name="company" />
                </div>
              </div>
              <div className={styles.formGroup}>
                <div>
                  <label htmlFor="project">Project Brief</label>
                  <textarea id="project" name="project" rows="5"></textarea>
                </div>
              </div>
              <button className={styles.hireButton}>
                Hire Software Developer
                <span className={styles.icon}>
                  <MdArrowOutward />
                </span>
              </button>
            </form>
          </div>
        </div>
        <TechnologyCompetency />
        <Software />
        <Company />
        <Hiring />
        <Step />
        <Testimonial />
      </div>
    </>
  );
};

export default Home;
