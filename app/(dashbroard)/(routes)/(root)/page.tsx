

import Features from "../../_components/features/features";
import HeroSection from "../../_components/hero";
import PortfolioSummary from "../../_components/portfolio-summary/portfolio-summary";
import WatchList from "../../_components/watch-list/watch-list";

const DashboardPage = () => {
  return (
    <div className="w-full">
      <HeroSection></HeroSection>
      <PortfolioSummary></PortfolioSummary>
      <WatchList></WatchList>
      <Features></Features>
    </div>
  );
};

export default DashboardPage;
