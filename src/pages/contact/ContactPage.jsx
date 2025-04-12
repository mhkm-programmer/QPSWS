import Contact from './Contact';
import PageTitle from '../reusable/PageTitle';
import ParallaxSection from '../reusable/Parallax';
import React from 'react';

const ContactPage = () => {
    return (
        <div>
         <PageTitle title="Al-FWZ Furniture Trading & Contracting | Contact Us" />
             <ParallaxSection
        imagePath="https://8upload.com/image/67a7ffa390ec8/Contact-min.jpg"
        title=""
        subTitle=""
      />
      <Contact/>

        </div>
    );
};

export default ContactPage;