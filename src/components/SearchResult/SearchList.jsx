import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/scss/components/SearchResult/SearchList.scss';
import {Col, Container, Row} from 'react-bootstrap';

SearchList.propTypes = {
  resultData: PropTypes.array,
};

function SearchList(props) {
  const {resultData} = props;
  return (
    <Container className='search__list'>
      {resultData.map((data) => (
        <Row className='search__child' key={data.name}>
          <Col className='search__thumbnail'>
            <img
              src={require(`../../assets/images/${data.image_url}`)}
              alt={data.name}
            />
          </Col>

          <Col xs={6} className='search__info'>
            <h1 className='search__name'>{data.name}</h1>
            <span className='search__distance'>
              {data.distance} from center
            </span>
            <span className='search__tag'>{data.tag}</span>
            <span className='search__des'>{data.description}</span>
            <span className='search__type'>{data.type}</span>
            <span className='search__cancel'>
              {data.free_cancel && 'Free cancellation'}
            </span>
            <span className='search__message'>
              {data.free_cancel &&
                'You can cancel later, so lock in this great price today!'}
            </span>
          </Col>
          <Col className='search__rating'>
            <div className='search__rate'>
              <span className='search__text'>{data.rate_text}</span>
              <button className='search__rateBtn'>{data.rate}</button>
            </div>
            <div className='search__detail'>
              <h2 className='search__price'>${data.price}</h2>
              <span className='search__tax'>Include taxes and fees</span>
              <button className='search__detailBtn'>See availability</button>
            </div>
          </Col>
        </Row>
      ))}
    </Container>
  );
}

export default SearchList;
