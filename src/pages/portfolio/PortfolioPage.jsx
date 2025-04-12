import MyProjects from '../myProjects/MyProjects';
import PageTitle from '../reusable/PageTitle';
import ParallaxSection from '../reusable/Parallax';
import React from 'react';

const PortfolioPage = () => {
    return (
        <div>
         <PageTitle title="Al-FWZ Furniture Trading & Contracting | Portfolio" />
         <ParallaxSection
        imagePath="https://i.ibb.co/LZ8MFBj/programming-background-collage-1-min-1-min.jpg"
        title=""
        subTitle=""
      />

            <MyProjects/>
        </div>
    );
};

export default PortfolioPage;