import React from "react";
import PortfolioListItems from "./portfolio-list-items";

const PortfolioListData = [
  {
    label: "mastercard",
    src: "/asset/portfolio-list/mastercard.png",
  },
  {
    label: "mandiri",
    src: "/asset/portfolio-list/mandir.jfif",
    with: 100,
    height: 200,
  },
  {
    label: "visa",
    src: "/asset/portfolio-list/visa.png",
  },
  {
    label: "bca",
    src: "/asset/portfolio-list/bca.png",
    with: 70,
    height: 70,
  },
  {
    label: "boa",
    src: "/asset/portfolio-list/boa.png",
    with: 200,
    height: 200,
  },
  {
    label: "ctz",
    src: "/asset/portfolio-list/ctz.png",
    with: 200,
    height: 200,
  },
];
const PortfolioList = () => {
  return (
    <div className="flex gap-x-24  items-center  justify-center border border-red-600 w-full ">
      {PortfolioListData?.map((data, index) => (
        <PortfolioListItems 
        key={index}
          width={data?.with}
          height={data?.height}
          src={data.src}
          label={data.label}
        ></PortfolioListItems>
      ))}
    </div>
  );
};

export default PortfolioList;
