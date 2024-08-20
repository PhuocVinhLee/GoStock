import Image from "next/image";

interface PortfolioListItemsProps {
  label: string;
  src: string;
  width?: number;
  height?: number;
}

const PortfolioListItems = ({
  label,
  src,
  width,
  height,
}: PortfolioListItemsProps) => {
  return (
    <div className="relative">
      <Image
        className="border border-blue-500 object-cover rounded-md"
        alt={label}
        src={src}
        height={height? height: 50}
        width={width ? width: 50}
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
};

export default PortfolioListItems;
