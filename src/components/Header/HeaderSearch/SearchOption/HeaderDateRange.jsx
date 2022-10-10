import PropTypes from 'prop-types';
import format from 'date-fns/format';
import {DateRange} from 'react-date-range';

import React, {useState, useRef, useEffect} from 'react';

import '../../../../assets/scss/components/Header/HeaderDateRange.scss';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

HeaderDateRange.propTypes = {
  range: PropTypes.array,
  onDateRangeChange: PropTypes.func,
};

HeaderDateRange.defaultProps = {
  range: [],
  onDateRangeChange: null,
};

function HeaderDateRange(props) {
  const {range, onDateRangeChange} = props;
  const [open, setOpen] = useState(false);
  const refOne = useRef(null);

  const handleSelect = (date) => {
    if (!onDateRangeChange) return;
    onDateRangeChange(date);
  };

  // useEffect(() => {
  //   document.addEventListener('keydown', hideOnEscape, true);
  //   document.addEventListener('click', hideOnClickOutSide, true);
  // }, []);

  // const hideOnEscape = (e) => {
  //   if (e.key === 'Escape') {
  //     setOpen(false);
  //   }
  // };
  // const hideOnClickOutSide = (e) => {
  //   if (refOne.current && !refOne.current.contains(e.target)) {
  //     setOpen(false);
  //   }
  // };

  const handleDateOpen = () => {
    setOpen(!open);
  };

  return (
    <div className='dateRange'>
      <span className='headerSearch__text' onClick={handleDateOpen}>
        {`${format(range[0].startDate, 'MM/dd/yyyy')} to ${format(
          range[0].endDate,
          'MM/dd/yyyy'
        )}`}
      </span>

      {open && (
        <div className='dateRange__container' ref={refOne}>
          <DateRange
            onChange={handleSelect}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={2}
            ranges={range}
            direction='horizontal'
            preventSnapRefocus={true}
            calendarFocus='backwards'
            minDate={new Date()}
          />
        </div>
      )}
    </div>
  );
}

export default HeaderDateRange;
