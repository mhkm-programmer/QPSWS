import Contact from './Contact';
import PageTitle from '../reusable/PageTitle';
import ParallaxSection from '../reusable/Parallax';
import React from 'react';

const ContactPage = () => {
    return (
        <div>
         <PageTitle title="Contact Us | Curtains Furniture" />
             <ParallaxSection
        imagePath="https://8upload.com/image/685f34413d745/Cuontact_Us_for_Curtains_Furniture_1.jpg"
        title=""
        subTitle=""
      />
      <Contact/>

        </div>
    );
};

export default ContactPage;