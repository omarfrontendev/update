import React from "react";
import styles from "./.module.scss";
import Sidebar from "../components/Sidebar";
import MainHeader from "../components/MainHeader";
import Footer from "../components/Footer";

export default function Layout({ children }) {
  return (
    <main className={styles.main__layout}>
      <Sidebar />
      <div className={styles.app__main__container}>
        <MainHeader logged={true} />
        <div className={styles.app__container}>
          <div className="container__wrapper">{children}</div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
