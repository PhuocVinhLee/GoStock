import React from "react";
import { Button } from "./ui/button";
import { ArrowDownToLine } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="hero-section bg-gradient-to-r from-blue-900 to-purple-900 text-white   ">
      <div className="container  w-full flex items-center justify-center flex-col gap-y-6  px-20 py-40  pb-44 ">
        {/* Add your content here */}

        <h1 className="text-5xl font-bold   text-center border">
          Easily invest in stocks and crypto in one{" "}
          <span className=" text-blue-700">GoStock platform</span>
        </h1>

        <p className="  text-xs text-center  px-64 border">
          Get all the conveniences of investing in stocks or cryptocurrencies in
          one GoStock platform. Now you can use this app in desktop version
        </p>

        <div className="flex gap-x-3">
          <Button variant="ghost" className=" border rounded-3xl py-2 px-4 ">
            How it work
          </Button>
          <Button className=" bg-white text-black border py-2 px-4 rounded-3xl">
            <span className=" flex gap-x-1 items-center justify-between">
              Get app now
              <ArrowDownToLine size={15}></ArrowDownToLine>
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
