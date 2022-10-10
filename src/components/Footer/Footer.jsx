import React from 'react';
import PropTypes from 'prop-types';
import {Col, Container, Row} from 'react-bootstrap';

import footerData from '../../data/footer.json';
import '../../assets/scss/components/Footer/Footer.scss';

Footer.propTypes = {};

function Footer(props) {
  return (
    <Container>
      <Row className='footer'>
        {footerData.map((data) => (
          <Col key={data.col_number}>
            {data.col_values.map((value) => (
              <ul className='footer__list' key={value}>
                <li className='footer__item'>
                  <a href='#' className='footer__link'>
                    {value}
                  </a>
                </li>
              </ul>
            ))}
          </Col>
        ))}
        <div className='footer__copyRight'>
          Copyright @ 2022 by M A N H C U O N G
        </div>
      </Row>
    </Container>
  );
}

export default Footer;
