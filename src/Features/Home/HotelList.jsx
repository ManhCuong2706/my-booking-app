import React from 'react';
import PropTypes from 'prop-types';
import {Col, Row} from 'react-bootstrap';

import '../../assets/scss/Features/HotelList.scss';

HotelList.propTypes = {
  hotelList: PropTypes.array,
};

HotelList.defaultProps = {
  hotelList: [],
};

function HotelList(props) {
  const {hotelList, navigate} = props;
  const handlerLinkClick = () => {
    window.location.replace('http://localhost:3000/detail');
  };
  return (
    <Row className='hotelList'>
      <h2 className='hotelList__title'>Homes guest love</h2>

      {hotelList.map((hotel) => (
        <Col key={hotel.name} className='hotelList__item'>
          <img
            src={require(`../../assets/images/${hotel.image_url}`)}
            alt={hotel.name}
            className='hotelList__img'
          />

          <h3 className='hotelList__name' onClick={handlerLinkClick}>
            {hotel.name}
          </h3>

          <p className='hotelList__city'>{hotel.city}</p>
          <h4 className='hotelList__price'>{`Starting from $${hotel.price}`}</h4>

          <div className='hotelList__rating'>
            <button className='hotelList__btn'>{hotel.rate}</button>
            <span className='hotelList__type'>{hotel.type}</span>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default HotelList;
