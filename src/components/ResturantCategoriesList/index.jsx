import React, { useState } from "react";
import styles from "./.module.scss";

export default function ResturantCategoriesList() {
  const [currentActive, setCurrentActive] = useState("Americana_Festival");

  const categories = [
    {
      id: "Americana_Festival",
      title: "Americana Festival",
    },
    {
      id: "Deals",
      title: "Deals",
    },
    {
      id: "Pizzas",
      title: "Pizzas",
    },
    {
      id: "Salads",
      title: "Salads",
    },
    {
      id: "Appetizers",
      title: "Appetizers",
    },
    {
      id: "Desserts",
      title: "Desserts",
    },
    {
      id: "Drinks",
      title: "Drinks",
    },
    {
      id: "Extras",
      title: "Extras",
    },
  ];

  return (
    <div className={styles.category__container}>
      <div className={styles.title}>Categories</div>
      <ul className={`${styles.categories} d-flex flex-column`}>
        {categories.map((c) => (
          <li
            key={c.id}
            className={`${styles.category} ${
              currentActive === c.id ? styles.active : ""
            }`}
          >
            <button
              className={styles.categ__btn}
              onClick={() => setCurrentActive(c.id)}
            >
              {c.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
