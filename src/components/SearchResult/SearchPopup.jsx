import React from 'react';
import PropTypes from 'prop-types';
import {format} from 'date-fns/esm';

import '../../assets/scss/components/SearchResult/SearchPopup.scss';

SearchPopup.propTypes = {
  range: PropTypes.array,
  inputValue: PropTypes.string.isRequired,
  option: PropTypes.object,
};

SearchPopup.defaultProps = {
  range: [],
  option: {},
};

function SearchPopup(props) {
  const {inputValue, range, option} = props;
  return (
    <div className='search__popup'>
      <h1 className='search__title'>Search</h1>

      <div className='search__item'>
        <label className='search__label'>Destination</label>
        <input className='search__input' type='text' placeholder={inputValue} />
      </div>

      <div className='search__item'>
        <label className='search__label'>Check in date</label>
        <span className='search__text'>
          {`${format(range[0].startDate, 'MM/dd/yyyy')} to ${format(
            range[0].endDate,
            'MM/dd/yyyy'
          )}`}
        </span>
      </div>

      <div className='search__item '>
        <label className='search__label'>Option</label>
        <div className='option__list'>
          <div className='option'>
            <span className='option__label'>
              Min price <small>per night</small>
            </span>
            <input type='number' className='option__input' />
          </div>

          <div className='option'>
            <span className='option__label'>
              Max price <small>per night</small>
            </span>
            <input type='number' className='option__input' />
          </div>

          <div className='option'>
            <span className='option__label'>Adult</span>
            <input
              type='number'
              className='option__input'
              placeholder={option.adult}
              min={1}
            />
          </div>

          <div className='option'>
            <span className='option__label'>Children</span>
            <input
              type='number'
              className='option__input'
              placeholder={option.children}
              min={0}
            />
          </div>

          <div className='option'>
            <span className='option__label'>Room</span>
            <input
              type='number'
              className='option__input'
              placeholder={option.room}
              min={1}
            />
          </div>
        </div>
      </div>
      <div className='search__item '>
        <button className='search__btn'>Search</button>
      </div>
    </div>
  );
}

export default SearchPopup;
