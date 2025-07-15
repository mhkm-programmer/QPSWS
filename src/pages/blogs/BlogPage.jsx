import Blog from './Blog';
import PageTitle from '../reusable/PageTitle';
import ParallaxSection from '../reusable/Parallax';
import React from 'react';

const BlogPage = () => {
    return (
        <div>
         <PageTitle title="Al-FWZ Furniture Trading & Contracting | Blog" />
              <ParallaxSection
      
        imagePath="https://i.ibb.co/tq8h1Hm/personal-blog.jpg"
       
        title=""
        subTitle=""
      />
      <Blog/>
        </div>
    );
};

export default BlogPage;