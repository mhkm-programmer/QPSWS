import 'tailwindcss/tailwind.css';

import Typed from 'react-typed';

const HeroText = ({ title, subtitle, description }) => {
  return (
    <div className="text-center space-y-4">
      {/* Animated Title */}
      {/* <h1 className="text-3xl text-teal-600 font-medium">{title}</h1> */}
      <h1 className="text-3xl text-teal-600 font-medium">
      {/* <Typed
          strings={[title]} // Dynamically displays the subtitle
          typeSpeed={60} // Typing speed
          backSpeed={40} // Backspace speed
          loop // Enables continuous looping
        /> */}
      {title}
      
      </h1>

      {/* Animated Subtitle */}
      <h2 className="text-xl md:text-2xl text-red-600 font-extrabold">
        <Typed
          strings={[subtitle]} // Dynamically displays the subtitle
          typeSpeed={60} // Typing speed
          backSpeed={40} // Backspace speed
          loop // Enables continuous looping
        />
      </h2>

      {/* Description */}
      <p className="text-base md:text-lg text-gray-700">{description}</p>
    </div>
  );
};

export default HeroText;

