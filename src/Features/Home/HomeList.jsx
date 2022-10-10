import React, {useState} from 'react';

import CityList from './CityList';
import HotelList from './HotelList';
import TypeList from './TypeList';

// data json
import {Container} from 'react-bootstrap';
import cities from '../../data/city.json';
import hotels from '../../data/hotel_list.json';
import types from '../../data/type.json';

HomeList.propTypes = {};

function HomeList(props) {
  const [cityList, setCityList] = useState(cities);
  const [typeList, setTypeList] = useState(types);
  const [hotelList, setHotelList] = useState(hotels);

  return (
    <Container>
      <CityList cityList={cityList} />
      <TypeList typeList={typeList} />
      <HotelList hotelList={hotelList} />
    </Container>
  );
}

export default HomeList;
