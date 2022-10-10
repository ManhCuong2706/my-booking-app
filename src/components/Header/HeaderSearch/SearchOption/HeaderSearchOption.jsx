import React, {useState} from 'react';
import PropTypes from 'prop-types';
import '../../../../assets/scss/components/Header/HeaderSearchOption.scss';

HeaderSearchOption.propTypes = {
  option: PropTypes.object,
  onOptionChange: PropTypes.func,
};

HeaderSearchOption.defaultProps = {
  option: {},
  onOptionChange: null,
};

function HeaderSearchOption(props) {
  const {option, onOptionChange} = props;
  const [optionOpen, setOptionOpen] = useState(false);

  // Handel open and close options box
  const handleOptionOpen = (e) => {
    setOptionOpen(!optionOpen);
  };

  // handel option value change
  const handleCounterChange = (name, operator) => {
    console.log(name, operator);
    if (!onOptionChange) return;
    onOptionChange(name, operator);
  };

  return (
    <div className='option'>
      {/* option menu */}
      <span className='headerSearch__text' onClick={handleOptionOpen}>
        {`${option.adult}: adult ${option.children}: children ${option.room}: room`}
      </span>
      {/* option box */}
      {optionOpen && (
        <div className='option__container'>
          <div className='option__item'>
            <span className='option__text'>Adult</span>
            <div className='option__btn'>
              <button
                disabled={option.adult <= 1}
                className='option__countersBtn'
                onClick={() => handleCounterChange('adult', 'd')}
              >
                -
              </button>
              <span className='option__number'>{option.adult}</span>
              <button
                className='option__countersBtn'
                onClick={() => handleCounterChange('adult', 'i')}
              >
                +
              </button>
            </div>
          </div>

          <div className='option__item'>
            <span className='option__text'>Children</span>
            <div className='option__btn'>
              <button
                disabled={option.children <= 0}
                className='option__countersBtn'
                onClick={() => handleCounterChange('children', 'd')}
              >
                -
              </button>
              <span className='option__number'>{option.children}</span>
              <button
                className='option__countersBtn'
                onClick={() => handleCounterChange('children', 'i')}
              >
                +
              </button>
            </div>
          </div>

          <div className='option__item'>
            <span className='option__text'>Room</span>
            <div className='option__btn'>
              <button
                disabled={option.room <= 1}
                className='option__countersBtn'
                onClick={() => handleCounterChange('room', 'd')}
              >
                -
              </button>
              <span className='option__number'>{option.room}</span>
              <button
                className='option__countersBtn'
                onClick={() => handleCounterChange('room', 'i')}
              >
                +
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HeaderSearchOption;
