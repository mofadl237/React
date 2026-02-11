import HomeFourSection from "../Components/Home/FourSection";
import HomeFiveSection from "../Components/Home/FiveSection";
import HomeHero from "../Components/Home/HeroSection";
import HomeSecondSection from "../Components/Home/SecondSection";
import HomeThirdSection from "../Components/Home/ThirdSection";
import HomeSixSection from "../Components/Home/SixSection";
import HomeSevenSection from "../Components/Home/SevenSection";

const HomePage = () => {
  return (
    <>
      <HomeHero/>
      <HomeSecondSection/>
      <HomeThirdSection />
      <HomeFourSection/>
      <HomeFiveSection/>
      <HomeSixSection/>
      <HomeSevenSection/>
    </>
  );
};

export default HomePage;
