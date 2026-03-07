import React from 'react';
import './Slider.css'; // Ensure the CSS file is in the same folder

const Slider = () => {
  // Array of your images from the /public/images folder
  const brands = [
    { id: 1, src: '/images/brand1.webp' },
    { id: 2, src: '/images/brand2.webp' },
    { id: 3, src: '/images/brand3.webp' },
    { id: 4, src: '/images/brand4.webp' },
    { id: 5, src: '/images/brand5.png' },
    { id: 6, src: '/images/brand6.webp' },
    { id: 7, src: '/images/brand7.png' },
    { id: 8, src: '/images/brand8.webp' },
    { id: 9, src: '/images/brand9.webp' },
    { id: 10, src: '/images/brand10.png' },
    { id: 11, src: '/images/brand11.webp' },
  ];

  // Double the array for a seamless infinite loop
  const displayBrands = [...brands, ...brands];

  return (
    <section className="slider-section">
      <h2 className="slider-title">Our Developer Partners</h2>

      <div className="marquee-container">
        <div className="marquee-content">
          {displayBrands.map((brand, index) => (
            <div key={index} className="logo-item">
              <img 
                src={brand.src} 
                alt={`Partner ${brand.id}`} 
                className="brand-image" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slider;