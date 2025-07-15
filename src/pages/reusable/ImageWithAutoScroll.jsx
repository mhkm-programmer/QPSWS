import React, { useEffect, useRef, useState } from 'react';

const ImageWithAutoScroll = ({ src, alt, maxHeight }) => {
  const containerRef = useRef(null);
  const [scrollCyclesCompleted, setScrollCyclesCompleted] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    const scrollingImage = container.querySelector('img');

    const cloneImage = scrollingImage.cloneNode(true);
    container.appendChild(cloneImage);

    const scrollHeight = scrollingImage.offsetHeight;

    if (scrollHeight > 0) {
      const scrollSpeed = 1; // Adjust this value to control the scroll speed
      const totalScrollCycles = 1; // Adjust this value to set the number of scroll cycles

      const intervalId = setInterval(() => {
        if (container.scrollTop >= scrollHeight) {
          container.scrollTop = 0;
          setScrollCyclesCompleted((prevCycles) => prevCycles + 1);
        } else {
          container.scrollTop += 1; // Adjust this value to control the scroll step
        }
      }, scrollSpeed);

      // Stop scrolling after completing one cycle
      if (scrollCyclesCompleted >= totalScrollCycles) {
        clearInterval(intervalId);
      }

      return () => {
        clearInterval(intervalId); // Cleanup the interval when the component unmounts
      };
    }
  }, [scrollCyclesCompleted]);

  return (
    <div
      ref={containerRef}
      className="mb-4 overflow-y-scroll"
      style={{ maxHeight }}
    >
      <img src={src} alt={alt} className="rounded-lg" />
    </div>
  );
};

export default ImageWithAutoScroll;
