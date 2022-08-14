import React from "react";
// import  { useEffect } from 'react'
import styles from "./.module.scss";
import { AnimatePresence, motion } from "framer-motion";

export default function DropDownMenu({
  children,
  userDropdown,
  state,
  setState,
  id,
}) {
  // const closeDropMenu = (e) => {
  // if (e?.target?.id !== id) {
  // setState(false);
  // }
  // };

  // useEffect(() => {
  // document.body.addEventListener("click", closeDropMenu);
  // return () => {
  // document.body.removeEventListener("click", closeDropMenu);
  // };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <motion.div layout>
      <AnimatePresence>
        {state && (
          <motion.div
            layout
            className={`
            ${styles.dropdownMenu} 
            ${userDropdown === "user" ? styles.user__dropdown : ""}
            `}
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
