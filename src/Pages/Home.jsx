import { useEffect, useState } from 'react';
import arc1 from '../images/arc1.jpg';
import arc2 from '../images/arc2.jpg';
import arc3 from '../images/arc3.jpg';
import arc4 from '../images/arc4.jpg';
import arc5 from '../images/arc5.jpg';
import '../Styles/Home.css'; // Custom styles
import ArchitectCard from '../Components/ArchitectCard';

function Home() {
  const images = [arc1, arc2, arc3, arc4, arc5];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // Image slider effect
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      setPrevIndex(currentIndex);
      setCurrentIndex(nextIndex);
      setIsAnimating(true);

      // Reset animation after 1 second
      setTimeout(() => {
        setPrevIndex(null);
        setIsAnimating(false);
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <>
      {/* Hero Slider */}
      <div className="slider-wrapper">
        <div className="transparent-card text-white text-center">
          <h1 className="display-4">Welcome to Madhav Architect</h1>
          <p className="lead">
            Explore innovative designs, timeless architecture, and structural elegance from around the world.
          </p>
        </div>

        {/* Animated image transition */}
        {prevIndex !== null && (
          <img
            src={images[prevIndex]}
            alt="Previous"
            className="slider-image slide-out"
          />
        )}
        <img
          src={images[currentIndex]}
          alt="Current"
          className={`slider-image ${isAnimating ? 'slide-in' : ''}`}
        />
      </div>

      {/* Highlights Section */}
      <section className="home-highlights py-5 bg-light">
        <div className="container text-center">
          <h2 className="mb-4">Featured Highlights</h2>
          <div className="row">
            {[
              {
                title: 'Modern Homes',
                text: 'Sleek and smart homes designed for modern lifestyles with sustainability in mind.',
              },
              {
                title: 'Historic Wonders',
                text: 'Discover iconic structures that have stood the test of time and shaped history.',
              },
              {
                title: 'Urban Designs',
                text: 'Innovative urban layouts that prioritize functionality, nature, and flow.',
              },
            ].map((highlight, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h3 className="card-title">{highlight.title}</h3>
                    <p className="card-text">{highlight.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="home-about py-5">
        <div className="container text-center">
          <h2 className="mb-3">About Madhav Architect</h2>
          <p className="lead mx-auto" style={{ maxWidth: '800px' }}>
            Madhav Architect is a platform dedicated to showcasing the finest architecture from around the globe.
            Whether you're an aspiring architect, a student, or simply love great design, we bring inspiration to your screen.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="home-projects container py-5">
        <h2 className="text-center mb-4">Our Projects</h2>
        <div className="row g-4">
          {[
            {
              img: arc1,
              title: 'Eco Villa',
              text: 'A sustainable, off-grid villa integrating modern living with nature.',
            },
            {
              img: arc2,
              title: 'Skyline Tower',
              text: 'A futuristic skyscraper redefining urban skylines and vertical communities.',
            },
            {
              img: arc3,
              title: 'Cultural Hub',
              text: 'A multipurpose cultural center combining art, design, and history.',
            },
          ].map((project, index) => (
            <div className="col-md-4" key={index}>
              <div className="card h-100 shadow-sm">
                <img src={project.img} className="card-img-top" alt={project.title} />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <ArchitectCard/>

      {/* Reviews Section */}
      <section className="home-reviews bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">What People Say</h2>
          <div className="row g-4">
            {[
              {
                quote: 'Madhav Architect is an incredible resource for discovering fresh ideas and historical inspiration!',
                name: 'Aditi Sharma',
              },
              {
                quote: 'Their projects blend aesthetics with smart, modern solutions. A must-visit for architecture lovers.',
                name: 'Rajeev Khanna',
              },
              {
                quote: 'I always come to Madhav Architect when looking for concepts for my college design submissions!',
                name: 'Meera Patel',
              },
            ].map((review, index) => (
              <div className="col-md-4" key={index}>
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body">
                    <p>"{review.quote}"</p>
                    <h6 className="mt-3 mb-0">– {review.name}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
