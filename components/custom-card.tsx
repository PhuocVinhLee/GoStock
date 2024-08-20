import React from "react";
import { Card } from "./ui/card";

const CustomCard = ({ children }: { children: React.ReactNode }) => {
  return <Card className=" w-full h-full bg-purple-800 py-10 px-14">{children}</Card>;
};

export default CustomCard;
