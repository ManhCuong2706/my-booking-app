import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/scss/components/Detail/HotelDetail.scss';

import {Col, Container, Row} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons';

HotelDetail.propTypes = {
  hotelData: PropTypes.object,
};

HotelDetail.defaultProps = {
  hotelData: {},
};

function HotelDetail(props) {
  const {hotelData} = props;
  return (
    <Container className='detail'>
      <div className='detail__container'>
        <div className='detail__item'>
          <h1 className='detail__title'>{hotelData.name}</h1>

          <div className='detail__address'>
            <FontAwesomeIcon icon={faLocationDot} className='detail__icon' />
            <span className='detail__addText'>{hotelData.address}</span>
          </div>

          <p className='detail__distance'>{hotelData.distance}</p>

          <p className='detail__price'>{hotelData.price}</p>
        </div>
        <div className='detail__item'>
          <button className='detail__btn'>Reserve or Book Now!</button>
        </div>
      </div>

      <div className='detail__image'>
        {hotelData.photos.map((img) => (
          <div className='detail__imageWrap'>
            <img
              src={require(`../../assets/images/${img}`)}
              alt={img}
              className='detail__pic'
            />
          </div>
        ))}
      </div>

      <div className='detail__description'>
        <div className='detail__wrapper'>
          <h1 className='detail__title'>{hotelData.title}</h1>
          <p className='detail__info'>{hotelData.description}</p>
        </div>
        <div className='detail__booking'>
          <h2 className='detail__subTitle'>Perfect for 9-night stay!</h2>
          <p className='detail__text'>
            Located in the real heart of Krakow, this property has an excellent
            location score of 9.8!
          </p>
          <h1 className='detail__price9'>
            <b>${hotelData.nine_night_price}</b>
            (9 night)
          </h1>

          <button className='detail__btn'>Reserve or Book Now!</button>
        </div>
      </div>
    </Container>
  );
}

export default HotelDetail;
