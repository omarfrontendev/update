import React from "react";
import styles from "./.module.scss";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import OffersSlider from "../components/OffersSlider";
import RecommendedSlider from "../components/RecommendedSlider";
import PopResturantsSlider from "../components/PopResturantsSlider";
import ResturantCard from "../components/ResturantCard";
import CardsRow from "../components/CardsRow";
import CustomRadio from "../components/CustomRadio";
import SignForm from "../components/SignForm";
import FilterOptions from "../components/FilterOptions";
import ForgetPassword from "../components/ForgetPassword";
import ResetPassword from "../components/ResetPassword";

export default function Layout() {


  return (
    <main className={styles.main__layout}>
      <Sidebar />
      <div className={styles.app__main__container}>
        <Header />
        <div className={styles.app__container}>
          {/* <OffersSlider />
          <RecommendedSlider />
          <PopResturantsSlider />
          <CardsRow title={"All Resturants for test"}> */}
            {/* <div className="row">
              <div className={`${styles.col_2_5} p-4`}>
                <ResturantCard />
              </div>
              <div className={`${styles.col_2_5} p-4`}>
                <ResturantCard />
              </div>
              <div className={`${styles.col_2_5} p-4`}>
                <ResturantCard />
              </div>
              <div className={`${styles.col_2_5} p-4`}>
                <ResturantCard />
              </div>
              <div className={`${styles.col_2_5} p-4`}>
                <ResturantCard />
              </div>
              <div className={`${styles.col_2_5} p-4`}>
                <ResturantCard />
              </div>
              <div className={`${styles.col_2_5} p-4`}>
                <ResturantCard />
              </div>
              <div className={`${styles.col_2_5} p-4`}>
                <ResturantCard />
              </div>
              <div className={`${styles.col_2_5} p-4`}>
                <ResturantCard />
              </div>
              <div className={`${styles.col_2_5} p-4`}>
                <ResturantCard />
              </div>
            </div> */}
          {/* </CardsRow> */}
          <ResetPassword />
          <ForgetPassword />
          <FilterOptions />
          <SignForm />
        </div>
      </div>
    </main>
  );
}
