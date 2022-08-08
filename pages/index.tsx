import { Layout } from "@components/common";
import { AdvancedStatistics, BoostLink, Hero } from "@components/home";

const Home = () => {
  return (
    <>
      <Hero />
      <AdvancedStatistics />
      <BoostLink />
    </>
  );
};

Home.Layout = Layout;
export default Home;
