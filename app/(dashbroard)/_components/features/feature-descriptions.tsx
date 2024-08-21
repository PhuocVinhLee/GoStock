import { Button } from "@/components/ui/button";
import { PiStarFourFill } from "react-icons/pi";

const FeatureDescriptions = () => {
  return (
    <div className="space-y-6 w-full ">
      <Button variant="outline" className="  border-none  shadow-md  rounded-3xl text-sm font-semibold text-gray-500 uppercase tracking-wide">
        Get a lot of investment easy
      </Button>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
        A wide variety of stocks from all over the world
      </h2>

      <ul className=" flex  items-center justify-between gap-x-6">
        <li className="flex items-start">
        <p className=" text-gray-600 mr-3 border">
        <PiStarFourFill size={20} />
          </p>
          <p className=" text-gray-600">
            Starting from local stocks, US stocks you can find and you can buy
            here
          </p>
        </li>
        <li className="flex items-start">
        <p className=" text-gray-600 mr-3 border">
        <PiStarFourFill size={20} />
          </p>
          <p className=" text-gray-600">
            You can buy international stocks easily and quickly only on GoStock
          </p>
        </li>
      </ul>
    </div>
  );
};

export default FeatureDescriptions;
