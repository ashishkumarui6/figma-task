import React from "react";
import styles from "./index.module.css";
import Container from "../../shared/Container";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdArrowOutward } from "react-icons/md";
const Navbar = () => {
  return (
    <>
      <Container>
        <div className={styles.navbar}>
          <div className={styles.left}>
            <span>
              <BsFillLightningChargeFill />
            </span>
            <span>Logoipsum</span>
          </div>
          <div className={styles.mid}>
            <div>
              Software team
              <span>
                <RiArrowDropDownLine size={20} />
              </span>
            </div>
            <div>Service</div>
            <div>Technologies</div>
            <div>Resources</div>
            <div>Company</div>
          </div>
          <div className={styles.right}>
            <button>
              Get In Touch
              <span>
                <MdArrowOutward size={12} />
              </span>
            </button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Navbar;
