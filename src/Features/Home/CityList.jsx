import React from 'react';
import {useState} from 'react';
import {Col, Row} from 'react-bootstrap';
import '../../assets/scss/Features/CityList.scss';

import PropTypes from 'prop-types';

CityList.propTypes = {
  cityList: PropTypes.array,
};

CityList.defaultProps = {
  cityList: [],
};

function CityList(props) {
  const {cityList} = props;

  return (
    <Row className='cityList__container '>
      {cityList.map((city) => (
        <Col key={city.name} className='cityList__item '>
          <img
            src={require(`../../assets/images/${city.image}`)}
            alt={city.name}
            className='cityList__img'
          />
          <div className='cityList__title'>
            <h1 className='cityList__name'>{city.name}</h1>
            <h2 className='cityList__text'>{city.subText}</h2>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default CityList;
