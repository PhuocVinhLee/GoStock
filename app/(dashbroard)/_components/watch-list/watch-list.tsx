import CustomCard from "@/components/custom-card";
import MyWatchList from "./my-watch-list";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const WatchList = () => {
  return (
    <div className="flex gap-x-5  mx-36">
      <CustomCard>
        <MyWatchList></MyWatchList>
      </CustomCard>
      <div className=" w-full p-7 flex gap-y-7 flex-col  border border-red-500 ">
        <div>
          <h1 className=" font-bold text-4xl">
            Easily monitor stock movements on <span className=" text-blue-600">GoStock</span>
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
            <Checkbox  checked={true} /> Get regular reports on the shares you
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
