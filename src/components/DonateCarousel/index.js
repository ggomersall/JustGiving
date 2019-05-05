import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';


import './styles.scss';

const DonateCarousel = ({ charity: { donationDisplayAmounts } }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="card donate-carousel__wrapper">
      <Slider {...settings}>
        {
          donationDisplayAmounts.map((d, i) => (
            <div className="carousel__item" key={i}>
              <h2>
                £{d.amount}
              </h2>
              <p>{d.description}</p>
            </div>
          ))
        }
      </Slider>
    </div>
  );
};

DonateCarousel.propTypes = {
  charity: PropTypes.object
};

export default DonateCarousel;
