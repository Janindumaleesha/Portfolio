import React from 'react';
import Slider from 'react-slick';

// Example certificate images (replace URLs or import local assets)
import awsCert from '../assets/Profile.png';
import gcpCert from '../assets/Profile.png';
import reactCert from '../assets/Profile.png';
import azureCert from '../assets/Profile.png';

// Certificates with images, keep image size fixed
const certificates = [
  {
    id: 1,
    title: 'AWS Certified Developer',
    image: awsCert,
  },
  {
    id: 2,
    title: 'Google Cloud Engineer',
    image: gcpCert,
  },
  {
    id: 3,
    title: 'Certified React Developer',
    image: reactCert,
  },
  {
    id: 4,
    title: 'Microsoft Azure Fundamentals',
    image: azureCert,
  },
  // Add more certificates if available here
];

const Certifications = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false, // Disabled the left and right navigation arrows
    responsive: [
      {
        breakpoint: 1024, // tablet and below
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false, // Just to be sure also disabled on smaller screens
        },
      },
      {
        breakpoint: 640, // mobile and below
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section
      id="certifications"
      className="bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 py-20 px-6 md:px-20 max-w-7xl mx-auto text-gray-300"
    >
      <h2 className="text-indigo-400 font-bold text-3xl mb-12 text-center">
        Certifications
      </h2>

      <Slider {...settings} className="relative">
        {certificates.map(({ id, title, image }) => (
          <div key={id} className="px-4">
            <div className="bg-gray-800 rounded-lg p-6 flex flex-col items-center shadow-lg hover:shadow-xl transition-shadow cursor-default select-none">
              <img
                src={image}
                alt={title}
                className="w-48 h-auto object-contain mb-6 rounded-md"
              />
              <p className="text-indigo-300 font-semibold text-center">{title}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Certifications;
