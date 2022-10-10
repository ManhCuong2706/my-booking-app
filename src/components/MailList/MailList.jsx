import React from 'react';
import PropTypes from 'prop-types';
import {Container} from 'react-bootstrap';

import '../../assets/scss/components/MailList/MailList.scss';

MailList.propTypes = {};

function MailList(props) {
  return (
    <div className='mailList'>
      <Container>
        <h1 className='mailList__title'>Save time, save money</h1>
        <p className='mailList__description'>
          Sign up and we'll send the best deals to you
        </p>
        <div className='mailList__inputWrapper'>
          <input
            type='text'
            className='mailList__input'
            placeholder='Your email'
          />
          <button className='mailList__btn'>Subscribe</button>
        </div>
      </Container>
    </div>
  );
}

export default MailList;
