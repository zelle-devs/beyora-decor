
import CraftDifferenceSections from "@/Components/HomePage/CraftDifferenceSections/CraftDifferenceSections";
import CustomizationSectionHome from "@/Components/HomePage/CustomizationSectionHome/CustomizationSectionHome";
import GallaryGridHome from "@/Components/HomePage/GallaryGridHome/GallaryGridHome";
import HomeTagLineSection from "@/Components/HomePage/HomeTagLineSection/HomeTagLineSection";
import LessDecorMorePresence from "@/Components/HomePage/LessDecorMorePresence/LessDecorMorePresence";
import MainSlider from "@/Components/HomePage/MainSlider/MainSlider";
import MakeYourOwnCarousal from "@/Components/HomePage/MakeYourOwnCarousal/MakeYourOwnCarousal";
import ReadyToShopCarousal from "@/Components/HomePage/ReadyToShopCarousal/ReadyToShopCarousal";
import ShopByCategoryHomePage from "@/Components/HomePage/ShopByCategoryHomePage/ShopByCategoryHomePage";

export default function Home() {
  return (
    <div>
      <MainSlider/>
      <HomeTagLineSection/>
      <GallaryGridHome/>
      <CustomizationSectionHome/>
      <CraftDifferenceSections/>
      <LessDecorMorePresence/>
      {/* <ShopByCategoryHomePage/> */}
      {/* <MakeYourOwnCarousal/> */}
      {/* <ReadyToShopCarousal/> */}
    </div>
  );
}