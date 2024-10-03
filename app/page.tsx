import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import SecondSection from "@/components/IntuitiveDashboard/IntuitiveDashboard";
import EventManagementPage from "@/components/EventManagement/EventManagementPage";
import DiscoverTemplates from "@/components/DiscoverTemplates/DiscoverTemplates";
import FeaturesGrid from "@/components/FeatureSection/FeatureSection";
import GetStartedSection from "@/components/GetStarted/MainContent";
export default function Home() {
  return (
    <div className="w-11/12 mx-auto">
      <HeroSection />
      <FeatureSection />
      <SecondSection />
      <EventManagementPage />
      <DiscoverTemplates />
      <FeaturesGrid />
      <GetStartedSection />
    </div>
  );
}
