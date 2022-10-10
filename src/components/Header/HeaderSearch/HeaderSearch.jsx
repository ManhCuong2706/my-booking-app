import {faBed, faCalendar, faPerson} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {addDays} from 'date-fns';
import React, {useState} from 'react';
import {Container} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

import '../../../assets/scss/components/Header/HeaderSearch.scss';
import HeaderDateRange from './SearchOption/HeaderDateRange';
import HeaderSearchInput from './SearchOption/HeaderSearchInput';
import HeaderSearchOption from './SearchOption/HeaderSearchOption';

HeaderSearch.propTypes = {};

function HeaderSearch(props) {
  const navigate = useNavigate();
  // Set prop value for child components
  const [inputValue, setInputValue] = useState('');
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: 'selection',
    },
  ]);
  const [option, setOption] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  // Get Value in child components
  const onChangeInput = (value) => {
    setInputValue(value);
  };

  const onDateRangeChange = (date) => {
    console.log(date);
    setRange([date.selection]);
  };

  const onSearchOptionChange = (name, operator) => {
    console.log(name, operator);
    setOption((preState) => {
      return {
        ...preState,
        [name]: operator === 'i' ? option[name] + 1 : option[name] - 1,
      };
    });
  };

  // Handel submit search button
  const handleSearch = () => {
    navigate('/search', {
      state: {
        inputValue,
        range,
        option,
      },
    });
  };
  return (
    <Container className='header__wrapper'>
      <div className='header'>
        <h1 className='header__title'>A lifetime of discounts? It's Genius.</h1>
        <p className='header__text'>
          Get rewarded for your travels - unlock instant saving of 10% or more
          with a free account
        </p>
        <button className='header__btn'>Sign in / Register</button>
      </div>

      <div className='headerSearch'>
        <div className='headerSearch__item'>
          <FontAwesomeIcon className='headerSearch__icon' icon={faBed} />
          <HeaderSearchInput input={inputValue} onChangeInput={onChangeInput} />
        </div>

        <div className='headerSearch__item'>
          <FontAwesomeIcon className='headerSearch__icon' icon={faCalendar} />
          <HeaderDateRange
            range={range}
            onDateRangeChange={onDateRangeChange}
          />
        </div>

        <div className='headerSearch__item '>
          <FontAwesomeIcon className='headerSearch__icon' icon={faPerson} />
          <HeaderSearchOption
            option={option}
            onOptionChange={onSearchOptionChange}
          />
        </div>
        <div className='headerSearch__item'>
          <button className='headerSearch__btn' onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
    </Container>
  );
}

export default HeaderSearch;
