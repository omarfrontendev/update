import React from "react";
import Modal from "../Modal";
import PopUpWrapper from "../PopUpWrapper";
import FilterOptions from "../FilterOptions";

export default function SearchFilterPopUp() {
  return (
    <Modal maxWidth="600px" id={"search__filters__modal"}>
      <div className={"search__filter__wrapper"}>
        <PopUpWrapper textStart={true} title={"Filters"}>
          <FilterOptions />
        </PopUpWrapper>
      </div>
    </Modal>
  );
}
