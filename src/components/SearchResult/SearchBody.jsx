import PropTypes from 'prop-types';
import React, {useState} from 'react';

import {Container} from 'react-bootstrap';
import SearchList from './SearchList';
import SearchPopup from './SearchPopup';

import initData from '../../data/search.json';

import '../../assets/scss/components/SearchResult/SearchBody.scss';

SearchBody.propTypes = {
  searchFilter: PropTypes.object,
};

SearchBody.defaultProps = {
  searchFilter: {},
};

function SearchBody(props) {
  const {searchFilter} = props;
  const {inputValue, range, option} = searchFilter;
  const [searchData, setSearchList] = useState(initData);

  return (
    <Container>
      <div className='search'>
        <SearchPopup inputValue={inputValue} range={range} option={option} />
        <SearchList resultData={searchData} />
      </div>
    </Container>
  );
}

export default SearchBody;
