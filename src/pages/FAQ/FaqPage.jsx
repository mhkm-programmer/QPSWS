import FAQSection from '../reusable/FAQSection';
import PageTitle from '../reusable/PageTitle';
import ParallaxSection from '../reusable/Parallax';
import React from 'react';

const FaqPage = () => {
    return (
        <div>
         <PageTitle title="Al-FWZ Furniture Trading & Contracting | FAQs" />
             <ParallaxSection
        imagePath="https://i.ibb.co/bNDvJWf/FAQ-Help-1-min.jpg"
        // title="Unlocking Insights: Frequently Asked Questions"
        // subTitle="Answers to Your Burning Questions About My Work and Process"
      />
      <FAQSection/>

        </div>
    );
};

export default FaqPage;