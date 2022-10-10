import React, {useState} from 'react';

import HotelDetail from './HotelDetail';

import hotelDataInit from '../../data/detail.json';

function DetailBody(props) {
  const [hotelData, setHotelData] = useState(hotelDataInit);
  return <HotelDetail hotelData={hotelData} />;
}

export default DetailBody;
