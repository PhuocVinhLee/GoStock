import { Card } from "@/components/ui/card";
import SupportingImageryItem from "./supporting-imagery-item";

const SupportingImageryData = [
  {
    id: 0,

    src: "/asset/my-watch-list/spotify4.png",
    fullName: "Spotify",
    shortname: "SPOT",
    price: 310.4,
    referred: -10,
  },
  {
    id: 1,
    src: "/asset/my-watch-list/airbnb.png",
    fullName: "Airbnb",
    shortname: "ABNB",
    price: 132.72,
    referred: -10.29,
  },
  {
    id: 2,
    src: "/asset/my-watch-list/sony2.png",
    fullName: "playstation ",
    shortname: "SPOT",
    price: 71.86,
    referred: 0.98,
  },
  
];
export default function SupportingImagery() {
  return (
    <div className="relative w-full  border border-blue-500 p-5">
      <Card className=" flex  flex-col gap-y-3 w-full h-full bg-gradient-to-b from-[#1a1a2e] to-[#16213e]   p-14 rounded-3xl">
        {SupportingImageryData?.map((data, index) => (
         <div  key={index}>
             <SupportingImageryItem
            id={data?.id}
            src={data?.src}
            fullName={data?.fullName}
            shortname={data?.shortname}
            price={data?.price}
            referred={data?.referred}
          >
          </SupportingImageryItem>
         </div>
        ))}
      </Card>
    </div>
  );
}
