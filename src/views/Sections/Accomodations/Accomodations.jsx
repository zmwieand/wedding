import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";

import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import "./Accomodations.scss";

const Accomodations = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader } = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} />
      </Row>

      <Row>
        <Col xl={{ span: 8, offset: 2 }} sm={{ span: 10, offset: 1 }}>
          <div className='accomodations'>
            <p>For our out-of-town Guests that plan on attending our wedding, we recommend staying at any of the following hotels. For more information, please follow any of the provided links.</p>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xl={{ span: 8, offset: 2 }} sm={{ span: 10, offset: 1 }}>
          <div className='accomodations'>
            <ul>
              <li>
                <a href="https://www.google.com/maps/place/Hilton+Garden+Inn+Buffalo+Airport/@42.9294936,-78.7361442,15z/data=!3m1!5s0x89d374b39485e73b:0xe44b7d1c31544aeb!4m9!3m8!1s0x89d374b3c259f12d:0xb8333da2c2caea20!5m2!4m1!1i2!8m2!3d42.9309918!4d-78.7316759!16s%2Fg%2F1thx9lzv?entry=ttu" target="_blank">
                  Hilton Garden Inn Buffalo Airport
                </a>
              </li>
              <li>
                <a href="https://www.google.com/maps/place/Aloft+Buffalo+Airport/@42.9294936,-78.7361442,15z/data=!4m9!3m8!1s0x89d374c9b19f2feb:0xf0f574bb36f70568!5m2!4m1!1i2!8m2!3d42.929493!4d-78.730391!16s%2Fg%2F11b6gcjc9p?entry=ttu" target="_blank">
                  Aloft Buffalo Airport
                </a>
              </li>
              <li>
                <a href="https://www.google.com/maps/place/Comfort+Inn+%26+Suites+Buffalo+Airport/@42.930057,-78.7322969,15.61z/data=!3m1!5s0x89d374b61c29284f:0xc33746eba8ecc5e4!4m9!3m8!1s0x89d3759af6a7d3f9:0x7829f74d41a37089!5m2!4m1!1i2!8m2!3d42.9321056!4d-78.725124!16s%2Fg%2F11s1pm4kt2?entry=ttu" target="_blank">
                  Comfort Inn & Suites Buffalo Airport
                </a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xl={{ span: 8, offset: 2 }} sm={{ span: 10, offset: 1 }}>
          <div className='accomodations'>
            <p>They are all directly across the street from the BUF airport, 3 miles from our Ceremony location, and 7 miles from our Reception venue.</p>
          </div>
        </Col>
      </Row>
    </PageSection>
  );
};

Accomodations.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Accomodations.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Accomodations;
