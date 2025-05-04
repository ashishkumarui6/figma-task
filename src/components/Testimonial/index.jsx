import React from "react";
import Card from "../Card";
import image1 from "../../assets/image-1.png";
import image2 from "../../assets/image-2.png";
import image3 from "../../assets/image-3.png";
import image4 from "../../assets/image-4.png";
import styles from "./index.module.css";
import Container from "../../shared/Container";
const cardItem = [
  {
    img: image1,
    title: "image",
    name: "Krish Bruynson",
    rename: "Director, Storloft",
    rating: "xxxx",
  },
  {
    img: image2,
    title: "image",
    name: "Krish Bruynson",
    rename: "Director, Storloft",
    rating: "xxxx",
  },
  {
    img: image3,
    title: "image",
    name: "Krish Bruynson",
    rename: "Director, Storloft",
    rating: "xxxx",
  },
  {
    img: image4,
    title: "image",
    name: "Krish Bruynson",
    rename: "Director, Storloft",
    rating: "xxxx",
  },
];

const Testimonial = () => {
  return (
    <div className={styles.testimonial}>
      <div className={styles.testimonialsSection}>
        <h1>What Our Clients Have to Say About Us</h1>
        <p>
          Take a look at our simple and straightforward process to hire software
        </p>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            {cardItem.map((it, ind) => {
              return (
                <>
                  <Card
                    img={it.img}
                    title={it.title}
                    name={it.name}
                    rename={it.rename}
                    rating={it.rating}
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
