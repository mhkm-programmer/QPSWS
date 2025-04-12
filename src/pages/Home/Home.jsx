import CustomerReviews from "./CustomerReviews";
import HeroSlider from "./heroBanner.jsx/HeroSlider";
import OurClient from "./OurClient";
import PageTitle from "../reusable/PageTitle";
import RecentServiceCard from "../service/RecentServiceCard";
import SubscreibeContact from "../contact/SubscreibeContact";
import WhyChoose from "./WhyChoose";

const Home = () => {
  return (
    <div>
    <PageTitle title="Al-FWZ Furniture Trading & Contracting | Home"/>
      <HeroSlider />
      <RecentServiceCard />
      {/* <MyProjects />
      <Blog /> */}
      <WhyChoose/>
      <OurClient/>
      <CustomerReviews/>
     <SubscreibeContact/>
    </div>
  );
};

export default Home;
