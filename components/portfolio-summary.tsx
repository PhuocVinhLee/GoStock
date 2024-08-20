import Image from "next/image";
import PortfolioList from "./portfolio-list";

const PortfolioSummary = () => {
  return (
    <div className=" relative  bg-slate-100 h-full w-full  flex  flex-col items-center justify-center  border border-yellow-600 ">
      <div className=" -translate-y-28">
        <Image
          className="border border-blue-500 object-cover rounded-2xl"
          alt="summary"
          src="/asset/Summary.png"
          height={1000}
          width={1000}
          style={{ objectFit: 'cover' }}
        />
      </div>

      <div className="  -translate-y-14 w-full">
        <PortfolioList></PortfolioList>
      </div>
    </div>
  );
};

export default PortfolioSummary;
