import { useEffect, useState } from 'react';
import arc1 from '../images/arc1.jpg';
import arc2 from '../images/arc2.jpg';
import arc3 from '../images/arc3.jpg';
import arc4 from '../images/arc4.jpg';
import arc5 from '../images/arc5.jpg';
import '../Styles/Home.css';

function Home() {
  const images = [arc1, arc2, arc3, arc4, arc5];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      setPrevIndex(currentIndex);
      setCurrentIndex(nextIndex);
      setIsAnimating(true);

      setTimeout(() => {
        setPrevIndex(null); // remove previous image after animation
        setIsAnimating(false);
      }, 1000); // match with CSS animation duration
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <div className="slider-wrapper">
      {prevIndex !== null && (
        <img
          src={images[prevIndex]}
          alt="Previous"
          className={`slider-image slide-out`}
        />
      )}
      <img
        src={images[currentIndex]}
        alt="Current"
        className={`slider-image ${isAnimating ? 'slide-in' : ''}`}
      />
    </div>
  );
}

export default Home;
