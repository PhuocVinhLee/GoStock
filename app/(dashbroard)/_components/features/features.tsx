import { Card } from "@/components/ui/card";
import { AppleIcon } from "lucide-react";
import FeatureDescriptions from "./feature-descriptions";
import SupportingImagery from "./supporting-imagery";

export default function Features() {
  return (
    <div className=" border border-y-emerald-600 bg-white p-6 md:p-8 lg:px-36 flex flex-col md:flex-row items-center gap-x-5 ">
      <FeatureDescriptions></FeatureDescriptions>
      <SupportingImagery></SupportingImagery>
    </div>
  );
}
