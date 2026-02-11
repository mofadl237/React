import HomeFourSection from "../Components/Home/FourSection";
import HomeFiveSection from "../Components/Home/FiveSection";
import HomeHero from "../Components/Home/HeroSection";
import HomeSecondSection from "../Components/Home/SecondSection";
import HomeThirdSection from "../Components/Home/ThirdSection";
import HomeSixSection from "../Components/Home/SixSection";

const HomePage = () => {
  return (
    <>
      <HomeHero/>
      <HomeSecondSection/>
      <HomeThirdSection />
      <HomeFourSection/>
      <HomeFiveSection/>
      <HomeSixSection/>
    </>
  );
};

export default HomePage;
