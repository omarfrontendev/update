import React from "react";
import PageHeader from "../PageHeader";
import ResturantCard from "../ResturantCard";

export default function CardsRowTest() {
  return (
    <div className="CardsRowTest">
      <PageHeader filter={true} span={true} title={"All Resturants"} />
      <div className="row">
        <div className="col">
          <ResturantCard />
        </div>
        <div className="col">
          <ResturantCard status={"discounted"} saleValue="50%" />
        </div>
        <div className="col">
          <ResturantCard status={"new"} />
        </div>
        <div className="col">
          <ResturantCard status={"closed"} />
        </div>
        <div className="col">
          <ResturantCard />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ResturantCard />
        </div>
        <div className="col">
          <ResturantCard status={"discounted"} saleValue="50%" />
        </div>
        <div className="col">
          <ResturantCard status={"new"} />
        </div>
        <div className="col">
          <ResturantCard status={"closed"} />
        </div>
        <div className="col">
          <ResturantCard />
        </div>
      </div>
    </div>
  );
}
