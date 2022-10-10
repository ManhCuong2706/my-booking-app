import React from 'react';
import PropTypes from 'prop-types';

HeaderSearchInput.propTypes = {
  input: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func,
};

HeaderSearchInput.defaultProps = {
  onChangeInput: null,
};

function HeaderSearchInput(props) {
  const {input, onChangeInput} = props;
  const handleInputChange = (e) => {
    if (!onChangeInput) return;
    onChangeInput(e.target.value);
  };
  return (
    <input
      type='text'
      placeholder='Where are you going?'
      className='headerSearch__input'
      value={input}
      onChange={handleInputChange}
    />
  );
}

export default HeaderSearchInput;
