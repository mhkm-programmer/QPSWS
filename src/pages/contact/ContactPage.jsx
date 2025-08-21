import Contact from './Contact';
import PageTitle from '../reusable/PageTitle';
import ParallaxSection from '../reusable/Parallax';
import React from 'react';

const ContactPage = () => {
    return (
        <div>
         <PageTitle title="Contact Us |  Doha Plumbing Service" />
             <ParallaxSection
        imagePath="https://8upload.com/image/68a766cd9bc9a/Plumber_Services__3_.jpg"
        title=""
        subTitle=""
      />
      <Contact/>

        </div>
    );
};

export default ContactPage;