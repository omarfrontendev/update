import React from "react";
import styles from "./.module.scss";
import AccordionItem from "../AccordionItem";
import ResturantMealCard from "../ResturantMealCard";

export default function Accordion({ id }) {
  return (
    <div className={styles.accordion} id={id}>
      <AccordionItem parentID={id} id="a">
        <ResturantMealCard />
        <ResturantMealCard />
        <ResturantMealCard />
      </AccordionItem>
      <AccordionItem parentID={id} id="b">
        <ResturantMealCard />
        <ResturantMealCard />
        <ResturantMealCard />
      </AccordionItem>
      <AccordionItem parentID={id} id="c">
        <ResturantMealCard />
        <ResturantMealCard />
        <ResturantMealCard />
      </AccordionItem>
      <AccordionItem parentID={id} id="d">
        <ResturantMealCard />
        <ResturantMealCard />
        <ResturantMealCard />
      </AccordionItem>
      <AccordionItem parentID={id} id="e">
        <ResturantMealCard />
        <ResturantMealCard />
        <ResturantMealCard />
      </AccordionItem>
    </div>
  );
}
