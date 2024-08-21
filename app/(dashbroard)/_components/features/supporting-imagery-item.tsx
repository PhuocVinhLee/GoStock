import Image from "next/image";

interface SupportingImageryItemProps {
  id: number;
  src: string;
  fullName: string;
  shortname: string;
  price: number;
  referred: number;
  className?: string; //
}

const SupportingImageryItem = ({
  id,
  src,
  fullName,
  shortname,
  price,
  referred,
  className,
}: SupportingImageryItemProps) => {
  return (
    <div className="bg-white p-4 rounded-2xl space-y-3 shadow-sm">
      <div className="flex items-center space-x-2">
        <div className="relative">
          <Image
            src={src}
            alt={shortname}
            width={50}
            height={50}
            className="rounded-full  "
          />
        </div>
        <span className="font-semibold">{fullName}</span>
        <svg
          className="w-16 h-6 ml-auto"
          viewBox="0 0 64 24"
          preserveAspectRatio="none"
        >
          <path
            d="M0 12 Q16 20 32 12 T64 12"
            fill="none"
            stroke="#ef4444"
            strokeWidth="2"
          />
        </svg>
      </div>
      
      <div className="space-y-1">
        <div className="flex justify-between">
          <span className="text-gray-500">Total Shares</span>
          <span className="font-semibold">$310,40</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Total Return</span>
          <span className="font-semibold text-red-500">-1,10% ↓</span>
        </div>
      </div>
    </div>
  );
};

export default SupportingImageryItem;
