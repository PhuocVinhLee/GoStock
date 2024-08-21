import CustomCard from "@/components/custom-card";
import MyWatchList from "./my-watch-list";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";

const WatchList = () => {
  return (
    <div className="flex gap-x-5  mx-36 ">
      <Card className="  border relative w-full h-full bg-gradient-to-b from-[#1a1a2e] to-[#16213e]  p-10 px-16">
        <MyWatchList></MyWatchList>
        
      </Card>

      <div className=" w-full p-7 flex gap-y-7 flex-col  border border-red-500 ">
        <div>
          <h1 className=" font-bold text-4xl">
            Easily monitor stock movements on{" "}
            <span className=" text-blue-600">GoStock</span>
          </h1>
        </div>
        <div className="flex flex-col gap-y-5">
          <p>
            Monitor the stocks you are after in real time and of course easily
            and accurately
          </p>
          <p className="flex  items-center gap-x-2">
            <Checkbox checked={true} /> Monitor stocks easily and accurately
          </p>
          <p className="flex  items-center gap-x-2">
            <Checkbox checked={true} /> Get regular reports on the shares you
            own
          </p>
          <div>
            <Button className=" rounded-3xl">Learn more</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchList;
