import PageTitle from "../reusable/PageTitle";
import ParallaxSection from "../reusable/Parallax";
import React from "react";
import RecentServiceCard from "./RecentServiceCard";

const ServicePage = () => {
  return (
    <div>
     <PageTitle title="AL-FWZ Furniture Trading & Contracting | Services" />
      <ParallaxSection
        imagePath="https://8upload.com/image/67a809e2eb5f0/Services.jpg"
        title=""
        subTitle=""
      />

      <RecentServiceCard />
    </div>
  );
};

export default ServicePage;
