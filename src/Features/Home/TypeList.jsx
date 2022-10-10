import React from 'react';
import PropTypes from 'prop-types';
import {Col, Row} from 'react-bootstrap';

import '../../assets/scss/Features/TypeList.scss';

TypeList.propTypes = {
  typeList: PropTypes.array,
};

TypeList.defaultProps = {
  typeList: [],
};

function TypeList(props) {
  const {typeList} = props;
  return (
    <Row className='typeList'>
      <h2 className='typeList__title'>Browser by property type</h2>
      {typeList.map((type) => (
        <Col className='typeList__item' key={type.name}>
          <img
            src={require(`../../assets/images/${type.image}`)}
            alt={type.name}
            className='typeList__img'
          />
          <h3 className='typeList__name'>{type.name}</h3>
          <p className='typeList__count'>{`${type.count} hotels`}</p>
        </Col>
      ))}
    </Row>
  );
}

export default TypeList;
