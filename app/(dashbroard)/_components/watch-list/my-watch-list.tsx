"use client";

import { Card } from "@/components/ui/card";
import { FaSpotify } from "react-icons/fa";
import { FaAirbnb } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa";
import MyWatchListItem from "./my-watch-list-item";
import { Plus } from "lucide-react";
const MyWatchListData = [
  {
    src: "/asset/my-watch-list/spotify4.png",
    fullName: "Spotify",
    shortname: "SPOT",
    price: 310.40,
    referred : -10



  },
  {
    src: "/asset/my-watch-list/airbnb.png",
    fullName: "Airbnb",
    shortname: "ABNB",
    price: 132.72,
    referred : -10.29
  },
  {
    src: "/asset/my-watch-list/sony2.png",
    fullName: "playstation ",
    shortname: "SPOT",
    price: 71.86,
    referred : 0.98
  },
  {
    src: "/asset/my-watch-list/paypal.png",
    fullName: "Paypal",
    shortname: "PYPL",
    price: 87.66,
    referred : -3.86
  },
];
const MyWatchList = () => {
  return (
    <Card className=" flex flex-col gap-y-10 w-full p-5  rounded-sm">
      <div className=" flex items-center  justify-between">
        <h5 className=" font-bold">My watchlist</h5>
        <span>
          {" "}
          <Plus></Plus>{" "}
        </span>
      </div>
      <div className="flex flex-col">
        {MyWatchListData?.map((data, index) => (
          <div key={index} className=" border-b-2 ">
            <MyWatchListItem
              src={data?.src}
              fullName={data?.fullName}
              shortname={data?.shortname}
              price={data?.price} referred={data?.referred}
            ></MyWatchListItem>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default MyWatchList;
