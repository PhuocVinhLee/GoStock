"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

interface MyWatchListItemProps {
  id: number;
  src: string;
  fullName: string;
  shortname: string;
  price: number;
  referred: number;
  className?: string; //
}
const MyWatchListItem = ({
  id,
  src,
  fullName,
  shortname,
  price,
  referred,
  className,
}: MyWatchListItemProps) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between py-4 shadow-md   ",
        className
      )}
    >
      <div className="flex gap-x-4 ">
        <Image
          src={src}
          alt={shortname}
          width={50}
          height={50}
          className="rounded-full  "
        />

        <span>
          <h4 className=" font-bold">{shortname}</h4>
          <p className=" text-sm">{fullName}</p>
        </span>
      </div>

      <div>
        <p className=" font-bold">${price}</p>
        <p
          className={cn(
            " text-sm text-end font-bold",
            referred < 0 ? "text-red-500" : "text-green-500"
          )}
        >
          {referred > 0 ? "+" + referred : referred}%
        </p>
      </div>
    </div>
  );
};

export default MyWatchListItem;
