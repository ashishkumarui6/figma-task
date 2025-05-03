import React from "react";
import styles from "./index.module.css";
import { GrFacebookOption } from "react-icons/gr";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { TiSocialTwitter } from "react-icons/ti";
import { FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import Container from "../../shared/Container";
const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.topTop}>
          <div className={styles.top}>
            <div className={styles.logoCont}>
              <div className={styles.logo}>
                <span>
                  <BsFillLightningChargeFill />
                </span>
                <span>Logoipsum</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et
              </p>
              <ul>
                <li>
                  <GrFacebookOption />
                </li>
                <li>
                  <TiSocialTwitter />
                </li>
                <li>
                  <FaLinkedinIn />
                </li>
                <li>
                  <FaYoutube />
                </li>
              </ul>
            </div>
            <div className={styles.quickLinks}>
              <h2>Quick Links</h2>
              <p>Software Team</p>
              <p>Technologies</p>
              <p>Resources</p>
              <p>Company</p>
              <p>Contact us</p>
              <p>FAQ</p>
            </div>
            <div className={styles.Service}>
              <h2>Services</h2>
              <p>Dedicated Development </p>
              <p>Staff Augmentation Services</p>
              <p> Software Development</p>
              <p> Development Center</p>
            </div>
            <div className={styles.Contact}>
              <h2>Contact Us</h2>
              <p>
                <span>
                  <CiLocationOn />
                </span>
                Envato, Level 13, 2 Elizabeth Victoria 3000 India
              </p>
              <p>
                <span>
                  <IoMdCall />
                </span>
                +91 861 944 1176
              </p>
              <p>
                <span>
                  <MdEmail />
                </span>
                ezyoga@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className={styles.footerContainer}>
          <div className={styles.footerText}>
            logoname &copy; 2023. All rights reserved.
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
